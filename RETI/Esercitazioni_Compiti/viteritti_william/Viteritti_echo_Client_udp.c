#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

/* 
man 7 ip
man 7 udp
 */

/* man perror */

#define BUFSIZE 1024

void error(char *msg) 
{
  perror(msg);
  exit(1);
}

int socket_create() 
{
    int socket_fd;

    if((socket_fd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0){
        error("Cannot create the socket");
        exit(1);
    }

    return socket_fd;
}

int socket_send(int socket_fd, char *ip, unsigned short port, char *buf) 
{
    struct sockaddr_in serveraddr; /* indirizzo e porta server */  
    int byte_sent;

     /* prepara le informazioni sulla destinazioen del datagram */
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(port);
    serveraddr.sin_addr.s_addr = inet_addr(ip);

   if((byte_sent = sendto(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)&serveraddr, sizeof(serveraddr))) < 0)
         error("Errore nell'invio dati");
    
    return byte_sent;
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;
    struct sockaddr_in serveraddr; /* client address */
    socklen_t server_struct_len; /* lunghezza dell'indirizzo del client */
  
    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&serveraddr, '0', sizeof(serveraddr));

    bzero(buf, BUFSIZE);
    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)&serveraddr, &server_struct_len)) < 0)
        error("Errore nella ricezione dati");
    
        printf("Inviato bytes con successo a %s, porta: %d\n", inet_ntoa(serveraddr.sin_addr), ntohs(serveraddr.sin_port));
    return msg_size;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */  
    int byte_sent;           /* numero byte inviati */
    int msg_size;
    char buf[BUFSIZE];

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    /* Acquisisco IP e numero di porta */
    ip = argv[1];
    udp_port = (unsigned short)atoi(argv[2]);

    /* Creo il socket */ 
    socket_fd = socket_create();

    /* invio sul socket la stringa */
    byte_sent = socket_send(socket_fd, ip, udp_port, argv[3]); 

    printf("Inviato %d bytes con successo a %s\n", byte_sent, ip);

    msg_size = socket_receive(socket_fd, buf);
    printf("UDP client ha ricevuto %d byte: %s\n", msg_size, buf);

    close(socket_fd);
}