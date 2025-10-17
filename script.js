  var inputarea = document.getElementById("inputarea")
    var paratypecount = document.getElementById("paratypecount")
    var errormsg= document.getElementById("errormsg")
  

    inputarea.addEventListener("keyup",function(event)
    {
        //console.log("Key pressed:", event.key);
        if(event.key) {
            //console.log(inputarea.value.length)
                
            if (inputarea.value.length>=200){
                paratypecount.textContent = inputarea.value.length + " /200 characters";
                errormsg.classList.remove("hidden")
            }
            else{
                 paratypecount.textContent = inputarea.value.length + " /200 characters";
                 errormsg.classList.add("hidden")
            }
            
            
            //console.log(inputarea.value.length)
        }
        
    })

    //sdjfhsjdfhjshdfjhsjfhjdhfjshdfjhdjfhkjdhfjkhdfjfdhjdhfhdfjhdfjdfhjdfhjhdfjjdkfhkjdhfjhdfjhfjdfhjhdfjhdfkjdhfjhdfjdhfjhdfjdfhjdhfjdhfjdhfjdhfjdhfjdfhjdfhkjdfhkjdhfkjdhfjhdfjhdjfhkdjfhjdfhdfjhdfhjd