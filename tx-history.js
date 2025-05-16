function addToHistory(amount, txLink) {
  const history = document.getElementById('history');

  const li = document.createElement("li");
  li.innerHTML = `💳 <strong>${amount}.0000000 CADT</strong><br/>🕓 ${new Date().toLocaleString()}`;
  history.prepend(li);

  const txPara = document.createElement("p");
  txPara.innerHTML = `🔗 <a href="${txLink}" target="_blank">View on Stellar Expert</a>`;
  history.prepend(txPara);
}
