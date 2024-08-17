var se = document.getElementById('btn')
var key = document.getElementById('key');
let html = document.getElementById('res')
let title1 = document.getElementById('title1')
let txt1 = document.getElementById('txt1')
let img1 = document.getElementById('img1')
let title2 = document.getElementById('title2')
let txt2 = document.getElementById('txt2')
let img2 = document.getElementById('img2')

// function search() {
//     let res = '<ul>';
//     fetch('database.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.Places)
//         console.log(key.value)
//         const point = data.Places.find(item => item.location.toLowerCase() == key.value.toLowerCase())
//         if (point) {
//             console.log('you in if')
//             res += `<li> location Rank =>  : ${point.rate} <li>`
//             res += `<li> brief about site  : ${point.discription} <li>`
//             res += `<li> information  : ${point.information} <li>`
//         }
//         res += '</ul>'
//         res += '<br>'
//         res += '<button>visit</button>'
//         img.innerHTML= `<img src= ${point.imagesrc} >`
//         console.log(res)
//         txt.innerHTML = res
//         title.innerText = new Date().toLocaleString({timeZone: 'key'});
//         html.classList.remove('hide')
//         key.value=''
//     })
// }
function search() {
    let res = '<ul>';
    let countries ;
    let beach ;
    let temple ;
    let values;

    fetch('cities.json')
    .then(res => res.json())
    .then(data => {
        console.log(Object.keys(data))
        console.log(key.value)
        countries = data.countries
        temple = data.temples
        beach = data.beaches
        values= Object.keys(data);
       var se ;
        values.forEach( (x,i)=>{
        console.log('data[x]= '+ x)
            if(key.value.toLowerCase() == x || x.startsWith(key.value.toLowerCase()) ){
                console.log('you in if and x= ' +x)
                se = x;
            }
        })
        console.log(se)
        // const point = data.find(item => item.location.toLowerCase() == key.value.toLowerCase())
        
            // img1.innerHTML= `<img src= ${point.imageUrl} >`
            // title1.innerHTML = ${point.name}
            // txt1.innerHTML =  ${point.description}
            if(!se)
            return
            if(se == 'temples' || se == 'beaches'){
                console.log(data[se][0].name)
                title1.innerHTML= data[se][0].name
                txt1.innerHTML= data[se][0].description
                img1.innerHTML = `<img src=${data[se][0].imageUrl}>`
                title2.innerHTML= data[se][1].name
                txt2.innerHTML= data[se][1].description
                img2.innerHTML = `<img src=${data[se][1].imageUrl}>`
            }
            else if(se == 'countries'){
                console.log( "you in countries "+ data[se][0].cities[0].name)
                title1.innerHTML= data[se][0].cities[0].name
                txt1.innerHTML= data[se][0].cities[0].description
                img1.innerHTML = `<img src=${data[se][0].cities[0].imageUrl}>`
                title2.innerHTML= data[se][2].cities[0].name
                txt2.innerHTML= data[se][2].cities[0].description
                img2.innerHTML = `<img src=${data[se][2].cities[0].imageUrl}>`
                
            }
        html.classList.remove('hide')
        // key.value=''
    })
}
function cl(){
    key.value=''
    html.classList.add('hide')
    console.log('clicked')
}
