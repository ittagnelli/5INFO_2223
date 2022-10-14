#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>

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
        error("Errore nella creazione del socket");
        exit(1);
    }
    return socket_fd;
}

void socket_bind(int socket_fd, unsigned short tcp_port) 
{
    struct sockaddr_in serveraddr; /* server address */
  
    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&serveraddr, '0', sizeof(serveraddr));
    serveraddr.sin_family = AF_INET; /* socket IP */
    serveraddr.sin_addr.s_addr = htonl(INADDR_ANY); /* 0.0.0.0 */
    serveraddr.sin_port = htons(tcp_port); /* porta tcp in network order*/

    /* bind del socket con indirizzo e porta */
    if(bind(socket_fd, (struct sockaddr *) &serveraddr, sizeof(serveraddr)) < 0) 
        error("Errore nella fase di binding");
}

void socket_listen(int socket_fd) 
{
    if(listen(socket_fd, MAX_CONN) < 0) /* in ascolto sul socket max 10 connessioni*/ 
        error("Errore nella fase di listen");
}

int socket_accept(int socket_fd) 
{
    int connection_fd;
    struct sockaddr_in clientaddr; /* client address */
    socklen_t clientlen = sizeof(clientaddr);
    
    /* accetta una connessione TCP da un client */
    if((connection_fd = accept(socket_fd, 
                            (struct sockaddr *) &clientaddr, 
                            &clientlen)) < 0)
        error("Errore nella fase di accept");
    return connection_fd;
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;

    bzero(buf, BUFSIZE);
    if((msg_size = read(socket_fd, buf, BUFSIZE)) < 0)
        error("Errore nella ricezione dati");
    
    return msg_size;
}

int socket_send(int socket_fd, char *buf) // esegue l'invio del socket
{
    int byte_sent;

    if((byte_sent = write(socket_fd, buf, strlen(buf))) < 0)
        error("Errore nell'invio dati");
    
    return byte_sent;
}


int main(int argc, char **argv) //argc = quantita di stringhe che hai nell'argomento (quanti valori hai) || argv =
{
    unsigned short tcp_port; /* TCP port in ascolto */
    int socket_fd;           /* welcoming socket file descriptor */
    int connection_fd;       /* connection socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */
    int msg_size;            /* dimensione messaggio ricevuto */

    /* Verifico la presenza del parametro porta e lo leggo*/ 
    if(argc != 2) { //pk diverso da 2? pk abbiamo l'argomento che ha 2 valori, perchè in linux tu per avviare il programma devi scrivere nel terminale ./a.out num_porta (sono 2 valori si capisce pk ce lo spazio) 
        printf("uso: %s <porta>\n", argv[0]); //stampa il valore che ce nella cella 0 di argv = è un array di caratteri
        exit(1);
    }
    tcp_port = (unsigned short)atoi(argv[1]); // se sono 2 valori fa tutto il programma

    /* Creo il socket */ 
    socket_fd = socket_create();

    /* bind del socket a IP e porta */
    socket_bind(socket_fd, tcp_port);

    /* metto il socket in ascolto */
    socket_listen(socket_fd); 
    


    /* ciclo principale del server */
    printf("Server TCP pronto e in ascolto sulla porta %d\n\n", tcp_port);

    for(;;) {
        /* rimango in attesa fino a quando arriva una richiesta da un client */
        connection_fd = socket_accept(socket_fd);

        msg_size = socket_receive(connection_fd, buf);
        byte_sent = socket_send(connection_fd, buf);// ho tolto argv[3] per mettere buf che è dove contenuto il mess 
        printf("TCP server ha ricevuto %d byte: %s\n", msg_size, buf);
        
        byte_sent = socket_send(socket_fd, BUFSIZE); // aggiunta riga, serve per il rinvio al client di quello che ho inviato al server, modificato e tolto argv[3] e metto BUFSIZE
        /* chiudo la connessione con il client */
        close(connection_fd);

    }
}