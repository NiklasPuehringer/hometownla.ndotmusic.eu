            // Function to set image dimensions
            function enlargeImg() {
                document.getElementById("img1").style.width = "60%";
                img.style.height = "auto";
                img.style.transition = "width 0.5s ease";
            }
            // Function to reset image dimensions
            function resetImg() {
                img.style.width = "40%";
                img.style.height = "auto";
                img.style.transition = "width 0.5s ease";
            }

function mazebanktower() {
    document.getElementById("html").style.backgroundImage = `url(./img/mazebanktower.png)`
    document.getElementById("head").innerHTML = `<h1></h1>`


    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 1; i < 10; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}


function mazebankwest() {
    document.getElementById("html").style.backgroundImage = `url(./img/mazebankwest.png)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 10; i < 19; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function lombank() {
    document.getElementById("html").style.backgroundImage = `url(./img/lombank.jpg)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 19; i < 28; i++) {

        document.getElementById(`content`).innerHTML +=
            `<div class="box">
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}





function beverly() {
    document.getElementById("html").style.backgroundImage = `url(./img/beverly.jpg)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 59; i < 75; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function eclipse() {
    document.getElementById("html").style.backgroundImage = `url(./img/eclipse.jpg)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 35; i < 59; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function richards() {
    document.getElementById("html").style.backgroundImage = `url(./img/richards.png)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 28; i < 29; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function integrity() {
    document.getElementById("html").style.backgroundImage = `url(./img/integ.jpg)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 29; i < 31; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function hotel() {
    document.getElementById("html").style.backgroundImage = `url(./img/templar.jpg)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 31; i < 32; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function delperro() {
    document.getElementById("html").style.backgroundImage = `url(./img/delperro.png)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 32; i < 34; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

function tinsel() {
    document.getElementById("html").style.backgroundImage = `url(./img/tinsel.png)`
    document.getElementById("head").innerHTML = `<h1></h1>`

    document.getElementById(`content`).innerHTML = ``
    document.getElementById(`content`).style.opacity = 100
    document.getElementById(`staff`).innerHTML = ``

    for (let i = 34; i < 35; i++) {

        document.getElementById(`content`).innerHTML += 
            `<div class="box">
            <h4>${realestate[i].Building}</h4>
            <h3 class="headline">${realestate[i].name}</h3>
            <img class="realestateimgs" src="${realestate[i].Image}">
            <h4>Price: ${realestate[i].Price}</h4>
            <h5>Sold: ${realestate[i].Sold}</h5>
            </div>`
    }
}

var realestate = {
    1: {
        label: "office",
        name: "Old Spice Warm",
        Building: "Maze Bank Tower",
        Price: "$8.300.000",
        Image: "./img/oldWarms.png",
        Sold: "No"
    },
    2:{
        label: "office",
        name: "Old Spice Classical",
        Building: "Maze Bank Tower",
        Price: "$10.500.000",
        Image: "./img/oldClass.png",
        Sold: "No"
    },
    3:{
        label: "office",
        name: "Old Spice Vintage",
        Building: "Maze Bank Tower",
        Price: "$6.100.000",
        Image: "./img/oldVint.png",
        Sold: "No"
    },
    4:{
        label: "office",
        name: "Executive Rich",
        Building: "Maze Bank Tower",
        Price: "$7.200.000",
        Image: "./img/exRich.png",
        Sold: "No"
    },
    5:{
        label: "office",
        name: "Executive Cool",
        Building: "Maze Bank Tower",
        Price: "$9.400.000",
        Image: "./img/exCool.png",
        Sold: "No"
    },
    6:{
        label: "office",
        name: "Executive Contrast",
        Building: "Maze Bank Tower",
        Price: "$11.600.000",
        Image: "./img/exCont.png",
        Sold: "No"
    },
    7:{
        label: "office",
        name: "Power Broker Ice",
        Building: "Maze Bank Tower",
        Price: "$15.000.000",
        Image: "./img/brokerIce.png",
        Sold: "No"
    },
    8:{
        label: "office",
        name: "Power Broker Conservative",
        Building: "Maze Bank Tower",
        Price: "$12.700.000",
        Image: "./img/brokerCons.png",
        Sold: "No"
    },
    9:{
        label: "office",
        name: "Power Broker Polished",
        Building: "Maze Bank Tower",
        Price: "$13.800.000",
        Image: "./img/brokerPolished.png",
        Sold: "No"
    },

    10:{
        label: "office",
        name: "Old Spice Warm",
        Building: "Maze Bank West",
        Price: "$4.300.000",
        Image: "./img/oldWarms.png",
        Sold: "No"
    },
    11:{
        label: "office",
        name: "Old Spice Classical",
        Building: "Maze Bank West",
        Price: "$6.500.000",
        Image: "./img/oldClass.png",
        Sold: "No"
    },
    12:{
        label: "office",
        name: "Old Spice Vintage",
        Building: "Maze Bank West",
        Price: "$2.100.000",
        Image: "./img/oldVint.png",
        Sold: "No"
    },
    13:{
        label: "office",
        name: "Executive Rich",
        Building: "Maze Bank West",
        Price: "$3.200.000",
        Image: "./img/exRich.png",
        Sold: "No"
    },
    14:{
        label: "office",
        name: "Executive Cool",
        Building: "Maze Bank West",
        Price: "$5.400.000",
        Image: "./img/exCool.png",
        Sold: "No"
    },
    15:{
        label: "office",
        name: "Executive Contrast",
        Building: "Maze Bank West",
        Price: "$7.600.000",
        Image: "./img/exCont.png",
        Sold: "No"
    },
    16:{
        label: "office",
        name: "Power Broker Ice",
        Building: "Maze Bank West",
        Price: "$11.000.000",
        Image: "./img/brokerIce.png",
        Sold: "No"
    },
    17:{
        label: "office",
        name: "Power Broker Conservative",
        Building: "Maze Bank West",
        Price: "$8.700.000",
        Image: "./img/brokerCons.png",
        Sold: "No"
    },
    18:{
        label: "office",
        name: "Power Broker Polished",
        Building: "Maze Bank West",
        Price: "$9.800.000",
        Image: "./img/brokerPolished.png",
        Sold: "No"
    },
    19:{
        label: "office",
        name: "Old Spice Warm",
        Building: "LOM Bank",
        Price: "$6.300.000",
        Image: "./img/oldWarms.png",
        Sold: "Yes"
    },
    20:{
        label: "office",
        name: "Old Spice Classical",
        Building: "LOM Bank",
        Price: "$8.500.000",
        Image: "./img/oldClass.png",
        Sold: "Yes"
    },
    21:{
        label: "office",
        name: "Old Spice Vintage",
        Building: "LOM Bank",
        Price: "$4.100.000",
        Image: "./img/oldVint.png",
        Sold: "Yes"
    },
    22:{
        label: "office",
        name: "Executive Rich",
        Building: "LOM Bank",
        Price: "$5.200.000",
        Image: "./img/exRich.png",
        Sold: "Yes"
    },
    23:{
        label: "office",
        name: "Executive Cool",
        Building: "LOM Bank",
        Price: "$7.400.000",
        Image: "./img/exCool.png",
        Sold: "Yes"
    },
    24:{
        label: "office",
        name: "Executive Contrast",
        Building: "LOM Bank",
        Price: "$9.600.000",
        Image: "./img/exCont.png",
        Sold: "Yes"
    },
    25:{
        label: "office",
        name: "Power Broker Ice",
        Building: "LOM Bank",
        Price: "$13.000.000",
        Image: "./img/brokerIce.png",
        Sold: "Yes"
    },
    26:{
        label: "office",
        name: "Power Broker Conservative",
        Building: "LOM Bank",
        Price: "$10.700.000",
        Image: "./img/brokerCons.png",
        Sold: "Yes"
    },
    27:{
        label: "office",
        name: "Power Broker Polished",
        Building: "LOM Bank",
        Price: "$11.800.000",
        Image: "./img/brokerPolished.png",
        Sold: "Yes"
    },


    28:{
        label: "apartment",
        name: "Apartment 2",
        Building: "Richards Majestic",
        Price: "$5.000.000",
        Image: "./img/apt.jpg",
        Sold: "No"
    },
    29:{
        label: "apartment",
        name: "Integrity Way 28",
        Building: "4th Integrity Way",
        Price: "$6.000.000",
        Image: "./img/apt2.jpg",
        Sold: "Yes"
    },
    30:{
        label: "apartment",
        name: "Integrity Way 30",
        Building: "4th Integrity Way",
        Price: "$6.000.000",
        Image: "./img/apt2.jpg",
        Sold: "No"
    },
    31:{
        label: "apartment",
        name: "Hotel",
        Building: "Hotel",
        Price: "On Demand",
        Image: "./img/lowend.jpg",
        Sold: "No"
    },
    32:{
        label: "apartment",
        name: "Apartment 30",
        Building: "Del Perro Heights",
        Price: "$8.000.000",
        Image: "./img/apt.jpg",
        Sold: "No"
    },
    33:{
        label: "apartment",
        name: "Apartment 28",
        Building: "Del Perro Heights",
        Price: "$9.000.000",
        Image: "./img/apt2.jpg",
        Sold: "No"
    },
    34:{
        label: "apartment",
        name: "Apartment 42",
        Building: "Tinsel Towers",
        Price: "$7.700.000",
        Image: "./img/apt2.jpg",
        Sold: "No"
    },
    35:{
        label: "apartment",
        name: "Modern 1",
        Building: "Eclipse Tower",
        Price: "$10.000.000",
        Image: "./img/modern.jpg",
        Sold: "No"
    },
    36:{
        label: "apartment",
        name: "Modern 2",
        Building: "Eclipse Tower",
        Price: "$10.000.000",
        Image: "./img/modern.jpg",
        Sold: "No"
    },
    37:{
        label: "apartment",
        name: "Modern 3",
        Building: "Eclipse Tower",
        Price: "$10.000.000",
        Image: "./img/modern.jpg",
        Sold: "No"
    },
    38:{
        label: "apartment",
        name: "Moody 1",
        Building: "Eclipse Tower",
        Price: "$9.500.000",
        Image: "./img/moody.jpg",
        Sold: "No"
    },
    39:{
        label: "apartment",
        name: "Moody 2",
        Building: "Eclipse Tower",
        Price: "$9.500.000",
        Image: "./img/moody.jpg",
        Sold: "No"
    },
    40:{
        label: "apartment",
        name: "Moody 3",
        Building: "Eclipse Tower",
        Price: "$9.500.000",
        Image: "./img/moody.jpg",
        Sold: "No"
    },
    41:{
        label: "apartment",
        name: "Vibrant 1",
        Building: "Eclipse Tower",
        Price: "$7.000.000",
        Image: "./img/vibrant.jpg",
        Sold: "No"
    },
    42:{
        label: "apartment",
        name: "Vibrant 2",
        Building: "Eclipse Tower",
        Price: "$7.000.000",
        Image: "./img/vibrant.jpg",
        Sold: "No"
    },
    43:{
        label: "apartment",
        name: "Vibrant 3",
        Building: "Eclipse Tower",
        Price: "$7.000.000",
        Image: "./img/vibrant.jpg",
        Sold: "No"
    },
    44:{
        label: "apartment",
        name: "Sharp 1",
        Building: "Eclipse Tower",
        Price: "$8.500.000",
        Image: "./img/sharp.jpg",
        Sold: "No"
    },
    45:{
        label: "apartment",
        name: "Sharp 2",
        Building: "Eclipse Tower",
        Price: "$8.500.000",
        Image: "./img/sharp.jpg",
        Sold: "No"
    },
    46:{
        label: "apartment",
        name: "Sharp 3",
        Building: "Eclipse Tower",
        Price: "$8.500.000",
        Image: "./img/sharp.jpg",
        Sold: "No"
    },
    47:{
        label: "apartment",
        name: "Monochrome 1",
        Building: "Eclipse Tower",
        Price: "$12.000.000",
        Image: "./img/monochrome.jpg",
        Sold: "No"
    },
    48:{
        label: "apartment",
        name: "Monochrome 2",
        Building: "Eclipse Tower",
        Price: "$12.000.000",
        Image: "./img/monochrome.jpg",
        Sold: "No"
    },
    49:{
        label: "apartment",
        name: "Monochrome 3",
        Building: "Eclipse Tower",
        Price: "$12.000.000",
        Image: "./img/monochrome.jpg",
        Sold: "No"
    },
    50:{
        label: "apartment",
        name: "Seductive 1",
        Building: "Eclipse Tower",
        Price: "$9.000.000",
        Image: "./img/seductive.jpg",
        Sold: "No"
    },
    51:{
        label: "apartment",
        name: "Seductive 2",
        Building: "Eclipse Tower",
        Price: "$9.000.000",
        Image: "./img/seductive.jpg",
        Sold: "No"
    },
    52:{
        label: "apartment",
        name: "Seductive 3",
        Building: "Eclipse Tower",
        Price: "$9.000.000",
        Image: "./img/seductive.jpg",
        Sold: "No"
    },
    53:{
        label: "apartment",
        name: "Regal 1",
        Building: "Eclipse Tower",
        Price: "$7.500.000",
        Image: "./img/regal.jpg",
        Sold: "No"
    },
    54:{
        label: "apartment",
        name: "Regal 2",
        Building: "Eclipse Tower",
        Price: "$7.500.000",
        Image: "./img/regal.jpg",
        Sold: "No"
    },
    55:{
        label: "apartment",
        name: "Regal 3",
        Building: "Eclipse Tower",
        Price: "$7.500.000",
        Image: "./img/regal.jpg",
        Sold: "No"
    },
    56:{
        label: "apartment",
        name: "Aqua 1",
        Building: "Eclipse Tower",
        Price: "$8.000.000",
        Image: "./img/aqua.jpg",
        Sold: "No"
    },
    57:{
        label: "apartment",
        name: "Aqua 2",
        Building: "Eclipse Tower",
        Price: "$8.000.000",
        Image: "./img/aqua.jpg",
        Sold: "No"
    },
    58:{
        label: "apartment",
        name: "Aqua 3",
        Building: "Eclipse Tower",
        Price: "$8.000.000",
        Image: "./img/aqua.jpg",
        Sold: "No"
    },
    59:{
        label: "apartment",
        name: "Wayne Thunder",
        Building: "Wayne Thunder",
        Price: "$2.000.000",
        Image: "./img/wayne.jfif",
        Sold: "No"
    },
    60:{
        label: "apartment",
        name: "Bungalow",
        Building: "Hillcrest Avenue 2874",
        Price: "$3.000.000",
        Image: "./img/2874.jpg",
        Sold: "No"
    },
    61:{
        label: "apartment",
        name: "Bungalow",
        Building: "Hillcrest Avenue 2868",
        Price: "$4.000.000",
        Image: "./img/2868.jpg",
        Sold: "No"
    },
    62:{
        label: "apartment",
        name: "Bungalow",
        Building: "Hillcrest Avenue 2862",
        Price: "$7.000.000",
        Image: "./img/2862.jpg",
        Sold: "No"
    },
    63:{
        label: "apartment",
        name: "Bungalow",
        Building: "Wild Oats Drive 3655",
        Price: "$8.500.000",
        Image: "./img/wildoats.png",
        Sold: "No"
    },
    64:{
        label: "apartment",
        name: "Bungalow",
        Building: "Whispymound Drive 3677",
        Price: "$5.000.000",
        Image: "./img/whispy.jpg",
        Sold: "No"
    },
    65:{
        label: "apartment",
        name: "Bungalow",
        Building: "Whispymound Drive 3671",
        Price: "$13.000.000",
        Image: "./img/franklin.jpg",
        Sold: "No"
    },
    66:{
        label: "apartment",
        name: "Bungalow",
        Building: "North Conker Avenue 2044",
        Price: "$7.000.000",
        Image: "./img/2044.png",
        Sold: "No"
    },
    67:{
        label: "apartment",
        name: "Villa",
        Building: "North Conker Avenue 2045",
        Price: "$5.000.000",
        Image: "./img/2045.png",
        Sold: "No"
    },
    68:{
        label: "apartment",
        name: "Villa",
        Building: "Edwood Way",
        Price: "$15.000.000",
        Image: "./img/desantavilla.jpg",
        Sold: "Yes"
    },
    69:{
        label: "apartment",
        name: "Mansion",
        Building: "Americano Way",
        Price: "$55.000.000",
        Image: "./img/playboy.png",
        Sold: "No"
    },
    70:{
        label: "apartment",
        name: "Bungalow",
        Building: "North Avenue 1026",
        Price: "$15.000.000",
        Image: "./img/north.png",
        Sold: "No"
    },
    71:{
        label: "apartment",
        name: "Ranch",
        Building: "La Fuente Blanca",
        Price: "$65.000.000",
        Image: "./img/lafuenteblanca.png",
        Sold: "No"
    },
    72:{
        label: "apartment",
        name: "Vineyard",
        Building: "Marlowe Valley",
        Price: "$96.000.000",
        Image: "./img/vineyard.png",
        Sold: "No"
    },
    73:{
        label: "apartment",
        name: "Villa",
        Building: "Savage Drive 42",
        Price: "$33.000.000",
        Image: "./img/crni.jpg",
        Sold: "Yes"
    },
    74:{
        label: "apartment",
        name: "Mansion",
        Building: "Western Highway 7709",
        Price: "$183.000.000",
        Image: "./img/malibu.jpg",
        Sold: "Yes"
    }
}