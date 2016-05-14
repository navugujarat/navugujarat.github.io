(function(){

    //var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

	
	
	var hdr_str = '<hgroup>' +
					'<h1><a href="index.html">નવુ ગુજરાત</a></h1>' + 
                    '<span class="tag-line">પરીક્ષાની તૈયારી માટેનું સાહિત્ય</span>' +
					'</hgroup>' + 
					'<nav>' + 
						'<a href="gu.html">ગુજરાત</a>'+ 
						'<a href="hind.html">ભારત</a>' + 
						'<a href="math.html">ગણિત</a>' +
						'<a href="comp.html">કમ્પ્યુટર</a>' +
						'<a href="gram.html">વ્યાકરણ</a>' +
						'<a href="gk.html">સામાન્ય જ્ઞાન</a>' + 
						'<a href="ga.html">સાંપ્રત પ્રવાહ</a>' + 
					'</nav>'
	document.getElementById('header').innerHTML = hdr_str;
	
	
	
	
    var footer = '<div class="col-md-6 col-md-offset-3 special copyright">' +
                '&copy; 2016 સર્વ હક્કો નવુ ગુજરાતને અધીન. અહી લખેલ દરેક સાહિત્ય પર નવુ ગુજરાત સાહિત્ય હક્ક ધરાવે છે. આથી અહી લખેલ લેખોને બીજી જગ્યાએ વાપરવા કે બીજાને આપવા અથવા તો અમ ફેરફાર કરી ને ફરીથી પબ્લીશ કરવા પ્રતિબંધિત છે.' +
                '</div>'

    document.getElementById('footer').innerHTML = footer
})();
