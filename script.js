let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        let btnValue = e.target.innerHTML;

        if(btnValue == '='){
            try {
                // Percentage handling
                if(string.includes('%')){
                    string = handlePercentage(string);
                }

                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if(btnValue == 'AC'){
            string = "";
            input.value = string;
        }
        else if(btnValue == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += btnValue;
            input.value = string;
        }
    })
});

function handlePercentage(exp){
    // Replace "operator number%" with "(operator number/100)"
    return exp.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
}
