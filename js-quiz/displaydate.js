
//////////////////////////////////////////////////
// console.log(new Date.getSeconds);

displayDate = () => {
    var today = new Date();
  
    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
  
    console.log(`${hour}:${minute}`, seconds);
  };
  
  stopDisplayDate = () => {
    clearInterval(start);
    console.log("stop");
  };
  
  var start = setInterval(displayDate, 1000);
  
  // var stop = setInterval(clearInterval(displayDate));
  var stop2 = setTimeout(stopDisplayDate, 5000);
  