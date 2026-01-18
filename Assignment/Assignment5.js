// Convert the string to the binary

function convertDecimalToBinary(decimalValue) {
    let binaryArray = [];
  for (let i = 0; i < decimalValue.length; i++) {
    let elem = decimalValue[i];
    let binary = "";
    if(elem%2 ==0 ) //even number
    {
        while(Math.floor(elem/2) != 0)
        {
            binary = binary + (elem%2).toString();
            elem = Math.floor(elem/2);
        }
    }
    else // odd number
    {   
        while(Math.floor(elem/2) != 1)
        {
            binary = binary + (elem%2).toString();
            elem = Math.floor(elem/2);       
        }
    }
    binaryArray.push(binary);
  }
  return binaryArray;
}

const input = "Kashyap123@";
const decimalValue = new TextEncoder().encode(input);
const binaryConversion = convertDecimalToBinary(decimalValue);

console.log("String verison : ", input);
console.log("Decimal version : ",decimalValue);
console.log("Binary Version : ",binaryConversion);

