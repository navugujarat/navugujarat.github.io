$(function(){
	
	var $exam_active = "";
	var $sub_active = "";
	var $root = "";
	
	var $pagename = $(location).attr('href');
	
	if( $pagename.indexOf("subjects.html") > 0 || $pagename.indexOf("History/index.html") > 0 ) {
		$sub_active = "active";
		$exam_active = "";
	} else if ( $pagename.indexOf("exams.html") > 0 || $pagename.indexOf("syllabi.html") > 0 ) {
		$sub_active = "";
		$exam_active = "active";
	}
	
	if( $pagename.indexOf("History") > 0 || $pagename.indexOf("Instructor") > 0 || $pagename.indexOf("Surveyor") > 0 || $pagename.indexOf("Tribal") > 0 || $pagename.indexOf("Mamaldar") > 0 || $pagename.indexOf("Literature") > 0 ) {
		$root = "../"
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
                    '<a class="navbar-brand" href="'+ $root +'index.html"> <span class="symbol">ન</span> નવુ ગુજરાત</a>' +
                '</div>' +
                '<div id="navbar" class="navbar-collapse collapse">' +
                    '<ul class="nav navbar-nav navbar-right">' +
                        '<li class='+ $exam_active +'><a href="'+ $root +'exams.html">પરિક્ષા પ્રમાણે</a></li>' +
						'<li class='+ $sub_active +'><a href="'+ $root +'subjects.html">વિષયવાર</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</nav>';
		
	$('body').append($nav);
	
	var $footer = "<div class='container'><div class='row'><div class='col-md-3'></div><div class='col-md-6'><span class='highlight'>&copy; ૨૦૧૬ નવુ ગુજરાત. </span> અહી લખેલ દરેક લેખો <a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC BY-SA 3.0</a> હેઠળ પ્રકાશીત કરેલ છે. આથી, અહી આપેલ સામગ્રીનો ઉપયોગ કરતા પહેલા આપેલ લિંક પર જઈને લાયસન્સ જરૂરથી વાંચવું. જો કોઈ લેખ પર બીજાનો અધિકાર હશે તો ત્યાં અલગથી જણાવેલ લાયસન્સને અનુસરવું. નવુ ગુજરાત સાથે વાત કરવા <a href='"+ $root +"contact.html'>અહી ક્લિક કરો</a>.</div><div class='col-md-3'></div></div></div>"
	$('footer').append($footer);
})