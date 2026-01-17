// Given a string as input and output a SHA-256 hash that starts with "00000"


const crypto = require("crypto");

function getperfixValue(prefix)
{
    let input = 0;
    while(true)
    {
        let inputStr = input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix))
        {
            return {input : inputStr, hash : hash};
        }
        input++;
    }
}

const result = getperfixValue("10010");
console.log(result);