const billAmount = document.getElementById('bill'),
      tipPercent = document.querySelectorAll('input[name="tip"]'),
      numberOfPersons = document.getElementById('people'),


      calcBtn = document.getElementById('calculate'),
      resetBtn = document.getElementById('reset'),

      tipPerson = document.getElementsByClassName('amount')[0],
      totalPerson = document.getElementsByClassName('amount')[1];

const getTip = function () {
    for (i=0;i<tipPercent.length;i++){
        if (tipPercent[i].checked) {
            return tipPercent[i].value
        }
    }
}

const calc =function () {
    let ba = Number(billAmount.value);
    let tp = Number(getTip())/100;
    let ps = Number(numberOfPersons.value);
    tipPerson.textContent=`${(ba*tp/ps).toFixed(2)}$`;
    totalPerson.textContent=`${((ba+ba*tp)/ps).toFixed(2)}$` 
}

const checkInput = function () {
    if (isNaN(billAmount.value) || billAmount.value ==='') {
        alert('Please type a proper bill amount');
        return false
    };
    if (getTip()=== undefined) {
        alert('Please choose a tip %');
        return false
    };
    if (numberOfPersons.value === '') {
        alert('Please select for how many persons to split the bill');
        return false
    }
    return true
}

calcBtn.addEventListener('click',()=>{
    if (checkInput()) {
        calc()
    }
})




resetBtn.addEventListener('click',() =>{
    billAmount.value = '';
    numberOfPersons.value = '';
    for (i=0;i<tipPercent.length;i++){
        tipPercent[i].checked = false
    }
});