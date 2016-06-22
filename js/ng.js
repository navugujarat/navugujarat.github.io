$(function(){
	var $pagename = $(location).attr('href');
	var $active = "active";
	if($pagename.indexOf("index.html") > 0) {
		$active = "";
	}
	
	$nav = '<nav class="navbar navbar-default navbar-fixed-top">' +
            '<div class="container">' +
                '<div class="navbar-header">' +
                    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
                        '<span class="sr-only">Toggle navigation</span>' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                    '</button>' +
                    '<a class="navbar-brand" href="index.html"> <span class="symbol">ન</span> નવુ ગુજરાત</a>' +
                '</div>' +
                '<div id="navbar" class="navbar-collapse collapse">' +
                    '<ul class="nav navbar-nav navbar-right">' +
                        '<li class='+ $active +'><a href="select.html">સાહિત્ય</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</nav>'
		
		$('body').append($nav);
})