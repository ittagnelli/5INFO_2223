#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>

#define buffsize 1024

int main(){
char *ip = "192.168.1.18";
int port = 8080;
int e;

int sockfd;
struct sockaddr_in server_addr;
FILE *fp;
char *filename = "file_sock1.txt";

sockfd = socket(AF_INET, SOCK_STREAM, 0);

if (sockfd < 0){
perror("[.]errore");
exit(1);

}
printf("[+]Server socket created.\n");

server_addr.sin_family = AF_INET;
server_addr.sin_port = port;
server_addr.sin_addr.s_addr = inet_addr(ip);

e = connect(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
if(e == -1){
    perror("[-]errore");
    exit(1);

}
printf("[+]connesso al server.\n");
fp = fopen(filename, "r");
if (fp == NULL){
       perror("[-]errore");
    exit(1);

}
send_file(fp, sockfd);
}
void send_file(FILE *fp, int sockfd){

    char data[buffsize];

    while(fgets(data, buffsize, fp) != NULL){
        if(send(sockfd, data, sizeof(data), 0) < 0 ){
            perror("\tsend error...\n\n");
            exit(1);
        }
        bzero(data, buffsize);
    }
}
