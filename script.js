document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Input values
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value);
    const inflation = parseFloat(document.getElementById('inflation').value) / 100;

    const months = years * 12;

    // Monthly payment formula
    const monthlyPayment = (amount * interest) / (1 - Math.pow(1 + interest, -months));

    const totalPayment = monthlyPayment * months;

    // Real cost after inflation
    // Using approximate formula: total / (1 + inflation)^years
    const realCost = totalPayment / Math.pow(1 + inflation, years);

    // Display results
    document.getElementById('monthlyPayment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `Total Payment: $${totalPayment.toFixed(2)}`;
    document.getElementById('realCost').innerText = `Real Cost after Inflation: $${realCost.toFixed(2)}`;
});