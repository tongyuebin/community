package com.tyb.community.controller;

import com.alibaba.fastjson.JSON;
import com.tyb.community.dto.AccessTokenDto;
import com.tyb.community.dto.GitHubUser;
import com.tyb.community.mapper.UserMapper;
import com.tyb.community.model.User;
import com.tyb.community.provider.GitHubProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;


@Controller
@RequestMapping("/oauth")
public class AuthorizeController {
    @Value("${github.client_id}")
    private String client_id;

    @Value("${github.client_secret}")
    private String client_secret;

    @Value("${github.redirect_uri}")
    private String redirect_uri;

    @Autowired
    private GitHubProvider gitHubProvider;

    @Value("${github.access_token_url}")
    private String access_token_url;

    @Value("${github.get_user_url}")
    private String get_user_url;

    @Autowired()
    private  UserMapper userMapper;



    @GetMapping("/callback")
    public String callback(@RequestParam(name="code") String code,
                           @RequestParam(name="state") String state,
                           HttpServletRequest request)  {
        AccessTokenDto accessTokenDto = new AccessTokenDto();
        accessTokenDto.setClient_id(client_id);
        accessTokenDto.setClient_secret(client_secret);
        accessTokenDto.setRedirect_uri(redirect_uri);
        accessTokenDto.setCode(code);
        accessTokenDto.setState(state);
        //access_token=8188f2ba1c8f7ecf5959b2d0a06248d1e44400ba&scope=user&token_type=bearer
        String result = gitHubProvider.getToken(accessTokenDto, access_token_url);
        String access_token=result.split("&")[0].split("=")[1];
        String userInfo = gitHubProvider.getUser(access_token, get_user_url);
        GitHubUser gitHubUser = JSON.parseObject(userInfo, GitHubUser.class);
        if(gitHubUser!=null){
            request.getSession().setAttribute("user",gitHubUser);
            User user = new User();
            System.out.println(gitHubUser.getName());
            user.setUsername(gitHubUser.getName());
            userMapper.addUser(user);
            return "redirect:/";
        }
        return "redirect:/user/login";
    }
}
