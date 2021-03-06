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


// Create a new intern
function createIntern() {

    let intern = {};
    let dynamicURL = "";
    let methodName = "";

    $('#btnAddIntern').click(function() {
        intern.firstName = $('#firstname').val();
        intern.lastName = $('#lastname').val();
        intern.isInternshipDone = $('#finishedIntern').val();
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
                alert("A error occured: " + error);
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
                //.append($("</td>"))
                .append($("<td>"))
                .append($("<input type=\"text\" class=\"form-control\">").val(interns.firstName))
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
    getAllInterns();
    createIntern()
});