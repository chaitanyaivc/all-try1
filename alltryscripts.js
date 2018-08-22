	var a = 5, b = 6, temp ;
		function myF1(){
			c = a + b;
			document.getElementById("add").innerHTML = "Addition is: " + c;

		}
		function myF2(){
			c = a * b;
			document.getElementById("mult").innerHTML = "Multiplication is: " + c;
		}
		function myF3(){
			var person = {
				firstName : "abc",
				lastName : "xyz",
				age : 20,
				fullName : function(){
					return this.firstName + " " + this.lastName;
				}
			}
			document.getElementById("pers").innerHTML = "Full Name of the person is: " + person.fullName();
		}
		function myF4() {
			var a = prompt("Enter your data to find length:");
			document.getElementById("stringg").innerHTML = a.length;
		}
		function myF5() {
			var x, a = "Hello this is hashirama", b = prompt("Enter word to search:");
			var c = a.search(b);
			if (c > -1) {
				x = "Found";
			}
			else
				x = "Not found";
			document.getElementById("search").innerHTML = x;
		}
		function myF6() {
			var a = ["as", "ac", "sasa", "wq"];
			text = "";
			var i = 0;
			for(i in a)
			{
				text += a[i] + "<br>";
			}
			document.getElementById("arrp").innerHTML = text;

		}
		function myF7() {
			switch(new Date().getDay())
			{
				case 0:
				day = "Sunday";
				break;
				case 1:
				day = "Monday";
				break;
				case 2:
				day = "Tuesday";
				break;
				case 3:
				day = "Wednesday";
				break;
				case 4:
				day = "Thursday";
				break;
				case 5:
				day = "Friday";
				break;
				case 6:
				day = "Saturday";
				break;
				default:
				day = "Data is invalid";
			}
			document.getElementById("dayyy").innerHTML = "Today is: " + day;
		}
		function myF8() {
			var person1 = {firstName:"Ram",lastName: "krishna"};
			var person2 = {
				fullName: function(){
					return this.firstName + " " + this.lastName;
					}
				}
			var naam = person2.fullName.call(person1);
			document.getElementById("callf").innerHTML = naam;
		}
		function indOf(){
			var a = prompt("Enter your sentence");
			var b = prompt("Enter word to find:");
			x = a.indexOf(b);
			document.getElementById("indOf").innerHTML = "Index of " + b + " is " + x;
		}
		function lastindOf(){
			var a = prompt("Enter your sentence");
			var b = prompt("Enter word to find:");
			x = a.lastIndexOf(b);
			document.getElementById("lastindOf").innerHTML = "Index of " + b + " is " + x;
		}
		function slici(){
			var a = prompt("Enter your sentence");
			var b = Number(prompt("Enter the first index from where you want you see: "));
			var c = Number(prompt("Enter the last index from where you want you see: "));
			x = a.slice(b,c);
			document.getElementById("slici").innerHTML = "Index of " + b + "is " + x;
		}
		function substr(){
		var a = prompt("Enter your sentence");
		var b = Number(prompt("Enter the first index from where you want you see: "));
		var c = Number(prompt("Enter the length of the string:"));
		x = a.substr(b,c);
		document.getElementById("substr").innerHTML = "Index of " + b + "is " + x;
	}
	function replacee(){
		var a = prompt("Enter your sentence");
		var b = prompt("Enter the word you want to replace: ");
		var c = prompt("Enter the word you want to replace with: ");
		x = a.replace(b,c);
		document.getElementById("replacee").innerHTML = "Replaced word is " + x;
	}
	function tupl(){
		var a = prompt("Enter your sentence");
		x = a.toUpperCase();
		y = a.toLowerCase();
		document.getElementById("tupl").innerHTML = "Upper case is: " + x + " and lower case is: " + y;
	}
	function conc(){
		var a = prompt("Enter your sentence:");
		a = a.trim();
		var b = prompt("Enter 2nd string:");
		x = a.concat(b);
		document.getElementById("conc").innerHTML = "Concatinated string is: " + x;
	}
	function chara(){
		var a = prompt("Enter your sentence:");
		var b = Number(prompt("Enter index:"));
		x = a.charAt(b);
		y = a.charCodeAt(b);
		document.getElementById("chara").innerHTML = "Character at the given index is: " + x + ", And its ascii value is: " + y;
	}
	function numblu(){
		var a = Number(prompt("Enter Number:"));
		var b = Number(prompt("Enter Number to set exp:"));
		var c = Number(prompt("Enter Number to set fixed:"));
		var d = Number(prompt("Enter Number to set precision:"));
		x = a.toString();
		y = a.toExponential(b);
		z = a.toFixed(c);
		u = a.toPrecision(d);
		v = a.valueOf();
		w = parseInt(a);
		s = parseFloat(a);
		document.getElementById("numblu").innerHTML = "String form of given number is: " + x + "<br>" + "Exponential value is: " + y + "<br>" + "Fixed value is: " + z + "<br>" +  "Precised value is: " + u + "<br>" +  "Actual value is " + v + "<br>" + "Parsed int value is: " + w + "<br>" + "Parsed float value is: " + s;
	}
	function joins() {
		var phones = ["sams", "iph", "mi", "nok"];
		var sims = ["jio", "airtel", "idea", "bsnl"];
		k = phones.join(" * ");
		l = phones.toString();
		x = phones.pop();
		y = phones.push("blackberry");
		z = phones.shift();
		s = phones.unshift("1+");
		phones[0] = "celk";
		delete phones[1];
		v = phones.splice(2,0,"yu","erric");//add
		w = phones.splice(0,1);//delete
		t = phones.concat(sims);
		u = sims.slice(1);
		document.getElementById("joins").innerHTML = "Join mode: " + k + "<br>" + "toString is: " + l + "<br>" + "Popped string is: " + x + "<br>" + "Pushed string is: " + y + "<br>" +"Shifted array is: " + z + "<br>" + "UnShifted array is: " + s + "<br>" +"Added array is: " + v + "<br>" + "First del array is: " + w + "<br>" + "Concatinated array is: " + t + "<br>" + "Sliced array is: " +u;
	}
	function dates(){
			var d = new Date();
			a = d.getFullYear();
			b = d.getMonth();
			c = d.getDate();
			k = d.getHours();
			e = d.getMinutes();
			f = d.getSeconds();
			g = d.getMilliseconds();
			h = d.getDay();
			i = Date.now();
			j = d.getTime();
			document.getElementById("dates").innerHTML = "Get methods: " + "<br><br>" + "Year is: " +a + "<br>" +"Month is: " +b+ "<br>" + "Date is: " +c+ "<br>" + "Hour is: " +k+ "<br>" + "Minutes is: " +e+ "<br>" + "Second is: " +f+ "<br>" + "Milliseconds is: " +g+ "<br>" + "Time is: " +j+ "<br>" + "Day is: " +h+ "<br>" + "Date now is: " +i+ "<br>" + "Date ECMA script: " +i;
	}
	function mathl(){
		a = Math.PI;
		b = Math.round(4.7);
		c = Math.abs(-5);
		d = Math.pow(4,3);
		e = Math.sqrt(121);
		f = Math.ceil(4.2);
		g = Math.floor(4.7);
		h = Math.sin(90 * (Math.PI / 180));
		i = Math.max(0,1,2,2345,-2345);
		j = Math.min(0,1,2,2345,-2345);
		k = Math.random();
		document.getElementById("mathl").innerHTML = "Pi value is: " + a + "<br>" + "Round value is: " + b + "<br>" + "Absolute value is: " + c + "<br>" + "Power value is: " + d + "<br>" + "Sqare root value is: " + e + "<br>" + "Ceil value is: " + f + "<br>" + "Floor value is: " + g + "<br>" + "Sine value is: " + h + "<br>" + "Max value is: " + i + "<br>" + "Minimum value is: " + j + "<br>" + "Random value is: " + k;
	}
	function boolu(){
		var a = 0, b = 1, c = true, d = false, e = "false", f = -2343;
		a = Boolean(a);
		b = Boolean(b);
		c = Boolean(c);
		d = Boolean(d);
		e = Boolean(e);
		f = Boolean(f);
		document.getElementById("boolu").innerHTML = "a is: " + a + "<br>" + "b is: " + b + "<br>" + "c is: " + c + "<br>" + "d is: " + d + "<br>" + "e is: " + e + "<br>" + "f is: " + f;
	}
	function errca() {
    	var message, x;
    	message = document.getElementById("errca");
    	message.innerHTML = "";
    	x = document.getElementById("inpisay").value;
    	try { 
	        if(x == "")  throw "empty";
        	if(isNaN(x)) throw "not a number";
        	x = Number(x);
        	if(x < 5)    throw "too low";
        	if(x > 10)   throw "too high";
    	}
    	catch(err) {
	        message.innerHTML = "Input is " + err;
	    }
	}
	function cathra() {
		var x;
		try{
			x = z + 1;
		}
		catch(err){
			document.getElementById("cathra").innerHTML = err.name;
		}
		try{
			x = eval("alert('Hello)");
		}
		catch(err){
			document.getElementById("cathraa").innerHTML = err.name;
		}
		try{
			var x = 1;
			x.toUpperCase();
		}
		catch(err){
			document.getElementById("cathraaa").innerHTML = err.name;
		}
	}
	function hoist() {
		document.getElementById("hoist").innerHTML = "a is: " + a + " b is: " + b + " temporary variable is: " + temp;
		temp = 5;
	}
	function thislu(){
		var person = {
			firstName : "Ram",
			lastName : "Krishna",
			age : 50,
			fullName : function(){
				return this.firstName + " " + this.lastName;
			},
			extras : function(){
				return this;
			}
		}
		document.getElementById("thislu").innerHTML = "First Name is: " + person.fullName();
		document.getElementById("thisluu").innerHTML = "First Name is: " + person.extras();
	}
	function numb() {
		var x = document.getElementById("numb");
		if(!x.checkValidity()){
			document.getElementById("numba").innerHTML = x.validationMessage;
		}
		else
			document.getElementById("numba").innerHTML = "Input ok.";
	}
	function getter1(){
		var person = {
			firstName : "Ram",
			lastName : "Krishna",
			age : 30,
			language : "English",
			get lang(){
			return this.firstName + " " + this.lastName;
			}
		}
		document.getElementById("getter1").innerHTML = person.lang;
	}
	function setter1() {
		var person = {
			firstName : "Ram",
			lastName : "Krishna",
			age : 30,
			language : "English",
			set lang(some){
				this.language = some;
			}
		}
		person.lang = "Telugu";
		document.getElementById("setter1").innerHTML = person.language;
	}
	function counterobject() {
		var operating = {
			counter : 0,
			get increment() {
				this.counter ++;
			},
			get decrement() {
				this.counter --;
			},
			set add(value){
				this.counter += value;
			},

			set subtract(value){
				this.counter -= value
			}
		};
		operating.counter;
		operating.increment;
		operating.decrement;
		operating.add = 10;
		operating.subtract = 5;
		document.getElementById("counterobject").innerHTML = operating.counter;
	}
	function constructors() {
		function person(first,last,age,hair){
			this.firstName = first;
			this.lastName = last;
			this.age = age;
			this.hairColor = hair;
		}
		var myFather = new person("Rama","krishna",30,"Black");
		document.getElementById("constructors").innerHTML = myFather.hairColor;
	}
	function constructorsnthis() {
		function person(first,last,age,hair){
			this.firstName = first;
			this.lastName = last;
			this.age = age;
			this.hairColor = hair;
			this.name = function(){
				return this.firstName + " " + this.lastName;
			}
		}
		var myFather = new person("Rama","krishna",30,"Black");
		document.getElementById("constructors").innerHTML = myFather.name();
	}
	function prototypefun() {
		function person(first,last,age,hair) {
			this.firstName = first;
			this.lastName = last;
			this.age = age;
			this.hairColor = hair;
		}
		person.prototype.nationality = "English";
		var myFather = new person("Rama","Krishna",30,"Black");
		document.getElementById("prototypefun").innerHTML = myFather.nationality;
	}
	function funccall(){
		var a = function(b,c){
			return b * c;
		}
		document.getElementById("funccall").innerHTML = a(5,6);
	}
	function funccall1() {
		var a = product(2,7);
		document.getElementById("funccall1").innerHTML = a;
		function product(b,c) {
			return b * c;
		}
	}
	function funcstore() {
		var a = function (b,c) {
			return b * c;
		}
		document.getElementById("funcstore").innerHTML = a;
	}
	function selfcall(){
		(function(){
			document.getElementById("selfcall").innerHTML = "Self-called";
		})();
	}
	function applying(){
		var person = {
			fullName : function () {
				return this.firstName + " " + this.lastName;
			}
		}
		var person1 = {
			firstName: "Rama",
			lastName: "Krishna",
		} 
		document.getElementById("applying").innerHTML = person.fullName.apply(person1);
	}
	function changeText(some){
		some.innerHTML = "My 1st segment";
	}
	function cookies(){
		text = "";
		if(navigator.cookieEnabled == true)
			text = "Cookies are Enabled";
		else
			text = "Cookies are not Enabled";
		document.getElementById("cookies").innerHTML = text;
	}
	function toUpper() {
		x = document.getElementById("name");
		x.value = x.value.toUpperCase();
	}
	function mouseover(text){
		text.innerHTML = "Thanks for entering";
	}
	function mouseout(text){
		text.innerHTML = "Thanks for going out";
	}
	function mousedown(text){
		text.style.backgroundColor = "blue";
		text.innerHTML = "Thanks for clicking";
	}
	function mouseup(text){
		text.style.backgroundColor = "yellow";
		text.innerHTML = "Thanks for releasing";
	}
	function styless() {
		document.getElementById("style1").style.color = "blue";
		document.getElementById("style1").style.fontFamily = "Arial";
		document.getElementById("style1").style.fontSize = "larger";
	}
	function DOMnodes(){
		var collect = document.getElementsByTagName('p');
		document.getElementById("displaycont").innerHTML = "My document contains " + collect.length + " paragraphs" + " And \
		second line of my paragraph is: " + collect[1].innerHTML;
	}
	function printnchange() {
 	    var collection = document.getElementsByTagName("p");
    	var i;
    	text = "";
    	for (i = 0; i < collection.length; i++) {
    		text = collection[i].value;
        	collection[i].style.color = "red";
    	}
    	document.getElementById("printnchange").innerHTML = text;
	}
	function screenSizes() {
		var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		var h = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		var x = document.getElementById("screenSizes");
		x.innerHTML = "Browser inner window width: " + w + "<br><br>" + "height: " + h + "<br><br>" + "Screen width is: " + screen.width + "<br><br>" + "Screen \
		height is: " +screen.height+ "<br><br>" + "Available screen width is: " +screen.availWidth+ "<br><br>" + "Available screen height is: \
		" +screen.availHeight;
	}
	function navigators() {
		document.getElementById("navigators").innerHTML = "Cookie Enabled is: " +navigator.cookieEnabled+ "<br>" + "Appname is: \
		 "+ navigator.appName+ "<br>" + "App code name is: " +navigator.appCodeName+ "<br>" + "navigator product is: \
		 " +navigator.product+ "<br>" + "App version is: " + navigator.appVersion + "<br>" + "User agent is: " +navigator.userAgent+ "\
		 <br>" + "platform is: " +navigator.platform+ "<br>" + "navigator language is: " + navigator.language + "<br>" + "Online \
		 status is: " +navigator.onLine+ "<br>" + "Java enabled???   " +navigator.javaEnabled();
	}
	function loadDoc() {
 		 var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      		document.getElementById("ajaxdem").innerHTML =
      		this.responseText;
    		}
  		};
  		xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);
  		xhttp.send();
	}