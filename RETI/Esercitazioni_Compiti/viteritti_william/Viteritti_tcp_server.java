import java.net.*;
import java.io.*;

public class Viteritti_tcp_server {
    /**
     * @param args
     */
    public static void main(String[] args) {
        ServerSocket server_socket;
        Socket client_connection;
        
        /* Verifico la presenza del parametro porta e lo leggo*/ 
        if (args.length != 1) {
            System.out.println("uso: tcp_server <PORT>");
            return;
        }
        int port = Integer.parseInt(args[0]);
        
        try {
            /* creo il socket */
            server_socket = new ServerSocket(port);
            System.out.println("Server TCP pronto e in ascolto sulla porta  " + port  + "\n");    
            while(true) {
                /* rimango in attesa fino a quando arriva una richiesta da un client */
                client_connection = server_socket.accept();

                /* gestisco la connessione e leggo il messaggio */   
                InputStream input = client_connection.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                String messaggio = reader.readLine();

                System.out.format("Java TCP server ha ricevuto %d byte: %s\n", messaggio.length(), messaggio);

                OutputStream output = client_connection.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);
                writer.println(messaggio);//Tra queste parentesi, inserisco il messaggio che ho ricevuto e non  args 2, perché il messaggio lo ho già salvato;
                System.out.format("Inviao %d bytes con successo\n", messaggio.length());
                System.out.format("Messaggio inviato: s%\n", messaggio);
                 /* chiudo la connessione con il client */
                client_connection.close();
            }
        }
        catch (IOException e) {
            System.err.println(e);
        }
    }
}