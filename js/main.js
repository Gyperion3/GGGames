let pText0;
let pText1 = "Второй абзац!";
const pText2 ="Третий абзац!";
pText0 = pText1 +" "+ pText2;
document.getElementById("GGGames").innerText=pText0;
document.getElementById("GGGames1").innerText=pText1;
document.getElementById("GGGames2").innerText=pText2;

let tmp0 = 1, tmp1 =2, tmp2 =3, tmp3=4, tmp4 =5;
let res0 =0, res1 =0;
res0 = tmp0 + tmp3 / tmp1 * tmp4-tmp3;
res1 = tmp0 + tmp3 / tmp1 * (tmp4-tmp3);
document.getElementById("GGGames3").innerText = res0;
document.getElementById("GGGames4").innerText = res1;

res2 ="";
res2 =`Результат tmp0 + tmp1: ${tmp3+ tmp4} `;
//document.getElementById("GGGames5").innerText = res2;

let res3 =`
1
2
3
4
5
`;

//document.getElementById("GGGames6").innerText = res2;

let t0 =1, t1 ='2', t2 = 'Текст';
let re0 =0, re1 =0, re2 =0,re3 = 0;
re0 =t0+t1;
re1 = t0 -t1;
re2 =t0+t2;
re3 = t0 -t2;
document.getElementById("GGGames5").innerText = re0+' '+re1;
document.getElementById("GGGames6").innerText = re2 +' '+re3;

let res00 ='';
// то что в скобках работает и для c, c++ не только в js полезно для тестирования какой-нибудь штуки
//{
//	let tmp00 = 1, tmp01 = 2;
//	res00 =`Результат tmp00+ tmp01: ${ tmp00 +tmp01}`;
//}
//document.getElementById("GGGames7").innerText = res00;
//document.getElementById("GGGames8").innerText = tmp00;

function changePText()
{
	document.getElementById("GGGames6").innerText = ' Мы подбираем для вас ресурсы';
}


document.getElementById("Button")
		.addEventListener("click", changePText);
		
function startInputText()
{
	document.getElementById("bestText0").value =' ';
	
}	

function changePText()
{
	let inputName0 =' ', outputRes0 = ' ';
	inputName0 = document.getElementById("bestText0").value;
	inputNumber0 = document.getElementById("bestNumber0").value;
	inputPol0 = document.getElementById("bestSelect0").value;
	outputRes0 = inputName0+" "+ inputNumber0 + " "+ inputPol0;
	document.getElementById("GGGames7").innerText = outputRes0;	
}	

document.getElementById("bestText0").
	addEventListener("click",startInputText);
document.getElementById("Button").
	addEventListener("click",changePText);