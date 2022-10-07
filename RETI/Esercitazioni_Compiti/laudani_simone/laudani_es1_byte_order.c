#include <stdio.h>
#include <arpa/inet.h>

int main(){
    int vet[] = {1000, 12890, 54163, 34012, 62984};
    int vet1[] = {19875, 5499, 59821, 43120, 26489};
    printf("Host to Network:\n");
    for(int i = 0; i < 5; i++){
        printf("%d = 0x%x --> 0x%x\n", vet[i], vet[i], htons(vet[i])); //converte un unsigned short da host a network order
        // %d => print decimal integer (assumes base 10)
        // %x => print hexadecimal values
    }
    printf("\nNetwork to Host:\n");
    for(int i = 0; i < 5; i++){
        printf("%d = 0x%x --> 0x%x\n", vet1[i], vet1[i], ntohs(vet1[i])); //converte un unsigned short da network a host
    }
    return 0;
}