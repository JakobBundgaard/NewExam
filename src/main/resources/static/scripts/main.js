

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
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.internId))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.firstName))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.lastName))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.isInternshipDone))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.assignedCompany))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<button type='button' class='btn btn-primary' onclick=\"updateIntern(" + interns.internId + ")\">Update</button>"))
                .append($("</td>"))
                .append($("<td>"))
                .append($("<button type='button' class='btn btn-danger' onclick=\"deleteIntern(" + interns.internId + ")\">Delete</button>"))
                .append($("</td>"));
        });
    })
}

function createIntern() {

    var intern = {};
    var company = {};
    var dynamicURL = "";
    var methodName = "";

    $('#btnAddIntern').click(function() {

        intern.firstname = $('#firstname').val();
        intern.lastname = $('#lastname').val();
        intern.isInternshipDone = $('#finishedintern').val();
        company.companId = $('#company').val();
        intern.assignedCompany = company;
        var internId = $('#internId').val();
        if (internId) {
            intern.internId = $('#internId').val();
            dynamicURL = "http://localhost:8080/api/intern/";
            methodName = "PUT";
        } else {
            dynamicURL = "http://localhost:8080/api/intern/";
            methodName = "POST";
        }
        var internObj = JSON.stringify(intern);
        console.log(internObj);
        $.ajax({
            url: dynamicURL,
            method: methodName,
            data: internObj,
            contentType: 'application/json; charset=utf-8',
            success: function() {
                console.log(methodName);
                resetForm();
                getAllInterns();
            },
            error: function(error) {
                alert("A error have occured - Please do something else. Error Message: " + error);
            }
        })

    })

}

// Reset Create Intern Form
function resetForm() {
    $('#internId').val('');
    $('#firstname').val('');
    $('#lastname').val('');
    $('#finishedintern').val('');
    $('#company').val('');
}


$(document).ready(function() {
    createIntern();
    getAllInterns();
});