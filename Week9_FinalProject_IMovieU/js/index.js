     //login
    $('#login').on('click', function(){
        console.log("login");
        $('#loginModal').modal();
        $('#total').append('$'+ total);
    });

    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

    function showMore(){
    //removes the link
    document.getElementById('link').parentElement.removeChild('link');
    //shows the #more
    document.getElementById('more').style.display = "block";
    }