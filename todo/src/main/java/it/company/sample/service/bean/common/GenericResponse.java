package it.company.sample.service.bean.common;

/**
 * Created by lucagaleazzi on 20/02/16.
 */
public class GenericResponse {

    private String statusCode;
    private String statusMessage;

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }
}
