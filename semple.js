// // const obj = {
// //     name: "bobby",
// //     experience: 100,
// //     wizard: false
// // }

// // const player = obj.name;
// // const experience = obj.experience;
// // let wizard = obj.wizard;

// // const { player, experience } = obj;

// // ===============
// // const name = 'John Snow';

// // const obj = {
// //     [name]: "hello",
// //     [1 + 2]: 'hihi'
// // }

// // const name = "sally";
// // const age = 34;
// // const pet = 'horse';

// // const bestGreeting = `Hello ${name}, you look ${age - 10}. What a lovely ${pet}.`;
// function greet(name = '', age = 30, pet = "cat") {
//     `Hello ${name}, you look ${age - 10}. What a lovely ${pet}.`;
// }

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

// Compose
const compose = (f, g) => (a) => f(g(a));
const increment = (num) => num + 1;

compose(increment, increment)(5);
// returns 7  increment(increment(5));

// functional purity and avoiding side effects

