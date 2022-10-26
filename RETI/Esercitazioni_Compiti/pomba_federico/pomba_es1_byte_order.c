#include <arpa/inet.h>
#include <netinet/in.h> 
#include <arpa/inet.h>
#include <stdio.h>

int main(){
    
    printf("%d\n",htons(1000));
    printf("%d\n",htons(12890));
    printf("%d\n",htons(54163));
    printf("%d\n",htons(34012));
    printf("%d\n",htons(62984));
    printf("%d\n",ntohs(19875));
    printf("%d\n",ntohs(5499));
    printf("%d\n",ntohs(59821));
    printf("%d\n",ntohs(43120));
    printf("%d\n",ntohs(26489));

    return 0;

}
