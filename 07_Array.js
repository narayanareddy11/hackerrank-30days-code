
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});


function arrayAction(A, N) {
    var temp = []
    var r = rl.question(N)
    for (var i = 0; i < r; i++) {
        temp.push(rl.question)
        temp.reverse();
    }
    console.log(temp)
}
arrayAction()




// function arrayAction(A, N) {
//     var temp = []
//     var r = window.prompt(N)
//     for (var i = 0; i < r; i++) {
//         temp.push(window.prompt(A))
//         temp.reverse();
//     }
//     console.log(temp)
// }
// arrayAction()



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });