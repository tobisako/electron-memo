// stellar worker
//import StellarSdk from 'stellar-sdk'

export default {};

self.addEventListener('message', (event) => {
  // 
  // var transactionOption = {
  //   fee: StellarSdk.BASE_FEE,
  //   networkPassphrase: StellarSdk.Networks.TESTNET
  // };
  // var batchOption = {
  //   fee: (process.env.TX_FEE ? Number(process.env.TX_FEE) : StellarSdk.BASE_FEE),
  //   networkPassphrase: StellarSdk.Networks.TESTNET
  // };
  // var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

  //self.postMessage(`Got a message "${event.data}" from Host: so reply "World!"`);
  self.postMessage(`Got a message`);
});
