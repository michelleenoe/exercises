// const firstName = "Peter";
// const catName = "Mandu";

// console.log(`My name is ${firstName}. \nAnd i have a cat called ${catName}`);

// const name = "Peter";
// const len = name.length;
// const letter = name [0];
// console.log(`The first letter of ${name} is ${letter}`);

// console.log(`${name} is ${len} characters long`);

// const name = "Albus Percival Wulfric Brian Dumbledore";

// console.log(name.indexOf ("D"));
// console.log(name.indexOf (" "));


// const fullName = "Albus Percival Wulfric Brian Dumbledore";
// console.log(`_${fullName.substring(29)}_`);

// const fullName = "Albus Percival Wulfric Brian Dumbledore";
// const firstName = fullName.substring(15,22)
// console.log(firstName + "_");


// const fullName = "Albus Percival Wulfric Brian Dumbledore";
// const firstName = fullName.substring(15,23)
// console.log(firstName + "_");

// const fullName = "Albus Percival Wulfric Brian Dumbledore";
// const firstName = fullName.substring(25,28)
// console.log(firstName + "_");

// const firstName = fullName.substring(2,5)
// console.log(firstName + "_");


// function formatName(name) {
  
//         return name.substring(3,4, 2).toLowerCase() + 
//                name.charAt(2,2,3,4).toUpperCase() + 
//                name.substring(5,9,2).toLowerCase() +
//                name.split(testNames);
          
//     }


// const testNames = ["mIcheLLe", "micheLLE", "michelLE", "MicheLle", "MicheLlE"];
// testNames.forEach(name => {
//     console.log(formatName(name));
// });


// const name1 = "Peter Heronimous Lind";
// splitName(name1);


// const name2 = "Ron Weasley";
// splitName(name2);


// const name3 = "Albus Percival Wulfric Brian Dumbledore";
// splitName(name3);


// function splitName(name) {  
  
//     const firstName = name.substring (0, name1.indexOf );
  
//     const last = name.lastIndexOf('last');
//     const middle = name.indexOf('middle');

//     // const firstName = name.substring(0 + first );

//     const middelName = name.substring(0, middle);

//     const lastName = name.substring(last + 1);

//     console.log(`First Name: ${firstName}, ${middelName}, Last Name: ${lastName}`);
// }



const aName = "Peter Heronimous Lind";

const firstName=aName.substring(0,aName.indexOf(" "));

//substring tager 1 paramater - og den anden 2 parameter - og finder første indtil mellemrummet

console.log("Firstname", firstName +"_");


const middelName=aName.substring(aName.indexOf(" "), aName.lastIndexOf(" "));
console.log("middelName", "_" + middelName + "_")


const lastName = aName.substring(aName.lastIndexOf(" ") + 1);
console.log("lastName", "_" + lastName + "_");

console.log(aName.split(" "));

//  const firstNameSplit = aName.split(" ") [0];

console.log("firstNameSplit", firstNameSplit);


const nameArr = aName.split(" ");
const firstNameSplit = nameArr[0];
const lastNameSplit = nameArr[nameArr.lenght -1];
console.log("nameArr", nameArr);
console.log("firstNameSplit", firstNameSplit);
console.log("lastNameSplit", lastNameSplit);
