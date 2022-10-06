#include <arpa/inet.h>
#include <netinet/in.h>
#include <stdio.h>

int main(){
    printf("\n Il primo numero in formato esadecimale vale:%x ", 1000);
    printf(", in host order vale:%x ", htons(1000));
    
    printf("\n Il primo numero in formato esadecimale vale:%x ", 12890);
    printf(", in host order vale:%x ", htons(12890));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 54163);
    printf(", in host order vale:%x ", htons(54163));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 34012);
    printf(", in host order vale:%x ", htons(34012));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 62984);
    printf(", in host order vale:%x ", htons(62984));

    printf("\n\n");

    printf("\n Il primo numero in formato esadecimale vale:%x ", 19875);
    printf(", in network order vale:%x ", htons(19875));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 5499);
    printf(", in network order vale:%x ", htons(5499));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 59821);
    printf(", in network order vale:%x ", htons(59821));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 43120);
    printf(", in network order vale:%x ", htons(43120));

    printf("\n Il primo numero in formato esadecimale vale:%x ", 26489);
    printf(", in network order vale:%x ", htons(26489));
    
    printf("\n\n");

    return 0;
}