let i = Math.floor(Math.random() * 14) + 1;
let random = i



var pics = [
"../img/wallpaper0.jpeg",
"../img/wallpaper1.jpeg",
"../img/wallpaper2.jpeg",
"../img/wallpaper3.jpeg",
"../img/wallpaper4.jpeg",
"../img/wallpaper5.jpeg",
"../img/wallpaper6.jpeg",
"../img/wallpaper7.jpeg",
"../img/wallpaper8.jpeg",
"../img/wallpaper9.jpeg",
"../img/wallpaper10.jpeg",
"../img/wallpaper11.jpeg",
"../img/wallpaper12.jpeg",
"../img/wallpaper13.jpeg",
"../img/wallpaper14.jpeg"
]

var carBG = [
"../img/car0.jpeg",
"../img/car1.jpeg",
"../img/car2.webp",
"../img/car3.jpeg",
"../img/car4.jpeg",
"../img/car5.jpeg",
"../img/car6.jpeg",
"../img/car7.jpeg",
"../img/car8.jpeg",
"../img/car9.png",
"../img/car10.png",
"../img/car11.jpeg",
"../img/car12.jpeg",
"../img/car13.jpeg",
"../img/car14.jpeg"
]


wallpaper()
function wallpaper() {
  console.log(i)
  document.getElementById("html").style.backgroundImage = `url(${pics[i]})`
  i = Math.floor(Math.random() * 14) + 1;
}




function companys() {
  document.getElementById("html").style.backgroundImage = `url(https://www.omadasearch.com/wp-content/uploads/2020/05/What-is-it-like-working-in-IT.jpg)`
  document.getElementById("head").style.height = `auto`
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
  document.getElementById("head").style.height = `auto`
  document.getElementById("html").style.backgroundImage = `url(../img/realEstateBackground.webp)`
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
  document.getElementById("head").style.height = `auto`
  document.getElementById("navigation").innerHTML = `<div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a id="currentNav"onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply (Beta)</a>
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
        <h4>Sn0w2410#7928</h4></a>
        <img src="./img/snow.png">
        
        </div>




        
`
}

function apply() {
  console.log(i)
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("staff").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("head").style.height = `auto`
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a id="currentNav"onclick="apply()">Apply (Beta)</a>
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
  <h6 class="h3" id="law-main">BETA</h6>
  <form action="" method="POST">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input type="text" name="Name" id="name" placeholder="Erik Example" required minlength="3" maxlength="25" />
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


function sendapplication(){
  let name = document.getElementById("name").value
  let birthday = document.getElementById("birthday").value
  let steamid = document.getElementById("steamid").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value

  console.log(name + " " + birthday + " " + steamid + " " + email + " " + message) 

  document.getElementById("content").innerHTML = `<h1>Application has been sent</h1>`

  location.href=`mailto:niklasyann@ndotmusic.eu?subject=Application HometownLA&body=Full Name: ${name}, Birthday: ${birthday}, SteamID: ${steamid}, Mail: ${email}, Backstory: ${message}`
}



function home() {
  console.log(i)
  document.getElementById("head").style.height = `100%`
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
    <a onclick="apply()">Apply (Beta)</a>
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
  document.getElementById("head").style.height = `auto`
  document.getElementById("head").innerHTML = `<h1><img src="./img/logo.png" alt="Premium Deluxe Motorsport" id="logo"></h1>`
  document.getElementById("staff").innerHTML = ``
  document.getElementById("content").innerHTML = ``
  document.getElementById("navigation").innerHTML = `<div class="navbar">
  <div id="stayLeft">
    <a onclick="home()">Home</a>

    <div class="searchBox">

    <input id="carInput" class="searchInput"type="text" name="" placeholder="Search">
    <button class="searchButton" id="searchButton" onclick="searchCar()">
        <img id="searchIcon" src="./img/search.jpeg" alt="search">
    </button>
</div>


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
        <a onclick="noble()">Noble</a>
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

  document.getElementById("carInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
    }
    });

    
}








function faq(){
  console.log(i)
  document.getElementById(`content`).innerHTML = ``
  i = Math.floor(Math.random() * 14) + 1;
  document.getElementById("staff").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("head").style.height = `auto`
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a id="currentNav"onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply (Beta)</a>
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
          HometownLA is a Gerrman based GTAV Roleplay Server based on the QBCore Framework. The Server is currently in the state of an Closed-Beta, meaning the projects is in its final stage of completion.
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
  document.getElementById("head").style.height = `auto`
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `
  <div class="navbar">
    <div id="fistBlock">
    <a onclick="home()">Home</a>
    <a onclick="staff()">Staff</a>
    <a onclick="faq()">FAQ</a>
    <a onclick="apply()">Apply (Beta)</a>
    <a id="currentNav"onclick="stgb()">StGB</a>
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
          1. Eine Tat kann nur bestraft werden, wenn die Tat vor Ihrer Ausf??hrung gesetzlich bestimmt war. <br>
          2. Unwissenheit sch??tzt vor Strafe nicht.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 2 T??terschaft
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1.Als T??ter wird bestraft, wer <br>
          1. eine strafbare Handlung selbst begeht <br>
          2. einen anderen dazu bestimmt sie auszuf??hren <br>
          3. zu ihrer Ausf??hrung beitr??gt. <br>
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
        1. Wer vors??tzlich einen anderen zu einer strafbaren Handlung anstiftet, wird dem T??ter gleich bestraft.

        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 5 Notwehr
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Nicht rechtswidrig handelt, wer sich nur der Verteidigung bedient, die notwendig ist, um einen gegenw??rtigen oder unmittelbar drohenden rechtswidrigen Angriff auf ein Rechtsgut abzuwehren.<br>
        2. Wer das gerechtfertigte Ma?? der Verteidigung ??berschreitet oder sich einer unangemessenen Verteidigung bedient, handelt rechtswidrig.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 6 Strafma?? Versch??rfung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Die Strafe f??r eine rechtswidrige Handlung kann nach Ermessen der Beamten der Strafverfolgungsbeh??rden angepasst werden, sofern eine der folgenden Kriterien erf??llt ist:<br>
??? Nr. 1 Wiederholungst??ter | Als Wiederholungst??ter gilt, wer sich innerhalb von drei Tagen wiederholt mit sich ??hnelnden rechtswidrigen Handlungen strafbar macht.<br>
??? Nr. 2 Unkooperatives Verhalten | Bei unkooperativen Verhalten gegen??ber einem Amtstr??ger.<br>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 7 Rechtsfolge
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Rechtswidrige Handlungen k??nnen wie folgt bestraft werden:<br>
??? Nr. 1 Verm??gens- oder Sachstrafen<br>
(a) Geldstrafen k??nnen in Haftzeit umgewandelt werden.<br>
Hierbei werden $ 10.000 zu je zwanzig Hafteinheiten umgewandelt.<br>
??? Nr. 2 Freiheitsstrafen<br>
??? Nr. 3 Entzug von Berechtigungen und Lizenzen<br>
??? Nr. 4 Todesstrafe<br>
(a) Die Strafe muss durch das Supreme Court California verk??ndet werden und durch das Parlament einstimmig ratifiziert werden. Erst mit den Unterschriften des Attorney General und des Pr??sidenten ist das Urteil rechtskr??ftig und darf vollstreckt werden.<br>
(b) Die Todesstrafe darf nur von einem, dem Staate California unterstellten Beamten ausgef??hrt werden. Die verurteilte Person wird per Kopfschuss hingerichtet. Nach dem Vollzug der Todesstrafe ist die verurteilte Person f??r 24 Stunden aus dem Staate California verbannt. Ein erneutes Erstellen der selben Pers??nlichkeit wird mit einem permanenten Ausschluss aus dem Projekt HTLA bestraft.<br>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        Artikel 8 Bu??gelder
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1.1 Wenn ein B??rger auf Grund einer oder mehreren Straftaten ein Bu??geld entrichten muss, ist ihm die Rechnung durch einen staatlich anerkannten Amtstr??ger der Exekutivbeh??rden auszustellen. Der B??rger ist verpflichtet dieser Aufforderung innerhalb einer Frist von 14 Tagen nach Erhalt nachzukommen. <br>
1.2 Jeder B??rger ist dazu verpflichtet ein Bu??geld, welches er durch einen staatlich anerkannten Amtstr??ger der Exekutivbeh??rden erhalten hat und den Betrag von 100.000$ nicht ??berschreitet, mit einer Frist von 14 Tagen zu begleichen. Wenn sich das Bu??geld auf mehr als 100.000 $ bel??uft, kann sich der B??rger auf Artikel 8 Abs. 1.3 berufen.<br>
1.3 Ist es dem Schuldner nicht m??glich das Bu??geld zu entrichten, so muss er seine prek??re Finanzlage nachweisen. Er ist verpflichtet seine gesamten Besitzt??mer und Finanzen der Exekutiv-/Judikativbeh??rde offen zu legen.<br>
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
        ??1 Diebstahl
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache einem anderen mit dem Vorsatz wegnimmt, sich selbst oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??2.1 Raub
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache einem anderen durch Androhung oder Bedrohung entwendet, um sich selbst oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.<br><br>
        2. Wer einen Raub mit Androhung von Waffengewalt oder einer Waffe, die zur Bedrohung dient, ver??bt, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??2.2 Schwerer Raub
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
        ??3 Erpressung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen rechtswidrig mit Gewalt oder Drohung zu einer Handlung, Duldung oder Unterlassung n??tigt, wird mit Freiheitsstrafe und/oder Geldstrafe bestraft.<br><br>
        2. Wenn der T??ter im Interesse eines staatlich anerkanntem Gewerbe handelt bzw. als Mitglied einer Gruppierung oder als Mitglied einer staatlichen Exekutiv-/Judikativ Beh??rde handelt, liegt ein besonders schwerer Fall vor. Hierbei muss es zu einer Strafma?? Erh??hung kommen.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??4 Betrug
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen durch T??uschung am Verm??gen sch??digt, um sich oder einen Dritten zu bereichern, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??5 K??rperverletzung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine andere Person misshandelt oder dessen Gesundheit sch??digt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Wer eine K??rperverletzung fahrl??ssig herbeif??hrt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        3. Zus??tzlich kann die Zahlung eines Schmerzensgeldes durch ein Gericht angeordnet werden.<br>
                </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??6 Schwere K??rperverletzung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine andere Person misshandelt oder dessen Gesundheit sch??digt und dadurch ihre Bewusstlosigkeit oder schwere Folgen herbeif??hrt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Wer eine schwere K??rperverletzung fahrl??ssig herbeif??hrt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        3. Zus??tzlich kann die Zahlung eines Schmerzensgeldes durch ein Gericht angeordnet werden.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??7 Sachbesch??digung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine fremde Sache besch??digt, unbrauchbar macht oder zerst??rt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
        2. Zus??tzlich kann eine Schadensersatzzahlung durch ein Gericht angeordnet werden.        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??8 Selbstjustiz
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Als Selbstjustiz wird die gesetzlich nicht zul??ssige Vergeltung f??r erlittenes Unrecht bezeichnet, die der Betroffene im eigenen Namen selbst aus??bt. Der T??ter ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??9.1 Versuchter Mord
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer einen anderen,<br>
        ???	aus Mordlust, Habgier oder sonst niedrigen Beweggr??nden<br>
        ???	heimt??ckisch oder grausam<br>
        ???	um eine Straftat zu erm??glichen oder zu verschleiern<br>
      versucht zu t??ten, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.        </div>
      </div>
    </div>

    <div class="accordion-item">
    <div class="accordion-item-header">
      ??9.2 Mord
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      1. Wer einen anderen,<br>
      ???	aus Mordlust, Habgier oder sonst niedrigen Beweggr??nden<br>
      ???	heimt??ckisch oder grausam<br>
      ???	um eine Straftat zu erm??glichen oder zu verschleiern<br>
    t??tet, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.      </div>
    </div>
  </div>

    <div class="accordion-item">
      <div class="accordion-item-header">
        ??10 Totschlag
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer durch eine fahrl??ssige Handlung den Tod eines Menschen verursacht, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.
        </div>
      </div>
    </div>
        




        <div class="accordion-item">
        <div class="accordion-item-header">
          ??11 Unterlassene Hilfeleistung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer bei Ungl??cksf??llen oder Gefahr es unterl??sst Hilfe zu leisten, obwohl dies den Umst??nden nach zumutbar und offensichtlich erforderlich ist, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Ebenso wird bestraft, wer in solchen Situationen einen Dritten daran hindert Hilfe zu leisten.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??12.1 Beleidigung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine andere Person beschimpft, verspottet oder ??u??erungen t??tigt, welche seine Ehre verletzen, wird mit einer Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        ??12.2 Beamten Beleidigung
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Wer eine Person verspottet, beleidigt, beschimpft oder ??u??erungen t??tigt welche seine Ehre verletzen, die offensichtlich als Beamter zu erkennen ist, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.<br><br>
        2. Als Beamte werden alle Mitarbeiter der Staatlichen Fraktionen bezeichnet.        </div>
      </div>
    </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??13 Rufmord
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einem anderen, eine verachtungsw??rdige, rufsch??digende Eigenschaft oder ein ge??chtetes Verhalten nachsagt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2.1 Sollte dem Opfer ein Schaden entstehen, m??ssen die Schadensersatzanspr??che durch ein Gericht festgelegt werden. Der T??ter ist verpflichtet seine Schuld gegen??ber dem Opfer sofort zu begleichen.<br><br>
          2.2 Sollte der T??ter nicht ??ber die n??tigen Finanziellen Mittel verf??gen, kann der Betrag auf mehrere Einzelzahlungen aufgeteilt werden. Die Einzelzahlung wird auf $50.000,00.- alle zwei Wochen begrenzt. Der T??ter muss sich um die Einzelzahlungen k??mmern.<br><br>
          2.3 Sollte der T??ter seinen Verpflichtungen nicht nachkommen ist der Tatbestand des Betrugs anzuwenden. Das Opfer ist mit einer zus??tzlichen Ausfallentsch??digung in H??he von 75% der in 2.1 festgelegten Summe zu ber??cksichtigen.<br><br>
          2.4 Der T??ter muss die Zahlungen per ??berweisung t??tigen. Dem Opfer ist eine Schulderkl??rung auszuh??ndigen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??14.1 Drohung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen anderen bedroht, um ihn in Furcht oder Unruhe zu versetzen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??14.2 Morddrohung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen anderen mit dessen Tod oder dem Tod seiner Angeh??rigen in gerader Linie droht, um ihn in Furcht oder Unruhe zu versetzen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Eine Sicherheitsverwahrung kann durch das Gericht angeordnet werden.          </div>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          ??15.1 Hausfriedensbruch
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer in die Wohnst??tte bzw. in das befriedete Besitztum eines anderen eindringt oder ohne Befugnis darin verweilt, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          ??15.2 Einbruch in Staatliche Einrichtungen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich auf illegale Weise den Zugang in Staatliche Einrichtungen ohne Genehmigung verschafft (z.B. durch einen Dietrich), wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??16 Freiheitsberaubung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Menschen gegen seinen Willen einsperrt oder auf andere Weise der Freiheit beraubt, wird mit einer Freiheitsstrafe und/oder Geldstrafe bestraft.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??17 Erpresserischer Menschenraub
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Menschen entf??hrt oder sich eines Menschen bem??chtigt, um sich selbst oder einen Dritten erpresserisch zu bereichern, indem er  <br>  
          (a) die Sorge des Opfers um das Wohlergehen seiner selbst<br>
      
          (b) die Sorge eines Dritten um das Wohlergehen des Opfers<br>
      
          (c) die durch seine Handlung geschaffene Lage eines Menschen<br>
      ausnutzt, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??18 Dokumentenf??lschung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ein falsches Dokument erstellt oder ein echtes Dokument verf??lscht, mit der Absicht, dass es im Rechtsverkehr gebraucht werde, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br>
          Zus??tzlich kann eine Schadensersatzzahlung durch ein Gericht angeordnet werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??19.1 Entziehung Exekutiver Ma??nahmen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich als Beteiligter einer Ma??nahme der Exekutive entfernt oder vor einer fl??chtet, um ggf. einer m??glichen Strafe aus dem Weg zu gehen, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.
          </div>
        </div>
      </div>

      <div class="accordion-item">
      <div class="accordion-item-header">
        ??19.2 Nichtbeachten Exekutiver Ma??nahmen
      </div>
      <div class="accordion-item-body">
        <div class="accordion-item-body-content">
        1. Die Exekutive ist berechtigt einer Person, welche<br>

        (a) die Beamten an Ihrer Arbeit behindert oder st??rt<br>
    
        (b) eine Gefahr darstellt<br>
    
        (c) an einem Tatort nicht erw??nscht ist<br>
    
    einen Platzverweis auszusprechen oder andere Ma??nahmen zu ergreifen. Wer sich einer Anweisung der Exekutiven wie z.B. einem Platzverweis widersetzt und nicht Folge leistet, wird mit einer Freiheitsstrafe und Geldstrafe bestraft.        </div>
      </div>
    </div>

    <div class="accordion-item">
    <div class="accordion-item-header">
      ??19.3 Behinderung Staatlicher Ma??nahmen
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      1. Wird ein Amtstr??ger bei einer Ma??nahme so gest??rt, dass diese nur unter schweren Bedingungen fortgef??hrt werden kann, ist dies mit einer Freiheitsstrafe und einer Geldstrafe zu bestrafen.
      </div>
    </div>
  </div>

  <div class="accordion-item">
  <div class="accordion-item-header">
    ??19.4 Wiederstand gegen die Staatsgewalt
  </div>
  <div class="accordion-item-body">
    <div class="accordion-item-body-content">
    1. Eine Person die einen Amtstr??ger,<br>
    ???	durch eine Drohung<br>
    ???	durch Gewalt<br>
    ???	durch Ignoranz<br>
  an einer Amtshandlung hindert, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.    </div>
  </div>
</div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??20 Amtsanma??ung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer sich der Aus??bung eines ??ffentlichen Amtes anma??t, ohne dazu befugt zu sein, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
          


        <div class="accordion-item">
        <div class="accordion-item-header">
          ??21 Missbr??uchlicher Notruf
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer die Notruffunktion einer staatliche Beh??rde verwendet, ohne sich in einer Notsituation zu befinden, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??22 Fahrerflucht
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Ein Unfallbeteiligter, der sich nach einem Unfall rechtswidrig vom Unfallort entfernt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br>
          Das Ausma?? der Strafe richtet sich nach dem Ausma?? der Straftat.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??23 Verschleierungsverbot
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Person die in der ??ffentlichkeit Kleidung tr??gt, die dazu bestimmt ist, das Gesicht zu verbergen, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Von Abs. 1 ausgenommen sind Amtstr??ger des SWAT und FIB welche in Dienstkleidung gekleidet sind.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??24 Sperrbezirke
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Das Betreten und/oder ??berfliegen von Sperrbezirken ohne Genehmigung ist verboten. Verst????e werden mit einer Freiheitsstrafe und Geldstrafe bestraft.<br><br>
          2. Als Sperrbezirke gelten:<br>
            ???	Nr. 1 Bolingbroke Penitentiary (State Prison)<br>
            ???	Nr. 2 Fort Zancudo (Military Base)<br>
            ???	Nr. 3 Von der Exekutive ausgerufene tempor??re Sperrzonen<br>
            ???	Nr. 4 Das Gel??nde sowie Geb??ude des Governments<br>
            ???	Nr. 5 Das Gel??nde sowie Geb??ude des Federal Investigation Bureau<br>
            ???	Nr. 6 Das Gel??nde sowie Geb??ude des Los Angeles Police Departments          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??25 Identit??tsfeststellung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Jeder B??rger ist verpflichtet sich einem Amtstr??ger gegen??ber ausweisen zu k??nnen.<br><br>
          2. Sollte die Identit??t nicht festgestellt werden k??nnen, ist die Person bis zur Ermittlung ihrer Identit??t festzusetzen und ggf. mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          3. Amtstr??ger m??ssen sich gegen??ber B??rgern auf Verlangen mit ihrem Dienstausweis ausweisen. Davon ausgenommen sind das SWAT und FIB, diese m??ssen sich mit ihren jeweiligen SWAT oder Agent Nummern ausweisen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??26 Vort??uschung einer Straftat
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einem Amtstr??ger vort??uscht, dass eine rechtswidrige Tat begangen worden ist oder die Ausf??hrung einer rechtswidrigen Tat bevorsteht, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??27 Belehrung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Person, die von der Exekutive festgesetzt wird, ist unverz??glich und direkt auf ihre Rechte hinzuweisen.<br><br>
          2. Die Belehrung lautet wie folgt:<br>
            ???	"Sie haben das Recht zu schweigen, alles was Sie sagen kann und wird vor Gericht gegen Sie verwendet werden. Sie haben das Recht auf einen staatlich gepr??ften Anwalt, sollten Sie sich keinen leisten k??nnen, so stellt Ihnen der Staat California einen zur Verf??gung. Sollte kein Anwalt verf??gbar sein, so m??ssen Sie sich selbst verteidigen. Sie k??nnen jederzeit die Justiz hinzuziehen (Ab 90 Hafteinheiten ist die Exekutive dazu verpflichtet die Justiz hinzuzuziehen). Sollte die Justiz nicht erreichbar sein so ??bernimmt die Exekutive die Judikative. Haben Sie Ihre Rechte verstanden????<br><br>
          3. Wird die Belehrung vergessen, unvollst??ndig oder fehlerhaft vorgelesen, sind alle Aussagen nicht f??r den Strafbestand zu verwenden. Alle Aussagen, die nach der Belehrung get??tigt werden, d??rfen f??r den Strafbestand und die zugeh??rige Ermittlung verwendet werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??28 Entzug der Fahrerlaubnis
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wird jemand wegen einer rechtswidrigen Tat, die er bei oder im Zusammenhang mit dem F??hren eines Kraftfahrzeugs oder unter Verletzung der Pflichten eines Fahrzeugf??hrers begangen hat so kann ihm je nach Schwere der Tat, ab 15 Verkehrspunkten, die Fahrerlaubnis entzogen werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??29 Besitz illegaler Gegenst??nde
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ohne ausdr??ckliche Genehmigung illegale Gegenst??nde besitzt oder diese lagert, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Als illegal deklarierte Gegenst??nde gelten:<br>
            ???	Ausr??stungsgegenst??nde und Kleidungsst??cke, die von der Regierung an Amtstr??ger herausgegeben werden.<br>
            ???	Schwarzgeld oder gef??lschtes Geld in jeglicher Art und Form.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??30 Strafmilderung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine Strafe kann gemildert werden, wenn der T??ter:<br>
          ???	durch freiwilliges Offenbaren seines Wissens wesentlich dazu beigetragen hat, dass eine Straftat aufgedeckt werden konnte<br>
          ???	freiwillig sein Wissen rechtzeitig der Exekutiven offenbart, sodass eine Straftat verhindert werden kann.          </div>
        </div>
      </div>
                  



        <div class="accordion-item">
        <div class="accordion-item-header">
          ??31 Verj??hrungsfristen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Die Verj??hrung schlie??t die Ahndung der Tat und die Anordnung von Ma??nahmen.<br><br>
          2. Freiheitsstrafen ab 150 Hafteinheiten verj??hren nicht.<br><br>
          3. Soweit die Verfolgung verj??hrt, betr??gt die Verj??hrungsfrist:<br>
            ???	5 Tage bei einer Freiheitsstrafe von bis zu 49 Hafteinheiten<br>
            ???	10 Tage bei einer Freiheitsstrafe von 50 bis 99 Hafteinheiten<br>
            ???	15 Tage bei einer Freiheitsstrafe von 100 bis 149 Hafteinheiten<br><br>
          4. Die Verj??hrung ruht, mit der Einleitung eines Verfahrens durch die Exekutive.<br><br>
          5. Ein Richter kann die Verj??hrungsfrist vor ihrem Ablauf, auf Antrag der Staatsanwaltschaft, einmal um die H??lfte der gesetzlichen Verj??hrungsfrist verl??ngern.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??32 Unterschlagung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine fremde bewegliche Sache sich oder einem Dritten rechtswidrig aneignet, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>

          2. Wer Beweise zur Kl??rung von Straftaten oder Ermittlungen bewusst zur??ckh??lt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??33 Kriminelle Vereinigung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Eine kriminelle Vereinigung ist ein auf l??ngere Dauer angelegter Zusammenschluss von Personen, deren Zweck oder T??tigkeit auf die Begehung von Straftaten ausgerichtet ist.<br><br>
          2. Eine kriminelle Vereinigung muss durch einen Beschluss von einem Richter oder Staatsanwalt als solche deklariert werden.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??34 Bilding terroristischer Vereinigungen
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer unbefugt eine Gruppe, die darauf ausgelegt ist, die staatliche Ordnung zu gef??hrden,<br>
          ???	bildet oder befehligt<br>
          ???	einer solchen Gruppe anschlie??t<br>
          ???	sie mit Waffen oder Geld versorgt<br>
          ???	oder in anderer Form unterst??tzt<br>
        ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??35 Sexuelle Bel??stigugn
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer eine andere Person in sexuell bestimmter Weise bel??stigt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Eine sexuelle Bel??stigung ist jedes unerw??nschte, sexuell bestimmte Verhalten, wozu auch unerw??nschte sexuelle Handlungen und Aufforderungen zu diesen, sexuell bestimmte k??rperliche Ber??hrungen und Bemerkungen sexuellen Inhalts geh??ren, welches bezweckt oder bewirkt, dass die W??rde der betreffenden Person verletzt wird.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??36 Gefangenenbefreiung
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer einen Gefangenen befreit, ihn zum Entweichen verleitet oder dabei f??rdert, ist mit einer Freiheitsstrafe und Geldstrafe zu bestrafen.<br><br>
          2. Ein besonders schwerer Fall liegt vor, wenn der T??ter als Amtstr??ger oder als Mitglied einer Gruppe handelt.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??37 Falschaussage 
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer bei seiner f??rmlichen Vernehmung uneidlich falsch aussagt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.<br><br>
          2. Wer vor Gericht falsch schw??rt, ist mit einer Freiheitsstrafe und/oder Geldstrafe zu bestrafen.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??38 Korruption
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Mit Freiheitsstrafe und/oder Geldstrafe wird bestraft, wer im gesch??ftlichen Verkehr einem Angestellten oder Beauftragter jeglicher Fraktionen:<br>
          ???	einen Vorteil f??r sich oder einen Dritten als Gegenleistung daf??r fordert, sich versprechen l??sst oder annimmt, dass er bei dem Bezug von Waren oder Dienstleistungen einen anderen im inl??ndischen oder ausl??ndischen Wettbewerb in unlauterer Weise bevorzuge<br>
          ???	ohne Einwilligung der Fraktion einen Vorteil f??r sich oder einen Dritten als Gegenleistung daf??r fordert, sich versprechen l??sst oder annimmt, dass er bei dem Bezug von Waren oder Dienstleistungen eine Handlung vornehme oder unterlasse und dadurch seine Pflichten gegen??ber dem Unternehmen verletzte.<br><br>
          2. Ebenso wird bestraft, wer im gesch??ftlichen Verkehr einem Angestellten oder Beauftragten jeglicher Fraktionen:<br>
	???	einen Vorteil f??r diesen oder einen Dritten als Gegenleistung daf??r anbietet, verspricht oder gew??hrt, dass er bei dem Bezug von Waren oder Dienstleistungen ihn oder einen anderen im inl??ndischen oder ausl??ndischen Wettbewerb in unlauterer Weise bevorzuge<br>
	???	ohne Einwilligung der Fraktion einen Vorteil f??r diesen oder einen Dritten als Gegenleistung daf??r anbietet, verspricht oder gew??hrt, dass er bei dem Bezug von Waren oder Dienstleistungen eine Handlung vornehme oder unterlasse und dadurch seine Pflichten gegen??ber dem Unternehmen verletze.
          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??39 Cop-Net Daten
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Da im Cop-Net vertrauliche Informationen, sowie interne Geheimnisse (Betriebsgeheimnisse) zu finden sind, ist die Weitergabe, sowie die Nutzung nach Austritt aus einer Staatsfraktion verboten und wird mit einer Geldstrafe und/oder Freiheitsstrafe bestraft. Bei dem Versto?? gegen diesen Paragraphen wird ebenfalls gegen ??38 Korruption versto??en.          </div>
        </div>
      </div>
  
      <div class="accordion-item">
        <div class="accordion-item-header">
          ??40 Hochverrat
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
          1. Wer ein Staatsgeheimnis,<br>
          ???	einer fremden Macht oder einem ihrer Mittelsm??nner mitteilt<br>
          ???	an einen Unbefugten gelangen l??sst<br>
          ???	??ffentlich bekannt macht<br>
        um den Staat California zu benachteiligen oder eine fremde Macht zu beg??nstigen, und dadurch die Gefahr eines schweren Nachteils f??r die ??u??ere oder innere Sicherheit des Staates California herbeif??hrt, wird mit 15.000 Monaten Haftzeit bestraft.<br><br>
        2. In besonders schweren F??llen kann die Haftzeit vor Gericht zus??tzlich erh??ht werden.<br>
        Ein besonders schwerer Fall liegt in der Regel vor, wenn der T??ter,<br>
          ???	eine verantwortliche Stellung missbraucht, die ihn zur Wahrung von Staatsgeheimnissen besonders verpflichtet<br>
          ???	durch die Tat die Gefahr eines besonders schweren Nachteils f??r die ??u??ere oder innere Sicherheit des Staates California herbeif??hrt<br><br>
        3. Au??erdem kann eine Gruppierung bestraft werden, welche die innere Sicherheit mehrfach massiv gef??hrdet und somit den gesamten Staat langsam zum Verfall bringen.<br><br>
        4. Durch ?? 40 Abs. 3 wird Artikel 7 des Grundgesetzes au??er Kraft gesetzt, damit die innere Sicherheit gew??hrleistet/wiederhergestellt werden kann.          </div>
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



function database() {
  document.getElementById("html").style.backgroundImage = `url(../img/database.jpeg)`
  document.getElementById("head").style.height = `auto`
  document.getElementById("staff").innerHTML = ``
  document.getElementById("content").innerHTML = ``
  document.getElementById("head").innerHTML = ``
  document.getElementById("navigation").innerHTML = `<div class="navbar">
    <div id="stayLeft">
    <a onclick="home()">Home</a>
    </div>
    <div id="secondBlock">
    <div class="dropdown">
      <button class="dropbtn">Civilian Data
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a onclick="">Alpha</a>
        <a onclick="">Alpha</a>
      </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Police Database
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a onclick="">Alpha</a>
          <a onclick="">Alpha</a>
        </div>
      </div>
      </div>
  </div>`
}



