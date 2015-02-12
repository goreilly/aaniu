/*jslint browser: true */
/*global $ */

var BASE_URL = '';

$('table').addClass('table');

$(document).on('ready', function() {
    $('#nav').find('a[href][href!="#"]').filter(function () {
        var file = location.pathname.substr(1),
            href = $(this).attr('href');
        
        if (file === '' && href === 'index.html') {
            return true;
        } else {
            return href === BASE_URL + file;
        }
    }).closest('li').addClass('active');
    
    
    if (location.pathname == '/people.html') {
        $('#content table').addClass('table');
        $('#content table tr td:nth-child(3)')
            .css('word-break', 'break-all')
            .each(function () {
                var email = $(this).html();
                $(this).html($('<a>')
                     .attr('href', 'mailto:' + email)
                     .html(email)
                );
            });
    }
    
    if ($('#toc').length > 0 && $('#story').length > 0) {
        var i = 0;
        $('#story').find('h2, h3, h4').each(function () {
            $(this).before($('<a>').attr('id', 'toc' + i).addClass('offsetAnchor'));
            $('#toc').append($('<li>').append($('<a>')
                  .attr('href', '#toc' + i)
                  .html($(this).html())
            ));
            i++;
        });
    }
    
});

$(document).on('click', '.nav-tabs li a[data-show]', function () {
    var tab = $(this),
        target = $('#' + tab.attr('data-show'));
    
    if (target.length > 0) {
        target.show().siblings().filter('.tabToggle').hide();
        
        tab.closest('li').addClass('active').siblings().removeClass('active');
    }
    
    return false;
});