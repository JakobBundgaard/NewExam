package com.bundgaard.NewExam.service.springdatajpa;

import com.bundgaard.NewExam.model.Intern;
import com.bundgaard.NewExam.repositories.InternRepo;
import com.bundgaard.NewExam.service.InternService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InternJPA implements InternService {


    private final InternRepo internRepo;

    public InternJPA(InternRepo internRepo) {
        this.internRepo = internRepo;
    }


    @Override
    public List<Intern> findAll() {
        List<Intern>  list = new ArrayList<>();
        internRepo.findAll().forEach(list::add);
        System.out.println(list);
        return list;
    }

    @Override
    public Intern save(Intern object) {
        return null;
    }

    @Override
    public void delete(Intern object) {

    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public Optional<Intern> findById(Long aLong) {
        return Optional.empty();
    }
}
