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

// Create a new student
function createIntern() {

    var intern = {};
    var company = {};
    var dynamicURL = "";
    var methodName = "";

    $('#btnAddIntern').click(function() {
        alert("2")
        intern.firstname = $('#firstname').val();
        intern.lastname = $('#lastname').val();
        //intern.email = $('#finishedintern').val();
        intern.isInternshipDone = $('#finishedintern').val();
        intern.assignedCompany = $('')
        intern.company = company;
        alert("3")
        dynamicURL = "http://localhost:8080/api/newIntern/";
        methodName = "POST";
        alert("4")
        var internObj = JSON.stringify(intern);
        console.log(internObj);
        $.ajax({
            url: "http://localhost:8080/api/newIntern/",
            method: "POST",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(intern),
            success: function() {
                console.log(methodName);
                //resetForm();
                getAllInterns();
            },
            error: function(error) {
                alert("A error have occured - Please do something else. Error Message: " + error);
            }
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


$(document).ready(function() {
    getAllInterns();
    createIntern()

});