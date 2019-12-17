package com.tyb.community.provider;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.tyb.community.dto.AccessTokenDto;
import okhttp3.*;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class GitHubProvider {

    public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");

    public String getToken(AccessTokenDto accessTokenDto,String url){
        String json= com.alibaba.fastjson.JSON.toJSONString(accessTokenDto);
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(JSON, json);
        Request request = new Request.Builder().url(url).post(body).build();
            try (Response response = client.newCall(request).execute()) {
                String info = response.body().string();
                return info;
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
    }
    public String getUser(String access_token,String url){
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder().url(url+access_token).build();
        try (Response response = client.newCall(request).execute()) {
            String info = response.body().string();
            return info;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}

