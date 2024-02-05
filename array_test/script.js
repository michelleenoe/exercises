/* const people = ["Harry", "Ron", "Hermoine"];

let result; 
result = people.push("Draco");
console.log(result);



console.log(people); // = 4 
console.log(result);

result = people.pop(); // = Array(4) [ "Harry", "Ron", "Hermoine", "Draco" 
console.log(result);

result = people.push("Neville");
console.log(result);

result = people.slice(0,3);
console.log(result); // = fjerner den sidste 

result = people.splice(1,0,"Cho");
console.log(result); // Array[]

people[1] = "Ginny";
console.log(result); //Array []

result = people.push("Fred", "George");
console.log(result); //7?

result = people.indexOf("Fred");
console.log(result); // 7, 5 

result = people.splice(result,1);
console.log(result); //Array ["Fred"]


*/ 

const str = "3456y"

console.log("split", str.splot(""));
console.log("from", Array.from (str));
console.log("spread", [...str]);