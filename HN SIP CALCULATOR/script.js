// script.js
function calculateSIP() {
    const P = parseFloat(document.getElementById("monthly-investment").value); // Monthly Investment
    const r = parseFloat(document.getElementById("annual-rate").value) / 100 / 12; // Monthly Interest Rate
    const n = parseFloat(document.getElementById("investment-duration").value) * 12; // Total Number of Months

    // Future Value of SIP Formula
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    // Calculate the total invested amount
    const investedAmount = P * n;

    // Calculate the appreciation (profit)
    const appreciation = futureValue - investedAmount;

    // Display Result
    document.getElementById("future-value").innerText = futureValue.toFixed(2);
    document.getElementById("invested-amount").innerText = investedAmount.toFixed(2);
    document.getElementById("appreciation-amount").innerText = appreciation.toFixed(2);
}
