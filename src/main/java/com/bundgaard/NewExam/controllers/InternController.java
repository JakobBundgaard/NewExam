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
    public List<Intern> getAllInterns(){
        return internService.findAll();
    }

    @GetMapping("/companys")
    public List<Company> getAllCompanys(){
        return companyService.findAll();
    }


    @PutMapping("/update/{id}")
    public Intern updateIntern(@RequestBody Intern newIntern, @PathVariable Long id) {
        System.out.println("intern to be updated" + newIntern.toString());
        return internService.findById(id)
                .map(intern -> {
                    intern.setFirstName(newIntern.getFirstName());
                    intern.setLastName(newIntern.getLastName());
                    intern.setIsInternshipDone(newIntern.getIsInternshipDone());
                    intern.setCompany(newIntern.getCompany());
                    System.out.println("intern updated" + newIntern.toString());
                    return internService.save(intern);
                })
                .orElseGet(() -> internService.save(newIntern));
    }

    // Get intern by ID
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
        internService.deleteById(internId);
    }



}

