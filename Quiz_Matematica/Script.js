function quiz() { //questão-p
				  //pergunta-q
	
var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10
var gabarito = ["C", "A", "C", "D", "A", "B", "D", "B", "C", "C"]
var certas = 0

//resposta 1
var resp1 = document.getElementsByName("q1");
var len = resp1.length

	
for(i=0;i<len;i++)
{
if(resp1[i].checked)
{
  p1 = resp1[i].value
  //alert("resposta 1: " + p1);
}
}

//resposta 2
var resp2 = document.getElementsByName("q2");
var len = resp2.length

	
for(i=0;i<len;i++)
{
if(resp2[i].checked)
{
  p2 = resp2[i].value
  //alert("resposta 2: " + p2);
}
}


//resposta 3
var resp3 = document.getElementsByName("q3");
var len = resp3.length

	
for(i=0;i<len;i++)
{
if(resp3[i].checked)
{
  p3 = resp3[i].value
  //alert("resposta 3: " + p3);
}
}


//resposta 4
var resp4 = document.getElementsByName("q4");
var len = resp4.length

	
for(i=0;i<len;i++)
{
if(resp4[i].checked)
{
  p4 = resp4[i].value
  //alert("resposta 4: " + p4);
}
}


//resposta 5
var resp5 = document.getElementsByName("q5");
var len = resp5.length

	
for(i=0;i<len;i++)
{
if(resp5[i].checked)
{
  p5 = resp5[i].value
  //alert("resposta 5: " + p5);
}
}


//resposta 6
var resp6 = document.getElementsByName("q6");
var len = resp6.length

	
for(i=0;i<len;i++)
{
if(resp6[i].checked)
{
  p6 = resp6[i].value
  //alert("resposta 6: " + p6);
}
}



//resposta 7
var resp7 = document.getElementsByName("q7");
var len = resp7.length

	
for(i=0;i<len;i++)
{
if(resp7[i].checked)
{
  p7 = resp7[i].value
  //alert("resposta 7: " + p7);
}
}



//resposta 8
var resp8 = document.getElementsByName("q8");
var len = resp8.length

	
for(i=0;i<len;i++)
{
if(resp8[i].checked)
{
  p8 = resp8[i].value
  //alert("resposta 8: " + p8);
}
}




//resposta 9
var resp9 = document.getElementsByName("q9");
var len = resp9.length

	
for(i=0;i<len;i++)
{
if(resp9[i].checked)
{
  p9 = resp9[i].value
  //alert("resposta 9: " + p9);
}
}


//resposta 10
var resp10 = document.getElementsByName("q10");
var len = resp10.length

	
for(i=0;i<len;i++)
{
if(resp10[i].checked)
{
  p10 = resp10[i].value
  //alert("resposta 10: " + p10);
}
}



if(p1==gabarito[0])
{
	certas=certas+1
}
if(p2==gabarito[1])
{
	certas=certas+1
}
if(p3==gabarito[2])
{
	certas=certas+1
}
if(p4==gabarito[3])
{
	certas=certas+1
}
if(p5==gabarito[4])
{
	certas=certas+1
}
if(p6==gabarito[5])
{
	certas=certas+1
}
if(p7==gabarito[6])
{
	certas=certas+1
}
if(p8==gabarito[7])
{
	certas==certas+1
}
if(p9==gabarito[8])
{
	certas=certas+1
}
if(p10==gabarito[9])
{
	certas=certas+1
}

alert("Respostas Corretas: "+certas+" certas de 10 perguntas")


}