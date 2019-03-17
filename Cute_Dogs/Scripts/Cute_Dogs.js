function loading(){
                   document.getElementById("1").innerHTML="Please wait while the Image Loads"
              var xhr = new XMLHttpRequest();

                    xhr.open('GET','https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random')
                    xhr.setRequestHeader("Content-Type", "text/html; charset=UTF-8")
                    xhr.setRequestHeader("Access-Control-Allow-Origin","*")
                    xhr.send();
                   
                   var state=xhr.readyState;
                   if(state!==4){
                    document.getElementById("1").style.display="block";
                   document.getElementById("2").style.display="none";                   
                   }
            
    xhr.onreadystatechange = function (){
        var state=xhr.readyState;
        if(state==4){
            document.getElementById("1").style.display="none";
                   document.getElementById("2").style.display="block";       
        }
        if(xhr.readyState === 4 && xhr.status === 200) {
            
         var output= JSON.parse(xhr.response)
        var image1=output.message;
         document.getElementById("2").innerHTML='<img src='+image1+'>'+'</img>'
        
            console.log(output.message)
         }   }
            
               }