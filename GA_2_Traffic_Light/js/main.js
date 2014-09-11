function lightStop() {
		document.getElementById('light-stop').style.background = 'rgba(254,24,43,1)';
		document.getElementById('light-caution').style.background = 'rgba(0,0,0,1)';
		document.getElementById('light-go').style.background = 'rgba(0,0,0,1)';
	}

function lightCaution() {
	document.getElementById('light-stop').style.background = 'rgba(0,0,0,1)';
	document.getElementById('light-caution').style.background = 'rgba(255,224,59,1)';
	document.getElementById('light-go').style.background = 'rgba(0,0,0,1)';
}

function lightGo() {
	document.getElementById('light-stop').style.background = 'rgba(0,0,0,1)';
	document.getElementById('light-caution').style.background = 'rgba(0,0,0,1)';
	document.getElementById('light-go').style.background = 'rgba(71,220,199,1)';
}