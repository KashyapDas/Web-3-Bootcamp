const base58 = require("bs58").default;

function encoderConversion(byteArray)
{
    return base58.encode(byteArray);
}

function decoderConversion(byteArray)
{
    return base58.decode(byteArray);
}

const text = "hello";
const res = new TextEncoder().encode(text);
const encoder = encoderConversion(res);
const decoder = decoderConversion(encoder);
const decodeString = new TextDecoder().decode(decoder);
console.log(encoder);
console.log(decoder);
console.log(decodeString);