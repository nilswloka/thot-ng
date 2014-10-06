package de.codecentric.thotng;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
@EnableAutoConfiguration
@EnableJpaRepositories
@ComponentScan
@Import(RepositoryRestMvcConfiguration.class)
public class ThotNgServer extends RepositoryRestMvcConfiguration {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(ThotNgServer.class, args);
    }
}
