package com.bundgaard.NewExam.model;


import javax.persistence.*;

@Entity
@Table(name ="interns")
public class Intern {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long internId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "isInternshipDone")
    private String isInternshipDone;

    @Column(name = "assignedCompany")
    private String assignedCompany;

    @ManyToOne
    @JoinColumn(name = "companyId")
    private Company company;

    public Intern() {
    }

    public Intern(Long internId, String firstName, String lastName, String isInternshipDone, String assignedCompany, Company company) {
        this.internId = internId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isInternshipDone = isInternshipDone;
        this.assignedCompany = assignedCompany;
        this.company = company;
    }

    public Long getInternId() {
        return internId;
    }

    public void setInternId(Long internId) {
        this.internId = internId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIsInternshipDone() {
        return isInternshipDone;
    }

    public void setIsInternshipDone(String isInternshipDone) {
        this.isInternshipDone = isInternshipDone;
    }

    public String getAssignedCompany() {
        return assignedCompany;
    }

    public void setAssignedCompany(String assignedCompany) {
        this.assignedCompany = assignedCompany;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
