function Clock() {

	var startDate;
	var stopDate;
	var isLaunched = false;
	var lapse; //variable for storing the time
	var myCallBack;
	var execution; //this variable is needed for the setInterval() function that is going to call the callback method
	
	this.start = function(){
		//checks if stop method have been called before
		if (isLaunched == true){
			alert("Please stop the chronometer first.");
		}
		
		//if not and if it's the first call, the method gets its call time stored in startDate
		if (typeof startDate == 'undefined' && isLaunched == false)
		{
			startDate = new Date().getTime();
			isLaunched = true;
			console.log("clock was started");
		}

		//if it's not the the first call
		if (typeof startDate != 'undefined' && isLaunched == false)
		{
			startDate = new Date().getTime() -lapse;
			isLaunched = true;
			console.log("clock was started");
		}
		execution = setInterval(myCallBack,1000); //every second myCallBack method is called 
	};
		
	this.stop = function(){
		//checks if start() method have been called before
		if (isLaunched == false){
			alert("Please start the chronometer first.");
		}
		
		//if not or if it's the first call, the method gets its call time 
		if (typeof stopDate == 'undefined' ||  isLaunched == true)
		{
			isLaunched = false;
			stopDate = new Date().getTime();
			console.log("clock was stopped");
		}
		clearTimeout(execution);
	};

	//gets the duration between calling this method and the start() method
	this.elapsed = function(){
		if (isLaunched){
			var date = new Date();
			var timeSinceStart = date.getTime();
		
			lapse = timeSinceStart - startDate;
		}
		return lapse;
	};

	//reinitializes all variables
	this.destroy = function(){
		startDate = 0;
		stopDate = 0;
		isLaunched = false;
		lapse = 0;

		console.log("clock was reinitialized");
 	};

	//parses lapse variable from milliseconds to hh:mm:ss String format and returns it 
	this.getTimeString = function(){
		var timeString = lapse;

		var s = parseInt( (timeString / 1000) % 60 );
		var m = parseInt((timeString / (1000*60)) % 60);
		var h = parseInt((timeString / (1000*60*60)) % 24);
		
		if (s<10){
			s = "0"+s;
		}
		if (m<10){
		m = "0"+m;
		}
		if (h<10){
			h = "0"+h;
		}

		return h+":"+m+":"+s;
	};

	//parses lapse variable from milliseconds to a TimeObject that I've created further down
	this.getTimeObject = function(){
		var timeObject = new TimeObject(lapse);

		return timeObject;
	};

	//this is actually the most important method because it's the only method that the user really interacts with
	this.subscribe = function(callback) {
        	myCallBack = callback; 
    	};
    
}


//simple time object
var TimeObject = function(milliseconds){
	var hours = parseInt((milliseconds / (1000*60*60)) % 24);
	var minutes = parseInt((milliseconds / (1000*60)) % 60);
	var seconds = parseInt( (milliseconds / 1000) % 60 );

	this.getTimeString = function(){
		return hours+":"+minutes+":"+seconds;
	};
}

