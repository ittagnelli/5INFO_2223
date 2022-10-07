#include <stdio.h>
#include <arpa/inet.h>
#include <netinet/in.h>

int main()
{

    int y = 5;
    int number;
    int array1[] = {1000, 12890, 54163, 34012, 62984};
    int array2[] = {19875, 5499, 59821, 43120, 26489};

    printf("\nHost to Network\n");
    for (int i = 0; i < y; i++)
    {
        printf("%d 0x%x --> 0x%x\n", array1[i], array1[i], htons(array1[i]));
    }

    printf("\nNetwork to Host\n");
    for (int i = 0; i < y; i++)
    {
        printf("%d 0x%x --> 0x%x\n", array2[i], array2[i], ntohs(array2[i]));
    }
    return 0;
}