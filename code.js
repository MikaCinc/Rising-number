window.onload = function () {
	document.getElementById("akcija").onclick = function(){
		akcija()
		this.disabled = true
		this.innerHTML = "Start"
		var li1 = document.createElement("LI")
		var li1_text = document.createTextNode("> Krenuo si! <")
		li1.style.color = "green"
		li1.appendChild(li1_text)
		document.getElementById("konzola_ul").appendChild(li1)
		document.getElementById("faster").disabled = false
		document.getElementById("slower").disabled = false
	}
	document.getElementById("faster").onclick = function(){
		faster()
	}
	document.getElementById("slower").onclick = function(){
		slower()
	}
	document.getElementById("stop").onclick = function(){
		stop()
	}
	document.getElementById("reset").onclick = function(){
		reset()
	}
	document.getElementById("cls").onclick = function(){
		cls()
	}
}

var trajanjeIntervala = 500
var	num = 0
var	vreme = 0
var	pokusaji = 0
var width = 200

function akcija() {
	interval1 = setInterval(interval, trajanjeIntervala)
	vreme_interval = setInterval(vreme1, 1000)
}

function faster(){
	trajanjeIntervala = 250
	console.log("Trajanje Intervala: " + trajanjeIntervala + "ms")
	clearInterval(interval1)
	clearInterval(vreme_interval)
	akcija()
	var li = document.createElement("LI")
	var li_text = document.createTextNode("Ubrzano >>")
	li.style.color = "cyan"
	li.appendChild(li_text)
	document.getElementById("konzola_ul").appendChild(li)
}

function slower(){
	trajanjeIntervala = 1000
	console.log("Trajanje Intervala: " + trajanjeIntervala + "ms")
	clearInterval(interval1)
	clearInterval(vreme_interval)
	akcija()
	var li = document.createElement("LI")
	var li_text = document.createTextNode("<< Usporeno")
	li.style.color = "pink"
	li.appendChild(li_text)
	document.getElementById("konzola_ul").appendChild(li)
}

function interval(){
	var rnd = Math.floor(Math.random()*101)
	console.log(rnd)
	if(rnd>49){
		num +=1
		document.getElementById("number").innerHTML = num
		width += 10
		document.getElementById("napredak_bar").style.width = width + "pt"
	} else {
		num -=1
		document.getElementById("number").innerHTML = num
		width -= 10
		document.getElementById("napredak_bar").style.width = width + "pt"
	}
	pokusaji += 1
	document.getElementById("pokusaji").innerHTML = "Broj intervala:  " + pokusaji
	if(num == 20){
		alert("Izgleda da si jak igrač..." + " Vreme: " + vreme + "s /" + " Intervali: " + pokusaji)
		reset()
		var li5 = document.createElement("LI")
		var li5_text = document.createTextNode("Sad si 'Jak igrač' !")
		li5.appendChild(li5_text)
		li5.style.color = "cyan"
		document.getElementById("konzola_ul").appendChild(li5)
	}
	if(num == -20){
		alert("Ti si slab igrač!" + " Vreme: " + vreme + "s /" + " Intervali: " + pokusaji)
		reset()
		var li6 = document.createElement("LI")
		var li6_text = document.createTextNode("Sad si 'Slab igrač' !")
		li6.appendChild(li6_text)
		li6.style.color = "red"
		document.getElementById("konzola_ul").appendChild(li6)
	}
	if(num < 0){
		document.getElementById("number").style.color = "red"
		document.getElementById("napredak_bar").style.backgroundColor = "red"
		//console.log("Broj je negativan!")
	}
	if(num > 0){
		document.getElementById("number").style.color = "cyan"
		document.getElementById("napredak_bar").style.backgroundColor = "cyan"
		//console.log("Broj je pozitivan!")
	} 
	if(num == 0) {
		document.getElementById("number").style.color = "#0f0"
		document.getElementById("napredak_bar").style.backgroundColor = "#0f0"
		//console.log("Broj je jednak nuli!")
	}
	var li1 = document.createElement("LI")
	var li1_text = document.createTextNode(rnd)
	li1.appendChild(li1_text)
	document.getElementById("konzola_ul").appendChild(li1)
	// Skroluj do dna uvek:
	var objDiv = document.getElementById("konzola");
	objDiv.scrollTop = objDiv.scrollHeight;
}

function progress_1_0() {
	if(document.getElementById("1/0_progress").checked){
		document.getElementById("progress_bar").style.display = "inline-block"
		console.log("Progress Bar: Uključen")
		var li = document.createElement("LI")
		var li_text = document.createTextNode("Progress bar: Uključen")
		li.style.color = "white"
		li.appendChild(li_text)
		document.getElementById("konzola_ul").appendChild(li)
	} else {
		document.getElementById("progress_bar").style.display = "none"
		console.log("Progress Bar: Isključen")
		var li1 = document.createElement("LI")
		var li1_text = document.createTextNode("Progress bar: Isključen")
		li1.style.color = "magenta"
		li1.appendChild(li1_text)
		document.getElementById("konzola_ul").appendChild(li1)
	}

}

function konzola_1_0() {
	if(document.getElementById("1/0_konzola").checked){
		document.getElementById("konzola").style.display = "block"
		console.log("Konzola: Uključena")
		var li = document.createElement("LI")
		var li_text = document.createTextNode("Konzola: Uključena")
		li.style.color = "grey"
		li.appendChild(li_text)
		document.getElementById("konzola_ul").appendChild(li)
	} else {
		document.getElementById("konzola").style.display = "none"
		console.log("Konzola: Isključena")
		var li1 = document.createElement("LI")
		var li1_text = document.createTextNode("Konzola: Isključena")
		li1.style.color = "brown"
		li1.appendChild(li1_text)
		document.getElementById("konzola_ul").appendChild(li1)
	}
}

function vreme1() {
	vreme += 1
	document.getElementById("vreme").innerHTML = "Trajanje: " + vreme + "s"
	console.log("Vreme: " + vreme + "s")
	// Upiši sekunde u konzolu na sajtu:
	var li2 = document.createElement("LI")
	var li2_text = document.createTextNode(vreme + ". sekunda")
	li2.style.color = "yellow"
	li2.appendChild(li2_text)
	document.getElementById("konzola_ul").appendChild(li2)	
}

function cls() {
	document.getElementById("konzola_ul").innerHTML = ""
}

function stop() {
	clearInterval(interval1)
	clearInterval(vreme_interval)
	document.getElementById("akcija").innerHTML = "Nastavi"
	document.getElementById("akcija").disabled = false
	document.getElementById("faster").disabled = true
	document.getElementById("slower").disabled = true
	// Loguj pauzu u konzolu na sajtu:
	var li3 = document.createElement("LI")
	var li3_text = document.createTextNode("Pauzirao si!")
	li3.style.color = "orange"
	li3.appendChild(li3_text)
	document.getElementById("konzola_ul").appendChild(li3)
}

function reset() {
	clearInterval(interval1)
	clearInterval(vreme_interval)
	document.getElementById("vreme").innerHTML = ""
	document.getElementById("pokusaji").innerHTML = ""
	document.getElementById("number").innerHTML = ":)"
	document.getElementById("akcija").disabled = false
	num = 0
	vreme = 0
	pokusaji = 0
	trajanjeIntervala = 500
	width = 200
	document.getElementById("number").style.color = "#0f0"
	document.getElementById("napredak_bar").style.width = width + "pt"
	document.getElementById("napredak_bar").style.backgroundColor = "#0f0"
	// Loguj reset() u konzolu na sajtu:
	var li3 = document.createElement("LI")
	var li3_text = document.createTextNode("Resetovao si!")
	li3.style.color = "red"
	li3.appendChild(li3_text)
	document.getElementById("konzola_ul").appendChild(li3)	
}