#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

#define BUFSIZE 1024

/*
man 7 ip
man 7 udp
 */

/* man perror */
void error(char *msg)
{
    perror(msg);
    exit(1);
}

int socket_create()
{
    int socket_fd;

    if ((socket_fd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0)
    {
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

    if ((byte_sent = sendto(socket_fd, buf, strlen(buf), 0,
                            (struct sockaddr *)&serveraddr, sizeof(serveraddr))) < 0)
        error("Errore nell'invio dati");
    printf("Messaggio al server: %s\n", buf);

    return byte_sent;
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;
    struct sockaddr_in clientaddr; /* client address */
    socklen_t client_struct_len;   /* lunghezza dell'indirizzo del client */

    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&clientaddr, '0', sizeof(clientaddr));

    bzero(buf, BUFSIZE);
    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
                             (struct sockaddr *)&clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");
    printf("Messaggio dal server: %s\n", buf);

    return msg_size;
}

int main(int argc, char **argv)
{
    unsigned short udp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;
    char buf[BUFSIZE]; /* connection socket */
    int byte_sent;

    /* Verifico la presenza dei parametre IP e porta */
    if (argc != 4)
    {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    /* Acquisisco IP e numero di porta */
    ip = argv[1];
    udp_port = (unsigned short)atoi(argv[2]);

    /* Creo il socket */
    socket_fd = socket_create();

    /* invio sul socket la stringa */
    byte_sent = socket_send(socket_fd, ip, udp_port, buf);

    printf("Inviato %d bytes con successo a %s\n", byte_sent, ip);
    socket_receive(socket_fd, buf);

    close(socket_fd);
}