$(".transfer").click(function(){
  var name=prompt("Enter receiver's name for confirmation");
  var amt=prompt("Enter amount to be transfered");
  var present = document.getElementById(name).innerHTML;
  document.getElementById(name).innerHTML = parseInt(amt)+parseInt(present);


  var newrec = "Rs. "+(parseInt(amt))+' was transfered to '+(name)

  var record = [];
  record.push(newrec)

  for(var i=0; i<record.length; i++){
    var div = document.getElementById('history');
    div.innerHTML = record[i] + '<br><hr style="color: white">' + div.innerHTML
  }
});