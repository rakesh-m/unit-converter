const convGroupsDiv = document.getElementById('conv-groups')

const inputBtn = document.getElementById('input-txt')
const convertBtn = document.getElementById('convert-btn')
const lenDiv = document.getElementById('len-conv')

const convGroupArray = [ 
    { text: 'Length (Meter/Feet)', unit1: 'meters', unit2: 'feet', conv: 3.281 },
    { text: 'Volume (Liters/Gallons)', unit1: 'liters', unit2: 'gallons', conv: 0.264 }, 
    { text: 'Mass (Kilograms/Pounds)', unit1: 'kilograms', unit2: 'pounds', conv: 2.204 }
]

function convert() {
    convGroupsDiv.innerHTML = ''

    for(const convSection of convGroupArray)
    {
        console.log('ConvSection is', convSection)
        convGroupsDiv.appendChild(createConvDiv(convSection))
    }
}

function createConvDiv(convSection) {
    const input = inputBtn.value

    const convDiv = document.createElement('div')
    convDiv.classList += 'conv-result'

    const convHeader = document.createElement('p')
    convHeader.textContent = convSection.text
    convDiv.appendChild(convHeader)

    const convText = document.createElement('p')
    convText.textContent = `${input} ${convSection.unit1} = ${(input * convSection.conv).toFixed(3)} ${convSection.unit2} | `
    convText.textContent += `${input} ${convSection.unit2} = ${(input / convSection.conv).toFixed(3)} ${convSection.unit1}`
    convDiv.appendChild(convText)

    return convDiv
}
