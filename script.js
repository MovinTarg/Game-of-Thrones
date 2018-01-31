$(document).ready(function() {
    $("img").click(function() {
        var house = $(this).attr('alt');
        if (house == "stark") {
            house = 362;
        } else if (house == "targaryen") {
            house = 378;
        } else if (house == "lannister") {
            house = 229;
        } else if (house == "baratheon") {
            house = 17;
        }
        var url = "https://anapioficeandfire.com/api/houses/"+ house;

        $.get(url, function(res) {
            console.log(res);
            var html_str = "";
            html_str += "<h2>Name: "+res.name+"</h2>";
            html_str += "<h2>Words: "+res.words+"</h2>";
            html_str += "<h2>";
            for (var i = 0; i < res.titles.length; i++) {
                html_str += res.titles[i]+", ";
            };
            html_str += "</h2>";
            $(".details").html(html_str);
        }, "json");
    });
    
});