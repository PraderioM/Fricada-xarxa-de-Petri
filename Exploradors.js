var marking=[1,1,0,0,0,0,0,0,0,0,0,0];

function shoot(transition){
	var i;
	var k=0;
	for (i=0; i<12; i++){
		if (marking[i]+Net.matrix[transition-1][i]<0){
			k=1;
		}
	}
	if (k==0){
		for (i=0; i<12; i++){
			marking[i]=marking[i]+Net.matrix[transition-1][i];
		}
	}
	showdots();
}

function showdots(){
	for (i=1; i<13; i++){
		if (marking[i-1]==0){
			document.getElementById('dot'+i).style.display='none';
		}
		else{
			document.getElementById('dot'+i).style.display='';	
		}
	}
}

function comencar(){
	var i;
	Net=new Object();
	Net.matrix=[];
	for (i=1; i<33; i++){
		Net.matrix.push([]);
		for (j=0; j<12; j++){
			Net.matrix[i-1].push(0);
		}
		document.getElementById('Transition'+i).setAttribute('onClick', 'shoot('+i+')');
	}
	Net.matrix[0][0]=-1;
	Net.matrix[0][1]=-1;
	Net.matrix[0][2]=1;
	Net.matrix[0][3]=1;
	
	Net.matrix[1][0]=1;
	Net.matrix[1][1]=1;
	Net.matrix[1][2]=-1;
	Net.matrix[1][3]=-1;
	
	Net.matrix[2][0]=-1;
	Net.matrix[2][1]=-1;
	Net.matrix[2][2]=1;
	Net.matrix[2][4]=1;
	
	Net.matrix[3][0]=1;
	Net.matrix[3][1]=1;
	Net.matrix[3][2]=-1;
	Net.matrix[3][4]=-1;
	
	Net.matrix[4][0]=-1;
	Net.matrix[4][1]=-1;
	Net.matrix[4][2]=1;
	Net.matrix[4][5]=1;
	
	Net.matrix[5][0]=1;
	Net.matrix[5][1]=1;
	Net.matrix[5][2]=-1;
	Net.matrix[5][5]=-1;
	
	Net.matrix[6][0]=-1;
	Net.matrix[6][3]=-1;
	Net.matrix[6][2]=1;
	Net.matrix[6][6]=1;
	
	Net.matrix[7][0]=1;
	Net.matrix[7][3]=1;
	Net.matrix[7][2]=-1;
	Net.matrix[7][6]=-1;

	Net.matrix[8][0]=-1;
	Net.matrix[8][3]=-1;
	Net.matrix[8][2]=1;
	Net.matrix[8][4]=1;

	Net.matrix[9][0]=1;
	Net.matrix[9][3]=1;
	Net.matrix[9][2]=-1;
	Net.matrix[9][4]=-1;

	Net.matrix[10][0]=-1;
	Net.matrix[10][3]=-1;
	Net.matrix[10][2]=1;
	Net.matrix[10][5]=1;

	Net.matrix[11][0]=1;
	Net.matrix[11][3]=1;
	Net.matrix[11][2]=-1;
	Net.matrix[11][5]=-1;

	Net.matrix[12][0]=-1;
	Net.matrix[12][4]=-1;
	Net.matrix[12][2]=1;
	Net.matrix[12][8]=1;

	Net.matrix[13][0]=1;
	Net.matrix[13][4]=1;
	Net.matrix[13][2]=-1;
	Net.matrix[13][8]=-1;

	Net.matrix[14][0]=-1;
	Net.matrix[14][4]=-1;
	Net.matrix[14][2]=1;
	Net.matrix[14][6]=1;

	Net.matrix[15][0]=1;
	Net.matrix[15][4]=1;
	Net.matrix[15][2]=-1;
	Net.matrix[15][6]=-1;

	Net.matrix[16][0]=-1;
	Net.matrix[16][5]=-1;
	Net.matrix[16][2]=1;
	Net.matrix[16][8]=1;

	Net.matrix[17][0]=1;
	Net.matrix[17][5]=1;
	Net.matrix[17][2]=-1;
	Net.matrix[17][8]=-1;

	Net.matrix[18][0]=-1;
	Net.matrix[18][5]=-1;
	Net.matrix[18][2]=1;
	Net.matrix[18][9]=1;

	Net.matrix[19][0]=1;
	Net.matrix[19][5]=1;
	Net.matrix[19][2]=-1;
	Net.matrix[19][9]=-1;

	Net.matrix[20][0]=-1;
	Net.matrix[20][7]=-1;
	Net.matrix[20][2]=1;
	Net.matrix[20][10]=1;

	Net.matrix[21][0]=1;
	Net.matrix[21][7]=1;
	Net.matrix[21][2]=-1;
	Net.matrix[21][10]=-1;

	Net.matrix[22][0]=-1;
	Net.matrix[22][7]=-1;
	Net.matrix[22][2]=1;
	Net.matrix[22][9]=1;

	Net.matrix[23][0]=1;
	Net.matrix[23][7]=1;
	Net.matrix[23][2]=-1;
	Net.matrix[23][9]=-1;

	Net.matrix[24][0]=-1;
	Net.matrix[24][8]=-1;
	Net.matrix[24][2]=1;
	Net.matrix[24][11]=1;

	Net.matrix[25][0]=1;
	Net.matrix[25][8]=1;
	Net.matrix[25][2]=-1;
	Net.matrix[25][11]=-1;

	Net.matrix[26][0]=-1;
	Net.matrix[26][10]=-1;
	Net.matrix[26][2]=1;
	Net.matrix[26][11]=1;

	Net.matrix[27][0]=1;
	Net.matrix[27][10]=1;
	Net.matrix[27][2]=-1;
	Net.matrix[27][11]=-1;

	Net.matrix[28][0]=-1;
	Net.matrix[28][9]=-1;
	Net.matrix[28][2]=1;
	Net.matrix[28][11]=1;

	Net.matrix[29][0]=1;
	Net.matrix[29][9]=1;
	Net.matrix[29][2]=-1;
	Net.matrix[29][11]=-1;

	Net.matrix[30][0]=-1;
	Net.matrix[30][8]=-1;
	Net.matrix[30][2]=1;
	Net.matrix[30][10]=1;

	Net.matrix[31][0]=1;
	Net.matrix[31][8]=1;
	Net.matrix[31][2]=-1;
	Net.matrix[31][10]=-1;

	Net.matrix[32][0]=-1;
	Net.matrix[32][9]=-1;
	Net.matrix[32][2]=1;
	Net.matrix[32][10]=1;

	Net.matrix[33][0]=1;
	Net.matrix[33][9]=1;
	Net.matrix[33][2]=-1;
	Net.matrix[33][10]=-1;
}