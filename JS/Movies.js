 
var ask1 = prompt('Are you older than 18?');

 while(ask1 !== 'yes'){
   ask1 = prompt('Are you older than 18?');

 }
var prefered = prompt('please enter your favourite movie genre?');
console.log('your favourite movie genre is ' + prefered);


var gender = prompt('Are you male or female?')

if(gender =='male')
{
  var image = '<img src="https://images-na.ssl-images-amazon.com/images/I/610wYoNOmsL._AC_SX466_.jpg" alt= "the rock"/>';
  
  document.write(image);
}
else if(gender =='female') 
{ 
  var link = '<img src="https://i.pinimg.com/originals/31/35/9c/31359ccfe0d18fd59ff906e0e3cc3caf.png"  alt= "Hanah Montana"/>';;
  document.write(link);
}


  function askUser(Type){
   var ask = prompt('Do you like ' + Type + '?');
   return ask;
 }
 askUser('Movies or TV Shows');




