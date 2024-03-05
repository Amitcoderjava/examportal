package com.exam.examservers.controller;

import java.util.HashSet;
import java.util.Set;

import com.exam.examservers.model.Role;
import com.exam.examservers.model.User;
import com.exam.examservers.model.UserRole;
import com.exam.examservers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@Configuration
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userservice;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/")
    public User createuser(@RequestBody User u) throws Exception {

        //encoding password with bcryptpasswordencoder
        u.setPassword(this.bCryptPasswordEncoder.encode(u.getPassword()));

        Set<UserRole> roles=new HashSet<>();

        Role role=new Role();
        role.setRoleId(33L);
        role.setRoleName("Normal");

        UserRole ur=new UserRole();
        ur.setUser(u);
        ur.setRole(role);
        roles.add(ur);

        return this.userservice.CreateUser(u, roles);

    }
    @GetMapping("/{username}")
    public User getusername(@PathVariable("{username") String username) {

        return this.userservice.getUser(username);
    }
}