// const n = 5;

// var tree = '';

// for(var i=1; i<=n; i++){
//     var star = '';

//     for(var j=1; j<=n-i; j++){
//         star += ' '; 
//     }

//     for(var k=1; k<=2*i-1; k++){
//         star += '*';
//     }

//     tree += star + '\n';
// }

// console.log(tree);


const n = 5;
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';

  for(let j=1; j<=n-i; j++){
    star += ' ';
  }

  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  
  tree += star + '\n';
}

console.log(tree);


// 1   1   4
// 2   3   3
// 3   5   2
// 4   7   1
// 5   9   0

