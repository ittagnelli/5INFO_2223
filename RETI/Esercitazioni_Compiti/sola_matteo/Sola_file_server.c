#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>

#define buffsize 1024

void write_file(int socket){
    int n;
    FILE *file_p; 
    char *filename = "file_sock2.txt"; 
    char buf[buffsize];

    file_p = fopen(filename, "w");
    if(file_p == NULL){
        perror("\t error...\n\n");
        exit(1);
    }

    while(1){
        n = recv(socket, buf, buffsize, 0);
        if(n <= 0){
            break;
            return;
        }
        fprintf(file_p, "%s", buf);
        bzero(buf, buffsize);
    }
    return;
}

int main(){

    char *ip = "192.168.1.18";
    int port = 8080;
    int e;

    int socket_fd, new_socket;
    struct sockaddr_in server_addr, new_socket_addr;
    socklen_t addr_size;
    char buf[buffsize];      

    socket_fd = socket(AF_INET, SOCK_STREAM, 0);
    if(socket_fd < 0){
        perror("\tsocket error...\n\n");
        exit(1);
    }
    printf("Server socket created\n\n");

    server_addr.sin_family = AF_INET;
    server_addr.sin_port = port;
    server_addr.sin_addr.s_addr = inet_addr(ip);

    e = bind(socket_fd, (struct sockaddr*)&server_addr, sizeof(server_addr));

    if(e < 0){
        perror("\tbind error...\n\n");
        exit(1);
    }

    printf("binding ok\n\n");

    e = listen(socket_fd, 8);

    if(e < 0){
        printf("\tlisten error\n\n");
        exit(1);
    } else{
        printf("\tlistening...\n");
    }

    addr_size = sizeof(new_socket_addr);
    new_socket = accept(socket_fd, (struct sockaddr*)&new_socket_addr, &addr_size);

    write_file(new_socket);
    printf("\tfile is written\n");

}