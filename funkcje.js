var plik1 = "<img src=\"img/zdjecie1.jpg\" />";
var plik2 = "<img src=\"img/zdjecie2.jpg\" />";
var plik3 = "<img src=\"img/zdjecie3.jpg\" />";
var plik4 = "<img src=\"img/zdjecie4.jpg\" />";
var plik5 = "<img src=\"img/zdjecie5.jpg\" />";

function z1()
{
	document.getElementById("id1").innerHTML="Bo między nimi jest pokój.";
}

function r1()
{
	document.getElementById("id2").innerHTML= plik1;
}

function z2()
{
	document.getElementById("id1").innerHTML="Odpowiedź brzmi:";
}

function r2()
{
	document.getElementById("id2").innerHTML= "";
} 

function z3()
{
	document.getElementById("id3").innerHTML="Prawie dycha.";
}

function r3()
{
	document.getElementById("id4").innerHTML= plik2;
}

function z4()
{
	document.getElementById("id3").innerHTML="Odpowiedź brzmi:";
}

function r4()
{
	document.getElementById("id4").innerHTML= "";
} 

function z5()
{
	document.getElementById("id5").innerHTML="Na parter.";
}

function r5()
{
	document.getElementById("id6").innerHTML= plik3;
}

function z6()
{
	document.getElementById("id5").innerHTML="Odpowiedź brzmi:";
}

function r6()
{
	document.getElementById("id6").innerHTML= "";
} 

function z7()
{
	document.getElementById("id7").innerHTML="Niedziela.";
}

function r7()
{
	document.getElementById("id8").innerHTML= plik4;
}

function z8()
{
	document.getElementById("id7").innerHTML="Odpowiedź brzmi:";
}

function r8()
{
	document.getElementById("id8").innerHTML= "";
} 

function z9()
{
	document.getElementById("id9").innerHTML="Rzuciłeś piłeczkę pionowo do góry.";
}

function r9()
{
	document.getElementById("id10").innerHTML= plik5;
}

function z10()
{
	document.getElementById("id9").innerHTML="Odpowiedź brzmi:";
}

function r10()
{
	document.getElementById("id10").innerHTML= "";
} 

function c1()
{
	z1();
	r1();
}

function c2()
{
	z2();
	r2();
}

function c3()
{
	z3();
	r3();
}

function c4()
{
	z4();
	r4();
}

function c5()
{
	z5();
	r5();
}

function c6()
{
	z6();
	r6();
}

function c7()
{
	z7();
	r7();
}

function c8()
{
	z8();
	r8();
}

function c9()
{
	z9();
	r9();
}

function c10()
{
	z10();
	r10();
}