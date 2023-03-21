function x(){
    const inputkey = document.getElementById("inputkey")
    const inputvalue = document.getElementById("inputvalue")
    const output = document.getElementById("output")

    const key = inputkey.value
    const value = inputvalue.value
    
    if (key && value){
        localStorage.setItem(key,value)
        location.reload()
    }
}

for(i=0;i<localStorage.length;i++){
    const k = localStorage.key(i)
    const v = localStorage.getItem(k)
    output.innerHTML+=`${k}:${v} <br>`
}