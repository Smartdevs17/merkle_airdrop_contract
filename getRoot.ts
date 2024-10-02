import { generateMerkleRoot } from "./generateMerkleTee";

async function getRoot() {
    const root = await generateMerkleRoot();
    console.log("Merkle Root:", root);
}

getRoot();