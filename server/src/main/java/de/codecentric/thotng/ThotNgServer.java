package de.codecentric.thotng;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
public class ThotNgServer {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(ThotNgServer.class, args);
    }
}
