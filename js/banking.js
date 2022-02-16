
//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {

    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmount = parseFloat(depositeInput.value);
    console.log(newDepositeAmount);

    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeAmount = parseFloat(depositeTotal.innerText);
    // console.log(currentDepositeAmount);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount
    depositeTotal.innerText = newDepositeTotal;


    //Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(balanceTotal.innerText);
    const newTotalBalance = previousTotalBalance + newDepositeAmount;
    balanceTotal.innerText = newTotalBalance;

    //clear the input value
    depositeInput.value = '';
});

//handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousTotalWithdrow = parseFloat(withdrowTotal.innerText);

    const withdrowInput = document.getElementById('withdrow-input');
    const totalWithdrow = parseFloat(withdrowInput.value);

    const newTotalWithdrow = previousTotalWithdrow + totalWithdrow;
    withdrowTotal.innerText = newTotalWithdrow;

    //decrease total balance
    const balanceTotalDecrease = document.getElementById('balance-total');
    const previousTotalDecreaseBalance = parseFloat(balanceTotalDecrease.innerText);
    const newTotalDecreaseBalance = previousTotalDecreaseBalance - totalWithdrow;
    balanceTotalDecrease.innerText = newTotalDecreaseBalance;

    withdrowInput.value = '';

});
