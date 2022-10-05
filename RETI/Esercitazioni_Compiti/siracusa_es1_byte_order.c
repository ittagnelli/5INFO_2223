#include <stdio.h>
#include <arpa/inet.h>
#include <math.h>

const int n = 5;

int main(int argc, char const *argv[])
{
    int host[] = {1000,12890,54163,34012,62984};
    int network[]= {19875,5499,59821,43120,26489};

    printf("htons:\n");
    for (int i = 0; i < n; i++) {
        printf("%d = 0x%x --> 0x%x\n",host[i],host[i], htons(host[i]));
    }
    
    printf("ntohs:\n");
    for (int i = 0; i < n; i++) {
        printf("%d = 0x%x --> 0x%x\n",network[i], network[i],ntohs(network[i]));
    }
    
    return 0;
}




