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
    },
    {
        name : "NEW",
        address : "Mumbai",
        isActive : false,
    },
    {
        name : "HELLO",
        address : "Bangalore",
        isActive : false,
    },

]


const ul = document.querySelector('#list')

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