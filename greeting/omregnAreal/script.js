function convertSquareMToSquareFt(squareMeters) {
    const conversionFactor = 10.7639;
    return squareMeters * conversionFactor;
  }

let squareFeet = convertSquareMToSquareFt(10);
console.log(squareFeet);
