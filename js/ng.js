(function(){
    var header, footer;
    
    header = "<h1 class='header'><a href='http://navugujarat.in'>નવું ગુજરાત</a></h1>" +
			 "<nav>" +
				"<ul class='nav'>" +
					"<li><a href='#'>ગુજરાત</a></li>" +
					"<li><a href='#'>રાષ્ટ્રીય</a></li>" +
					"<li><a href='#'>આંતરરાષ્ટ્રીય</a></li>" +
					"<li><a href='#'>રાજનીતિ</a></li>" +
					"<li><a href='#'>વિજ્ઞાન</a></li>" +
				"</ul>" +
			"</nav>"
    document.getElementById("header").innerHTML = header;
    
    footer = "ખુબ <i class='fa fa-heart'></i> અને જતનથી બનાવેલ. <br>" +
			 "&copy; ૨૦૧૭. બધાજ હક્કો નવું ગુજરાતને આધીન"
    document.getElementById("footer").innerHTML = footer;
}());