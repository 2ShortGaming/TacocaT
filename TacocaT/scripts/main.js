$("#btn").on("click", function () {
    let forward = $("input").val().replace(/[^a-zA-Z\" "]/g, '').trim().toLowerCase();

    let reverse = forward.split("").reverse().join("");
    if (forward == reverse) {
        $("#result").text(`The word "${forward}" is a Palindrome!`);
    }
    else {
        $("#result").text(`The word "${forward}" is NOT a Palindrome!`);
    }
});

$("#btnClear").on("click", function () {
    $("#input").val("");
    $("#result").text("");
})