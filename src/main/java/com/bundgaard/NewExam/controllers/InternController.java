package com.bundgaard.NewExam.controllers;


import com.bundgaard.NewExam.service.CompanyService;
import com.bundgaard.NewExam.service.InternService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InternController {

    @Autowired
    private InternService internService;
    @Autowired
    private CompanyService companyService;

    @GetMapping("/api/showInterns")
    public ResponseEntity showAllInterns(){
        return ResponseEntity.ok(internService.findAll());
    }
}
