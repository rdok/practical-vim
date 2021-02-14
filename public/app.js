(async() => {

    var tips = await fetch('tips.json').then(response => response.json())

    chunkTips(tips).forEach(function(tips, index){
        createRow(tips)
    })

})();

function chunkTips(tips) {
    var chunkSize = 4
    var output = []

    for (index = 0; index < tips.length; index += chunkSize) {
        output.push( tips.slice( index , index + chunkSize ) )
    }

    return output
}

function createRow(tips) {
    let container = document.getElementById('container')

    let row = document.createElement('div')
    row.className = 'row'

    tips.forEach(function(tip, index){
        appendCard(row, tip)
    })

    container.appendChild(row)
}

function appendCard(container, tip) {
    let cardElement = document.createElement('div')
    cardElement.className = 'card'
    cardElement.style.background = postItColor()

    let titleTextNode = document.createTextNode(tip.title)
    let titleElement = document.createElement('h4')
    titleElement.appendChild(titleTextNode)
    cardElement.appendChild(titleElement)

    let descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = tip.description;
    cardElement.appendChild(descriptionElement)

    if( tip.code ) {
        let codeElement = document.createElement('code')
        codeElement.innerHTML = tip.code
        let preElement = document.createElement('pre')
        preElement.appendChild(codeElement)
        cardElement.appendChild(preElement)
    }

    container.appendChild(cardElement)
}

function postItColor() {

    let colors = ['yellowgreen', 'hotpink', 'yellow', 'orange', 'royalblue']

    return colors[Math.floor(Math.random()*colors.length)];
}

function shuffle(originalData) {
    let data = Array.from(originalData)
    let output = []

    originalData.forEach(function(item, index) {
        let max = data.length - 1
        var randomIndex = Math.floor(Math.random() * max)

        output.push(data[randomIndex])
        data.splice(randomIndex, 1)
    })

    return output
}
