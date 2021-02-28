package com.bundgaard.NewExam.service;

import java.util.List;
import java.util.Optional;

public interface CrudService<T, ID> { // super interface til flere services
    List<T> findAll();
    T save(T object);
    void delete(Long object);
    void deleteById(ID id);
    Optional<T> findById(ID id);
}
