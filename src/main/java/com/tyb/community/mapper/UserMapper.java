package com.tyb.community.mapper;

import com.tyb.community.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    @Insert("insert into user(username) values(#{username})")
    void addUser(User user);
}
