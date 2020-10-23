// var date_diff_indays = function () {
//     //user input
//     var x = document.getElementById("myDate").value;

//     //current date
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     var d = Date.parse(today);

//     //differernce calculation
//     dt1 = new Date(d);
//     dt2 = new Date(x);
//     var distance = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";
// }

// function myFunction() {



//     //difference calculation
//     var diff = date_diff_indays()

//     document.getElementById("demo").innerHTML = diff;
// }




function difference() {

    // Get today's date and time
    var now = new Date().getTime();

    // Set the date we're counting down to
    var countDownDate = new Date(document.getElementById("myDate").value).getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (days == 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY!!!";
    }
}