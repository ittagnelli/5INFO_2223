#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>

#define SIZE 1024

void write_file( int sockfd){
    int n;
    FILE*fp;
    char* filename = "txt2.txt"; //it is a pointa in filename for reading it contents;
    char buffer[SIZE];//passing char buffer to functions and getting the size of the buffer;

    fp=fopen(filename, "w");
    if(fp==NULL){
        perror("[-] Error in creating file. \n");
        exit(1);
    }

    while(1){
        n = recv(sockfd, buffer, SIZE, 0);//Upon successful completion, recv() shall return the length of the message in bytes. If no messages are available to be received and the peer has performed an orderly shutdown, recv() shall return 0. Otherwise, -1 shall be returned and errno set to indicate the error.
        
        //buffer points to a buffa where the message could be saved.
        //lenght (so SIZE) specifies the lenght in bytes of the buffer pointed. 

        if(n<=0){
            break;
            return;
        }
        fprintf(fp, "%s", buffer);// f stays for "format", it allows you to write information.
        bzero(buffer, SIZE);
    }
    return;

}

int main(){
    char *ip = "127.0.0.1";//ip of the local host;
    int port = 8080;//This is the port numba;
    int e;

    int sockfd, new_sock;
    struct sockaddr_in server_addr, new_addr;// sockaddr_in, it describe an internet socket address;
    socklen_t addr_size;
    char buffer[SIZE];

/* Creazione della Socket che si porrà in ascolto di richieste del Client*/

    sockfd = socket(AF_INET, SOCK_STREAM, 0);// (Internet domain, type , protocol);
    if(sockfd<0){
        perror("[-]Error in socket");
        exit(1);
    }

    printf("[+] Server socket created \n");

    //We initialize the Server ip and port;

    server_addr.sin_family = AF_INET; //Internet domain       
    server_addr.sin_port = port;//specified port
    server_addr.sin_addr.s_addr = inet_addr(ip);//ip address

    /* Effettua la bind sull’indirizzo e porta ora specificati */
    //associa un indirizzo ip locale a un socket;
    e = bind(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr ));//The bind() call allows a process to specify the local address of the socket.

    //sizeof() returns the amount of memory allocated in dat data_type;

    if(e<0){
          perror("[-]Error in Binding");
        exit(1);
    }

    printf("[+]Binding succesfull. \n");


    //listen for connections on a socket.

    e = listen(sockfd, 10);
    // in this situation the application is queuing up the incoming connectios requetst and so the number it refers to the maximum amount that the application can take up;
    if(e ==0){
        printf("[+] Listening...\n");
    }
    else{
        perror("[-] Error in Listening\n");
        exit(1);
    }

    addr_size = sizeof (new_addr);
    //rimane in attesa di una nuova connessione da un client(bloccante).

    new_sock = accept(sockfd, (struct sockaddr*)&new_addr, &addr_size);

    write_file(new_sock);

    printf("[+] Data written in the text file. \n");

}