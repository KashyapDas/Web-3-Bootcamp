import * as ed from "@noble/ed25519";

async function main()
{
    // generate the private key
    const privateKey = ed.utils.randomSecretKey();
    // create and convert the msg to Uint8Array
    const input = "Hello World";
    const msg = new TextEncoder().encode(input);
    // generate the public key
    const publicKey = await ed.getPublicKeyAsync(privateKey);
    // create signature of the msg using the private key
    const signature = await ed.signAsync(msg, privateKey);
    // verify signature
    const verifyMsg = await ed.verifyAsync(signature, msg, publicKey);
    console.log(verifyMsg) // True if verify become successfull
}


main()