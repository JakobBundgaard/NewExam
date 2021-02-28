package com.bundgaard.NewExam.service.springdatajpa;

import com.bundgaard.NewExam.model.Company;
import com.bundgaard.NewExam.repositories.CompanyRepo;
import com.bundgaard.NewExam.service.CompanyService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyJPA implements CompanyService {

    private final CompanyRepo companyRepo;

    public CompanyJPA(CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
    }

    @Override
    public List<Company> findAll() {
        List<Company>  list = new ArrayList<>();
        companyRepo.findAll().forEach(list::add);
        System.out.println(list);
        return list;
    }

    @Override
    public Company save(Company object) {
        return null;
    }

    @Override
    public void delete(Long object) {

    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public Optional<Company> findById(Long aLong) {
        return Optional.empty();
    }
}
