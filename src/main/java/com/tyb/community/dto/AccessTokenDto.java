package com.tyb.community.dto;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

@Data
public class AccessTokenDto {
    private String client_id;

    private String client_secret;

    private String state;

    private String code;

    private String redirect_uri;

    public AccessTokenDto() {
    }
}
