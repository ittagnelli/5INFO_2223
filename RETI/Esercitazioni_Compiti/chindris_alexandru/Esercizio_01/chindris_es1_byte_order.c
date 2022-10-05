#include <stdio.h>
#include <arpa/inet.h>

int main(){
    int numbers[] ={1000, 12890, 54163, 34012, 62984};
    int numbers1[] ={19875, 5499, 59821, 43120, 26489};
    for(int x = 0; x < 5; x++){
        printf("\n Da host a Network order %x", ntohs(numbers[x]));
    }
    for(int y = 0; y < 5; y++){
        printf("\n Da network a host order %x", htonl(numbers1[x]));
    }
}