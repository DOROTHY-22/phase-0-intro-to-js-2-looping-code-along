function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}/*

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example 
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);*/
/*for (age=30;age<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
const gifts = ["teddy bear","drone","doll"];
function wrapGifts(gifts){
 for (i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
     debugger;
    
 }
 return gifts;
}
wrapGifts(gifts);
const names=["Charlie","Samip","Ali"];
function writeCards(names,eventName){
    for (i=0; i<names.length; i++){
        console.log(`Thankyou, ${names[i]}, for the wonderful birthday gift!`);

    }
    return names;
}
writeCards(names);


function writeCards(name,eventName){
    const thankYouMessages =[];
    for(let i=0;i<name.length;i++){
        const message = `Thankyou, ${name[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(message); //adds message to the array 
    }
    return thankYouMessages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday";
const result = writeCards(names, eventName);
console.log(result); */

 function countDown(number) {
    let currentNumber = number;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  
  countDown(10); 







