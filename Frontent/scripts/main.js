let headerBtn = document.querySelectorAll('.btn')
let ul = document.querySelector('.main-content-grid')
let priceList = document.querySelector('.about__select')
let searchInp = document.querySelector(".hero__inp")

searchInp.addEventListener("input" , function(){
    getData(count).then(item => {
        let filter = item.filter(item => item.name.toLowerCase().includes(searchInp.value.toLowerCase()))
        renderData(filter)
    })
})

// info for NewDate

let d = new Date();

let Days = document.querySelector(".Date")

Days.innerHTML += d.toDateString()


// clocks 

let clock = document.querySelector('.clock')
    setInterval(displayClocks, )
function displayClocks(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hrs > 24) {
        hrs = hrs - 24
    }
    
    if(hrs == 0){
        hrs = 24
    }

    if(hrs < 10){
        hrs = '0' + hrs;
    } 
    
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    
    clock.textContent = hrs + ' : ' + min + ' : ' + sec;
}


headerBtn.forEach(item => {
    item.addEventListener('click', function(){
        get(item.id)
    })
})

async function get(dataId){
    let data = await fetch(`http://localhost:5000/food/${dataId}`)
    let parseDate = await data.json()
    render(parseDate)
}

function render(arr) {
    ul.innerHTML = ""

    arr.forEach(item => {
        ul.innerHTML += `
            <div class="grid-item">
                <img class="grid-image" src="http://localhost:5000/${item.images}" alt="" />
                <h3>${item.name}</h3>
                <p>$ ${item.price}</p>
                <h4>${item.bowls} Bowls availabel</h4>
              </div>`
    })
}
get(1)

let btnData = document.querySelectorAll(".nav__btn")
    
btnData.forEach(item => {
    btnData[0].classList.add("btn--active")
    item.addEventListener('click', function() {
        count = item.id
        get(item.id)
        btnData.forEach(clicked => clicked.classList.remove('btn--active'));
        item.classList.toggle('btn--active')
        
    })
})