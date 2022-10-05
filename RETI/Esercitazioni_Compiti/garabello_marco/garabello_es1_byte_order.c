#include <stdio.h>
#include <arpa/inet.h>

const int N = 5;

int main(int argc, char const *argv[])
{
    int host_numbers[] = {1000,12890,54163,34012,62984};
    int netorder_number[]= {19875,5499,59821,43120,26489};

    printf("from host to network order:\n");
    for (int i = 0; i < N; i++) {
        printf("%d = 0x%x --> 0x%x\n",host_numbers[i],host_numbers[i], htons(host_numbers[i]));
    }
    
    printf("from network order to host:\n");
    for (int i = 0; i < N; i++) {
        printf("%d = 0x%x --> 0x%x\n",netorder_number[i], netorder_number[i],ntohs(netorder_number[i]));
    }
    
    return 0;
}
