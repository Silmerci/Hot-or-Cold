
$(document).ready(function(event){
	// event.preventDefault();
	// event.stopPropagation();	

	$("h1").fadeIn(2000);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	function newNumber() {
  		answer = Math.floor(Math.random() * 100) + 1;
  		// answer = 25;
  	}

  	function newGame() {
  		newNumber();
	  	count = 0;
	  	dif = null;
	  	guess = null;

  		$("#feedback").text("Make your Guess");
		$("#hint").text("");
		$("#count").text(0);
		$("#guessList").empty();

  	}

  	function feedback(a) {
		if(a >= 50) {
			$("#feedback").text("Ice Cold");
		} else if ((50 > a) && (a >= 30)) {
			$("#feedback").text("Cold");
		} else if ((30 > a) && (a >= 20)) {
			$("#feedback").text("Warm");
		} else if ((20 > a) && (a >= 10)) {
			$("#feedback").text("Hot");
		} else if ((10 > a) && (a > 0)) {
			$("#feedback").text("Very Hot");
		} else if (a === 0) {
			$("#feedback").text("Correct!  Congratulations!");
			$("#hint").text("=)");
		}
  	}

  	function hint(a, i, c) {

  		var difI = Math.abs(a-i);
  		var difC = Math.abs(a-c);

  		if(difC > difI) {
  			$("#hint").text("Getting Hotter...");
  		} else if (difI > difC) {
  			$("#hint").text("Getting Colder...");
  		} else if (difI === difC){
  			$("#hint").text("Same heat");  			
  		} 

  	}


  	newGame();


  	$("#guessButton").on("click",
  		function(event) {
  			event.stopPropagation();
  			event.preventDefault();
    		
  			var guess = $("#userGuess").val();
	  		var initDif = dif;    		

    		dif = Math.abs(answer - guess);
  			

  			if ((101 > guess >= 1) && (guess % 1 === 0)) {
	   			// feedback(dif);
	  			hint(answer, initDif, dif);
	  			feedback(dif);
	  			count++;
				$("#count").text(count);
				$("#guessList").append('<li>'+guess+'</li>');
				$("#userGuess").val("");
  			} else {
  				alert("Please enter a whole number from 1 to 100");
  			}
  		
  		
  		}
  	);  	

	$(".new").on("click", newGame);

  	// Use enter key

  	$(document).on("keydown",
  		function(e) {
  			if(e.which === 13) {
  				event.stopPropagation();
  				event.preventDefault();
  				$("#guessButton").click();
  			}
  		}
  	);


});


