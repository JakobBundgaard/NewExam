package com.bundgaard.NewExam.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "companys")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    @Column(name = "companyName")
    private String companyName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "company")
    private Set<Intern> interns;

    public Company() {
    }

    public Company(Long companyId, String companyName, Set<Intern> interns) {
        this.companyId = companyId;
        this.companyName = companyName;
        this.interns = interns;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Set<Intern> getInterns() {
        return interns;
    }

    public void setInterns(Set<Intern> interns) {
        this.interns = interns;
    }
}
