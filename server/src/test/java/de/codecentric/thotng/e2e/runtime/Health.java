package de.codecentric.thotng.e2e.runtime;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Health {

    private String status;

    @JsonCreator
    public Health(@JsonProperty("status") String status) {
        this.status = status;
    }

    public boolean isUp() {
        return "UP".equals(status);
    }
}
