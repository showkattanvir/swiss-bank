/* function doubleIt(num){
    const result = num*2;
    return result;
}
const first= doubleIt(5);
const second = doubleIt(7); */

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}



document.getElementById('deposit-button').addEventListener('click', function () {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue();

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal + depositAmount;
    // depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;
    // বেলেন্স টোটাল এখানে লিখেছি
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal - withdrawAmount;
    withdrawInput.value = '';
})