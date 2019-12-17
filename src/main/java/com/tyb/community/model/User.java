package com.tyb.community.model;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String username;
    private String password;
    private String birthday;
    private String gender;
    private String address;
    private String telephone;
    private String email;
    private String avatar;
    private String account;//第三方账号
    private String token;
    private String active;
    private String activeCode;


}
