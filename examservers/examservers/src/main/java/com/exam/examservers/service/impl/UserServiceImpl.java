package com.exam.examservers.service.impl;

import com.exam.examservers.model.User;
import com.exam.examservers.model.UserRole;
import com.exam.examservers.repo.RoleRepository;
import com.exam.examservers.repo.UserRepository;
import com.exam.examservers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public User CreateUser(User user, Set<UserRole> userRoles) throws Exception {
        User local=this.userRepository.findByUsername(user.getUsername());
        if(local != null) {
            System.out.println("user already here...!!");
            throw new Exception("already present user in database...!!");
        }else {
            // create user
            //firstly save all user from userrole
            for(UserRole ur: userRoles) {
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local=this.userRepository.save(user);

        }
        return local;
    }

    @Override
    public User getUser(String username) {
        // TODO Auto-generated method stub
        return this.userRepository.findByUsername(username);
    }




}
