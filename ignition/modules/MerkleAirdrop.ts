import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const token = "0xF9A952add4A2b2c61ed7ee7571Dc2B5DbfCF8376";
  const merkleRoot = "0xec56ecee459965308b0e324a8759d525e190465c0279ddff737686e77ef93523";
  const bayc = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const merkleAirdrop = m.contract("MerkleAirdrop", [token, bayc, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;