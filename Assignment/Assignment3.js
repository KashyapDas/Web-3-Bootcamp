// Provide the nonce for the corresponding hash function that start with "00000" and input string start alaways with "10stack"

const crypto = require("crypto");

function getPrefixHash(prefix)
{
    let input = 0;
    while(true)
    {
        let inputStr = "10Stack" + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix))
        {
            return input.toString();
        }
        input++;
    }
}

let result = getPrefixHash("00000");
console.log(`${result}`);