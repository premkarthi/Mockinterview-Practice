
// Local storage
// Web storage objects localStorage  allow to store key/value pairs in the browser.

// Both key and value must be strings. 
// The limit is 5mb+ depends on the browser.
// They do not expire.
// The data is bound to the origin (domain/port/protocol).
// Shared between all tabs and windows with the same origin
// survives browser restart


// API:

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key number index.
// length – the number of stored items.
// Use Object.keys to get all keys.


let taskName = document.querySelector("#task")
let taskDate = document.querySelector("#date")
let submit = document.querySelector("#submit")
let list = document.querySelector('#list')

let completeData = JSON.parse(localStorage.getItem("task")) || []

submit.addEventListener('click', function(){
    let obj = {
        taskName : taskName.value,
        taskDate : taskDate.value
    }
    taskName.value = ''
    taskDate.value = ''

    completeData.push(obj)
    localStorage.setItem("task", JSON.stringify(completeData))
    UpdateUI()
})






function UpdateUI(){
    let getDataFromLocal = JSON.parse(localStorage.getItem("task")) || []
    list.innerHTML = ''
    getDataFromLocal.forEach(element => {

        let li = document.createElement('li')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')

        li.classList.add('item')
        span1.classList.add('title')
        span2.classList.add('date')
    
        span1.innerText = element.taskName
        span2.innerText = element.taskDate

        li.appendChild(span1)
        li.appendChild(span2)

        list.appendChild(li)
    
    });
}

UpdateUI()



let remove = document.querySelector('#remove')

remove.addEventListener('click', function(){
    localStorage.clear()
    UpdateUI()
})