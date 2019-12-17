package com.tyb.community.dto;

import lombok.Data;

@Data
public class GitHubUser {
    private String login;
    private Long id;
    private String name;
    private String avatar_url;
    private String bio;
    private String email;
}
