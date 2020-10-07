$(document).ready(function() {
    $('li').on('dbclick', function() {
        $(this).animate({
                opacity: 0.0,
                paddingTop: '+=700',
            },
            6000,
            function() {
                $(this).remove();
            },
        );
    });
    $('button').on('click', function() {
        var content = $('input:eq(0)').val();
        $('input:eq(4)').val(content);
        $('input').animate({
                opacity: 0.0,
            },
            500,
            function() {
                $(this).remove();
            },
        );
        document.getElementById('newList').innerHTML = content;
    });
});