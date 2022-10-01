    #include <arpa/inet.h>
    #include <sys/socket.h>
    #include <netinet/in.h>
    #include <netinet/ip.h> 
    #include <stdio.h>

int main(){
    unsigned short host_to_network[5] = {1000, 12890, 54163, 34012, 62984};
    unsigned short network_to_host[5] = {19875, 5499, 59821, 43120, 26489};
    unsigned short network_number;
    unsigned short host_number;

    printf("\n\nhost to network number\n\n");
    for(int i = 0; i < 5; i++){
        network_number = htons(host_to_network[i]);
        printf("%d -> 0x%x -> %hu -> %x\n", host_to_network[i], host_to_network[i], network_number, network_number);


    }
    printf("\n\nnetwork to host\n\n");
     for(int i = 0; i < 5; i++){
        host_number = ntohs(network_to_host[i]);
        printf("%d -> 0x%x -> %hu -> %x\n", network_to_host[i], network_to_host[i], host_number, host_number);


    }

}
