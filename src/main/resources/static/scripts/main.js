function deleteIntern(id) {
    console.log(id)
    $.ajax({
        url: 'http://localhost:8080/api/interns/' + id,
        method: 'DELETE',
        success: function() {
            getAllInterns();
        },
        error: function(error) {
            alert(error);
        }
    })
}


function updateIntern(id) {
    let intern = {};

    $( ".form-control" ).each(function(index) {
        if (Number($( this ).val()) === (id)){
            intern.firstName = $(`.form-control:eq(${index +1})`).val();
            intern.lastName = $(`.form-control:eq(${index +2})`).val();
            intern.finishedInternship = $(`.form-control:eq(${index +3})`).val();
            console.log(JSON.stringify(intern));
            console.log("After");
        }
    });
    $.ajax({
        url: 'http://localhost:8080/api/update/' + id,
        method: 'PUT',
        dataType: 'json',
        contentType: 'application/JSON',
        data: JSON.stringify(intern),
        success: function(data) {
            console.log(JSON.stringify(data))
            getAllInterns();
        },
        error: function(error) {
            alert(error)
        }

    })
}


function updateIntern2(id) {
    let newIntern = {};
    newIntern.firstName = $("#updateName:eq(${index+1})").val();
    console.log(JSON.stringify(newIntern))
    $.ajax({
        url: 'http://localhost:8080/api/update/' + id,
        method: 'PUT',
        contentType: 'application/JSON',
        data: JSON.stringify(newIntern),
        success: function() {
            getAllInterns();
        },
        error: function(error) {
            alert(error);
        }
    })
}


// Create a new intern
function createIntern() {

    let intern = {};
    let dynamicURL = "";
    let methodName = "";
    let checkbox = "";

    $('#btnAddIntern').click(function() {
        intern.firstName = $('#firstname').val();
        intern.lastName = $('#lastname').val();
        intern.isInternshipDone = $('#finishedIntern').val();
        checkbox = document.getElementById("finishedIntern");
        if (checkbox.checked === true) {
            intern.isInternshipDone = "yes";
        }else {
            intern.isInternshipDone ="no";
        }
        intern.assignedCompany = $("#cdata option:selected").text();
        dynamicURL = "http://localhost:8080/api/newIntern/";
        methodName = "POST";
        let internObj = JSON.stringify(intern);
        console.log(internObj);
        $.ajax({
            url: "http://localhost:8080/api/newIntern/",
            method: "POST",
            contentType: 'application/JSON',
            data: JSON.stringify(intern),
            success: function() {
                console.log(methodName);
                getAllInterns();
            },
            error: function(error) {
                alert(error);
            }
        })
    })
}

// Get all companies
function companyDropdown() {
    let company = {}
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/api/companys'
    }).done(function (data) {
        $('#cdata').empty();

        $.each(data, function (i, company) {
            console.log(company.companyName, company.companyId)
            $('#cdata')
                .append($("<option></option>")
                    .attr("value", i)

                    .text(company.companyName));
        })
    })
}
// Get all Interns
function getAllInterns() {
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/api/interns'
    }).done(function(data) {
        $('#tdata').empty();
        $.each(data, function(i, interns) {
            // Loading data into table
            $('#tdata')
                .append($("<tr>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.internId))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\" id='updateName'>").val(interns.firstName))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.lastName))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.isInternshipDone))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.assignedCompany))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<button type='button' class='btn btn-primary' onclick=\"updateIntern(" + interns.internId + ")\">Update</button>"))
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<button type='button' class='btn btn-danger' onclick=\"deleteIntern(" + interns.internId + ")\">Delete</button>"))
                .append($("</td>"));
        });
    })
}
$(document).ready(function() {
    companyDropdown();
    getAllInterns();
    createIntern();
});