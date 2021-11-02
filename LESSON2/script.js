 let num = 50;

 if(num < 49) {
     console.log("False.")
 }
 else if(num > 100) {
     console.log("Too much!")
 }
 else {
     console.log("True!")
 };

 (num == 50) ? console.log('True!') : console.log("False.");

switch(num) {
    case num < 49 :
        console.log("False.");
        break;
    case num > 100:
        console.log("Too much!");
        break;
    case num > 80:
        console.log("Too much anyway");
        break;
    case 50:
        console.log("True!");
        break;
    default:
        console.log("Something is broken");
        break;
 }