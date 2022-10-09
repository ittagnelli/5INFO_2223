#include <stdio.h>
#include <arpa/inet.h>

int main(){

    int n = 5;
    int v_numbers1[] ={1000, 12890, 54163, 34012, 62984};
    int v_numbers2[] ={19875, 5499, 59821, 43120, 26489};

    for(int x = 0; x < n; x++){
         printf("%d = 0x%x --> 0x%x\n",v_numbers1[i],v_numbers2[i], htons(v_numbers1[i]));
         printf("%d = 0x%x --> 0x%x\n",v_numbers2[i], v_numbers1[i],ntohr(v_numbers2[i]));
    }
}
