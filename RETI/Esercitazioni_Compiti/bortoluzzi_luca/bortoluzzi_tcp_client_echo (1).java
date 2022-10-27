import java.net.*;
import java.io.*;
import java.util.Date;

public class tcp_client {
    public static void main(String[] args) {
        Socket client_socket;
        
        /* Verifico la presenza del parametro porta e lo leggo*/ 
        if (args.length != 3) {
            System.out.println("uso: tcp_client  <IP> <porta> <string>");
            return;
        }
        
        String ip = args[0];
        int tcp_port = Integer.parseInt(args[1]);

        try {
            /* creo il socket */
            client_socket = new Socket(ip, tcp_port);
            System.out.format("Socket connesso con il server %s sulla porta %d\n", ip, tcp_port);

            // mi preparo ad inviare un messaggio al server
            OutputStream output = client_socket.getOutputStream();
            PrintWriter writer = new PrintWriter(output, true);
            writer.println(args[2]);

            System.out.format("Inviato %d bytes con successo\n", args[2].length());
            
            /* chiudo la connessione con il server */
            client_socket.close();
        }
        catch (IOException e) {
            System.err.println(e);
        }
    }
}