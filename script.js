function ValidateEmail()
{
    const inputText = document.getElementById('exampleInputEmail1');
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.form1.email1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.email1.focus();
        return false;
    }
}

function CheckPassword()
{
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(@*\s).{8,15}$/;
    inputtxt = document.getElementById('exampleInputPassword1')
    if(inputtxt.value.match(decimal))
    {
        alert('Correct, try another...')
        return true;
    }
    else
    {
        alert('Wrong...!')
        return false;
    }
}