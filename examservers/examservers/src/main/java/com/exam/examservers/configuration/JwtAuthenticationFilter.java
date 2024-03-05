package com.exam.examservers.configuration;

import com.exam.examservers.service.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtutil;

    public JwtAuthenticationFilter() {
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String    requestTokenHeader=	request.getHeader( "Authorization");
        System.out.println(requestTokenHeader);
        String username=null;
        String jwtToken=null;
        if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ") ) {
            //yes
            jwtToken= requestTokenHeader.substring(7);
            try {
                username=this.jwtutil.extractUsername(jwtToken);
            }catch(ExpiredJwtException e) {
                e.printStackTrace();
                System.out.println("jwt token is Expired");
            }catch(Exception e) {
                e.printStackTrace();
                System.out.println("error was found in jwttoken");
            }
        }else {
            System.out.println("Invalid token , not Start with bearer string");
        }
        // validate

        if(username !=null && SecurityContextHolder.getContext().getAuthentication()==null) {

            final UserDetails userDetails=this.userDetailsService.loadUserByUsername(username);
            if(this.jwtutil.validateToken(jwtToken, userDetails)) {
                // taken is valid
                //set Authentication
                UsernamePasswordAuthenticationToken usernamePasswordAuthentication=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                usernamePasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthentication);
            }
        }
        else {
            System.out.println("Token is not Valid");
        }
        filterChain.doFilter(request, response);
    }


}

