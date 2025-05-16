let studentId = localStorage.getItem("studentId");
const walletPasskey = localStorage.getItem("walletPasskey");

const defaultStudents = {
  A101: { name: "Jimmy Donaldson", tuitionCAD: 20000, paid: 0, school: "WLU" },
  B202: { name: "Ryan Trahan", tuitionCAD: 15000, paid: 0, school: "UW" },
  C303: { name: "Roger Federer", tuitionCAD: 10000, paid: 0, school: "MAC" },
  D404: { name: "Serena Williams", tuitionCAD: 8000, paid: 0, school: "UWO" },
  E505: { name: "Max Verstappen", tuitionCAD: 12000, paid: 0, school: "UofT" },
  F606: { name: "Phil Kwok", tuitionCAD: 14000, paid: 0, school: "CAM" },
};

const universityMap = {
  WLU: "Wilfrid Laurier University",
  UW: "University of Waterloo",
  MAC: "McMaster University",
  UWO: "Western University",
  UofT: "University of Toronto",
  CAM: "Cambridge University",
};

function loadStudents() {
  const stored = localStorage.getItem("studentsData");
  return stored ? JSON.parse(stored) : { ...defaultStudents };
}

function saveStudents() {
  localStorage.setItem("studentsData", JSON.stringify(students));
}

let students = loadStudents();

function getStudentInfo(studentId) {
  return students[studentId] || null;
}

function updateStudentPayment(studentId, amountPaid) {
  if (students[studentId]) {
    students[studentId].paid += parseFloat(amountPaid);
    saveStudents();
  }
}

function getStudentBalance(studentId) {
  if (students[studentId]) {
    const student = students[studentId];
    return Math.max(student.tuitionCAD - student.paid, 0);
  }
  return null;
}

function renderStudentSummary(studentId, txHash = null, amount = null) {
  const history = document.getElementById("history");
  history.innerHTML = "";
  const student = students[studentId];
  const balance = getStudentBalance(studentId);
  const schoolName = universityMap[student.school];

  const li = document.createElement("li");
  li.innerHTML = `✅ Payment recorded.<br/>🏫 Deposited ${amount} CADT to ${schoolName}.<br/>📘 ${student.name}'s tuition balance: <strong>${balance} CADT</strong>`;
  history.appendChild(li);

  if (txHash) {
    const txPara = document.createElement("p");
    txPara.innerHTML = `🔗 <a href="https://stellar.expert/explorer/testnet/tx/${txHash}" target="_blank">View Transaction on Stellar Expert</a>`;
    history.appendChild(txPara);

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "⬇️ Download Payment Receipt Page";
    downloadBtn.onclick = () => {
      const blob = new Blob([document.documentElement.outerHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "payment_receipt.html";
      a.click();
    };
    history.appendChild(downloadBtn);
  }
}

function checkTuition() {
  const id = studentId;
  const result = document.getElementById("tuitionDueResult");
  const passkeyText = document.getElementById("walletPasskey");
  const storedSchool = localStorage.getItem("school");

  const student = getStudentInfo(id);
  if (student) {
    // Inject the correct school from login
    if (storedSchool) {
      student.school = storedSchool;
    }

    const balance = getStudentBalance(id);
    const schoolName = universityMap[student.school] || "Unknown University";

    result.innerHTML = `✅ Welcome ${student.name} from ${schoolName}<br/>Tuition Due: <strong>${balance} CADT</strong>`;
    passkeyText.innerHTML = `WALLET PASSKEY: <span class="tx">${localStorage.getItem("Passkey")}</span>`;
    document.getElementById("amount").value = balance;
  } else {
    result.textContent = `❌ Student not found.`;
    document.getElementById("amount").value = "";
  }
}

window.getStudentInfo = getStudentInfo;
window.updateStudentPayment = updateStudentPayment;
window.getStudentBalance = getStudentBalance;
window.renderStudentSummary = renderStudentSummary;
window.checkTuition = checkTuition;
