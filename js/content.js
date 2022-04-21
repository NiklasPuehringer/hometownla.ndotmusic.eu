let i = Math.floor(Math.random() * 14) + 1;
let random = i

var pics = ["https://pressakey.com/gfxsocial/Grand-Theft-Auto-V-news-10897.jpg",
"https://cdn.99images.com/photos/wallpapers/games/4k-gta-5%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-hsdax.jpg",
"https://wallpaperaccess.com/full/707182.jpg",
"https://i.pinimg.com/originals/ac/9a/3e/ac9a3ec5236bec8a3554c6022fc81a23.jpg",
"https://w.wallha.com/ws/13/ZsOqvhKi.jpg",
"https://www.teahub.io/photos/full/53-531827_gta-5-wallpaper-4k.jpg",
"https://i.pinimg.com/originals/ac/9a/3e/ac9a3ec5236bec8a3554c6022fc81a23.jpg",
"https://i.ytimg.com/vi/xr7kT41rJyA/maxresdefault.jpg",
"https://www.igta5.com/images/official-screenshot-overlooking-the-vinewood-sign-at-night.jpg",
"https://www.teahub.io/photos/full/287-2870761_gta-v-4k-wallpaper-3840x2160-gta-5-4k.jpg",
"https://wallpaperaccess.com/full/707179.jpg",
"https://www.teahub.io/photos/full/106-1067373_gta-v-wallpaper-4k.jpg","https://wallpaper.dog/large/17119411.jpg",
"https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-48mxz2-921067-Preview.webp",
"https://i.ytimg.com/vi/wjCpITRgtlw/maxresdefault.jpg"]

var carBG = ["https://wallpapercave.com/wp/wp7453309.jpg",
"https://i.pinimg.com/originals/e6/4a/4d/e64a4d4e28590e912f4f21934d0c9b82.jpg",
"https://i.ytimg.com/vi/HyB-szj4Xnw/maxresdefault.jpg",
"https://wallpapercave.com/wp/wp3191452.jpg",
"https://images.hdqwalls.com/wallpapers/gta-v-bugatti-divo-rl.jpg",
"https://wallpaperaccess.com/full/2020797.jpg",
"https://images.hdqwalls.com/wallpapers/drifting-cars-in-gta-5-4k-50.jpg",
"https://i.pinimg.com/originals/e4/3e/24/e43e24893af4bd5e9e07c1969bbccc20.jpg",
"https://wallpapercave.com/wp/wp7960327.jpg",
"https://img.gta5-mods.com/q75/images/2020-toyota-supra-mk-v-drift-machine-add-on-fivem-tuning/1127fa-1.png",
"https://img.gta5-mods.com/q95/images/2020-toyota-supra-mk-v-drift-machine-add-on-fivem-tuning/1127fa-EVE-20210901163551.004.png",
"https://wallpapercave.com/wp/wp3191452.jpg",
"https://wallpaperaccess.com/full/3378581.jpg",
"https://i.imgur.com/tQQtcz1.jpg",
"https://wallpapercave.com/wp/wp7453285.jpg"]


wallpaper()
function wallpaper() {
  console.log(i)
  document.getElementById("html").style.backgroundImage = `url(${pics[i]})`
  i = Math.floor(Math.random() * 14) + 1;
}




function companys() {
  document.getElementById("html").style.backgroundImage = `url(https://www.omadasearch.com/wp-content/uploads/2020/05/What-is-it-like-working-in-IT.jpg)`

  document.getElementById("staff").innerHTML = ``
    document.getElementById("content").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `<div class="navbar">
    <div id="stayLeft">
    <a onclick="home()">Home</a>
    </div>
    <div id="secondBlock">
    <div class="dropdown">
      <button class="dropbtn">Government Companys
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a onclick="lapd()">LAPD</a>
        <a onclick="lamd()">LAMD</a>
      </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Private Companys
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="galaxy()">Galaxy Corp.</a>
          <a onclick="panercons()">Panercons' Real Estate Agency</a>
        </div>
      </div>
      </div>
  </div>`
}

function realEstate() {
  document.getElementById("staff").innerHTML = ``
  document.getElementById("content").innerHTML = ``
  document.getElementById("html").style.backgroundImage = `url(https://res.cloudinary.com/trends-publishing/image/upload/dpr_2.0,g_center,w_640/f_auto,q_auto:eco/0151869.jpg)`
  document.getElementById("head").innerHTML = `<h1 id="panercons">Panercons' Real Estate Agency</h1>`
  document.getElementById("navigation").innerHTML = `<div class="navbar">
  <div id="stayLeft">
  <a onclick="home()">Home</a>
  </div>
  <div id="secondBlock">
  <div class="dropdown">
    <button class="dropbtn">Offices
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a onclick="mazebanktower()">Maze Bank Tower</a>
      <a onclick="mazebankwest()">Maze Bank West</a>
      <a onclick="lombank()">LOM Bank</a>
    </div>
  </div>
  <div class="dropdown">
      <button class="dropbtn">Living
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a onclick="eclipse()">Eclipse Tower</a>
        <a onclick="richards()">Richards Majestic</a>
        <a onclick="integrity()">4th Integrity Way</a>
        <a onclick="hotel()">Hotel</a>
        <a onclick="delperro()">Del Perro Hieghts</a>
        <a onclick="tinsel()">Tinsel Towers</a>
        <a onclick="beverly()">Houses</a>
      </div>
    </div>
    </div>
</div>`
}


function staff() {

  document.getElementById(`content`).innerHTML = ``
  
  document.getElementById("navigation").innerHTML = `<div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a id="currentNav" onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply</a>
    <a onclick="stgb()">StGB</a>
    </div>
    <div id="secondBlock">
    <a onclick="companys()">Companys</a>
    <a onclick="realEstate()">Panercons' Real Estate Agency</a>
    <a onclick="showCars()">Premium Deluxe Motorsport</a>
    </div>
</div>`

  document.getElementById("head").innerHTML = `<h1 id="law-main">STAFF</h1>`
  document.getElementById(`staff`).innerHTML = `<div class="staffbox">
        
        <h2>Niklas Puehringer</h2>
        <a><h4>Development | Teammanagement</h4></a>
        <h4>Stoner#4660</h4></a>
        <img src="./img/niki.png">
        
        </div>

        <div class="staffboxlower">
        
        <h2>Sebastian Toldo</h2>
        <a><h4>Modelling | Teammanagement</h4></a>
        <h4>Mezler#8386</h4></a>
        <img src="./img/toldo.png">
        
        </div>

        <div class="staffbox">
        
        <h2>Ninel Matko</h2>
        <a><h4>Research | Development</h4></a>
        <h4>Sn0w2410#3368</h4></a>
        <img src="./img/snow.jpeg">
        
        </div>




        
`
}

function sendapplication(){
  let name = document.getElementById("name").value
  let birthday = document.getElementById("birtday").value
  let steamid = document.getElementById("steamid").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value

  console.log(name + " " + birthday + " " + steamid + " " + email + " " + message) 

  document.getElementById("content").innerHTML = `<h1>Application has been sent</h1>`
}

function home() {
  console.log(i)
  document.getElementById("html").style.backgroundImage = `url(${pics[i]})`
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("content").innerHTML = ``
  document.getElementById("staff").innerHTML = ``
  document.getElementById('body').style.backgroundColor = 'rgba(255, 255, 255, 0.0)'
  document.getElementById("head").innerHTML = `<div class="wrapper2">
    <div class="typing-demo2">
      Hometown LA</div>
</div>`
  document.getElementById("navigation").innerHTML = `<div class="navbar">
    <div id="fistBlock">
    <a id="currentNav" onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply</a>
    <a onclick="stgb()">StGB</a>
    </div>
    <div id="secondBlock">
    <a onclick="companys()">Companys</a>
    <a onclick="realEstate()">Panercons' Real Estate Agency</a>
    <a onclick="showCars()">Premium Deluxe Motorsport</a>
    </div>
</div>`
}



function showCars() {
  let i = Math.floor(Math.random() * 14) + 1;
  console.log(i)
  document.getElementById("html").style.backgroundImage = `url(${carBG[i]})`
  document.getElementById("head").innerHTML = `<h1><img src="./img/logo.png" alt="Premium Deluxe Motorsport" id="logo"></h1>`
  document.getElementById("staff").innerHTML = ``
  document.getElementById("content").innerHTML = ``
  document.getElementById("navigation").innerHTML = `<div class="navbar">
  <div id="stayLeft">
    <a onclick="home()">Home</a>
    </div>
    <div id="secondBlock">
    <div class="dropdown">
      <button class="dropbtn">Exclusives
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a onclick="brabus()">Brabus</a>
        <a onclick="bugatti()">Bugatti</a>
        <a onclick="hennessy()">Hennessy</a>
        <a onclick="konigsegg()">Koenigsegg</a>
        <a onclick="libertywalk()">Liberty Walk</a>
        <a onclick="pagani()">Pagani</a>
        <a onclick="nobles()">Noble</a>
        <a onclick="rollsroyce()">Rolls Royce</a>
        <a onclick="lambo()">Lamborghini</a>
        <a onclick="ferrari()">Ferrari</a>
        <a onclick="zenvo()">Zenvo</a>
      </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Asian
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="honda()">Honda</a>
          <a onclick="hyundai()">Hyundai</a>
          <a onclick="infiniti()">Infiniti</a>
          <a onclick="kia()">KIA</a>
          <a onclick="nissan()">Nissan</a>
          <a onclick="subaru()">Subaru</a>
          <a onclick="toyota()">Toyota</a>
          <a onclick="mazda()">Mazda</a>
          <a onclick="lexus()">Lexus</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">American
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="dodge()">Dodge</a>
          <a onclick="ram()">RAM</a>
          <a onclick="saleen()">Saleen</a>
          <a onclick="tesla()">Tesla</a>
          <a onclick="buick()">Buick</a>
          <a onclick="cadillac()">Cadillac</a>
          <a onclick="chevrolet()">Chevrolet</a>
          <a onclick="chrysler()">Chrysler</a>
          <a onclick="ford()">Ford</a>
          <a onclick="jeep()">Jeep</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">German
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="audi()">Audi</a>
          <a onclick="bmw()">BMW</a>
          <a onclick="mercedes()">Mercedes</a>
          <a onclick="porsche()">Porsche</a>
          <a onclick="vw()">Volkswagen</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">European
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="alfaromeo()">Alfa Romeo</a>
          <a onclick="alpine()">Alpine</a>
          <a onclick="astonmartin()">Aston Martin</a>
          <a onclick="bentley()">Bentley</a>
          <a onclick="citroen()">Citroen</a>
          <a onclick="fiat()">Fiat</a>
          <a onclick="jaguar()">Jaguar</a>
          <a onclick="maserati()">Maserati</a>
          <a onclick="mclaren()">McLaren</a>
          <a onclick="mini()">Mini</a>
          <a onclick="peugeot()">Peugeot</a>
          <a onclick="landrover()">Land Rover</a>
          <a onclick="lotus()">Lotus</a>
        </div>
    </div>
      <div class="dropdown">
        <button class="dropbtn">Motorcycle
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="yamaha()">Yamaha</a>
          <a onclick="kawasaki()">Kawasaki</a>
          <a onclick="harley()">Harley-Davidson</a>
          <a onclick="vespa()">Vespa</a>
        
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Others
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a onclick="holden()">Holden</a>
      </div>
    </div>
    </div>
  </div>`
}





function apply() {
  console.log(i)
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("staff").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a id="currentNav" onclick="apply()">Apply</a>
    <a onclick="stgb()">StGB</a>
    </div>
    <div id="secondBlock">
    <a onclick="companys()">Companys</a>
    <a onclick="realEstate()">Panercons' Real Estate Agency</a>
    <a onclick="showCars()">Premium Deluxe Motorsport</a>
    </div>
</div>`
document.getElementById("content").innerHTML  = `<div class="wrapper15">
  <h3 class="h3" id="law-main">Apply for Whitelisting</h3>
  <form action="" method="POST">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input type="text" name="Name" id="name" placeholder="Eric Example" required minlength="3" maxlength="25" />
    </div>
    <div class="form-group">
    <label for="birthday">Birthday</label>
<input type="date" id="birthday" name="birthday" placeholder="TT.MM.JJJJ">
</div>
<div class="form-group">
      <label for="name">Steam ID64</label>
      <input type="text" name="Name" id="steamid" placeholder="00000000000000000" required minlength="17" maxlength="17" />
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" name="Email" id="email" placeholder="apply@hometown.la" required />
    </div>
    <div class="form-group">
      <label for="message">Backstory</label>
      <textarea name="Message" id="message" rows="5" placeholder="I am a Character"></textarea>
    </div>
    <div class="form-group">
      <button type="submit" onclick="sendapplication()" class="submit"><i class="far fa-paper-plane"></i>Send</button>
    </div>
  </form>
</div>`
}


function faq(){
  console.log(i)
  document.getElementById(`content`).innerHTML = ``
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("staff").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a id="currentNav" onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply</a>
    <a onclick="stgb()">StGB</a>
    </div>
    <div id="secondBlock">
    <a onclick="companys()">Companys</a>
    <a onclick="realEstate()">Panercons' Real Estate Agency</a>
    <a onclick="showCars()">Premium Deluxe Motorsport</a>
    </div>
</div>`
  document.getElementById(`content`).innerHTML = `

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-item-header">
        What is HometownLA?
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
          HometownLA is a English based GTAV Roleplay Server based on the QBCore Framework. The Server is currently in the state of an Closed-Beta, meaning the projects is in its final stage of completion.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-item-header">
        Why was this website created?
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
          This website was mainly created as a school project for Web-Development
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-item-header">
        What is the purpose of this website?
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
          This Website's purpose is to be an platform used to gather informations to both in-game and out-game topics.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-item-header">
        How can I join the Server?
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
          You can send an application in the APPLY Tab and with a little luck you can join too
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-item-header">
        What are the requirements to join the server?
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
          You have to be at least 16 Years old
        </div>
      </div>
    </div>
  </div>`

  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
}


function stgb(){
  console.log(i)
  document.getElementById(`content`).innerHTML = ``
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("staff").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply</a>
    <a id="currentNav" onclick="stgb()">StGB</a>
    </div>
    <div id="secondBlock">
    <a onclick="companys()">Companys</a>
    <a onclick="realEstate()">Panercons' Real Estate Agency</a>
    <a onclick="showCars()">Premium Deluxe Motorsport</a>
    </div>
</div>`
  document.getElementById(`content`).innerHTML = `

  <div id="law-main">
  <h1>Book of Law</h1> <hr>
  <h4>California / Hometown LA</h4>
  </div>

  <div class="accordion">

  <div id="law-main">
  <h4>Grundgesetze</h4>
  </div>
  <hr>
          
        <div class="accordion-item">
        <div class="accordion-item-header">
          Artikel 1 Keine Strafe ohne Gesetz
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Tat kann nur bestraft werden, wenn die Tat vor Ihrer Ausführung gesetzlich bestimmt war. <br>
          2. Unwissenheit schützt vor Strafe nicht.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 2 Täterschaft
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1.Als Täter wird bestraft, wer <br>
          1. eine strafbare Handlung selbst begeht <br>
          2. einen anderen dazu bestimmt sie auszuführen <br>
          3. zu ihrer Ausführung beiträgt. <br>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 3 Versuch
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Der Versuch eines Verbrechens oder die Beteiligung am Versuch ist ebenso strafbar wie die vollendete Tat.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 4 Anstiftung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer vorsätzlich einen anderen zu einer strafbaren Handlung anstiftet, wird dem Täter gleich bestraft.

        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 5 Notwehr
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Nicht rechtswidrig handelt, wer sich nur der Verteidigung bedient, die notwendig ist, um einen gegenwärtigen oder unmittelbar drohenden rechtswidrigen Angriff auf ein Rechtsgut abzuwehren.<br>
        2. Wer das gerechtfertigte Maß der Verteidigung überschreitet oder sich einer unangemessenen Verteidigung bedient, handelt rechtswidrig.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 6 Strafmaß Verschärfung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Die Strafe für eine rechtswidrige Handlung kann nach Ermessen der Beamten der Strafverfolgungsbehörden angepasst werden, sofern eine der folgenden Kriterien erfüllt ist:<br>
• Nr. 1 Wiederholungstäter | Als Wiederholungstäter gilt, wer sich innerhalb von drei Tagen wiederholt mit sich ähnelnden rechtswidrigen Handlungen strafbar macht.<br>
• Nr. 2 Unkooperatives Verhalten | Bei unkooperativen Verhalten gegenüber einem Amtsträger.<br>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 7 Rechtsfolge
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Rechtswidrige Handlungen können wie folgt bestraft werden:<br>
• Nr. 1 Vermögens- oder Sachstrafen<br>
(a) Geldstrafen können in Haftzeit umgewandelt werden.<br>
Hierbei werden $ 10.000 zu je zwanzig Hafteinheiten umgewandelt.<br>
• Nr. 2 Freiheitsstrafen<br>
• Nr. 3 Entzug von Berechtigungen und Lizenzen<br>
• Nr. 4 Todesstrafe<br>
(a) Die Strafe muss durch das Supreme Court California verkündet werden und durch das Parlament einstimmig ratifiziert werden. Erst mit den Unterschriften des Attorney General und des Präsidenten ist das Urteil rechtskräftig und darf vollstreckt werden.<br>
(b) Die Todesstrafe darf nur von einem, dem Staate California unterstellten Beamten ausgeführt werden. Die verurteilte Person wird per Kopfschuss hingerichtet. Nach dem Vollzug der Todesstrafe ist die verurteilte Person für 24 Stunden aus dem Staate California verbannt. Ein erneutes Erstellen der selben Persönlichkeit wird mit einem permanenten Ausschluss aus dem Projekt HTLA bestraft.<br>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 8 Bußgelder
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1.1 Wenn ein Bürger auf Grund einer oder mehreren Straftaten ein Bußgeld entrichten muss, ist ihm die Rechnung durch einen staatlich anerkannten Amtsträger der Exekutivbehörden auszustellen. Der Bürger ist verpflichtet dieser Aufforderung innerhalb einer Frist von 14 Tagen nach Erhalt nachzukommen. <br>
1.2 Jeder Bürger ist dazu verpflichtet ein Bußgeld, welches er durch einen staatlich anerkannten Amtsträger der Exekutivbehörden erhalten hat und den Betrag von 100.000$ nicht überschreitet, mit einer Frist von 14 Tagen zu begleichen. Wenn sich das Bußgeld auf mehr als 100.000 $ beläuft, kann sich der Bürger auf Artikel 8 Abs. 1.3 berufen.<br>
1.3 Ist es dem Schuldner nicht möglich das Bußgeld zu entrichten, so muss er seine prekäre Finanzlage nachweisen. Er ist verpflichtet seine gesamten Besitztümer und Finanzen der Exekutiv-/Judikativbehörde offen zu legen.<br>
        </div>
      </div>
    </div>

    <br>
    <div id="law-main">
  <h4>Allgemeine Gesetze</h4>
  </div>
  <hr>


        <div class="accordion-item">
      <div class="accordion-item-header">
        §1 Diebstahl
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache einem anderen mit dem Vorsatz wegnimmt, sich selbst oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §2.1 Raub
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache einem anderen durch Androhung oder Bedrohung entwendet, um sich selbst oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.<br><br>
        2. Wer einen Raub mit Androhung von Waffengewalt oder einer Waffe, die zur Bedrohung dient, verübt, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §2.2 Schwerer Raub
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen Raub unter Anwendung von Gewalt begeht, macht sich des schweren Raubs schuldig und ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.<br><br>
        2. Ein Diebstahl auf ein Geldinstitut, die Humane Labs oder den Juwelier stellt immer einen schweren Raub dar ungeachtet der benutzten Mittel.
                </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §3 Erpressung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen rechtswidrig mit Gewalt oder Drohung zu einer Handlung, Duldung oder Unterlassung nötigt, wird mit Freiheitsstrafe und/oder Geldstrafe bestraft.<br><br>
        2. Wenn der Täter im Interesse eines staatlich anerkanntem Gewerbe handelt bzw. als Mitglied einer Gruppierung oder als Mitglied einer staatlichen Exekutiv-/Judikativ Behörde handelt, liegt ein besonders schwerer Fall vor. Hierbei muss es zu einer Strafmaß Erhöhung kommen.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §4 Betrug
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen durch Täuschung am Vermögen schädigt, um sich oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §5 Körperverletzung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine andere Person misshandelt oder dessen Gesundheit schädigt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Wer eine Körperverletzung fahrlässig herbeiführt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        3. Zusätzlich kann die Zahlung eines Schmerzensgeldes durch ein Gericht angeordnet werden.<br>
                </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §6 Schwere Körperverletzung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine andere Person misshandelt oder dessen Gesundheit schädigt und dadurch ihre Bewusstlosigkeit oder schwere Folgen herbeiführt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Wer eine schwere Körperverletzung fahrlässig herbeiführt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        3. Zusätzlich kann die Zahlung eines Schmerzensgeldes durch ein Gericht angeordnet werden.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §7 Sachbeschädigung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache beschädigt, unbrauchbar macht oder zerstört, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Zusätzlich kann eine Schadensersatzzahlung durch ein Gericht angeordnet werden.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §8 Selbstjustiz
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Als Selbstjustiz wird die gesetzlich nicht zulässige Vergeltung für erlittenes Unrecht bezeichnet, die der Betroffene im eigenen Namen selbst ausübt. Der Täter ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §9.1 Versuchter Mord
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen,<br>
        •	aus Mordlust, Habgier oder sonst niedrigen Beweggründen<br>
        •	heimtückisch oder grausam<br>
        •	um eine Straftat zu ermöglichen oder zu verschleiern<br>
      versucht zu töten, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.        </div>
      </div>
    </div>

    <div class="accordion-item">
    <div class="accordion-item-header">
      §9.2 Mord
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      1. Wer einen anderen,<br>
      •	aus Mordlust, Habgier oder sonst niedrigen Beweggründen<br>
      •	heimtückisch oder grausam<br>
      •	um eine Straftat zu ermöglichen oder zu verschleiern<br>
    tötet, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.      </div>
    </div>
  </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        §10 Totschlag
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer durch eine fahrlässige Handlung den Tod eines Menschen verursacht, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>
        




        <div class="accordion-item">
        <div class="accordion-item-header">
          §11 Unterlassene Hilfeleistung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer bei Unglücksfällen oder Gefahr es unterlässt Hilfe zu leisten, obwohl dies den Umständen nach zumutbar und offensichtlich erforderlich ist, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Ebenso wird bestraft, wer in solchen Situationen einen Dritten daran hindert Hilfe zu leisten.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §12.1 Beleidigung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine andere Person beschimpft, verspottet oder Äußerungen tätigt, welche seine Ehre verletzen, wird mit einer Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        §12.2 Beamten Beleidigung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine Person verspottet, beleidigt, beschimpft oder Äußerungen tätigt welche seine Ehre verletzen, die offensichtlich als Beamter zu erkennen ist, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.<br><br>
        2. Als Beamte werden alle Mitarbeiter der Staatlichen Fraktionen bezeichnet.        </div>
      </div>
    </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §13 Rufmord
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einem anderen, eine verachtungswürdige, rufschädigende Eigenschaft oder ein geächtetes Verhalten nachsagt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2.1 Sollte dem Opfer ein Schaden entstehen, müssen die Schadensersatzansprüche durch ein Gericht festgelegt werden. Der Täter ist verpflichtet seine Schuld gegenüber dem Opfer sofort zu begleichen.<br><br>
          2.2 Sollte der Täter nicht über die nötigen Finanziellen Mittel verfügen, kann der Betrag auf mehrere Einzelzahlungen aufgeteilt werden. Die Einzelzahlung wird auf $50.000,00.- alle zwei Wochen begrenzt. Der Täter muss sich um die Einzelzahlungen kümmern.<br><br>
          2.3 Sollte der Täter seinen Verpflichtungen nicht nachkommen ist der Tatbestand des Betrugs anzuwenden. Das Opfer ist mit einer zusätzlichen Ausfallentschädigung in Höhe von 75% der in 2.1 festgelegten Summe zu berücksichtigen.<br><br>
          2.4 Der Täter muss die Zahlungen per Überweisung tätigen. Dem Opfer ist eine Schulderklärung auszuhändigen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §14.1 Drohung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen anderen bedroht, um ihn in Furcht oder Unruhe zu versetzen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §14.2 Morddrohung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen anderen mit dessen Tod oder dem Tod seiner Angehörigen in gerader Linie droht, um ihn in Furcht oder Unruhe zu versetzen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Eine Sicherheitsverwahrung kann durch das Gericht angeordnet werden.          </div>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          §15.1 Hausfriedensbruch
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer in die Wohnstätte bzw. in das befriedete Besitztum eines anderen eindringt oder ohne Befugnis darin verweilt, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          §15.2 Einbruch in Staatliche Einrichtungen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich auf illegale Weise den Zugang in Staatliche Einrichtungen ohne Genehmigung verschafft (z.B. durch einen Dietrich), wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §16 Freiheitsberaubung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Menschen gegen seinen Willen einsperrt oder auf andere Weise der Freiheit beraubt, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §17 Erpresserischer Menschenraub
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Menschen entführt oder sich eines Menschen bemächtigt, um sich selbst oder einen Dritten erpresserisch zu bereichern, indem er  <br>  
          (a) die Sorge des Opfers um das Wohlergehen seiner selbst<br>
      
          (b) die Sorge eines Dritten um das Wohlergehen des Opfers<br>
      
          (c) die durch seine Handlung geschaffene Lage eines Menschen<br>
      ausnutzt, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §18 Dokumentenfälschung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ein falsches Dokument erstellt oder ein echtes Dokument verfälscht, mit der Absicht, dass es im Rechtsverkehr gebraucht werde, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br>
          Zusätzlich kann eine Schadensersatzzahlung durch ein Gericht angeordnet werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §19.1 Entziehung Exekutiver Maßnahmen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich als Beteiligter einer Maßnahme der Exekutive entfernt oder vor einer flüchtet, um ggf. einer möglichen Strafe aus dem Weg zu gehen, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        §19.2 Nichtbeachten Exekutiver Maßnahmen
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Die Exekutive ist berechtigt einer Person, welche<br>

        (a) die Beamten an Ihrer Arbeit behindert oder stört<br>
    
        (b) eine Gefahr darstellt<br>
    
        (c) an einem Tatort nicht erwünscht ist<br>
    
    einen Platzverweis auszusprechen oder andere Maßnahmen zu ergreifen. Wer sich einer Anweisung der Exekutiven wie z.B. einem Platzverweis widersetzt und nicht Folge leistet, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.        </div>
      </div>
    </div>

    <div class="accordion-item">
    <div class="accordion-item-header">
      §19.3 Behinderung Staatlicher Maßnahmen
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      1. Wird ein Amtsträger bei einer Maßnahme so gestört, dass diese nur unter schweren Bedingungen fortgeführt werden kann, ist dies mit einer Freiheitsstrafe und einer Geldstrafe zu bestrafen.
      </div>
    </div>
  </div>

  <div class="accordion-item">
  <div class="accordion-item-header">
    §19.4 Wiederstand gegen die Staatsgewalt
  </div>
  <div class="accordion-item-body">
    <div class="accordion-item-body-content">
    1. Eine Person die einen Amtsträger,<br>
    •	durch eine Drohung<br>
    •	durch Gewalt<br>
    •	durch Ignoranz<br>
  an einer Amtshandlung hindert, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.    </div>
  </div>
</div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §20 Amtsanmaßung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich der Ausübung eines öffentlichen Amtes anmaßt, ohne dazu befugt zu sein, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
          


        <div class="accordion-item">
        <div class="accordion-item-header">
          §21 Missbräuchlicher Notruf
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer die Notruffunktion einer staatliche Behörde verwendet, ohne sich in einer Notsituation zu befinden, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §22 Fahrerflucht
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Ein Unfallbeteiligter, der sich nach einem Unfall rechtswidrig vom Unfallort entfernt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br>
          Das Ausmaß der Strafe richtet sich nach dem Ausmaß der Straftat.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §23 Verschleierungsverbot
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Person die in der Öffentlichkeit Kleidung trägt, die dazu bestimmt ist, das Gesicht zu verbergen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Von Abs. 1 ausgenommen sind Amtsträger des SWAT und FIB welche in Dienstkleidung gekleidet sind.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §24 Sperrbezirke
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Das Betreten und/oder Überfliegen von Sperrbezirken ohne Genehmigung ist verboten. Verstöße werden mit einer Freiheitsstrafe und Geldstrafe bestraft.<br><br>
          2. Als Sperrbezirke gelten:<br>
            •	Nr. 1 Bolingbroke Penitentiary (State Prison)<br>
            •	Nr. 2 Fort Zancudo (Military Base)<br>
            •	Nr. 3 Von der Exekutive ausgerufene temporäre Sperrzonen<br>
            •	Nr. 4 Das Gelände sowie Gebäude des Governments<br>
            •	Nr. 5 Das Gelände sowie Gebäude des Federal Investigation Bureau<br>
            •	Nr. 6 Das Gelände sowie Gebäude des Los Angeles Police Departments          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §25 Identitätsfeststellung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Jeder Bürger ist verpflichtet sich einem Amtsträger gegenüber ausweisen zu können.<br><br>
          2. Sollte die Identität nicht festgestellt werden können, ist die Person bis zur Ermittlung ihrer Identität festzusetzen und ggf. mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          3. Amtsträger müssen sich gegenüber Bürgern auf Verlangen mit ihrem Dienstausweis ausweisen. Davon ausgenommen sind das SWAT und FIB, diese müssen sich mit ihren jeweiligen SWAT oder Agent Nummern ausweisen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §26 Vortäuschung einer Straftat
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einem Amtsträger vortäuscht, dass eine rechtswidrige Tat begangen worden ist oder die Ausführung einer rechtswidrigen Tat bevorsteht, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §27 Belehrung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Person, die von der Exekutive festgesetzt wird, ist unverzüglich und direkt auf ihre Rechte hinzuweisen.<br><br>
          2. Die Belehrung lautet wie folgt:<br>
            •	"Sie haben das Recht zu schweigen, alles was Sie sagen kann und wird vor Gericht gegen Sie verwendet werden. Sie haben das Recht auf einen staatlich geprüften Anwalt, sollten Sie sich keinen leisten können, so stellt Ihnen der Staat California einen zur Verfügung. Sollte kein Anwalt verfügbar sein, so müssen Sie sich selbst verteidigen. Sie können jederzeit die Justiz hinzuziehen (Ab 90 Hafteinheiten ist die Exekutive dazu verpflichtet die Justiz hinzuzuziehen). Sollte die Justiz nicht erreichbar sein so übernimmt die Exekutive die Judikative. Haben Sie Ihre Rechte verstanden?”<br><br>
          3. Wird die Belehrung vergessen, unvollständig oder fehlerhaft vorgelesen, sind alle Aussagen nicht für den Strafbestand zu verwenden. Alle Aussagen, die nach der Belehrung getätigt werden, dürfen für den Strafbestand und die zugehörige Ermittlung verwendet werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §28 Entzug der Fahrerlaubnis
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wird jemand wegen einer rechtswidrigen Tat, die er bei oder im Zusammenhang mit dem Führen eines Kraftfahrzeugs oder unter Verletzung der Pflichten eines Fahrzeugführers begangen hat so kann ihm je nach Schwere der Tat, ab 15 Verkehrspunkten, die Fahrerlaubnis entzogen werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §29 Besitz illegaler Gegenstände
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ohne ausdrückliche Genehmigung illegale Gegenstände besitzt oder diese lagert, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Als illegal deklarierte Gegenstände gelten:<br>
            •	Ausrüstungsgegenstände und Kleidungsstücke, die von der Regierung an Amtsträger herausgegeben werden.<br>
            •	Schwarzgeld oder gefälschtes Geld in jeglicher Art und Form.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §30 Strafmilderung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Strafe kann gemildert werden, wenn der Täter:<br>
          •	durch freiwilliges Offenbaren seines Wissens wesentlich dazu beigetragen hat, dass eine Straftat aufgedeckt werden konnte<br>
          •	freiwillig sein Wissen rechtzeitig der Exekutiven offenbart, sodass eine Straftat verhindert werden kann.          </div>
        </div>
      </div>
                  



        <div class="accordion-item">
        <div class="accordion-item-header">
          §31 Verjährungsfristen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Die Verjährung schließt die Ahndung der Tat und die Anordnung von Maßnahmen.<br><br>
          2. Freiheitsstrafen ab 150 Hafteinheiten verjähren nicht.<br><br>
          3. Soweit die Verfolgung verjährt, beträgt die Verjährungsfrist:<br>
            •	5 Tage bei einer Freiheitsstrafe von bis zu 49 Hafteinheiten<br>
            •	10 Tage bei einer Freiheitsstrafe von 50 bis 99 Hafteinheiten<br>
            •	15 Tage bei einer Freiheitsstrafe von 100 bis 149 Hafteinheiten<br><br>
          4. Die Verjährung ruht, mit der Einleitung eines Verfahrens durch die Exekutive.<br><br>
          5. Ein Richter kann die Verjährungsfrist vor ihrem Ablauf, auf Antrag der Staatsanwaltschaft, einmal um die Hälfte der gesetzlichen Verjährungsfrist verlängern.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §32 Unterschlagung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine fremde bewegliche Sache sich oder einem Dritten rechtswidrig aneignet, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>

          2. Wer Beweise zur Klärung von Straftaten oder Ermittlungen bewusst zurückhält, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §33 Kriminelle Vereinigung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine kriminelle Vereinigung ist ein auf längere Dauer angelegter Zusammenschluss von Personen, deren Zweck oder Tätigkeit auf die Begehung von Straftaten ausgerichtet ist.<br><br>
          2. Eine kriminelle Vereinigung muss durch einen Beschluss von einem Richter oder Staatsanwalt als solche deklariert werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §34 Bilding terroristischer Vereinigungen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer unbefugt eine Gruppe, die darauf ausgelegt ist, die staatliche Ordnung zu gefährden,<br>
          •	bildet oder befehligt<br>
          •	einer solchen Gruppe anschließt<br>
          •	sie mit Waffen oder Geld versorgt<br>
          •	oder in anderer Form unterstützt<br>
        ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §35 Sexuelle Belästigugn
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine andere Person in sexuell bestimmter Weise belästigt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Eine sexuelle Belästigung ist jedes unerwünschte, sexuell bestimmte Verhalten, wozu auch unerwünschte sexuelle Handlungen und Aufforderungen zu diesen, sexuell bestimmte körperliche Berührungen und Bemerkungen sexuellen Inhalts gehören, welches bezweckt oder bewirkt, dass die Würde der betreffenden Person verletzt wird.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §36 Gefangenenbefreiung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Gefangenen befreit, ihn zum Entweichen verleitet oder dabei fördert, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.<br><br>
          2. Ein besonders schwerer Fall liegt vor, wenn der Täter als Amtsträger oder als Mitglied einer Gruppe handelt.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §37 Falschaussage 
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer bei seiner förmlichen Vernehmung uneidlich falsch aussagt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Wer vor Gericht falsch schwört, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §38 Korruption
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Mit Freiheitsstrafe und/oder Geldstrafe wird bestraft, wer im geschäftlichen Verkehr einem Angestellten oder Beauftragter jeglicher Fraktionen:<br>
          •	einen Vorteil für sich oder einen Dritten als Gegenleistung dafür fordert, sich versprechen lässt oder annimmt, dass er bei dem Bezug von Waren oder Dienstleistungen einen anderen im inländischen oder ausländischen Wettbewerb in unlauterer Weise bevorzuge<br>
          •	ohne Einwilligung der Fraktion einen Vorteil für sich oder einen Dritten als Gegenleistung dafür fordert, sich versprechen lässt oder annimmt, dass er bei dem Bezug von Waren oder Dienstleistungen eine Handlung vornehme oder unterlasse und dadurch seine Pflichten gegenüber dem Unternehmen verletzte.<br><br>
          2. Ebenso wird bestraft, wer im geschäftlichen Verkehr einem Angestellten oder Beauftragten jeglicher Fraktionen:<br>
	•	einen Vorteil für diesen oder einen Dritten als Gegenleistung dafür anbietet, verspricht oder gewährt, dass er bei dem Bezug von Waren oder Dienstleistungen ihn oder einen anderen im inländischen oder ausländischen Wettbewerb in unlauterer Weise bevorzuge<br>
	•	ohne Einwilligung der Fraktion einen Vorteil für diesen oder einen Dritten als Gegenleistung dafür anbietet, verspricht oder gewährt, dass er bei dem Bezug von Waren oder Dienstleistungen eine Handlung vornehme oder unterlasse und dadurch seine Pflichten gegenüber dem Unternehmen verletze.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §39 Cop-Net Daten
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Da im Cop-Net vertrauliche Informationen, sowie interne Geheimnisse (Betriebsgeheimnisse) zu finden sind, ist die Weitergabe, sowie die Nutzung nach Austritt aus einer Staatsfraktion verboten und wird mit einer Geldstrafe und/oder Freiheitsstrafe bestraft. Bei dem Verstoß gegen diesen Paragraphen wird ebenfalls gegen §38 Korruption verstoßen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          §40 Hochverrat
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ein Staatsgeheimnis,<br>
          •	einer fremden Macht oder einem ihrer Mittelsmänner mitteilt<br>
          •	an einen Unbefugten gelangen lässt<br>
          •	öffentlich bekannt macht<br>
        um den Staat California zu benachteiligen oder eine fremde Macht zu begünstigen, und dadurch die Gefahr eines schweren Nachteils für die äußere oder innere Sicherheit des Staates California herbeiführt, wird mit 15.000 Monaten Haftzeit bestraft.<br><br>
        2. In besonders schweren Fällen kann die Haftzeit vor Gericht zusätzlich erhöht werden.<br>
        Ein besonders schwerer Fall liegt in der Regel vor, wenn der Täter,<br>
          •	eine verantwortliche Stellung missbraucht, die ihn zur Wahrung von Staatsgeheimnissen besonders verpflichtet<br>
          •	durch die Tat die Gefahr eines besonders schweren Nachteils für die äußere oder innere Sicherheit des Staates California herbeiführt<br><br>
        3. Außerdem kann eine Gruppierung bestraft werden, welche die innere Sicherheit mehrfach massiv gefährdet und somit den gesamten Staat langsam zum Verfall bringen.<br><br>
        4. Durch § 40 Abs. 3 wird Artikel 7 des Grundgesetzes außer Kraft gesetzt, damit die innere Sicherheit gewährleistet/wiederhergestellt werden kann.          </div>
        </div>
      </div>
          
  
  
        </div>
      </div>
    </div>
  </div>`

  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
}





