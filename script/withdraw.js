//withdraw input field e amount diye jodi button e click kori tahole withdraw field e koto taka withdraw korlam seuta dekhabe and total balance theke seita kome jabe

// step-1: add event handler for the withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(event){
    
    //step-2 : get the withdraw amount value from the withdraw input field
    const withdrawField = document.getElementById('withdraw-input-field');
    const newWithdrawAmountByUser = withdrawField.value;

    //step-3: get the current withdraw amount
    const withdrawTotalElement =  document.getElementById('withdraw-amount');
    const previousWithdrawMoney = withdrawTotalElement.innerText;

    const currentWithdrawTotal = parseFloat(previousWithdrawMoney) + parseFloat(newWithdrawAmountByUser);
     // jehetu previousWithdrawMoney and newWithdrawAmountByUser er input value ta string taai ami string theke number e convert kore nilam uaing parseFloat
    withdrawTotalElement.innerText =  currentWithdrawTotal;

    //clearing the withdraw field value entered by user
    withdrawField.value = '';


    //Code For Total Balace Update
    const totalBalance = document.getElementById('total-amount');
    const getTotalAmountValue = totalBalance.innerText;

    const updatedTotalBalance = parseFloat(getTotalAmountValue) - parseFloat(newWithdrawAmountByUser);
    totalBalance.innerText = updatedTotalBalance;

})