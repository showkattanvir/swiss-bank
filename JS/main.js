/* function doubleIt(num){
    const result = num*2;
    return result;
}
const first= doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}



document.getElementById('deposit-button').addEventListener('click', function () {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');// এখানে depositeAmount টা লাগতেছে যেহেতু  এটি আরো কয়েকটা জায়গায় use হয়েছে।

    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    updateTotalField('deposit-total', depositAmount)

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal + depositAmount;
    // depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue("withdraw-input")
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal; 
    */
    updateTotalField('withdraw-total', withdrawAmount)
    // বেলেন্স টোটাল এখানে লিখেছি
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal - withdrawAmount;
    // withdrawInput.value = '';
})