import { sign } from "@noble/ed25519";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// generate a key pair
const keyPair = Keypair.generate();
// extract private and public key 
const privateKey = keyPair.secretKey;
const publicKey = keyPair.publicKey.toBytes();

// message conversion
const msg = new TextEncoder().encode("Hello World 10Stack");
// create a signature
const signature = nacl.sign.detached(msg, privateKey);
const result = nacl.sign.detached.verify(msg, signature, publicKey);

console.log(result);
