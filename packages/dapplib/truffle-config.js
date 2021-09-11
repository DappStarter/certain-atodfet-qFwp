require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth magic mistake good creek fringe ghost'; 
let testAccounts = [
"0x09b417afdcd8968b148405870d4cc6994de111464947c773546a1c0c93ee8764",
"0xc1a447b539114b0559444f91b45a32e214a591df2ae548ce2eb40620d5ee5ee4",
"0x2c121394945ab6ac4bd0fe3dab4c3111b654d26c30d33b719741c92d95c2e975",
"0x7f2d290291b5c0257aea0bd968c86227db376178088bfcd8a26eff173089accd",
"0x3a58c838ce6e171602df4343ba71ff240222dfaaf9b90c452b561e94ddd3d8e9",
"0xf46458ab9e82d887064775f0ca57e5dc46b546dec35fab4d171bcec62fa85600",
"0x078d9ab0c1bf25a926bf19fa6d8834c6d6d3ce2a2c5818ca18edf366fdb60a77",
"0xff88d4829f70fd989cac27d2540cc80cdafefe9440a6c893fc886dc86376e324",
"0x3d40e0e68d2c9a10b301c2db872532bc35a65b6a3d746f63c8c0bfb20b095068",
"0x5958e9df91b127a136daac558f1a876b42325587a4061e2cb24f3eb09c72111f"
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
            gas: 8000000,
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


