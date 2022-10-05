#include <arpa/inet.h>
#include <netinet/in.h>
#include <netinet/ip.h>
#include <stdio.h>


int main(){
    int n_max = 5;
    int vet1[5] = {1000, 12890, 54163, 34012, 62984};
    int vet2[5] = {19875, 5499, 59821, 43120, 26489};

    printf("Conversion from Host to Network order of the first string of number:\n");

    for(int i = 0; i < n_max; i++){
        printf("%d = 0x%x --> 0x%x\n", vet1[i], vet1[i], htons(vet[i]));
    }

    printf("\nConversion from Network to Host order of the first string of number:\n");

    for(int i = 0; i < 5; i++){
        printf("%d = 0x%x --> 0x%x\n", vet2[i], vet2[i], ntohs(vet1[i]));
    }

    return 0;
}
