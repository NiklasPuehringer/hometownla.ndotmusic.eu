function lapd(){

    //document.getElementById("head").innerHTML = `<h1><img src="./img/lapd.png" alt="LAPD" id="logo"></h1>`
    document.getElementById("html").style.backgroundImage = `url(../img/LAPDBackground.jpeg)`
    
    
    document.getElementById("content").innerHTML = `
    <div id="pans">
    <h2>Chief of Police: John Marten</h2>
    <hr>
    <h3>The Los Angeles Police Department</h3>
    </div>
    <footer>
    <img src="./img/lapd.png" alt="LAMD" id="logo">
    </footer>
    
    `

}

function lamd(){
    //document.getElementById("head").innerHTML = `<h1><img src="./img/lamd.png" alt="LAMD" id="logo"></h1>`
    document.getElementById("html").style.backgroundImage = `url(../img/LAMDBackground.jpeg)`

    
    document.getElementById("content").innerHTML = `
    <div id="pans">
    <h2>Medical Chief: -Set Character Name-</h2>
    <hr>
    <h3>The Los Angeles Medical Department</h3>
    </div>
    <footer>
    <img src="./img/lamd.png" alt="LAMD" id="logo">
    </footer>
    `

}

function galaxy(){
    document.getElementById("head").innerHTML = `<h1><img src="./img/galaxy.png" alt="GALAXY" id="logo"></h1>`
    document.getElementById("html").style.backgroundImage = `url(./img/pdm.png)`

    document.getElementById("content").innerHTML = `
    <h2>Owner: Bryce Savage</h2>
    <hr>
    <h3>The Galaxy Corporation is one of the biggest background Companys existing.<br> Galaxy Corp. is the Company standing behind <a id="triviaLink" onclick="showCars()">"Premium Deluxe Motorsport"</a>,<br> "Benny's"/"Los Angeles Customs" and "Galaxy Nightlife"</h3>
    
    <img  class="break">
    <img src="./img/logo.png">
    <img src="./img/benny.png">
    <img src="./img/galaxyclub.jpg">
    `

}

function panercons(){
    document.getElementById("head").innerHTML = `<h1>Panercon's Real Estate Agency</h1>`
    document.getElementById("html").style.backgroundImage = `url(../img/RealEstateBackground.webp)`
    document.getElementById("content").innerHTML = `
    <div id="pans">
    <h2>Owner: Biggus Panercons</h2>
    <hr>
    <h3>Panercon’s Real Estate Agency is a history rich business, working with the most premium clients in the world,<br> and offering from the modern beach house<br> to the highest of penthouses with skyline-view!</h3>
    </div>`

}

