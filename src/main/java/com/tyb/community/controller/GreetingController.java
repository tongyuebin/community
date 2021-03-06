package com.tyb.community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @GetMapping("/greet")
    public String greet(@RequestParam(name="name",required = false,defaultValue = "world ") String name, Model model){
        model.addAttribute("name",name);
        return "greeting";
    }
}
