let students = [
    {
        name : "Prem",
        address : "Bangalore",
        isActive : true,
    },
    {
        name : "Karthi",
        address : "Delhi",
        isActive : true,
    },
    {
        name : "Somthing",
        address : "Chennai",
        isActive : true,
    }
]


const ul = document.querySelector('#list')

function renderDOM(){
    for (let i = 0; i < students.length; i++) {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
    
        h3.innerText = students[i].name
        p.innerText = students[i].address
    
        if(students[i].isActive == false){
            li.style.display  = 'none'
        }
        
        li.appendChild(h3)
        li.appendChild(p)
        ul.appendChild(li)
    }
}

renderDOM()


// Steps1; take the values from input - name and address to DOM
// Steps2; create a object using those values
// Steps3; On Submit push the object into Students array


const firstName = document.querySelector('.firstname')
const address = document.querySelector('.address')
const fromSubmit = document.querySelector('.formSubmit')



firstName.addEventListener('keyup', function(){
    let parent = firstName.parentElement
    let label = parent.querySelector('label')

    if(firstName.value.length <= 3){
        label.style.display = 'block'
    }
    else{
        label.style.display = 'none'
    }
})



fromSubmit.addEventListener('click', function(){

    let newObj = {
        name : '',
        address : '',
        isActive : true
    }

    if(firstName.value.length == 0 || address.value.length == 0){
        return
    }
    //This code wont works- if conditions are true
    newObj.name = firstName.value
    newObj.address = address.value
    students.push(newObj)
    console.log(students);
    ul.innerHTML = ''
    renderDOM()
})




