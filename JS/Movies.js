 
let result = confirm('Are you older than 18?');

let message = result ? 'Welcome to our website' :
    'You should have a parental guide with you';

alert(message);


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

while (i < 10) {
  text += "The number is " + i;
  i++;
}

