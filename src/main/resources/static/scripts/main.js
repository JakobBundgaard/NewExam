
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
});