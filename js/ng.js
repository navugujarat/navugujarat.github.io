$(function(){
	var $pagename = $(location).attr('href');
	var $active = "active";
	if($pagename.indexOf("index.html") > 0) {
		$active = "";
	}
	
	var $nav = '<nav class="navbar navbar-default navbar-fixed-top">' +
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
	
	var $footer = "<div class='container'><div class='row'><div class='col-md-3'></div><div class='col-md-6'><span class='hl2'>&copy; ૨૦૧૬ નવુ ગુજરાત. </span> અહી લખેલ દરેક લેખો <a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC BY-SA 3.0</a> હેઠળ પ્રકાશીત કરેલ છે. આથી, અહી આપેલ સામગ્રી નો ઉપયોગ કરતા પહેલા આપેલ લિંક પર જઈને લાયસન્સ જરૂરથી વાંચવું. જો કોઈ લેખ પર બીજાનો અધિકાર હશે તો ત્યાં અલગથી જણાવેલ લાયસન્સને અનુસરવું. </div><div class='col-md-3'></div></div></div>"
	$('footer').append($footer);
})