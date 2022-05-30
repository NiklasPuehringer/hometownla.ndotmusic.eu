function searchCar() {
    let searchfor = document.getElementById('carInput').value 
    searchfor = searchfor.toLowerCase()
     if(searchfor == null){
         return;
     }

     document.getElementById('content').innerHTML = ``
     for(let i = 1; i != null; i++) {   
         let name = cars[i].name.toLowerCase()
         let brand = cars[i].brand.toLowerCase()

        if(brand.match(searchfor) || name.match(searchfor)) {
            document.getElementById(`content`).innerHTML += `
                <div class="box">
                <h4 class="brand">${cars[i].brand}</h2>
                <h2 class="headline">${cars[i].name}</h2>
                <img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
                <h5 class="text">Price: ${cars[i].Price}</h5>
                <h5 class=HP>HP: ${cars[i].HP}</h5>
                <h5 class=kph>0-100kph: ${cars[i].kph}</h5>
                <h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
                <h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
                </div>
            `
        }
    }
}

function alfaromeo() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 1; i < 7; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function alpine() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 7; i < 9; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function astonmartin() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 9; i < 15; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function audi() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 15; i < 30; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function bentley() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 30; i < 35; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function bmw() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 35; i < 58; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function brabus() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 58; i < 64; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function bugatti() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 64; i < 72; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function buick() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 72; i < 75; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function cadillac() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 75; i < 79; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function chevrolet() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 79; i < 99; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function chrysler() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 99; i < 103; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function citroen() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 103; i < 107; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function dodge() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 107; i < 114; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function ferrari() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 114; i < 142; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function fiat() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 142; i < 144; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function ford() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 144; i < 168; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function harley() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 168; i < 169; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function hennessy() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 169; i < 171; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function holden() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 171; i < 172; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function honda() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 172; i < 177; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function hyundai() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 177; i < 178; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function infiniti() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 178; i < 180; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function jaguar() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 180; i < 191; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function jeep() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 191; i < 198; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function kawasaki() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 198; i < 201; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function kia() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 201; i < 203; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function konigsegg() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 203; i < 208; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function lambo() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 208; i < 228; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function lexus() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 228; i < 230; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function libertywalk() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 230; i < 240; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function lotus() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 240; i < 241; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function maserati() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 241; i < 250; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function mazda() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 250; i < 252; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function mclaren() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 252; i < 261; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function mercedes() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 261; i < 296; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function mini() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 296; i < 298; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function nissan() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 298; i < 304; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function noble() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 304; i < 305; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function pagani() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 305; i < 308; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function peugeot() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 308; i < 309; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function porsche() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 309; i < 317; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function ram() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 317; i < 320; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function rollsroyce() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 320; i < 324; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function landrover() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 324; i < 329; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function saleen() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 329; i < 330; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function subaru() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 330; i < 333; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function tesla() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 333; i < 337; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function toyota() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 337; i < 341; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>   
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}

function vw() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 341; i < 350; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function yamaha() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 350; i < 353; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function zenvo() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 353; i < 355; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}
function vespa() {

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``
    document.getElementById(`staff`).innerHTML = ``

    for(let i = 355; i < 356; i++) {

        document.getElementById(`content`).innerHTML += `<div class="box">
<h2 class="headline">${cars[i].name}</h2>
<img class="carimgs" alt="${cars[i].name}" src ="${cars[i].Image}">
<h5 class="text">Price: ${cars[i].Price}</h5>
<h5 class=HP>HP: ${cars[i].HP}</h5>
<h5 class=kph>0-100kph: ${cars[i].kph}</h5>
<h5 class=vmax>Top-Speed: ${cars[i].vmax}</h5>
<h5 class="spawns">Spawnname: ${cars[i].spawn}</h5>
</div>
`
           
    }
}











var cars = {
    1: {
        brand: "Alfa Romeo",
        name: "4C",
        Price: "$50.000",
        HP: "240",
        kph: "4,5s",
        vmax: "250kph",
        Image: "https://pngimg.com/uploads/alfa_romeo/alfa_romeo_PNG12.png",
        spawn: "4c"
    }, 
    2:{
        brand: "Alfa Romeo",
        name: "Giulietta",
        Price: "$40.000",
        HP: "130",
        kph: "9,4s",
        vmax: "145kph",
        Image: "./img/giulietta.png",
        spawn: "argiu"
    }, 
    3:{
        brand: "Alfa Romeo",
        name: "Brera",
        Price: "$30.000",
        HP: "260",
        kph: "7s",
        vmax: "250kph",
        Image: "http://pngimg.com/uploads/alfa_romeo/alfa_romeo_PNG26.png",
        spawn: "brera"
    }, 
    4:{
        brand: "Alfa Romeo",
        name: "Stradale",
        Price: "$250.000",
        HP: "270",
        kph: "5,5s",
        vmax: "298kph",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/4/4f/HOR_XB1_Alfa_33.png",
        spawn: "alfa67"
    },
    5:{
        brand: "Alfa Romeo",
        name: "Duetto",
        Price: "$20.000",
        HP: "109",
        kph: "10,2",
        vmax: "185kph",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/6/63/Mot_alf_spider.png",
        spawn: "duetto"
    }, 
    6:{
        brand: "Alfa Romeo",
        name: "Giulia",
        Price: "$80.000",
        HP: "540",
        kph: "3,6s",
        vmax: "307kph",
        Image: "https://real-luxury.com/media/tz_portfolio_plus/article/cache/noleggio-alfa-romeo-giulia-quadrifoglio-41-1_xl.png",
        spawn: "giulia"
    },
    7:{
        brand: "Alpine",
        name: "AL1",
        Price: "$90.000",
        HP: "300",
        kph: "4,2s",
        vmax: "275kph",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/8/81/HOR_XB1_Alpine_A110.png",
        spawn: "al1"
    }, 
    8:{
        brand: "Alpine",
        name: "A110S",
        Price: "$40.000",
        HP: "175",
        kph: "9,5s",
        vmax: "215kph",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/7/74/HOR_XB1_Renault_Alpine_73.png",
        spawn: "a110s"
    }, 
    9:{
        brand: "Aston Martin",
        name: "Vanquish",
        Price: "$290.000",
        HP: "573",
        kph: "4,1s",
        vmax: "295kph",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/1/18/MOT_XB360_Aston_Martin_Vantage_01.png",
        spawn: "ast"
    }, 
    10:{
        brand: "Aston Martin",
        name: "DBX",
        Price: "$160.000",
        HP: "707",
        kph: "3,3s",
        vmax: "310kph",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Aston-Martin-DBX-Transparent-PNG.png",
        spawn: "dbx"
    }, 
    11:{
        brand: "Aston Martin",
        name: "DB11 Mansory",
        Price: "$800.000",
        HP: "700",
        kph: "3,6s",
        vmax: "330kph",
        Image: "https://www.tuningblog.eu/wp-content/uploads/2018/03/Aston-Martin-DB11-Mansory-Cyrus-Tuning-49.jpg",
        spawn: "cyrus"
    }, 
    12:{
        brand: "Aston Martin",
        name: "Valkyrie",
        Price: "$40.000",
        HP: "1176",
        kph: "2,5s",
        vmax: "402kph",
        Image: "https://www.auto-salon-singen.de/generate/vehicle/594d860515319-1200x900_cropgrayscale.png",
        spawn: "oycval"
    }, 
    13:{
        brand: "Aston Martin",
        name: "DBS Mansory",
        Price: "$400.000",
        HP: "850",
        kph: "2,8s",
        vmax: "360kph",
        Image: "https://amsc-prod-cd.azureedge.net/-/media/aston-martin/imported/am700_front_quarter_modern_minimalist_main1.png",
        spawn: "rmodmartin"
    }, 
    14:{
        brand: "Aston Martin",
        name: "DBS Superleggera",
        Price: "$200.000",
        HP: "725",
        kph: "3,4s",
        vmax: "340kph",
        Image: "https://amsc-prod-cd.azureedge.net/-/media/aston-martin/imported/am700_front_quarter_modern_minimalist_main1.png",
        spawn: "superleggera"
    }, 
    15:{
        brand: "Audi",
        name: "RS6 Avant",
        Price: "$110.000",
        HP: "600",
        kph: "3,6s",
        vmax: "305kph",
        Image: "https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_auto/v1/prod//audi/rs6avant/3/5wagon/audi_19rs6avant4wdwg4b_angularfront.png",
        spawn: "rs6"
    }, 
    16:{
        brand: "Audi",
        name: "RS7",
        Price: "$120.000",
        HP: "605",
        kph: "3,7s",
        vmax: "250kph",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Audi-RS7-Download-Free-PNG.png",
        spawn: "rs7"
    }, 
    17:{
        brand: "Audi",
        name: "A4",
        Price: "$40.000",
        HP: "354",
        kph: "4,7s",
        vmax: "250kph",
        Image: "https://i.pinimg.com/originals/73/09/7a/73097a07ed9d8becca73dc192967c1a8.png",
        spawn: "aaq4"
    }, 
    18:{
        brand: "Audi",
        name: "Q8",
        Price: "$75.000",
        HP: "600",
        kph: "3,8s",
        vmax: "250kph",
        Image: "./img/q8.png",
        spawn: "q820"
    }, 
    19:{
        brand: "Audi",
        name: "RS5 R ABT",
        Price: "$80.000",
        HP: "450",
        kph: "3,9s",
        vmax: "280kph",
        Image: "./img/rs5r.png",
        spawn: "rs5r"
    }, 
    20:{
        brand: "Audi",
        name: "RS6 Avant 2022",
        Price: "$120.000",
        HP: "600",
        kph: "3,6s",
        vmax: "305kph",
        Image: "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2022AUC380007_01_1280_R5R5.png",
        spawn: "rs62"
    }, 
    21:{
        brand: "Audi",
        name: "R8 Quaddro",
        Price: "$150.000",
        HP: "620",
        kph: "3,1s",
        vmax: "331kph",
        Image: "https://images.dealer.com/ddc/vehicles/2022/Audi/R8/Coupe/perspective/front-left/2022_76.png",
        spawn: "ninef"
    }, 
    22:{
        brand: "Audi",
        name: "R8 2012",
        Price: "$100.000",
        HP: "570",
        kph: "3,4s",
        vmax: "320kph",
        Image: "https://png.monster/wp-content/uploads/2020/11/2010-audi-r8-5.2-fsi-with-6-speed-r-tronic-quattro-coupe-angular-front-cc9feb90-700x465.png",
        spawn: "r8ppi"
    }, 
    23:{
        brand: "Audi",
        name: "A8",
        Price: "$120.000",
        HP: "605",
        kph: "3,8s",
        vmax: "305kph",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Audi-A8-TFSI-E-Transparent-Image.png",
        spawn: "a8audi"
    }, 
    24:{
        brand: "Audi",
        name: "Q7",
        Price: "$57.000",
        HP: "507",
        kph: "4,1s",
        vmax: "278kph",
        Image: "https://purepng.com/public/uploads/large/purepng.com-audi-q7-caraudicars-961524670848felfc.png",
        spawn: "gresley"
    }, 
    25:{
        brand: "Audi",
        name: "SQ7",
        Price: "$85.000",
        HP: "507",
        kph: "4,1s",
        vmax: "250kph",
        Image: "https://purepng.com/public/uploads/large/purepng.com-audi-q7-caraudicars-961524670848felfc.png",
        spawn: "sq72016"
    }, 
    26:{
        brand: "Audi",
        name: "F103",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Audi_F103_%287526078632%29.jpg/1280px-Audi_F103_%287526078632%29.jpg",
        spawn: "f103"
    }, 
    27:{
        brand: "Audi",
        name: "S8",
        Price: "$130.000",
        HP: "571",
        kph: "3,3s",
        vmax: "309kph",
        Image: "https://wheelpcd.co.uk/img/models/audi-s8-2019-saloon.jpg",
        spawn: "audis8om"
    }, 
    28:{
        brand: "Audi",
        name: "S5",
        Price: "$40.000",
        HP: "349",
        kph: "4,3",
        vmax: "297kph",
        Image: "https://freebiescloud.com/wp-content/uploads/2021/06/Audi-S5-Sportback-2020-1.png",
        spawn: "sentinel"
    }, 
    29:{
        brand: "Audi",
        name: "e-tron GT",
        Price: "$200.000",
        HP: "476",
        kph: "4,1s",
        vmax: "249kph",
        Image: "https://www.car21.at/wp-content/uploads/2021/05/etron19front-1024x614.png",
        spawn: "ocnetrongt"
    }, 
    30:{
        brand: "Bentley",
        name: "Continental GT",
        Price: "$320.000",
        HP: "575",
        kph: "4,3s",
        vmax: "335kph",
        Image: "https://purepng.com/public/uploads/large/purepng.com-blue-bentley-continental-gt-speed-carcarvehicletransportbentley-961524668129cjdkg.png",
        spawn: "ben17"
    }, 
    31:{
        brand: "Bentley",
        name: "Continental Cabrio",
        Price: "$155.000",
        HP: "550",
        kph: "4,5s",
        vmax: "330kph",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Bentley-Continental-GT-Convertible-Transparent-PNG.png",
        spawn: "cogcabrio"
    }, 
    32:{
        brand: "Bentley",
        name: "Flying Spur",
        Price: "$200.000",
        HP: "542",
        kph: "4,0s",
        vmax: "333kph",
        Image: "https://www.seekpng.com/png/full/87-876103_bentley-flying-spur-2018-blue.png",
        spawn: "cognoscenti"
    }, 
    33:{
        brand: "Bentley",
        name: "Bacalar",
        Price: "$1.900.000",
        HP: "650",
        kph: "3,8s",
        vmax: "325kph",
        Image: "https://static.wikia.nocookie.net/thecrew/images/e/ee/Bentley_Mulliner_Bacalar_%282020%29.webp",
        spawn: "rmodbacalar"
    }, 
    34:{
        brand: "Bentley",
        name: "Flying Spur",
        Price: "$220.000",
        HP: "542",
        kph: "4,0s",
        vmax: "333kph",
        Image: "https://www.hollywoodstarlimo.ca/wp-content/uploads/2018/04/Bentley-Flying-Spur.png",
        spawn: "ognoscenti2"
    }, 
    35:{
        brand: "BMW",
        name: "i8",
        Price: "$150.000",
        HP: "231",
        kph: "4,2s",
        vmax: "250kph",
        Image: "https://www.pngkit.com/png/full/157-1579694_new-2019-bmw-i8-roadster-bmw-i8.png",
        spawn: "i8"
    }, 
    36:{
        brand: "BMW",
        name: "M1",
        Price: "$520.000",
        HP: "277",
        kph: "2,4s",
        vmax: "262kph",
        Image: "https://www.pngplay.com/wp-content/uploads/13/BMW-M1-Download-Free-PNG.png",
        spawn: "m1"
    }, 
    37:{
        brand: "BMW",
        name: "M2",
        Price: "$60.000",
        HP: "450",
        kph: "4,2s",
        vmax: "270kph",
        Image: "https://www.pngkey.com/png/full/778-7781931_bmw-m2-coup-bmw-x6-m-price-canada.png",
        spawn: "m2"
    }, 
    38:{
        brand: "BMW",
        name: "320 E21",
        Price: "$50.000",
        HP: "143",
        kph: "5,6s",
        vmax: "250kph",
        Image: "https://olderbmws.com/images/gray%20e21%20cropped-u28173.png",
        spawn: "e21"
    }, 
    39:{
        brand: "BMW",
        name: "M5 E34",
        Price: "$60.000",
        HP: "277",
        kph: "6,4s",
        vmax: "254kph",
        Image: "https://oilincar.com/im/cars_im/bmw/5/e34-1988-1996.png",
        spawn: "e34"
    }, 



    


    40:{
        brand: "BMW",
        name: "M5 E60",
        Price: "$45.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.wheel-size.com/automobile/body/bmw-m5-2004-2010-1568007082.87.png",
        spawn: "e60"
    }, 
    41:{
        brand: "BMW",
        name: "M4 Convertible",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/202-2022881_new-2019-bmw-m4-convertible-shrewsbury-2017-white.png",
        spawn: "m4c"
    }, 
    42:{
        brand: "BMW",
        name: "X6M",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngkit.com/png/full/60-605577_2019-bmw-x6-m-2018-ford-focus-electric.png",
        spawn: "x6m"
    }, 
    43:{
        brand: "BMW",
        name: "M5 F90",
        Price: "$190.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/802-8024542_bmw-m5-f90-2017-black.png",
        spawn: "bmci"
    }, 
    44:{
        brand: "BMW",
        name: "745le",
        Price: "$120.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://imagecdn.leasingoptions.co.uk/fit-in/750x500/image/vehicles/pix_png2048/bmw/7series/6/4sedan%20msport/bmw_20745emsport6fb_lowaggressive.png",
        spawn: "745le"
    }, 
    45:{
        brand: "BMW",
        name: "Series 3 Touring",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://media.adtorqueedge.com/new-cars/bmw-aus/3-series-touring/variant/330i-m-sport.png",
        spawn: "ingot"
    }, 
    46:{
        brand: "BMW",
        name: "M6 F13",
        Price: "$125.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://media.lpgenerator.ru/images/471569/m6-b.png",
        spawn: "m6f12"
    }, 
    47:{
        brand: "BMW",
        name: "X5",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://d1ypc8j62c29y8.cloudfront.net/fullsize/3/f/2/2ea2f9cfb6ac199bfdea6e8224c12106e9b3e2f3.png",
        spawn: "x5e53"
    }, 
    48:{
        brand: "BMW",
        name: "760i",
        Price: "$25.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.motortrend.com/uploads/sites/10/2015/11/2012-bmw-7-series-750i-sedan-angular-front.png",
        spawn: "bmwe65"
    }, 
    49:{
        brand: "BMW",
        name: "M760i",
        Price: "$160.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2022BMC820019_01_1280_X1C.png",
        spawn: "17m760i"
    }, 
    50:{
        brand: "BMW",
        name: "Z4",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://images.dealer.com/ddc/vehicles/2020/BMW/Z4/Convertible/perspective/front-left/2020_76.png",
        spawn: "banshee"
    }, 
    51:{
        brand: "BMW",
        name: "X5M",
        Price: "$80.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.wheel-size.com/automobile/body/bmw-x5-m-2020-2021-1586281570.61.png",
        spawn: "huntley"
    }, 
    52:{
        brand: "BMW",
        name: "M3 E30",
        Price: "$95.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/b/b9/HOR_XB1_BMW_M3_91.png",
        spawn: "bmwm3e30"
    }, 
    53:{
        brand: "BMW",
        name: "760Li",
        Price: "$125.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/6a7205c3-4ab9-4bde-8200-bedc9a7e100b/2dddff84-b5e6-4a37-aeb3-66312831e3ca.png",
        spawn: "windsor2"
    }, 
    54:{
        brand: "BMW",
        name: "M8 Competition",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://media.adtorqueedge.com/new-cars/bmw-nz/m8-coupe/variant/m8-competition.png",
        spawn: "rmodbmwm8"
    }, 
    55:{
        brand: "BMW",
        name: "M5 E34",
        Price: "$30.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/b/bd/HOR_XB1_BMW_M5_95.png",
        spawn: "rmodm5e34"
    }, 
    56:{
        brand: "BMW",
        name: "M3 GTS",
        Price: "$65.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/f/fb/HOR_XB1_BMW_M3_10.png",
        spawn: "schwarzer"
    }, 
    57:{
        brand: "BMW",
        name: "i4",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.evspecifications.info/wp-content/uploads/2021/06/BMW-i4-eDrive40-Specifications-p.png",
        spawn: "ocni422pe"
    }, 
    58:{
        brand: "Brabus",
        name: "G500",
        Price: "$190.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://famouscarsrental.com/media/cache/fleet_head_image/cars/17/162.jpg",
        spawn: "g500"
    }, 
    59:{
        brand: "Brabus",
        name: "GLE",
        Price: "$420.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.classicdriver.com/sites/default/files/styles/full_width_slider/public/import/articlesv2/images/_de/2993/img01.jpg",
        spawn: "mlbrabus"
    }, 
    60:{
        brand: "Brabus",
        name: "G65 6X6 700",
        Price: "$1.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/5/51/HOR_XB1_M-B_G_63_AMG.png",
        spawn: "brabus700"
    }, 
    61:{
        brand: "Brabus",
        name: "C63 850",
        Price: "$650.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.brabus.com/_Resources/Persistent/2/d/4/4/2d443f43c9fca415bf72ee4025357260b62a7ad1/C4S_381%20%2832%29.jpg",
        spawn: "brabus850"
    }, 
    62:{
        brand: "Brabus",
        name: "650",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://i.auto-bild.de/ir_img/1/2/8/7/4/6/2/Mercedes-Maybach-von-Brabus-474x316-a4291c9478027149.jpg",
        spawn: "schafter3"
    }, 
    63:{
        brand: "Brabus",
        name: "650 Black Bison",
        Price: "$520.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.tuningblog.eu/wp-content/uploads/2020/01/WALD-Black-Bison-2019-Mercedes-S-Klasse-W222-Header.jpg",
        spawn: "schafter4"
    }, 
    64:{
        brand: "Bugatti",
        name: "Divo",
        Price: "$5.800.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/4/43/HOR_XB1_Bugatti_Divo.png",
        spawn: "divo"
    }, 
    65:{
        brand: "Bugatti",
        name: "Chiron",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.wheel-size.com/automobile/body/bugatti-chiron-2015-2020-1552284291.18.png",
        spawn: "nero"
    }, 
    66:{
        brand: "Bugatti",
        name: "Veyron",
        Price: "$1.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://i.pinimg.com/originals/01/47/6c/01476cd7f3a11d4e9d314c8ef398d938.png",
        spawn: "adder"
    }, 
    67:{
        brand: "Bugatti",
        name: "EB110",
        Price: "$9.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/6/6a/HOR_XB1_Bugatti_EB110.png",
        spawn: "eb110"
    }, 
    68:{
        brand: "Bugatti",
        name: "Veyron Super Sport",
        Price: "$1.900.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Bugatti-Veyron-Super-Sport-Transparent-Image.png",
        spawn: "bugatti"
    }, 
    69:{
        brand: "Bugatti",
        name: "Centuria Mansory",
        Price: "$10.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.mansory.com/sites/default/files/styles/car_view/public/2019-04/bugatti-chiron.png?itok=IhhUxW1W",
        spawn: "centuria"
    }, 
    70:{
        brand: "Bugatti",
        name: "Chiron Pur Sport",
        Price: "$3.600.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://csr2crews.com/assets/img/car_icons/Bugatti_ChironPurSport.png",
        spawn: "2019chiron"
    }, 
    71:{
        brand: "Bugatti",
        name: "Centodieci",
        Price: "$10.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://preview.thenewsmarket.com/Previews/BGTI/StillAssets/1920x1440/545299.png",
        spawn: "bugatticentodieci"
    }, 
    72:{
        brand: "Buick",
        name: "GNX",
        Price: "$135.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/c/c2/HOR_XB1_Buick_Regal.png",
        spawn: "bgnx"
    }, 
    73:{
        brand: "Buick",
        name: "Century",
        Price: "$10.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://images.iconfigurators.app/images/vehicles/reference/Buick-Century-Sedan-2000_2005.png",
        spawn: "cnty"
    }, 
    74:{
        brand: "Buick",
        name: "GSX",
        Price: "$203.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/e/e1/HOR_XB1_Buick_GSX.png/revision/latest?cb=20191005140247",
        spawn: "gsxb"
    }, 
    75:{
        brand: "Cadillac",
        name: "Eldorado",
        Price: "$2.500",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://i.dlpng.com/static/png/6962433_preview.png",
        spawn: "e78"
    }, 
    76:{
        brand: "Cadillac",
        name: "ATS",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngkey.com/png/full/491-4917719_cadillac-ats.png",
        spawn: "cats"
    }, 
    77:{
        brand: "Cadillac",
        name: "Escalade",
        Price: "$85.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://freebiescloud.com/wp-content/uploads/2020/10/1-36.png",
        spawn: "cesc21"
    }, 
    78:{
        brand: "Cadillac",
        name: "CTS",
        Price: "$20.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/320/2009CAD001a_320/2009CAD001a_320_01.png",
        spawn: "buffalo3"
    }, 
    79:{
        brand: "Chevrolet",
        name: "Corvette C7",
        Price: "$45.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/corvettec7.png",
        spawn: "c7"
    }, 
    80:{
        brand: "Chevrolet",
        name: "Nova",
        Price: "$39.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngplay.com/wp-content/uploads/13/Chevrolet-Nova-Transparent-Free-PNG.png",
        spawn: "nova"
    }, 
    81:{
        brand: "Chevrolet",
        name: "Tahoe",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.markquartmotors.com/static/dealer-5594/2021_Vehicle_Images/Tahoe1.png",
        spawn: "tahoe"
    }, 
    82:{
        brand: "Chevrolet",
        name: "Z28",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/4/45/HOR_XB1_Chevy_Camaro_79.png",
        spawn: "z2879"
    }, 
    83:{
        brand: "Chevrolet",
        name: "Camaro SS",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "ccss16"
    }, 
    84:{
        brand: "Chevrolet",
        name: "Impala",
        Price: "$14.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "impala"
    }, 
    85:{
        brand: "Chevrolet",
        name: "Impala",
        Price: "$12.800",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "manana"
    }, 
    86:{
        brand: "Chevrolet",
        name: "Camaro ZL1",
        Price: "$63.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/camarozl1.png",
        spawn: "zl2017"
    }, 
    87:{
        brand: "Chevrolet",
        name: "Tahoe",
        Price: "$30.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/newtahoe.png",
        spawn: "granger"
    }, 
    88:{
        brand: "Chevrolet",
        name: "Slam Van",
        Price: "$11.500",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "slamvan"
    }, 
    89:{
        brand: "Chevrolet",
        name: "Bel Air",
        Price: "$120.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/belair.png",
        spawn: "tornado"
    }, 
    90:{
        brand: "Chevrolet",
        name: "Camaro R5",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/camaror5.png",
        spawn: "21camaro"
    }, 
    91:{
        brand: "Chevrolet",
        name: "Impala SS",
        Price: "$17.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "impalass"
    }, 
    92:{
        brand: "Chevrolet",
        name: "Corvette C8",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/corvettec8.png",
        spawn: "stingray"
    }, 
    93:{
        brand: "Chevrolet",
        name: "Impala",
        Price: "$18.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "buccaneer"
    }, 
    94:{
        brand: "Chevrolet",
        name: "Silverado",
        Price: "$115.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-chevrolet-silverado-colorado-black-carcarvehicletransportchevroletchevy-961524650954kotq0.png",
        spawn: "silverado"
    }, 
    95:{
        brand: "Chevrolet",
        name: "Camaro ZL1",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-red-chevrolet-camaro-zl1-carcarvehicletransportchevrolet-9615246509155nzjd.png",
        spawn: "rmodcamaro"
    }, 
    96:{
        brand: "Chevrolet",
        name: "Corvette ZR1",
        Price: "$122.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG35.png",
        spawn: "corvettezr1"
    }, 
    97:{
        brand: "Chevrolet",
        name: "Chevelle",
        Price: "$20.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "chevelle1970"
    }, 
    98:{
        brand: "Chevrolet",
        name: "Corvette Stingray",
        Price: "$16.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://images.fineartamerica.com/images/artworkimages/medium/3/1963-corvette-stingray-split-window-in-black-and-red-gill-billington-transparent.png",
        spawn: "corvette63gsf5"
    }, 
    99:{
        brand: "Chrysler",
        name: "ME412",
        Price: "$800.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.thedrive.com/content-b/message-editor%2F1589924900562-me412frontview.png",
        spawn: "me412"
    }, 
    100:{
        brand: "Chrysler",
        name: "300 SRT8",
        Price: "$77.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngkit.com/png/full/64-647943_heisenbergs-chrysler-300-srt8-2018-dodge-durango-sxt.png",
        spawn: "300srt8"
    }, 
    101:{
        brand: "Chrysler",
        name: "Airflow",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://images.squarespace-cdn.com/content/v1/54d50f84e4b0bc3abee6ebfa/1546570643135-C8PMG6J1GEA9AY95ZAGA/DeSoto-Airflow-Sedan-1935-design-interior-exterior.jpg",
        spawn: "airflow"
    }, 
    102:{
        brand: "Chrysler",
        name: "NewYorker",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://images.fineartamerica.com/images/artworkimages/medium/3/1963-corvette-stingray-split-window-in-black-and-red-gill-billington-transparent.png",
        spawn: "newyorker75"
    }, 
    103:{
        brand: "Citroen",
        name: "DS4",
        Price: "$25.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.picng.com/upload/citroen/png_citroen_19783.png",
        spawn: "ds4"
    }, 
    104:{
        brand: "Citroen",
        name: "DS7",
        Price: "$33.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.dsautomobiles.ps/wp-content/uploads/2018/10/1SX8SUTLK1B0A010_0MM00NNZ_0P4H0RFO_0051.png",
        spawn: "ds7"
    }, 
    105:{
        brand: "Citroen",
        name: "2CV",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.pixabay.com/photo/2020/10/01/10/55/car-5618199_960_720.png",
        spawn: "cit2cv"
    }, 
    106:{
        brand: "Citroen",
        name: "Berlingo",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.citroenorigins.at/sites/default/files/styles/1600/public/berlingo2gen_61_1620x1000.png",
        spawn: "berlingo"
    }, 
    107:{
        brand: "Dodge",
        name: "Challenger R/T FF",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://png.pngitem.com/pimgs/s/206-2060688_dodge-charger-1969-png-transparent-png.png",
        spawn: "rt70"
    }, 
    108:{
        brand: "Dodge",
        name: "Viper",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngmart.com/files/5/Dodge-Viper-PNG-Pic.png",
        spawn: "vip8"
    }, 
    109:{
        brand: "Dodge",
        name: "Viper",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/3/32/HOR_XB1_Dodge_Viper_99.png",
        spawn: "99viper"
    }, 
    110:{
        brand: "Dodge",
        name: "Charger Hemi",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/ead76cfd937ab463794cfdef3cb276b6.png",
        spawn: "16charger"
    }, 
    111:{
        brand: "Dodge",
        name: "Charger F8",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cutewallpaper.org/24/dodge-charger-png/dodge-charger-fast-amp-furious-edition-forza-wiki-fandom.png",
        spawn: "chargerf8"
    }, 
    112:{
        brand: "Dodge",
        name: "Challenger",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngmart.com/files/13/Dodge-Challenger-SRT-Hellcat-PNG-Transparent-Image.png",
        spawn: "16challenger"
    }, 
    113:{
        brand: "Dodge",
        name: "Charger 1969",
        Price: "$69.420",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngitem.com/pimgs/m/206-2060628_1969-dodge-charger-transparent-hd-png-download.png",
        spawn: "rmodcharger69"
    }, 
    114:{
        brand: "Ferrari",
        name: "412",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://hymanltd.com/wp-content/uploads/2021/07/7073.jpg",
        spawn: "412"
    }, 
    115:{
        brand: "Ferrari",
        name: "488",
        Price: "$420.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/c/c8/HOR_XB1_Ferrari_488.png",
        spawn: "488"
    }, 
    116:{
        brand: "Ferrari",
        name: "F60 America",
        Price: "$2.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-blue-ferrari-f60-america-carcarferrarivehicletransport-961524663655tmczv.png",
        spawn: "f60"
    }, 
    117:{
        brand: "Ferrari",
        name: "F80 Concept",
        Price: "$4.400.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.dribbble.com/users/6199763/screenshots/14394676/fbhdbgfjbdzhgkhdzjhk_hxff80_4x.png",
        spawn: "f80"
    }, 
    118:{
        brand: "Ferrari",
        name: "F8 Triturbo",
        Price: "$300.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://media-server2.modenamotorsgmbh.com/6843/ferrari-f8-tributo.jpg",
        spawn: "f8t"
    }, 
    119:{
        brand: "Ferrari",
        name: "599 GTO",
        Price: "$420.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/6/6e/HOR_XB1_Ferrari_599_10.png",
        spawn: "gto"
    }, 
    120:{
        brand: "Ferrari",
        name: "Enzo",
        Price: "$4.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/974-9740674_ferrari-enzo.png",
        spawn: "mig"
    }, 
    121:{
        brand: "Ferrari",
        name: "348 Spider",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.euautoteile.de/groups/eu/700/785.jpg",
        spawn: "348s"
    }, 
    122:{
        brand: "Ferrari",
        name: "Dino",
        Price: "$400.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/2/25/HOR_XB1_Ferrari_Dino.png",
        spawn: "dino"
    }, 
    123:{
        brand: "Ferrari",
        name: "Stallone F12 Mansory",
        Price: "$750.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.mansorynortheast.com/assets/img/vehicles/profile/143.png",
        spawn: "f12m"
    }, 
    124:{
        brand: "Ferrari",
        name: "458 Italia",
        Price: "$270.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/121-1219103_luxury-car-png-hd-ferrari-458-italia.png",
        spawn: "f458"
    }, 
    125:{
        brand: "Ferrari",
        name: "FXX K",
        Price: "$2.600.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/e/e9/HOR_XB1_Ferrari_FXX-K.png",
        spawn: "fxxk"
    }, 
    126:{
        brand: "Ferrari",
        name: "330 P4",
        Price: "$12.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/d/d2/HOR_XB1_Ferrari_24_330.png",
        spawn: "330p4"
    }, 
    127:{
        brand: "Ferrari",
        name: "612 Sessanta",
        Price: "$424.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://i.pinimg.com/originals/b7/eb/eb/b7ebeb841f9f68c8dae8b73874a364b6.png",
        spawn: "612ss"
    }, 
    128:{
        brand: "Ferrari",
        name: "250 GT Lusso",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/d/d5/HOR_XB1_Ferrari_250_62_GT.png",
        spawn: "casco"
    }, 
    129:{
        brand: "Ferrari",
        name: "F40",
        Price: "$2.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngkit.com/png/full/68-688307_ferrari-f40-rear-outrun.png",
        spawn: "f4090"
    }, 
    130:{
        brand: "Ferrari",
        name: "Monza",
        Price: "$1.750.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://gamemodels.ru/screenshots/monthly_2020_02/Ferrari_MonzaSP2_2019_Render1.png.bad4301dbc47724324331b8c0a3c4703.png",
        spawn: "monza"
    }, 
    131:{
        brand: "Ferrari",
        name: "488 Pista",
        Price: "$330.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/6/66/HOR_XB1_Ferrari_488_19.png",
        spawn: "pista"
    }, 
    132:{
        brand: "Ferrari",
        name: "488 GTB",
        Price: "$290.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/c/c8/HOR_XB1_Ferrari_488.png",
        spawn: "488gtb"
    }, 
    133:{
        brand: "Ferrari",
        name: "Modena",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.carplastix.com/media/2085/0/348-360-modena.png",
        spawn: "modena"
    }, 
    134:{
        brand: "Ferrari",
        name: "250 GT SWB California Spyder",
        Price: "$19.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.ferraricaliforniaspyder.com/images/sypder_index.png",
        spawn: "monroe"
    }, 
    135:{
        brand: "Ferrari",
        name: "Testa Rossa",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.carsized.com/resources/ferrari/testarossa/d/1985/sl_199156126_ferrari-testarossa-1985-side-view_4x.png",
        spawn: "trossa"
    }, 
    136:{
        brand: "Ferrari",
        name: "288 GTO",
        Price: "$2.100.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/9/94/HOR_XB1_Ferrari_288.png",
        spawn: "f288gto"
    }, 
    137:{
        brand: "Ferrari",
        name: "F40 Competizione",
        Price: "$3.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/333-3330494_image-hotwheels-elite-1-43-ferrari-f40-competizione.png",
        spawn: "rmodf40"
    }, 
   138:{
        brand: "Ferrari",
        name: "F12 Berlinetta",
        Price: "$320.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-red-ferrari-f12-berlinetta-carcarferrarivehicletransport-961524664074cexhz.png",
        spawn: "seven70"
    }, 
    139:{
        brand: "Ferrari",
        name: "360 Challenge Stradale",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/c/c6/HOR_XB1_Ferrari_360.png",
        spawn: "banshee2"
    }, 
    140:{
        brand: "Ferrari",
        name: "212 Export 1951",
        Price: "$8.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://img.favcars.com/ferrari/212/ferrari_212_1951_images_1_b.jpg",
        spawn: "212expo51"
    }, 
    141:{
        brand: "Ferrari",
        name: "F12 TDF",
        Price: "$650.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-yellow-ferrari-f12tdf-carcarferrarivehicletransport-961524651506b591m.png",
        spawn: "rmodf12tdf"
    }, 
    142:{
        brand: "Fiat",
        name: "Punto",
        Price: "$9.900",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://cdn.picpng.com/fiat/fiat-image-28810.png",
        spawn: "punto"
    }, 
    143:{
        brand: "Fiat",
        name: "Fiorino",
        Price: "$8.500",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.fiatprofessional.com/content/dam/fiatprofessional/cross/modelpages/fiorino-cargo/new/360/v1/arctic_white.png",
        spawn: "fiorino"
    }, 
    144:{
        brand: "Ford",
        name: "Mustang GT",
        Price: "$73.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://purepng.com/public/uploads/large/purepng.com-white-ford-mustang-gt-fastback-carcarvehicletransportford-961524638115q8jmp.png",
        spawn: "mgt"
    },
    145:{
        brand: "Ford",
        name: "Mustang",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngmart.com/files/10/Red-Ford-Mustang-PNG-HD.png",
        spawn: "mst"
    },
    146:{
        brand: "Ford",
        name: "F150",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.seekpng.com/png/full/64-641669_ford-png-image-2013-ford-f-150-png.png",
        spawn: "f150"
    },
    147:{
        brand: "Ford",
        name: "GT",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/fordgt.png",
        spawn: "gt17"
    },
    148:{
        brand: "Ford",
        name: "Gran Torino",
        Price: "$12.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png"
    },
    149:{
        brand: "Ford",
        name: "Shelby Cobra",
        Price: "$1.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://usercontent.one/wp/www.agoramodels.com/wp-content/uploads/2020/05/Cutout_Cobra-SideI-Update-1.png",
        spawn: "cobra"
    },
    150:{
        brand: "Ford",
        name: "Mustang HOONICORN",
        Price: "$2.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/e/e5/HOR_XB1_Hoonigan_Ford_Mustang.png",
        spawn: "fordh"
    },
    151:{
        brand: "Ford",
        name: "Shelby GT500",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://i.pinimg.com/originals/b9/0a/85/b90a8576f8c6a0d55652c17ff463177f.png",
        spawn: "gt500"
    },
    152:{
        brand: "Ford",
        name: "Mustang Mach 1",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2021/ford/mustang-fastback/mach-1/coupe/exteriorColors/2021_ford_mustang_mach-1_fastback_032_fjg.png",
        spawn: "mach1"
    },
    153:{
        brand: "Ford",
        name: "Shelby Cobra",
        Price: "$1.250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "mamba"
    },
    154:{
        brand: "Ford",
        name: "Focus RS",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/focusrs.png",
        spawn: "omnis"
    },
    155:{
        brand: "Ford",
        name: "GT",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/fordgtold.png",
        spawn: "bullet"
    },
    156:{
        brand: "Ford",
        name: "F150",
        Price: "$30.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/fordf15078.png",
        spawn: "f15078"
    },
    157:{
        brand: "Ford",
        name: "Shelby GT500",
        Price: "$220.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/shelbygt500.png",
        spawn: "primo2"
    },
    158:{
        brand: "Ford",
        name: "Shelby GT500",
        Price: "$72.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "19gt500"
    },
    159:{
        brand: "Ford",
        name: "Mustang Boss 302",
        Price: "$80.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/boss302.png",
        spawn: "boss302"
    },
    160:{
        brand: "Ford",
        name: "Mustang Boss 429",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/boss429.png",
        spawn: "boss429"
    },
    161:{
        brand: "Ford",
        name: "Shelby GT500 Eleanor",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/eleanor.png",
        spawn: "eleanor"
    },
    162:{
        brand: "Ford",
        name: "Everest",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/fordeverest.png",
        spawn: "everest"
    },
    163:{
        brand: "Ford",
        name: "Focus RS",
        Price: "$34.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/focusrs.png",
        spawn: "focusrs"
    },
    164:{
        brand: "Ford",
        name: "Mustang Boss 302",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/boss3022013.png",
        spawn: "13fmb302"
    },
    165:{
        brand: "Ford",
        name: "Mustang Fastback",
        Price: "$45.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "fastback"
    },
    166:{
        brand: "Ford",
        name: "Buggy",
        Price: "$15.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "sandking"
    },
    167:{
        brand: "Ford",
        name: "HotRod",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "ratloader2"
    },
    168:{
        brand: "Harley-Davidson",
        name: "USA",
        Price: "$22.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/harley.png",
        spawn: "sovereign"
    },
    169:{
        brand: "Henessy",
        name: "Velociraptor",
        Price: "$1.750.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://static.wikia.nocookie.net/forzamotorsport/images/7/74/HOR_XB1_Hennessey_VelociRaptor.png",
        spawn: "velociraptor"
    },
    170:{
        brand: "Hennessy",
        name: "Venom GT",
        Price: "$2.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "https://www.pngkey.com/png/full/26-264424_download-hennessey-venom-gt-png.png",
        spawn: "xnsgt"
    },
    171:{
        brand: "Holden",
        name: "Torana",
        Price: "$5.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/holden.webp",
        spawn: "a9x"
    },
    172:{
        brand: "Honda",
        name: "S2000",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s2000.png",
        spawn: "ap2"
    },
    173:{
        brand: "Honda",
        name: "Civic Type R",
        Price: "$4.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/civictyper.png",
        spawn: "fk8"
    },
    174:{
        brand: "Honda",
        name: "NSX",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/hondansx.png",
        spawn: "nsexrb"
    },
    175:{
        brand: "Honda",
        name: "XRE300",
        Price: "$5.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/xre300.png",
        spawn: "xre300"
    },
    176:{
        brand: "Honda",
        name: "Civic Type R",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/civictyper.png",
        spawn: "blista2"
    },
    177:{
        brand: "Hyundai",
        name: "i30",
        Price: "$14.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/i30.png",
        spawn: "bmhyundaii30"
    },
    178:{
        brand: "Infiniti",
        name: "Q30",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/q30.png",
        spawn: "q30"
    },
    179:{
        brand: "Infiniti",
        name: "QX56",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/qx56.webp",
        spawn: "qx56"
    },
    180:{
        brand: "Jaguar",
        name: "Project 7",
        Price: "$170.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/project7.webp",
        spawn: "p7"
    },
    181:{
        brand: "Jaguar",
        name: "XJ",
        Price: "$98.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/jaguarxj.png",
        spawn: "xj"
    },
    182:{
        brand: "Jaguar",
        name: "XFR",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/jaguarxfr.webp",
        spawn: "xfr"
    },
    183:{
        brand: "Jaguar",
        name: "F-Type",
        Price: "$103.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ftype.png",
        spawn: "ftype"
    },
    184:{
        brand: "Jaguar",
        name: "XJ220",
        Price: "$450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/xj220.webp",
        spawn: "xj220"
    },
    185:{
        brand: "Jaguar",
        name: "E-Type",
        Price: "$2.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/etype.png",
        spawn: "etype2"
    },
    186:{
        brand: "Jaguar",
        name: "XFR",
        Price: "$48.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/xfr.png",
        spawn: "jackal"
    },
    187:{
        brand: "Jaguar",
        name: "XES",
        Price: "$45.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/xes.webp",
        spawn: "jagpr8"
    },
    188:{
        brand: "Jaguar",
        name: "F-Pace",
        Price: "$65.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/fpace.png",
        spawn: "fpacehm"
    },
    189:{
        brand: "Jaguar",
        name: "XES",
        Price: "$46.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/xes.webp",
        spawn: "xes2015"
    },
    190:{
        brand: "Jaguar",
        name: "XJS80",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/unknown_car.png",
        spawn: "jagxjs80"
    },
    191:{
        brand: "Jeep",
        name: "Grand Cherokee SRT",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gchersrt.png",
        spawn: "srt8"
    },
    192:{
        brand: "Jeep",
        name: "Wrangler",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/wrengler.png",
        spawn: "jljeep"
    },
    193:{
        brand: "Jeep",
        name: "Grand Cherokee Trackhawk",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/trackhawk.png",
        spawn: "trhawk"
    },
    194:{
        brand: "Jeep",
        name: "Willie's HotRod",
        Price: "$230.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/willy.webp",
        spawn: "kalahari"
    },
    195:{
        brand: "Jeep",
        name: "Rubicon",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rubicon.png",
        spawn: "jeep2012"
    },
    196:{
        brand: "Jeep",
        name: "Grand Cherokee Trackhawk SRT",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/trackhawksrt.png",
        spawn: "rmodjeep"
    },
    197:{
        brand: "Jeep",
        name: "Trailcat",
        Price: "$800.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/trailcat.webp",
        spawn: "trailcat"
    },
    198:{
        brand: "Kawasaki",
        name: "ZH2",
        Price: "$17.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/kawasakizh2.png",
        spawn: "zh2"
    },
    199:{
        brand: "Kawasaki",
        name: "Ninja 250fi",
        Price: "$10.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/kawasaki250fi.png",
        spawn: "ninja250fi"
    },
    200:{
        brand: "Kawasaki",
        name: "Ninja H2R",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ninjah2r.png",
        spawn: "nh2r"
    },
    201:{
        brand: "KIA",
        name: "Stinger GT",
        Price: "$42.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/stingergt.webp",
        spawn: "kiagt"
    },
    202:{
        brand: "KIA",
        name: "Sorento",
        Price: "$37.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/sorento.png",
        spawn: "sorento19"
    },
    203:{
        brand: "Königsegg",
        name: "CCX",
        Price: "$900.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ccx.png",
        spawn: "ccx"
    },
    204:{
        brand: "Königsegg",
        name: "Jesko",
        Price: "$2.990.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/jesko.png",
        spawn: "jes"
    },
    205:{
        brand: "Königsegg",
        name: "Regera",
        Price: "$5.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/regera.webp",
        spawn: "regera"
    },
    206:{
        brand: "Königsegg",
        name: "Agera RS",
        Price: "$4.100.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/agerars.webp",
        spawn: "agerars"
    },
    207:{
        brand: "Königsegg",
        name: "Agera One:1",
        Price: "$2.300.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/one1.webp",
        spawn: "ageraone"
    },
    208:{
        brand: "Lamborghini",
        name: "Aventador J",
        Price: "$2.800.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/aventadorj.webp",
        spawn: "avj"
    },
    209:{
        brand: "Lamborghini",
        name: "Reventon",
        Price: "$285.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/reventon.webp",
        spawn: "fmj"
    },
    210:{
        brand: "Lamborghini",
        name: "Veneno",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/veneno.webp",
        spawn: "t20"
    },
    211:{
        brand: "Lamborghini",
        name: "SC18 Alston",
        Price: "$7.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/sc18alston.jpeg",
        spawn: "sc18"
    },
    212:{
        brand: "Lamborghini",
        name: "Huracan",
        Price: "$210.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huracan.webp",
        spawn: "lp610"
    },
    213:{
        brand: "Lamborghini",
        name: "Aventador",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/aventador.png",
        spawn: "lp700"
    },
    214:{
        brand: "Lamborghini",
        name: "Centenario",
        Price: "$1.900.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/centenario.webp",
        spawn: "lp770"
    },
    215:{
        brand: "Lamborghini",
        name: "Miura",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/miura.webp",
        spawn: "miura"
    },
    216:{
        brand: "Lamborghini",
        name: "Sesto Elemento",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/sestoelemento.png",
        spawn: "sesto"
    },
    217:{
        brand: "Lamborghini",
        name: "Sian R",
        Price: "$3.700.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/sianr.webp",
        spawn: "sianr"
    },
    218:{
        brand: "Lamborghini",
        name: "Countach",
        Price: "$3.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/countach.png",
        spawn: "count6"
    },
    219:{
        brand: "Lamborghini",
        name: "Diablo",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/diablo.png",
        spawn: "diablo"
    },
    220:{
        brand: "Lamborghini",
        name: "Murcielago",
        Price: "$450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/murcielago.png",
        spawn: "lp670sv"
    },
    221:{
        brand: "Lamborghini",
        name: "Asterion",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/asterion.png",
        spawn: "asterion"
    },
    222:{
        brand: "Lamborghini",
        name: "Murcielago SV",
        Price: "$450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/murcielafo.png",
        spawn: "infernus"
    },
    223:{
        brand: "Lamborghini",
        name: "Urus",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/urus.png",
        spawn: "urus2018"
    },
    224:{
        brand: "Lamborghini",
        name: "Veneno",
        Price: "$4.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/veneno.png",
        spawn: "zentorno"
    },
    225:{
        brand: "Lamborghini",
        name: "500 GTR",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/lambo500gtr.webp",
        spawn: "500gtrlam"
    },
    226:{
        brand: "Lamborghini",
        name: "Huracan",
        Price: "$260.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huracan.png",
        spawn: "pfister811"
    },
    227:{
        brand: "Lamborghini",
        name: "Huracan Performante",
        Price: "$300.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huracanperformante.png",
        spawn: "18performante"
    },
    228:{
        brand: "Lexus",
        name: "LX570",
        Price: "$25.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/lx570.png",
        spawn: "lex570"
    },
    229:{
        brand: "Lexus",
        name: "LX570",
        Price: "$25.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/lx570.png",
        spawn: "lx2018"
    },
    230:{
        brand: "Liberty Walk",
        name: "C63S",
        Price: "$300.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/c63LW.webp",
        spawn: "63lb"
    },
    231:{
        brand: "Liberty Walk",
        name: "Aventador",
        Price: "$550.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/aventadorLW.jpeg",
        spawn: "610lb"
    },
    232:{
        brand: "Liberty Walk",
        name: "Audi S5",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s5LW.jpeg",
        spawn: "lwas5"
    },
    233:{
        brand: "Liberty Walk",
        name: "GT86",
        Price: "$400.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gt86LW.png",
        spawn: "gt86lb"
    },
    234:{
        brand: "Liberty Walk",
        name: "R35 GTR",
        Price: "$600.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r35LW.png",
        spawn: "gtrlb2"
    },
    235:{
        brand: "Liberty Walk",
        name: "NSX",
        Price: "$300.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/nsxLW.jpeg",
        spawn: "filthynsx"
    },
    236:{
        brand: "Liberty Walk",
        name: "SCG 003S",
        Price: "$1.200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/scg003s.png",
        spawn: "rmodscg003s"
    },
    237:{
        brand: "Liberty Walk",
        name: "Huracan",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huracanLW.png",
        spawn: "huralbcamber"
    },
    238:{
        brand: "Liberty Walk",
        name: "Huracan",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huracanLW2.webp",
        spawn: "huralbnormal"
    },
    239:{
        brand: "Liberty Walk",
        name: "Gallardo Super",
        Price: "$450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gallardoLW.jpeg",
        spawn: "gallardosuperlb"
    },
    240:{
        brand: "Lotus",
        name: "Elise GT1",
        Price: "$750.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/elisegt1.webp",
        spawn: "elisegt1"
    },
    241:{
        brand: "Maserati",
        name: "MC12",
        Price: "$1.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mc12.webp",
        spawn: "mc12"
    },
    242:{
        brand: "Maserati",
        name: "Ghibli",
        Price: "$80.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ghibli.png",
        spawn: "ghis2"
    },
    243:{
        brand: "Maserati",
        name: "MC GTS",
        Price: "$600.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mcgts.png",
        spawn: "mcgt4"
    },
    244:{
        brand: "Maserati",
        name: "Quaddroporte GTS",
        Price: "$140.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/quaddroporte.png",
        spawn: "mqgts"
    },
    245:{
        brand: "Maserati",
        name: "MC12",
        Price: "$2.200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mc12-2.webp",
        spawn: "sheava"
    },
    246:{
        brand: "Maserati",
        name: "Levante",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/levante.png",
        spawn: "levante"
    },
    247:{
        brand: "Maserati",
        name: "Levante Mansory",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mansorylevante.webp",
        spawn: "mlmansory"
    },
    248:{
        brand: "Maserati",
        name: "Levante Tuned",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mansorylevante.webp",
        spawn: "mlnovitec"
    },
    249:{
        brand: "Maserati",
        name: "Gran Turismo",
        Price: "$145.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/granturismo.png",
        spawn: "mgrantur2010"
    },
    250:{
        brand: "Mazda",
        name: "MX-5",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mx5.png",
        spawn: "blista3"
    },
    251:{
        brand: "Mazda",
        name: "Furai Concept",
        Price: "$4.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mazdafurai.png",
        spawn: "prototipo"
    },
    252:{
        brand: "McLaren",
        name: "P1",
        Price: "$1.200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mclarenp1.png",
        spawn: "p1"
    },
    253:{
        brand: "McLaren",
        name: "650S",
        Price: "$270.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/650s.png",
        spawn: "650s"
    },
    254:{
        brand: "McLaren",
        name: "720S",
        Price: "$299.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/720s.png",
        spawn: "720s"
    },
    255:{
        brand: "McLaren",
        name: "Elva",
        Price: "$1.700.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/elva.webp",
        spawn: "elva"
    },
    256:{
        brand: "McLaren",
        name: "Speedtail",
        Price: "$1.200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/speedtail.webp",
        spawn: "mcst"
    },
    257:{
        brand: "McLaren",
        name: "675LT",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/675lt.webp",
        spawn: "675lt"
    },
    258:{
        brand: "McLaren",
        name: "P1 GTR",
        Price: "$4.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/p1gtr.webp",
        spawn: "p1gtr"
    },
    259:{
        brand: "McLaren",
        name: "Senna",
        Price: "$2.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/senna.png",
        spawn: "senna"
    },
    260:{
        brand: "McLaren",
        name: "MP4 12C",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/mp412c.webp",
        spawn: "bestiagts"
    },
    261:{
        brand: "Mercedes",
        name: "A45 AMG",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/a45.webp",
        spawn: "a45"
    },
    262:{
        brand: "Mercedes",
        name: "Vision Mercedes Maybach 6",
        Price: "$4.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/maybach6.png",
        spawn: "mb6"
    },
    263:{
        brand: "Mercedes",
        name: "E400",
        Price: "$65.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/e4002.png",
        spawn: "e400"
    },
    264:{
        brand: "Mercedes",
        name: "GL63",
        Price: "$120.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gl63.png",
        spawn: "gl63"
    },
    265:{
        brand: "Mercedes",
        name: "CLK GTR AMG",
        Price: "$12.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/clkgtr.png",
        spawn: "le7b"
    },
    266:{
        brand: "Mercedes",
        name: "V250",
        Price: "$69.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/v250.webp",
        spawn: "v250"
    },
    267:{
        brand: "Mercedes",
        name: "AMG GT",
        Price: "$140.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/amggt.webp",
        spawn: "amggt"
    },
    268:{
        brand: "Mercedes",
        name: "C63 S AMG",
        Price: "$75.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/c63s.png",
        spawn: "c6320"
    },
    269:{
        brand: "Mercedes",
        name: "C63 Black Series",
        Price: "$5.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/dtm.webp",
        spawn: "c63hr"
    },
    270:{
        brand: "Mercedes",
        name: "CLS63 AMG",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/cls.png",
        spawn: "felon"
    },
    271:{
        brand: "Mercedes",
        name: "GT63S 4Door Coupe",
        Price: "$160.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/4doorcoupe.webp",
        spawn: "gt63s"
    },
    272:{
        brand: "Mercedes",
        name: "A160",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/a160.png",
        spawn: "macla"
    },
    273:{
        brand: "Mercedes",
        name: "S600",
        Price: "$14.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s600.png",
        spawn: "primo"
    },
    274:{
        brand: "Mercedes",
        name: "Maybach S650",
        Price: "$180.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s650.png",
        spawn: "19s650"
    },
    275:{
        brand: "Mercedes",
        name: "AMG GTS",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/amggts.png",
        spawn: "amggtr"
    },
    276:{
        brand: "Mercedes",
        name: "G65 AMG",
        Price: "$95.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/g65amg.jpeg",
        spawn: "dubsta"
    },
    277:{
        brand: "Mercedes",
        name: "E63 AMG",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/e63amg.png",
        spawn: "e63amg"
    },
    278:{
        brand: "Mercedes",
        name: "GLE 450",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gle450.webp",
        spawn: "gle450"
    },
    279:{
        brand: "Mercedes",
        name: "Actros Magellano",
        Price: "$1.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/magellano.jpeg",
        spawn: "mbhome"
    },
    280:{
        brand: "Mercedes",
        name: "SLS AMG",
        Price: "$210.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/slsamg.png",
        spawn: "slsamg"
    },
    281:{
        brand: "Mercedes",
        name: "CLS63",
        Price: "$105.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/cls.png",
        spawn: "12cls63"
    },
    282:{
        brand: "Mercedes",
        name: "AMG GTR",
        Price: "$170.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/amggtr.png",
        spawn: "amggtr2"
    },
    283:{
        brand: "Mercedes",
        name: "C63 W205",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/w205.png",
        spawn: "c63w205"
    },
    284:{
        brand: "Mercedes",
        name: "CLA45",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/cla45.png",
        spawn: "cla45sb"
    },
    285:{
        brand: "Mercedes",
        name: "CLS63 AMG",
        Price: "$110.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/cls63.png",
        spawn: "cls2015"
    },
    286:{
        brand: "Mercedes",
        name: "G63 Hybrid",
        Price: "$197.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/newg63.webp",
        spawn: "g632019"
    },
    287:{
        brand: "Mercedes",
        name: "S63 AMG",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s63amg.png",
        spawn: "mers63c"
    },
    288:{
        brand: "Mercedes",
        name: "ML63 AMG",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ml63.webp",
        spawn: "serrano"
    },
    289:{
        brand: "Mercedes",
        name: "C63 AMG Coupe",
        Price: "$80.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/c63scoupe.webp",
        spawn: "c63coupe"
    },
    290:{
        brand: "Mercedes",
        name: "300SL",
        Price: "$1.350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/300sl.webp",
        spawn: "feltzer3"
    },
    291:{
        brand: "Mercedes",
        name: "S500",
        Price: "$130.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s500.png",
        spawn: "s500w222"
    },
    292:{
        brand: "Mercedes",
        name: "AMG GTR Cabrio",
        Price: "$190.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gtrcabrio.png",
        spawn: "amggtr20"
    },
    293:{
        brand: "Mercedes",
        name: "Vision GT Concept",
        Price: "$2.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/visiongt.png",
        spawn: "mvsiongt"
    },
    294:{
        brand: "Mercedes",
        name: "Emperor Scaldarsi",
        Price: "$1.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/emporerscaldarsi.jpeg",
        spawn: "caldarsi"
    },
    295:{
        brand: "Mercedes",
        name: "E400",
        Price: "$86.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/e400.webp",
        spawn: "schafter5"
    },
    296:{
        brand: "Mini",
        name: "John Cooper Works",
        Price: "$10.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/johncooperworks.png",
        spawn: "issi2"
    },
    297:{
        brand: "Mini",
        name: "Abarth 595",
        Price: "$10.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/abarth595.png",
        spawn: "panto"
    },
    298:{
        brand: "Nissan",
        name: "R35 GTR",
        Price: "$120.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r35gtr.png",
        spawn: "gtr"
    },
    299:{
        brand: "Nissan",
        name: "R34 GTR NISMO",
        Price: "$250.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r34gtrnismo.png",
        spawn: "elegy2"
    },
    300:{
        brand: "Nissan",
        name: "Skyline R34 GTR",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r34gtr2.png",
        spawn: "skyline"
    },
    301:{
        brand: "Nissan",
        name: "Skyline R34 GTR",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r34gtr.png",
        spawn: "rmodskyliner34"
    },
    302:{
        brand: "Nissan",
        name: "R50 GTR",
        Price: "$1.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r50gtr.jpeg",
        spawn: "rmodgtr50"
    },
    303:{
        brand: "Nissan",
        name: "R32 GTR",
        Price: "$90.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r32gtr.webp",
        spawn: "stancedr32"
    },
    304:{
        brand: "Noble",
        name: "M600",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/m600.webp",
        spawn: "m600"
    },
    305:{
        brand: "Pagani",
        name: "Imola",
        Price: "$5.400.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/imola.png",
        spawn: "imola"
    },
    306:{
        brand: "Pagani",
        name: "Huayra",
        Price: "$2.600.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/huayra.webp",
        spawn: "osiris"
    },
    307:{
        brand: "Pagani",
        name: "Zonda R",
        Price: "$6.500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/zondar.png",
        spawn: "reaper"
    },
    308:{
        brand: "Peugeot",
        name: "107",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/107.png",
        spawn: "brioso"
    },
    309:{
        brand: "Porsche",
        name: "Macan turbo",
        Price: "$55.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/macanturbo.webp",
        spawn: "pm19"
    },
    310:{
        brand: "Porsche",
        name: "911 Carrera",
        Price: "$1.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/911carrera.png",
        spawn: "ztype"
    },
    311:{
        brand: "Porsche",
        name: "Cayman R",
        Price: "$65.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/caymanr.jpeg",
        spawn: "comet2"
    },
    312:{
        brand: "Porsche",
        name: "911 turbo S",
        Price: "$205.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/turbos.png",
        spawn: "turs21"
    },
    313:{
        brand: "Porsche",
        name: "GT2 RS",
        Price: "$350.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/gt2rs.png",
        spawn: "jester2"
    },
    314:{
        brand: "Porsche",
        name: "911 1973 WW2",
        Price: "$750.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/1973.webp",
        spawn: "porrs73"
    },
    315:{
        brand: "Porsche",
        name: "Panamera 4S",
        Price: "$117.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/panamera4s.png",
        spawn: "exemplar"
    },
    316:{
        brand: "Porsche",
        name: "959",
        Price: "$5.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/959.webp",
        spawn: "coquette3"
    },
    317:{
        brand: "RAM",
        name: "Rebel TRX",
        Price: "$80.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rebeltrx.webp",
        spawn: "trx"
    },
    318:{
        brand: "RAM",
        name: "2500",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/2500.png",
        spawn: "ram2500"
    },
    319:{
        brand: "RAM",
        name: "2500 Power Wagon",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/2500powerwagon.webp",
        spawn: "17powerwagon"
    },
    320:{
        brand: "Rolls Royce",
        name: "Ghost",
        Price: "$450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ghost.png",
        spawn: "superd"
    },
    321:{
        brand: "Rolls Royce",
        name: "Wraiht",
        Price: "$330.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/wraith2.png",
        spawn: "wraith"
    },
    322:{
        brand: "Rolls Royce",
        name: "Wraith",
        Price: "$330.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/wraith.png",
        spawn: "windsor"
    },
    323:{
        brand: "Rolls Royce",
        name: "Phantom",
        Price: "$500.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/phantom.png",
        spawn: "rrphantom"
    },
    324:{
        brand: "Land Rover",
        name: "Discovery 4",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/discovery4.png",
        spawn: "fx4"
    },
    325:{
        brand: "Land Rover",
        name: "Range Rover",
        Price: "$60.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rangerover.png",
        spawn: "rr12"
    },
    326:{
        brand: "Land Rover",
        name: "Range Rover ST",
        Price: "$70.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rrst.png",
        spawn: "rrst"
    },
    327:{
        brand: "Land Rover",
        name: "Range Rover SVR",
        Price: "$115.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rrsvr.webp",
        spawn: "svr16"
    },
    328:{
        brand: "Land Rover",
        name: "Range Rover Evoque",
        Price: "$50.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/evoque.png",
        spawn: "evoque"
    },
    329:{
        brand: "Saleen",
        name: "S7",
        Price: "$1.000.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/s7.webp",
        spawn: "ss7"
    },
    330:{
        brand: "Subaru",
        name: "BRZ",
        Price: "$65.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/brz.png",
        spawn: "sultanrs"
    },
    331:{
        brand: "Subaru",
        name: "Impreza",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/impreza.png",
        spawn: "ysbrimps11"
    },
    332:{
        brand: "Subaru",
        name: "WRX STI",
        Price: "$30.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/wrxsti.png",
        spawn: "subietuning"
    },
    333:{
        brand: "Tesla",
        name: "Model X",
        Price: "$130.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/modelx.png",
        spawn: "teslax"
    },
    334:{
        brand: "Tesla",
        name: "Model X Tuned",
        Price: "$150.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/modelxtuned.png",
        spawn: "p90d"
    },
    335:{
        brand: "Tesla",
        name: "Model 3",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/model3.png",
        spawn: "tmodel"
    },
    336:{
        brand: "Tesla",
        name: "Roadster",
        Price: "$200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/roadster.png",
        spawn: "tr22"
    },
    337:{
        brand: "Toyota",
        name: "Yaris",
        Price: "$15.500",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/yaris.png",
        spawn: "asea"
    },
    338:{
        brand: "Toyota",
        name: "Land Cruiser",
        Price: "$1.600",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/landcruiser.png",
        spawn: "mesa"
    },
    339:{
        brand: "Toyota",
        name: "Celica",
        Price: "$36.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/celica.webp",
        spawn: "zion"
    },
    340:{
        brand: "Toyota",
        name: "Prius",
        Price: "$16.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/prius.png",
        spawn: "dilettante"
    },
    341:{
        brand: "VW",
        name: "Touareg R50",
        Price: "$130.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r50.webp",
        spawn: "r50"
    },
    342:{
        brand: "VW",
        name: "Golf 8",
        Price: "$33.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/golf8.avif",
        spawn: "golf8"
    },
    343:{
        brand: "VW",
        name: "Passat",
        Price: "$27.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/passat.png",
        spawn: "passat"
    },
    344:{
        brand: "VW",
        name: "Tiguan TDI",
        Price: "$45.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/tiguantdi.png",
        spawn: "rocoto"
    },
    345:{
        brand: "VW",
        name: "Amarok",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/amarok.webp",
        spawn: "sadler"
    },
    346:{
        brand: "VW",
        name: "Golf JPP",
        Price: "$40.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/golfjpp.jpeg",
        spawn: "rmodmk7"
    },
    347:{
        brand: "VW",
        name: "Polo",
        Price: "$35.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/polo.png",
        spawn: "polo2018"
    },
    348:{
        brand: "VW",
        name: "Scirocco S",
        Price: "$25.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/sciroccos.webp",
        spawn: "sciroccos81"
    },
    349:{
        brand: "VW",
        name: "Golf GTI",
        Price: "$8.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/golfgti.png",
        spawn: "blista"
    },
    350:{
        brand: "Yamaha",
        name: "R6",
        Price: "$12.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/r6.png",
        spawn: "r6"
    },
    351:{
        brand: "Yamaha",
        name: "RJX1300",
        Price: "$6.200",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/rjx1300.jpeg",
        spawn: "pcj"
    },
    352:{
        brand: "Yamaha",
        name: "T-Max",
        Price: "$9.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/tmax.png",
        spawn: "tmax"
    },
    353:{
        brand: "Zenvo",
        name: "TS1",
        Price: "$1.200.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/ts1.webp",
        spawn: "ts1"
    },
    354:{
        brand: "Zenvo",
        name: "ZN20",
        Price: "$1.450.000",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/zn20.jpeg",
        spawn: "zn20"
    },
    355:{
        brand: "Vespa",
        name: "Vespa",
        Price: "$8.500",
        HP: "undefined",
        kph: "undefined",
        vmax: "undefined",
        Image: "../img/vespa.png",
        spawn: "faggio2"
    }

}