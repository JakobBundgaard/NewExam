package com.bundgaard.NewExam.controllers;


import com.bundgaard.NewExam.model.Intern;
import com.bundgaard.NewExam.service.CompanyService;
import com.bundgaard.NewExam.service.InternService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class InternController {

    @Autowired
    private InternService internService;


    @GetMapping("/interns")
    public List<Intern> getAllInterns(){
        System.out.println(internService.findAll());
        return internService.findAll();
    }

    // Create new Intern
    @PostMapping("/interns")
    public Intern addNewIntern(@RequestBody Intern intern){
        return internService.save(intern);
    }

}

