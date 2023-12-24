const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight

const height = clientHeight 
const width = clientWidth 
document.body.style.margin = 0;
const ablak = document.getElementById('ab')
let elkapott = 0
let kaphatoE = false

const keret = (h, w) => {
    ablak.style.height = h + 'px'
    ablak.style.width = w + 'px'
    ablak.style.backgroundColor = 'blue'   
    ablak.style.cursor = 'pointer'
}

keret(height, width)

const ujhop = () => {
    const hop = document.createElement('div')
    ablak.appendChild(hop)
    hop.innerHTML = '&#10052'
    hop.style.position = 'fixed'
    hop.style.display = 'inline'
    hop.style.color = 'aliceblue'
    const meret = 10 + Math.floor(Math.random() * 51)
    hop.style.fontSize = meret + 'px'
    let xTengely = Math.floor(Math.random() * ((width - meret) + 1))
    hop.style.left = xTengely + 'px'
    hop.style.top = 0
    let potyogas = 0
    hop.onmouseenter = () => {
        if(kaphatoE == true){
            elkapott++
        }
        document.getElementById('szamlalo').innerText = "Kapd el a hópelyheket! Már elkaptál: " + elkapott + "/20"
        boldogKarit()        
    }    
    setInterval(() => {
        potyogas++
        hop.style.top = potyogas + 'px'
        xTengely = xTengely + ((Math.floor(Math.random() * 3) - 1) * (meret / 30))
        hop.style.left = xTengely + 'px'
        if((potyogas + meret) == height || xTengely < 0 || xTengely > width){
            hop.remove()
        }
    }, (70 - meret))
}

setInterval(() => {
   ujhop()
}, Math.floor(Math.random() * 1000) + 200);

setTimeout(() => {
    const uzenet = document.createElement('div')
    ablak.appendChild(uzenet)
    uzenet.innerText = "Kapd el a hópelyheket!"
    uzenet.id = "szamlalo"
    formzas(uzenet, "20px", "aliceblue", "20px")
    kaphatoE = true
}, 10000)

const boldogKarit = () => {
    if(elkapott == 20){
        document.getElementById('szamlalo').innerText = ''
        const boldogat = document.createElement('div')
        ablak.appendChild(boldogat)
        formzas(boldogat, "50px", "darkgreen", (height * 0.4) + "px")
        boldogat.innerText = "Boldog Karácsonyt!"
        boldogat.style.textAlign = "center"
        boldogat.style.textTransform = "uppercase"
    }
    if(elkapott > 20){
        document.getElementById('szamlalo').innerText = ''
    }
}

const formzas = (div, meret, szin, padding) => {
    div.style.fontWeight = "bold"
    div.style.fontFamily = "Cambria"
    div.style.fontSize = meret
    div.style.color = szin
    div.style.paddingTop = padding
}
