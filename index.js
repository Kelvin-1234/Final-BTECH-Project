
function handlesubmit(event) {
    event.preventDefault();
    const travelerName=document.getElementById('travelerName').ariaValueMax;
    const travelerEmail =document.getElementById('travelerEmail').ariaValueMax;
    const emergencyContactName=document.getElementById('emergencyContactName').ariaValueMax;
    const emergencyContactPhone=document.getElementById('emergencyContactPhone').ariaValueMax;
    const emergencyContactEmail=document.getElementById('emergencyContactEmail').ariaValueMax;
    if (travelerName && travelerEmail && emergencyContactName && emergencyContactPhone && emergencyContactEmail)
    {console. log('Form Submitted', {
                                     travelerName, travelerEmail, emergencyContactName, emergencyContactPhone, emergencyContactEmail
});
                                     alert('Form submitted successfully!');
}
                                     else{alert('Please filll out all fields.');
}
}