#include <stdio.h>  
#include <arpa/inet.h>
#include <netinet/in.h>

int main(){

    int number;
    int n=5;

    int vettore1[] = {1000, 12890, 54163, 34012, 62984 };
    int vettore2[] = {19875, 5499, 59821, 43120, 26489 };


    for(int i=0; i<n; i++){
        printf("%d 0x%x --> 0x%x\n", vettore1[i], vettore1[i], htons(vettore1[i]));
    }

    printf("Second case: \n");

    for(int i=0; i<n; i++){
        printf("%d 0x%x --> 0x%x\n", vettore2[i], vettore2[i], ntohs(vettore2[i]));
    }

     return 0;
}