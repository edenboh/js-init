console.log('Script form 2 loaded !')
const inputs = document.querySelectorAll('input')

inputs.forEach(input=>{
    input.addEventListener('change',function(event){
        if(event.currentTarget.value.length > 2){
            event.currentTarget.style.border = '3px solid green'
        }else{
            event.currentTarget.style.border = '3px solid red'
        }
    })
})