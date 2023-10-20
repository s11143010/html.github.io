const person1 = { name:"Alice"};
const person2 = { name:"Alice"};
const person3 = person1;
const person4 = Object.assign({}, person2);
console.log(person1 === person2); //false
console.log(person1 === person3); //true
console.log(person4 === person2); //false

const a = 1;
function fn() {
    const b = 2;
    console.log(a);
    console.log(b);
    }
fn();//1
     //2
console.log(a);//1
console.log(b);//undefined

let temp = 25;
console.log(temp > 30? "炎熱" : (temp > 20 ? "溫暖":"寒冷"));

const temp2 = 25;
switch(true){
    case temp2>30:
        console.log("炎熱");
        break;
    case temp2>20:
        console.log("溫暖");
        break;
    default:
        console.log("寒冷");
        break;
}
