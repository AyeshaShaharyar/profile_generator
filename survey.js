const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable  ', (answer) => {
  rl.question('What\'s an activity you like doing?  ', (answer1) => {
    rl.question('What do you listen to while doing that?  ', (answer2) =>{
      rl.question('What\'s your favourite thing to eat?  ', (answer3) => {
        rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ',(answer4) => {
          console.log('Thank you for your answers');   
          console.log(`${answer} loves ${answer1} while listening to ${answer2} and devours to eat ${answer3} and has a superpower of ${answer4}.`);  
          rl.close();
    });
   });
  });
});
});



  
