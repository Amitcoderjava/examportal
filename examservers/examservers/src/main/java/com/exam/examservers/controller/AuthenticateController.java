package com.exam.examservers.controller;

import com.exam.examservers.configuration.JwtUtils;
import com.exam.examservers.model.JwtRequest;
import com.exam.examservers.model.JwtResponse;
import com.exam.examservers.model.User;
import com.exam.examservers.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping("/generate-Token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwt_request) throws Exception{

        try {

            authenticate(jwt_request.getUsername(), jwt_request.getPassword());

        }catch(UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("user not found");
            //System.out.println("Worng username or password");
        }

        // user was authenticated
        // user load
        UserDetails userDetails= this.userDetailsService.loadUserByUsername(jwt_request.getUsername());
        String Token=this .jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(Token));
    }

    private void authenticate(String username,String password) throws Exception {
        try {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }catch(DisabledException e) {
            throw new Exception("User Disabled"+e.getMessage());
        }catch(BadCredentialsException e) {
            throw new Exception("Invalid Credentials"+e.getMessage());
        }
    }

    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return  ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
    }

}
