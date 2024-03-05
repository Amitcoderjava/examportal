package com.exam.examservers;

import com.exam.examservers.model.Role;
import com.exam.examservers.model.User;
import com.exam.examservers.model.UserRole;
import com.exam.examservers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserversApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {


		SpringApplication.run(ExamserversApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");

//		User u=new User();
//		u.setFirst_Name("Amit");
//		u.setLast_Name("Kumar");
//		u.setUsername("amit1998");
//		u.setPassword(this.bCryptPasswordEncoder.encode("abc"));
//		u.setEmail("amit@gmail.com");
//		u.setProfile("default.png");
//		u.setPhone("378328738");
//
//		Role role1=new Role();
//		role1.setRoleId(45L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userroleset=new HashSet<>();
//		UserRole userrole1=new UserRole();
//		userrole1.setRole(role1);
//		userrole1.setUser(u);
//		userroleset.add(userrole1);
//
//		User user1=this.userService.CreateUser(u, userroleset);
//		System.out.println(user1.getUsername());

	}
}
