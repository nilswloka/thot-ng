package de.codecentric.thotng.e2e.runtime;

import de.codecentric.thotng.ThotNgServer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ThotNgServer.class)
@WebAppConfiguration
@IntegrationTest("server.port:0")
public class ThotNgServerTests {

    RestTemplate restTemplate = new TestRestTemplate();

    @Value("${local.server.port}")
    int port;

    @Test
    public void serverCanBeStarted() {
        Health health = restTemplate.getForEntity("http://localhost:" + port + "/health", Health.class).getBody();
        assertThat(health.isUp(), is(true));
    }

}
