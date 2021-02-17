package com.bundgaard.NewExam.service.springdatajpa;

import com.bundgaard.NewExam.model.Company;
import com.bundgaard.NewExam.service.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CompanyJPA implements CompanyService {
    @Override
    public List<Company> findAll() {
        return null;
    }

    @Override
    public Company save(Company object) {
        return null;
    }

    @Override
    public void delete(Company object) {

    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public Optional<Company> findById(Long aLong) {
        return Optional.empty();
    }
}
