// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  
  function changeColors(i) {
    if (i % 5 === 0) {
        $("body").css({ backgroundColor: "orange" });
    } else {
        $("body").css({ backgroundColor: "pink" });
    }
     return i;
  }

  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    m = isOdd(m);
    m = changeColors(m);
    $("#txt").html(h + ":" + m + ":" + s + ampm);
    setTimeout(startTime, 500);
  }
  

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }
  function isOdd(i) {
    if (i % 2 === 0) {
        $("#txt").css({ color: "red" });
    } else {
        $("#txt").css({ color: "blue"});
    }
     return i;
  }

var counter = 0; ///setting the variable counter to 0 initially 

  function changeFontSize() {
    var fontSizes = ["40px", "14px", "16px", "20px"]; // This is the array containing the different font sizes stored in a variable called font sizes 

    $("#txt").css("fontSize", fontSizes[counter]); //take the text from the clock and change the css by selecting the Font size and making the variable actually the font size variable and counter function thats below

    counter = counter + 1; //the counter variable will be the if statement plus one 	 
    if (counter > 3) { // if the counter is more than three start over in the array to zero  so it doesnt run on forever with variables in the array that dont exist 
      counter = 0;
    }
    
    setTimeout(changeFontSize, 5000); // this is just telling how many times to run and how long
  }

  startTime();
  changeFontSize(); //calling the funtion to start after body load
  
      

  
});
