#include <stdio.h>
#include <arpa/inet.h>

int main(){

    int n = 5;
    int v_numbers1[] ={1000, 12890, 54163, 34012, 62984};
    int v_numbers2[] ={19875, 5499, 59821, 43120, 26489};

    for(int x = 0; x < n; x++){
        printf("\n Da host a Network order %x", ntohs(v_numbers1[x]));
        printf("\n Da network a host order %x", htonl(v_numbers2[x]));
    }
}