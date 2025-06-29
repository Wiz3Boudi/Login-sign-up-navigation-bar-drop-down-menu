const nameF = document.getElementById('namef');
const email = document.getElementById('email');
const password = document.getElementById('password');
const singIn = document.getElementById('sing-in');
const appClass = document.getElementById('app-class');
const popupId = document.getElementById('popup')
const form = document.getElementById('form');
const classprapraph  = document.getElementById('h1');
const option = document.getElementById('option');




singIn.addEventListener('click',mainFunction)
singIn.addEventListener('click',clear)
window.addEventListener('load',focus)
// window.addEventListener('load',onLoadDisplay)



function mainFunction(){
      if(email.value === 'wiz3bodi@gmail.com'){
            if(nameF.value === 'Hello User'){
                  if(password.value === '812002'){
                        appClass.click();
                  }else{
                        return showPopUp();
                  }
            }else{
                  return showPopUp()
            }
      }else{
            return showPopUp()
      }
};
function clear(){
      setTimeout(() => {
            return ( nameF.value ="",
                  email.value ="",
                  password.value ="");
      }, false);
};
function focus(){
      email.focus();     
};
function showPopUp(){
      classprapraph.style.display ='none';
      form.style.display ='none';
      option.style.display ='none';
      popupId.style.display ='block';
      hiddePopUp();
};
function hiddePopUp(){
      setTimeout(() => {
            popupId.style.display ='none';
            form.style.display ='block'
            classprapraph.style.display ='block';
            option.style.display ='block';
            // window.location.reload()
      }, 1000);
};
// function onLoadDisplay(){
//             form.style.display ='block'
//             classprapraph.style.display ='block';
//             option.style.display ='block';
// };
