//flag to control error message box
var oflag = 0;

window.onload = () =>
{

    //back button
    const backBtn = document.getElementById("back_btn");
    //previous position
    let position = document.referrer;
    backBtn.onclick = () =>
    {
        if(position.includes("Home"))
        {
            window.history.go(-1);
        }
        else
        {
            window.history.go(-2);
        }
    }

    //direct to sign up page

    const sign_upBtn = document.getElementById("sign_up");

    sign_upBtn.onclick = () =>
    {

        window.location.href = "../Sign_Up/";
    }
    
    //define error box (var) is used to set then to global
    let err_box = document.getElementById("error_box");
    window.onclick = () =>
    {
        err_box.style.display = 'none'

    }
    validInput(oflag);


    

}

//password validation function
//flag is set in argument to let php use it
function validInput(flag=0)
{

    //define error box (var) is used to set then to global
    let err_box = document.getElementById("error_box");

    //error message
    let err = "Invalid Email OR Password !";

    //check which condition is false
    if(flag == 1)
    {

        err_box.style.display  = 'inline-block';
        err_box.style.justifyContent = 'center';
        err_box.innerHTML = err + "<br><br><br> ( click on screen around error window to continue )";

    }
    else
    {
        err_box.style.display = 'none';
    }
}