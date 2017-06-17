var parent = document.getElementsByClassName('parent')[0];
var replay = document.querySelector("#replay");
var div = document.getElementsByTagName("div");
var timer = document.querySelector("#timer");
var setTimerBtn = document.querySelector("#setTimer");
var startbtn = document.querySelector("#start");
var wins = document.querySelector("#winCounter");
var timerId;
var seconds;
var counter = 0;
var boolean = false;
var arr = [0,1,2,3,4,5,6,7,8];
var player1Wins = 0;
var player2Wins = 0;

var updateTime = function() {
	if (seconds >= 1) {
		seconds = seconds -= 1;
		timer.textContent = seconds;	
	}
	if (seconds == 0) {
		boolean = true;
	}
}

setTimerBtn.addEventListener("click", function() {
	seconds = prompt("Set time in seconds");
	timer.textContent = seconds;
});

startbtn.addEventListener("click", function() {
	clearInterval(timerId);
	timerId = setInterval(updateTime, 1000);	
});

var restart = function() {
	clearInterval(timerId);
	if (seconds != 0) {
		timerId = setInterval(updateTime, 1000);
	}
	boolean = false;
	for (var i = 0; i < div.length; i++) {
		div[i].textContent = "";
	}
	counter = 0;
	arr = [0,1,2,3,4,5,6,7,8];
	}

replay.addEventListener("click", restart);

var winCounter = function(x) {
	 if (x == "X") {
		player1Wins++;
	} else {
		player2Wins++;
	}
	wins.textContent = player1Wins + " : " + player2Wins;
}

var x, y, z;
var checkEquality = function(x, y, z) {
	if (x == y && y == z && x == z) {
		console.log("player with " + x + " symbol is a winner");
		winCounter(x);
		setTimeout(restart, 1000);
		return true;
	}
}

var winnerRule = function() {
	if (checkEquality(arr[0], arr[1], arr[2])) {
	} else if (checkEquality(arr[0], arr[3], arr[6])) {
	} else if (checkEquality(arr[6], arr[7], arr[8])) {
	} else if (checkEquality(arr[2], arr[5], arr[8])) {
	} else if (checkEquality(arr[2], arr[4], arr[6])) {
	} else if (checkEquality(arr[0], arr[4], arr[8])) {
	} else if (checkEquality(arr[3], arr[4], arr[5])) {
	} else if (checkEquality(arr[1], arr[4], arr[7])) {
	} else if (counter >= 9) {
		console.log("Draw");
		setTimeout(restart, 1000);
	}
}

var switchSymbol = function(event) {
	if (event.target.textContent != "O" && event.target.textContent != "X" && boolean == false) {
		var cell = event.target.getAttribute("data-cell");
  	cell = cell-1;
		if (counter % 2 == 0) {
			event.target.textContent = "X";
			arr[cell] = "X";
		} else {
			event.target.textContent = "O";
			arr[cell] = "O";
		}
		counter++; 
		winnerRule();
	}
}

parent.addEventListener("click", switchSymbol);















