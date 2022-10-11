#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

/* 
man 7 ip
man 7 tcp
 */


#define BUFSIZE 1024
#define MAX_CONN 10

/* man perror */
void error(char *msg)
{
  perror(msg);
  exit(1);
}

int socket_create() 
{
    int socket_fd;

    if((socket_fd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0){
        error("Cannot create the socket");
        exit(1);
    }

    return socket_fd;
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;

    bzero(buf, BUFSIZE);
    if((msg_size = read(socket_fd, buf, BUFSIZE)) < 0)
        error("Errore nella ricezione dati");
    
    return msg_size;
}

void socket_connect(int socket_fd, char *ip, unsigned short tcp_port)
{
    struct in_addr server_ip; /* indirizzo ip */
    struct sockaddr_in serveraddr; /* indirizzo e porta server */

    /* converte l'indirizzo IP in dotted-notation in binario in network order */
    inet_aton(ip, &server_ip);

    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&serveraddr, '0', sizeof(serveraddr));
    serveraddr.sin_family = AF_INET;  /* socket IP */
    serveraddr.sin_addr = server_ip;
    serveraddr.sin_port = htons(tcp_port); /* porta tcp in network order*/
    
    if(connect(socket_fd, 
                (struct sockaddr *)&serveraddr,
                sizeof(struct sockaddr)) == -1) {
            perror("Errore nella connessione al server");
            exit(1);
    }
}

void socket_listen(int socket_fd) 
{
    if(listen(socket_fd, MAX_CONN) < 0) /* in ascolto sul socket max 10 connessioni*/ 
        error("Errore nella fase di listen");
}

int socket_send(int socket_fd, char *buf) 
{
    int byte_sent;

    if((byte_sent = write(socket_fd, buf, strlen(buf))) < 0)
        error("Errore nell'invio dati");
    
    return byte_sent;
}

int main(int argc, char **argv) 
{
    unsigned short tcp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */    
    int byte_sent;           /* numero byte inviati */

    int connection_fd;       /* connection socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */
    int msg_size;            /* dimensione messaggio ricevuto */

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    /* Acquisisco IP e numero di porta */
    ip = argv[1];
    tcp_port = (unsigned short)atoi(argv[2]);

    /* Creo il socket */ 
    socket_fd = socket_create();

    // Inizia la connessione al socket remoto
    socket_connect(socket_fd, ip, tcp_port);
    printf("Socket connesso con il server %s sulla porta %d\n", ip, tcp_port);

    /* invio sul socket la stringa */
    byte_sent = socket_send(socket_fd, argv[3]); 
    printf("Inviato %d bytes con successo\n", byte_sent);

    socket_receive(socket_fd, buf); //chiamata funzione ricezione socket ack
    printf("TCP server ha ricevuto %d byte: %s\n", msg_size, buf); 
    
    close(socket_fd);
}