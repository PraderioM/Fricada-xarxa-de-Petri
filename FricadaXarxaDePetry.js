var image=0;
var birres=0;
var turingmachine='no';
var chuletatext='EstudiarMC=1, EstudiarPO=1, EstudiarMP=1, EstudiarBV=1, Trobada=1, PerParelles=1, PresentacioParelles=1, ExemplesParelles=1, Posar en comu=1, Fer birres=1';
var marking=[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,9,0];
var markingcopy=[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,9,0];
var matrix=[[-1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,-1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,-1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,-1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,-1,-1,-1,-1,1,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,-1,4,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,-1,1,1,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,-4,4,0,0,0,0,0,-5,0],
			[0,0,0,0,0,0,0,0,0,-1,0,1,1,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,-1,0,0,1,1,0,-6,0],
			[0,0,0,0,0,0,0,0,0,0,-4,0,0,0,0,1,-5,0],
			[0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,1,-2,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0],
			[0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,0,0,1]];
var necessarimatrix=[[-1,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,-4,0,0,0,0,0,0,-5,0],
					[0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,-6,0],
					[0,0,0,0,0,0,0,0,0,0,-4,0,0,0,0,0,-5,0],
					[0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,0,-2,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0],
					[0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,0,0,0]];

function comencar(){
	var text;
	text='<img id="PetryNet" src="Xarxa'+image+'.png" style="position:absolute; top:0px; left:0px; z-index:0">';
	document.getElementById('Net').innerHTML=text;
}

function next(){
	document.getElementById('Previous').style.display='';
	image+=1;
	if (image<8){
		document.getElementById('PetryNet').src='Xarxa'+image+'.png';
		if (image==1){
			for (i=1; i<5; i++){
				document.getElementById('Aux'+i).style.display='';
			}
		}
		else if (image==5){
			document.getElementById('Aux5').style.display='';
		}
		else if (image==7){
			document.getElementById('Previous').style.top='630px';
			document.getElementById('Next').style.top='630px';
			document.getElementById('TopSecret').style.top='630px';
			for (i=1; i<6; i++){
				document.getElementById('Aux'+i).style.display='none';
			}
			for (i=1; i<13; i++){
				document.getElementById('Transition'+i).style.display='';
			}
		}
	}
	else {
		for (i=1; i<5; i++){
			document.getElementById('time'+i).style.display='';
		}
		document.getElementById('mark17').innerHTML=9;
		document.getElementById('Next').style.display='none';
		document.getElementById('TopSecret').style.left='100px';
		document.getElementById('PetryNet').src='Xarxa'+image+'.png';
	}
}

function previous(){
	image-=1;
	if (image>0){
		document.getElementById('PetryNet').src='Xarxa'+image+'.png';
		if (image==4){
			document.getElementById('Aux5').style.display='none';
		}
		else if (image==6){
			document.getElementById('Previous').style.top='400px';
			document.getElementById('Next').style.top='400px';
			document.getElementById('TopSecret').style.top='400px';
			for (i=1; i<6; i++){
				document.getElementById('Aux'+i).style.display='';
			}
			for (i=1; i<13; i++){
				document.getElementById('Transition'+i).style.display='none';
			}
		}
		else if (image==7){
			for (i=1; i<5; i++){
				document.getElementById('time'+i).style.display='none';
			}
			document.getElementById('mark17').innerHTML='';
			document.getElementById('TopSecret').style.left='200px';
			document.getElementById('Next').style.display='';
		}
	}
	else {
		for (i=1; i<5; i++){
			document.getElementById('Aux'+i).style.display='none';
		}
		document.getElementById('Previous').style.display='none';
		document.getElementById('PetryNet').src='Xarxa'+image+'.png';
	}
}

function addbeer(){
	for (i=1; i<6; i++){
		document.getElementById('Aux'+i).style.display='none';
		document.getElementById('time'+i).style.display='';
	}
	for (i=1; i<14; i++){
		document.getElementById('Transition'+i).style.display='';
	}
	document.getElementById('mark17').innerHTML=9;
	document.getElementById('Next').style.display='none';
	document.getElementById('TopSecret').style.display='none';
	document.getElementById('Previous').style.top='630px';
	document.getElementById('Previous').setAttribute("onclick", "nogoingback()");
	document.getElementById('PetryNet').src="Xarxa9.png";
	document.getElementById('Solve').style.display='';
}

function nogoingback(){
	document.getElementById('Previous').style.display='none';
	alert('Ja \xE9s massa tard per fer-se enrera.');
}

function solve(){
	for (i=1; i<5; i++){
		document.getElementById('dot'+i).style.display='';
	}
	document.getElementById('dot17').style.display='';
	document.getElementById('Previous').style.display='none';
	document.getElementById('Solve').style.top='660px';
	document.getElementById('Solve').value='Chuleta';
	document.getElementById('Solve').setAttribute('onClick', 'chuleta()');
	document.getElementById('PetryNet').src='Final.png';
	for (i=1; i<16; i++){
		document.getElementById('Transition'+i).setAttribute('onClick', 'shoot('+i+')');
	}
}

function chuleta(){
	document.getElementById('Solve').type='text';
	document.getElementById('Solve').style.width='1000px';
	document.getElementById('Solve').value=chuletatext;
	document.getElementById('TopSecret').style.display='';
	document.getElementById('TopSecret').style.top='690px';
	document.getElementById('TopSecret').value='Convertir en m\xE0quina de Turing';
	document.getElementById('TopSecret').setAttribute('onClick', 'turing()');
}

function turing(){
	console.log('Si imposem que les transicións de les xarxes de Petri s\'han de disparar en el moment en el que s\'habilitin i, a més a més, donem prioritat a algunes transicions per sobre de altres (en el nostre exemple totes les transicions tenen prioritat sobre les que condueixen a la plaça nova) llavors aconseguirem que les xarxes de Petri es tornin equivalents a màquines de Turing.');
	document.getElementById('PetryNet').src='turing.png';
	for (i=1; i<15; i++){
		document.getElementById('Transition'+i).value='';
	}
	document.getElementById('time2').innerHTML='';
	document.getElementById('time3').innerHTML='';
	document.getElementById('time5').innerHTML='';
	document.getElementById('Transition6').style.display='none';
	document.getElementById('Transition8').style.display='none';
	document.getElementById('Transition11').style.display='none';
	document.getElementById('Transition13').style.display='none';
	document.getElementById('Transition14').style.display='';
	document.getElementById('Transition15').style.display='';	
	document.getElementById('Transition7').style.width='60px';
	document.getElementById('Transition12').style.width='90px';
	document.getElementById('Transition9').style.left='130px';
	document.getElementById('Transition10').style.left='250px';
	document.getElementById('TopSecret').style.display='none';
	document.getElementById('Solve').style.display='none';
	document.getElementById('PetryNet').src='turing.png';
	document.getElementById('Previous').style.display='';
	document.getElementById('Previous').type='text';
	document.getElementById('Previous').value='';
	document.getElementById('Previous').placeholder='temps=9';
	document.getElementById('Previous').style.width='50px';
	document.getElementById('Previous').removeAttribute('onClick');
	document.getElementById('Previous').setAttribute('onChange', 'changetime()');
	document.getElementById('Next').style.display='';
	document.getElementById('Next').style.top=document.getElementById('Previous').style.top;
	document.getElementById('Next').value='start';
	document.getElementById('Next').removeAttribute('onClick');
	document.getElementById('Next').setAttribute('onClick', 'lunchturing()');
	for (i=0; i<marking.length; i++){
		marking[i]=markingcopy[i];
	}
	document.getElementById('mark17').innerHTML=marking[16];
	turingmachine='yes';
	for (i=1; i<5; i++){
		document.getElementById('dot'+i).style.display='';
	}
	for (i=5; i<19; i++){
		document.getElementById('dot'+i).style.display='none';
	}
	document.getElementById('dot17').style.display='';
}

function changetime(){
	marking[16]=Number(document.getElementById('Previous').value);
	document.getElementById('mark17').innerHTML=marking[16];
}

function shoot(transition){
	k=0;
	if (transition==13){
		birres+=1;
		if (birres==1){
			alert('Alerta, per accedir a aquesta transici\xF3 has de ser major d\'edat.');
		}
		if (birres==5){
			alert('Beu amb moderaci\xF3.');
		}
	}
	for (i=1; i<19; i++){
		if (marking[i-1]+necessarimatrix[transition-1][i-1]<0){
			k=1;
		}
	}
	if (k==0){
		for (i=1; i<19; i++){
			marking[i-1]=marking[i-1]+matrix[transition-1][i-1];
			if (marking[i-1]==0){
				document.getElementById('dot'+i).style.display='none';
				if (i==10 || i==11 || i==17){
					document.getElementById('mark'+i).innerHTML='';
				}
			}
			else if (marking[i-1]==1){
				document.getElementById('dot'+i).style.display='';
				if (i==17){
					document.getElementById('mark'+i).innerHTML=marking[i-1];
				}
			}
			else if (marking[i-1]>1){
				document.getElementById('dot'+i).style.display='';
				document.getElementById('mark'+i).innerHTML=marking[i-1];
			}
		}
		if (marking[16]<6 && turingmachine=='no'){
			document.getElementById('PetryNet').src='Danger.png';
		}
	}
}

function lunchturing(){
	var turingtransitions=[1,2,3,4,5,7,9,10,12,14,15];
	document.getElementById('Previous').style.display='none';
	document.getElementById('Next').value='repetir';
	document.getElementById('Next').removeAttribute('onClick');
	document.getElementById('Next').setAttribute('onClick', 'turing()');
	while (marking[15]==0 && marking[17]==0){
		for (n=0; n<turingtransitions.length; n++){
			shoot(turingtransitions[n]);
		}
	}
	if (marking[15]!=0){
		alert('Hem aconseguit acabar el treball en aquest temps');
	}
	else{
		alert('No hem aconseguit acabar el treball en aquest temps');
	}
}