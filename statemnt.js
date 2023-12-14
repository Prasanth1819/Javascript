// conditonal statment 
//  if
//  if else
//  else if

// if statement 
    let age = 21;
    if (age>=18) {
      console.log("you are eligible for voting")
    }

   let age1 = 18;
   country = "india";
   if (age1>=18||country=="india") {
    console.log("you are eligible for voting");
   }

   let age2 = 18;
   country = "india";
   if (age1>=18&&country=="india") {
    console.log("you are eligible for voting");
   }

// if else 

let age3 = 17;
country = "india";
if (age3>=18&&country=="india") {
 console.log("you are eligible for voting");
}
else(console.log("you are teeneger"))

// else if 

let age4 = 12;
if (age4>=18) {
    console.log("apply for driving liscence");  
}
else if (age4>=16) {
    console.log("you are a teeneger")
    
}
else(console.log("you are a kid"))

// ternery operator

  let age5 = 17;
 (age5>=24) ? console.log("you are adult") : console.log("you are minor");

//  swicth statement
  
let countries = "pK";
switch (countries) {
        case "india":
        countries ="sunday";
        break;
        case "china":
        countries ="Mon";
        break;
        case "uk":
        countries ="tue";
        break;
        case "europe":
        countries ="wed";
        break;
        case "usa":
        countries ="thur";
        break;
        case "pK":
        countries ="fri";
        break;
        case "SRI":
        countries ="sat";
        break;

    default:
        countries ="invalid countries";
        break;
}
console.log(countries);






  
 



 
