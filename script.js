let string = "";
let mybuttons = document.querySelectorAll('.btn');
Array.from(mybuttons).forEach((button1)=>{
    button1.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.displayInput').innerHTML = string;

        }
        else if(e.target.innerHTML == 'C' || e.target.innerHTML == 'M+' ){
            string = "";
            document.querySelector('.displayInput').innerHTML = string;

        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('.displayInput').innerHTML = string;
        }
     
    })

})