// Convert string to hexadecimal

function stringToHex(decimalArray)
{
    let hexString = "";
    for(let i=0; i<decimalArray.length; i++)
    {
        hexString += decimalArray[i].toString(16).padStart(2,'0');
    }
    return hexString;
}


const input = "hello";
const decimalArray = new TextEncoder().encode(input);
const hexConversion = stringToHex(decimalArray);
console.log(hexConversion);