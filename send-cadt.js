async function pay() {
  const amount = document.getElementById('amount').value;
  const status = document.getElementById('status');
  const asset = new StellarSdk.Asset('CADT', issuer.publicKey());
  const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

  status.textContent = '⌛ Processing payment...';

  try {
    const account = await server.loadAccount(issuer.publicKey());
    const fee = await server.fetchBaseFee();

    const tx = new StellarSdk.TransactionBuilder(account, {
      fee,
      networkPassphrase: StellarSdk.Networks.TESTNET
    })
      .addOperation(StellarSdk.Operation.payment({
        destination: distributorPublicKey,
        asset,
        amount: amount.toString()
      }))
      .setTimeout(30)
      .build();

    tx.sign(issuer);
    const result = await server.submitTransaction(tx);

    const txHash = result.hash;
    const txLink = `https://stellar.expert/explorer/testnet/tx/${txHash}`;
    status.innerHTML = `✅ Payment successful! Tx Hash: <span class="tx">${txHash}</span>`;

    addToHistory(amount, txLink);
    updateStudentPayment(studentId, amount);
    renderStudentSummary(studentId, txHash, amount);
  } catch (err) {
    console.error(err);
    status.textContent = '❌ Payment failed.';
  }
}

const issuer = StellarSdk.Keypair.fromSecret('SDRGBV34QZTIBDVBZBUOMBIZMQ2TGVRD2FVDLXQ5E3IV5FSP5PJV4DPZ');
const distributorPublicKey = 'GD44DM6ID5FJSR4QFR7YRCDPYP4USFZMBR23FPVPDEWLF3U3TQLUEE7I';
