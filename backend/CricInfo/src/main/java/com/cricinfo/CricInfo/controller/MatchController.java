package com.cricinfo.CricInfo.controller;


import com.cricinfo.CricInfo.model.Match;
import com.cricinfo.CricInfo.model.User;
import com.cricinfo.CricInfo.service.MatchService;
import com.cricinfo.CricInfo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
public class MatchController {
    private MatchService matchService;
    private UserService userService;

    public MatchController(MatchService matchService,UserService userService) {

        this.matchService = matchService;
        this.userService=userService;
        //(Java.lang.NullPointerException: Cannot invoke "com.cricinfo.CricInfo.service.UserService.signup(com.cricinfo.CricInfo.model.User)" because "this.userService" is null)
    }

    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches(){
        return new ResponseEntity<>(this.matchService.getLiveMatches(), HttpStatus.OK);

    }

    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches(){
            return new ResponseEntity<>(this.matchService.getAllMatches(),HttpStatus.OK);
    }

    @GetMapping("/pointTable")
    public ResponseEntity<?> pointTable(){
        return new ResponseEntity<>(this.matchService.pointTable(),HttpStatus.OK);

    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup (@RequestBody User user){
        try{
            userService.signup(user);
            return new ResponseEntity<>("User created Sucessfully",HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("User not created",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        String result = userService.login(user.getEmail(), user.getPassword());
        if ("Login successful".equals(result)) {
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else if ("User not found".equals(result)) {
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(result, HttpStatus.UNAUTHORIZED);
        }
    }

}
