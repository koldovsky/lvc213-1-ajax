$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/YOUR-EMAIL-HERE",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    email: $('#email').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').append('<h1>Thank you!</h1>');
            });
    });
});