// console.log('hello')
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('button click')
    // step 2:- get phon number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;
    // console.log(phoneNumber.value, pinNumber.value)
    // step 3:- 
    if(phoneNumber == '5' && pinNumber === '1234'){
        console.log('login page')
        
    }
    else{
        alert('wrong phon number or pin number')
    }

})