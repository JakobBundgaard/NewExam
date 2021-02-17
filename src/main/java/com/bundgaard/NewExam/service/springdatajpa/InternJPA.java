package com.bundgaard.NewExam.service.springdatajpa;

import com.bundgaard.NewExam.model.Intern;
import com.bundgaard.NewExam.service.InternService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class InternJPA implements InternService {
    @Override
    public List<Intern> findAll() {
        List<Intern>  list = new ArrayList<>();
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
