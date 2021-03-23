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

    @Override
    public String toString() {
        return "Intern{" +
                "internId=" + internId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", isInternshipDone='" + isInternshipDone + '\'' +
                ", assignedCompany='" + assignedCompany + '\'' +
                ", company=" + company +
                '}';
    }
}

