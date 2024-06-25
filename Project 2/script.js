console.log("color switcher project");
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector("body")
//applying events : for color switching
buttons.forEach(function(button){
 //console.log(button);
    button.addEventListener('click', function(e){
                     //kya karega uske liye callback fn
                console.log(e)
                console.log(e.target)
                if(e.target.id === 'grey'){
                  body.style.backgroundColor = e.target.id;
                }

                if(e.target.id === 'red'){
                    body.style.backgroundColor = e.target.id;
                  }

                  if(e.target.id === 'blue'){
                    body.style.backgroundColor = e.target.id;
                  }

                  if(e.target.id === 'yellow'){
                    body.style.backgroundColor = e.target.id;
                  }
                
    } );
});