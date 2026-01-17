// Give an hash function that start wtih "00000" whose input str always start with "10Stack"

const crypto = require("crypto");

function getPrefijxValue(prefix)
{
    let input = 0;
    while(true)
    {
        let inputStr = "10Stack" + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix))
        {
            return {input : inputStr, hash : hash};
        }
        input++;
    }
}

let result = getPrefijxValue("00000");
console.log(`${result.input}`);
console.log(`${result.hash}`);