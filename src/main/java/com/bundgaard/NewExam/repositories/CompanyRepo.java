package com.bundgaard.NewExam.repositories;

import com.bundgaard.NewExam.model.Company;
import org.springframework.data.repository.CrudRepository;


public interface CompanyRepo extends CrudRepository<Company, Long> {
}
