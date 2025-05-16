StellarU CADT Tuition Payment Portal
Built for the Stellar Consensus Hackathon 2025 – “Web3 UX doesn’t have to suck” Track

The StellarU CADT Tuition Portal demonstrates how Web3 apps can offer a seamless, intuitive, Web2-style experience while leveraging Stellar's smart contracts, passkeys, and decentralized asset transfers. Designed for international students, this app allows tuition payments using CADT (CAD stablecoin) via a frictionless login and payment process.

---

The Narrative “Why”

Problem:
International tuition payments are slow, expensive, and opaque — traditional payment rails incur high FX fees, long delays, and poor traceability.

Target Users:
- International students paying tuition
- Universities receiving on-chain stablecoin payments
- Hackathon jurors evaluating smart wallet UX

Solution:
- Web2-style onboarding (Student ID + school dropdown)
- Instant Stellar wallet passkey creation (fake for UX simulation)
- One-click CADT payments on Stellar Testnet
- On-chain transactions viewable on Stellar Expert
- Web receipt downloads, balance tracking, and real-time status updates

Why Stellar:
- Smart Wallets & Passkeys (simplified auth with no browser extensions)
- Stablecoins & DEX support (for CADT/USDC handling)
- Launchtube integration (automates fee-sponsorship & transaction submission)
- Stellar tooling enables Web2-like UX

---

🛠️ Features

| Feature | Description |
|--------|-------------|
| Web2 Login | Login via student ID + university selection |
| Fake Passkey | Automatically generated 56-char wallet passkey |
| CADT Payments | Send stablecoin from Issuer to Distributor |
| Balance Tracker | Track tuition paid + amount remaining |
| Receipt Download | Download on-chain receipt (HTML version) |
| Dark / Light Mode | Toggleable Web2-style theme switch |
| Smart Wallet Logic | Students use same issuer/distributor wallets but simulate Web3 identity via passkeys |

---

 Test Users

| Student ID | Name              | School                    | Tuition |
|------------|-------------------|---------------------------|---------|
| A101       | Jimmy Donaldson   | Wilfrid Laurier University| 20000   |
| B202       | Ryan Trahan       | University of Waterloo    | 15000   |
| C303       | Roger Federer     | McMaster University       | 10000   |
| D404       | Serena Williams   | Western University        | 8000    |
| E505       | Max Verstappen    | University of Toronto     | 12000   |
| F606       | Phil Kwok         | Cambridge University      | 14000   |

---

⚙️ Technologies Used

- HTML, CSS, JavaScript
- Stellar JS SDK
- Stellar Testnet
- Stellar Expert for transaction display
- Launchtube-ready (future deployment)
- LocalStorage for session state

---

📁 File Structure

📦 public/
├── index.html            # Main portal interface
├── login.html            # Onboarding via student ID + school
├── style.css             # Theme + layout styling
├── students.js           # Tuition mapping + balance logic
├── send-cadt.js          # Stellar payment logic (CADT stablecoin)
├── tx-history.js         # Transaction log + receipt export

---

📜 How It Works (UX Simulation)

1. User logs in with Student ID + school
2. Fake Stellar passkey is generated and saved in session
3. Portal displays balance and allows CADT payment
4. Transaction submitted on Stellar Testnet (via SDK)
5. Result links to Stellar Expert + downloadable receipt

---

🔐 Security & Considerations

- Passkeys are simulated (no cryptographic auth)
- Static issuer/distributor for all transactions (for demo only)
- No sensitive data or real funds involved

---

📘 Documentation Links

- https://developers.stellar.org/docs/build/apps/smart-wallets#passkey-kit-
- https://github.com/stellar/launchtube
- https://github.com/kalepail/passkey-kit
- https://github.com/stellar/js-stellar-sdk

---

🚀 Future Improvements

- Add real smart wallet auth with passkey-kit
- Real issuer/distributor account abstraction
- Admin dashboard for schools to verify transactions
- Email receipts + payment notifications
- Onboarding incentives via token drops

---