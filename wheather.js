
// let apiUrl = ''

// function callApi(){
//     let data =  fetch(apiUrl)
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data);
//         callFn(data)
//     }).catch((err)=> console.log(err))
//     return data
// }


// function callFn(data){
//     console.log(data);
// }

// callApi()




const city = document.querySelector('#city')
const submit = document.querySelector('#submit')
const result = document.querySelector('.result')

submit.addEventListener('click', async function(){
    if(city.value.length < 1) return

    let cityValue = city.value

    let datas  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&cnt=5&appid=e19c57e6861ec06edee657a8d883f754`)
                .then((res) => res.json())
                .then((data) => data).catch((err)=> console.log(err))

    renderUI(datas)
})



function renderUI(weatherReport){

    let city = result.children[0]
    let country = result.children[2]
    let cloudCon = result.children[1]
    let cloud = cloudCon.children[0]
    let temp = cloudCon.children[1]

    result.style.display = 'block'

    city.innerHTML = weatherReport.name
    cloud.innerHTML = weatherReport.weather[0].description
    temp.innerHTML = weatherReport.main.temp
    country.innerHTML = weatherReport.sys.country

    console.log(weatherReport);
}

