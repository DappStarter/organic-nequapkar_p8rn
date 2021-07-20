require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note ridge purchase install argue bracket season'; 
let testAccounts = [
"0xcc1393734095cae176acce97949dd1d02bd525ade74ea03897aa70bc7dab8346",
"0x1ebd41dd8c24bfdd1623a832372f96c308e0c038352ea617129f4eb168850169",
"0xdb358b52495ecdb76d06c8fcef1e20d71b1eaf32a9b56a613b41435a95972d6f",
"0xcba1f1e89f12d08c58e0340b5744c81240cf191c4d34d9646ca487a247da711a",
"0x415c3ee592f180ff05cd8106160ec7db00d601b89ad385f16eaf990de8209136",
"0x74f102e9e5e5c663eae1b98be7b6c25c0c9f1c85ff9c26068454cf921f9fa479",
"0x87ca6938dbf7014f778ed97b79ae167c0489e32eebbbf7321b6f3aa80c1265ef",
"0x37e7c535120adbfceadef70c7dada2cf02289d57d4b88705afa3665023199359",
"0x6e3d3a51638a7fe78ec20a6d37121c5b24fc0af254bd041600e5ae1195d662eb",
"0xa914ca5d9f5f891921f5c30ba9e09149fbb8c3e791fec3d5b8f500e2902e8620"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


