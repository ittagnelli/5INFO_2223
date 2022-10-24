#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>

#define SIZE 1024

void send_file(FILE*fp, int sockfd){
    char data[SIZE] = {0};

    while(fgets(data, SIZE, fp)!= NULL){
        if(send(sockfd, data, sizeof(data), 0)==-1){    //send, it sends N bytes of BUF to socketfd and returns the number sent or -1;
            perror("[-] Error in sending data");
            exit(1);
        }
        bzero(data, SIZE);
    }
}

int main(){
    char *ip = "127.0.0.1";
    int port = 8080;
    int e;

    int sockfd;// socket file descriptor;
    struct sockaddr_in server_addr;// sockaddr_in describes the internet socket address of the server;
    FILE*fp;//we create a pointeer, called fp, which is a FILE type;
    char *filename = "text.txt";

/* Creazione della Socket che si porrà in ascolto di richieste del Client*/
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if(sockfd<0){
        perror("[-]Error in socket");
        exit(1);
    }

    printf("[+] Server socket created \n");

    server_addr.sin_family = AF_INET;//Internet domain
    server_addr.sin_port = port;//specified port
    server_addr.sin_addr.s_addr = inet_addr(ip);//Ip address

    //connect = inizia una connessione TCP verso un socket;
    e = connect(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr));

    if(e== -1){
        perror("[-] Error in connecting");
        exit(1);
    }

    printf("[+] Connected to server. \n");

    fp = fopen(filename, "r");
    if(fp == NULL){
        perror("[-] Error in reading file. \n");
        exit(1);
    }

    send_file(fp, sockfd);
    printf("[+] File data sent succesfully. \n");

    close(sockfd);
    printf("[+] Disconnected from the server. \n");

    return 0;

}