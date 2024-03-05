package com.exam.examservers.service;

import com.exam.examservers.model.User;
import com.exam.examservers.model.UserRole;

import java.util.Set;

public interface UserService {

    //creting user
    public  User CreateUser(User user, Set<UserRole> userRoles) throws Exception;

    public User getUser(String username);



}
