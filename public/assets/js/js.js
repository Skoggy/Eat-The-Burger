// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devouredSwitch = $(this).data("devourSwitch");

        var newDevouredState = {
            devoured: devouredSwitch
        };

        // Send the PUT request.
        $.ajax("/api/burgers/devoured" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log(`${id} has been devoured`);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
})