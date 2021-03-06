package com.bundgaard.NewExam.controllers;


import com.bundgaard.NewExam.model.Company;
import com.bundgaard.NewExam.model.Intern;
import com.bundgaard.NewExam.service.CompanyService;
import com.bundgaard.NewExam.service.InternService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class InternController {

    @Autowired
    private InternService internService;

    @Autowired
    private CompanyService companyService;



    @GetMapping("/interns")
    public List<Intern> getAllInterns(Model model){
        //System.out.println(internService.findAll());
        //System.out.println(companyService.findAll());
        model.addAttribute("companys", companyService.findAll());
        return internService.findAll();
    }
/*
    @GetMapping("/companys")
    public List<Company> getAllCompanys(Model model){
        //System.out.println(internService.findAll());
        //System.out.println(companyService.findAll());
        model.addAttribute("companys", companyService.findAll());
        return companyService.findAll();
    }
*/


    // Get student by ID
    @GetMapping("/interns/{internId}")
    public Optional<Intern> getInternById(@PathVariable Long internId){
        Optional<Intern> intern = internService.findById(internId);
        return intern;
    }

    // Create new Intern
    @PostMapping("/newIntern")
    public Intern addNewIntern(@RequestBody Intern intern){
        return internService.save(intern);
    }

    // Delete Intern
    @DeleteMapping("/interns/{internId}")
    void deleteIntern(@PathVariable Long internId){
        System.out.println("1");
        internService.deleteById(internId);
    }



}

