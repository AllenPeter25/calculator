const blackButtons = document.querySelectorAll('.black')
const pinkButtons = document.querySelectorAll(".pink")
const display = document.querySelector('.display').childNodes[3]
const mKeys = document.querySelectorAll(".gray")
let output = '';
display.value = ''
let temp = '';
let memory =''

blackButtons.forEach((x) => {
    x.addEventListener('click', (e) => {
        if(e.target.value != "C"){
            temp += e.target.value
            display.value = temp
        }
        else{
            temp = '';
            output = ''
            display.value = '';
        }
    })
})

pinkButtons.forEach(x => {
    x.addEventListener('click',(e) => {
        if(/\d/.test(output[output.length-1])){
            display.value = display.value
        }
        else{
            try{
               display.value = eval(output+temp)
            }
            catch (e){
                output = output.slice(0,-1)
            }
        }
        output += temp
        temp = ''
        if(!/\d/.test(output[output.length - 1])){
            output = output.slice(0,-1)
        }
        output += e.target.value
    } )
})

document.querySelector(".orange").addEventListener('click',() => {
    output+=temp
    temp = ''
    display.value = eval(output);
})

mKeys.forEach((x) => {
    x.addEventListener('click', (e) => {
        if(e.target.value == "m+"){
            if(document.getElementsByClassName("memory")[0].innerHTML.length){
                output+=memory
                display.value = eval(output)
            }
            else{
                memory = "+"+eval(output)
                output = ''
                document.getElementsByClassName("memory")[0].innerHTML = "m"
            }
        }
        else if(e.target.value == "m-"){
            if(document.getElementsByClassName("memory")[0].innerHTML.length){
                output+=memory
                display.value = Number(eval(output))*-1
            }
            else{
                memory = "-"+eval(output)
                output = ''
                document.getElementsByClassName("memory")[0].innerHTML = "m"
            }
        }
        else{
            display.value = memory.slice(1)
        }
    })
})

window.addEventListener("keydown", (e) => {
    if(e.defaultPrevented){
        return
    }

    switch (e.key){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0": 
                temp += String(e.key)
                display.value = temp
                break;

        case "c":
                if(String(e.key) != "C"){
                    temp += String(e.key)
                    display.value = temp
                }

        case "-":
        case "*":
        case "/":
        case "+":
                if(/\d/.test(output[output.length-1])){
                    display.value = display.value
                }
                else{
                    try{
                    display.value = eval(output+temp)
                    }
                    catch (e){
                        output = output.slice(0,-1)
                    }
                }
                output += temp
                temp = ''
                if(!/\d/.test(output[output.length - 1])){
                    output = output.slice(0,-1)
                }
                output += String(e.key)
                break;
        
        case "Enter":
                    debugger
                    output+=temp
                    temp = ''
                    display.value = eval(output);
                    output = ''
    }
})
