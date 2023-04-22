
window.onload = () =>
{
    //back button
    const backBtn = document.getElementById("back_btn");
    //previous position
    let position = document.referrer;

    backBtn.onclick = () =>
    {   if (position.includes("err"))
        {
            window.history.go(-2);
        }
        else
        {
            window.history.go(-1);
        }
    }

    
    //define error box (var) is used to set then to global
    let err_box = document.getElementById("error_box");
    window.onclick = () =>
    {
        err_box.style.display = "none";
    }
    
    

}

//password validation function 
//flag is set in argument to let php use it 
function validInput(flag=0)
{
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    //store password1 value in variable
    let passwordChar = pass1.value;
    
    //define error box (var) is used to set then to global
    let err_box = document.getElementById("error_box");
    //error message 
    let err = " ";

    
    

    //check for special characters
    if(!( (passwordChar.includes('@')) || (passwordChar.includes('!')) || (passwordChar.includes('#')) || (passwordChar.includes('^')) || (passwordChar.includes('$')) || (passwordChar.includes('%')) || (passwordChar.includes('&')) || (passwordChar.includes('-')) || (passwordChar.includes('*')) || (passwordChar.includes('_'))))
    {
        flag = 4;
    }

    //check first character if capital
    if( !(passwordChar[0] >= 'A' && passwordChar[0]<= 'Z') )
    {
        flag = 1;
    }

    //check for length of the password
    if(!(passwordChar.length > 8))
    {
        flag = 3;
    }


    //check matching
    if(!(pass1.value == pass2.value))
    {
        pass1.value = "";
        pass2.value = "";
        flag = 2;
    }   
    
    //check which condition is false
    if(flag != 0)
    {
        switch(flag)
        {
            case 1:
                err = "First Letter in password Must be capital !";
                break;
            case 2:
                err = "passwords Not matching !";
                break;
            case 3:
                err = "password lenght must be more than 8 characters !";
                break;
            case 4:
                err = "password Must include special characrter !";
                break;
        }
        err_box.style.display = 'inline-block';
        err_box.style.justifyContent = "center";
        err_box.innerHTML = err + "<br><br><br> ( click on screen around error window to continue )";
        
        return false;
    }
    
    return true;
}