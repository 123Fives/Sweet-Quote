	$(document).ready(function(){
    
		var quoteSource=[
		{
			quote: "A shit in a suit still stinks",
			name:"Unknown"
	    },
	    {
	    	quote:"When a person tells you that you hurt them, you don’t get to decide that you didn’t.",
	    	name:"Louis C.K"
	    },
	    {
	    	quote:"I'm sorry, Wilson! Wilson, I'm sorry!",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Let's kick some ice.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"You sack of wine!",
	    	name:"Gandhi"
	    },
	    {
	    	quote:"A dingo ate my baby!",
	    	name:"Aym Rand"
	    },
	    {
	    	quote:"I'm just a girl, standing in front of a boy, asking him to love her.",
	    	name:"Dr. Martin Luther King Jr."
	    },
	    {
	    	quote:"For Narnia!",
	    	name:"Orson Welles"
	    },
	    {
	    	quote:"I don't like sand. It's coarse and rough and irritating and it gets everywhere.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"This is your wakeup call I AM AN F... B... I AGENT!",
	    	name:"Malala Yousafzai"
	    },
	    {
	    	quote:"Get to the choppa.",
	    	name:"Eleanor Roosevelt"
	    },
	    {
	    	quote:"Everybody knows, when you make an assumption, you make an ass out of you and umption.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"We're gonna need a bigger boat.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"If you're a bird, I'm a bird.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"It's a pressure valve. It won't open unless there's tremendous pressure.",
	    	name:"Winston Churchill"
	    },
	    {
	    	quote:"It's clobbering time!",
	    	name:"Oprah Winfrey"
	    },
	    {
	    	quote:"It's not a tumor!",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"We're going to live on! We're going to survive! Today we celebrate our Independence Day.",
	    	name:"Albert Einstein"
	    },
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

