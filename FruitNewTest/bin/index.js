#!/usr/bin/env node


// const smoothie = fruits.map(v => getFruit(v));

// concurrently
// const smoothie = fruits.map(async v => {
//   const emoji = await getFruit(v);
//   log(emoji);
//   return emoji;
// });
const fruits = ['apple', 'banana', 'tomato'];

const getFruit = async(name) => {
  const fruits = {
    pineapple: 'pine',
    banana: 'banana',
    apple: 'app',
    tomato: 'tom',
    peach: 'peach',
  }
  return fruits[name]
}

const smoothie = fruits.map(v => getFruit(v));

const fruitloop = async() => {
  for await (const emoji of smoothie) {
    console.log(emoji);
  }
}

fruitloop();
// nonconcurrent
// const fruitloop = async() => {
//   for (const f in fruits) {
//     const emoji = await getFruit(f);
//     log(emoji);
//   }
// }

// // concurrent for loop
// getFruit('peach').then(console.log);
// const makeSmoothie = async() => {
//   try {
//     const a = getFruit('pineapple');
//     const b = getFruit('apple');

//     return await Promise.all([a,b]);

//   } catch(err) {
//     console.log(err);
//   }
// }

// concurrently loop