'use strict';
//Variables
let submitBtn = document.querySelector('.submit-button');
let emailInput = document.querySelector('#company-email');
let validityMessage = document.querySelector('.validity-message');
let emptyMessage = document.querySelector('.empty-message');
let thankingParagraph = document.querySelector('.thanking');
let modalBox = document.querySelector('#verification-modal');


//Function to handle validation of the input field
const submitEmail =()=>{
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const InputValue = emailInput.value.trim();

    if(InputValue == '') {
        emptyMessage.style.display= 'block';
        validityMessage.style.display= 'none';
    } else if(InputValue !== '' && !regex.test(InputValue)){
        validityMessage.style.display= 'block';
        emptyMessage.style.display= 'none';

    } else if(InputValue !== '' && regex.test(InputValue)){
        submitBtn.setAttribute('data-bs-target','#verification-modal');
        submitBtn.setAttribute('data-bs-toggle','modal');
        thankingParagraph.innerHTML =`A confirmation email has been sent to <span class="subscribe-email" >${InputValue}</span>. 
        Please open it and click the button inside to confirm your subscription.`
        emptyMessage.style.display= 'none';
        validityMessage.style.display= 'none';
    }

};
//Event handlers
document.addEventListener('DOMContentLoaded',()=>{  
    submitBtn.addEventListener('click', submitEmail);
})
