package com.tyb.community.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.UUID;

@Controller
public class UserController {


    @Value("${github.client_id}")
    private String client_id;

    @Value("${github.redirect_uri}")
    private String redirect_uri;

    @Value("${github.scope}")
    private String scope;

    @GetMapping("/tologin")
    public String toLogin(Model model){
        String state= UUID.randomUUID().toString();
        model.addAttribute("state",state);
        model.addAttribute("client_id",client_id);
        model.addAttribute("redirect_uri",redirect_uri);
        model.addAttribute("scope",scope);
        return "login";
    }

    @GetMapping("/toregister")
    public String toRegister(){
        return "register";
    }
}
