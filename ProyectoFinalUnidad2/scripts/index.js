$("form").submit(function() {


    var forms = JSON.stringify($(".was-validated").serializeArray())
        // Loop over them and prevent submission
    let flag = false;
    $.each(JSON.parse(forms), function(i, item) {

        if (!item["value"]) {
            event.preventDefault();
            flag = true;
        }
    });
    if (flag) {
        alert("Please complete the data");
    }

});