const table = document.getElementById('table')

const rangeLeft = document.getElementById('rangeLeft')
const rangeRight = document.getElementById('rangeRight')

function changeTable() {
    table.replaceChildren()

    const left = parseInt(rangeLeft.value)
    const right = parseInt(rangeRight.value)

    for (let i = left; i <= right; i++) {
        const code = document.createElement('div')
        const text = document.createElement('div')
        
        text.innerHTML = `&#${i};`
        code.innerText = `&#${i};`

        text.className = 'text-class'
        code.className = 'code-text'

        table.append(code)
        table.append(text)
    }
}

document.getElementById('generate-btn').addEventListener('click', changeTable)


function getSpecialGreekCharsCodes() {
    const avoidListIdx = [7958, 7959, 7966, 7967, 8006, 8007, 8014, 8015, 8024,
        8026, 8028, 8030, 8062, 8063, 8117, 8133, 8148, 8149, 8156, 8176, 8177,
        8181]

    const nonLetters = [8125, 8126, 8127, 8128, 8129, 8141, 8142, 8143, 8157,
        8158, 8159, 8173, 8174, 8175, 8189, 8190]

    const result = []

    for (let i = 7936; i < 8191; i++) {
        if (avoidListIdx.includes(i) || nonLetters.includes(i)) {
            continue
        }

        result.push(i)
    }

    return result
}

const greekSpecials = getSpecialGreekCharsCodes()


document.getElementById('greek-specials-btn').addEventListener('click', () => {
    table.replaceChildren()

    for (let i of greekSpecials) {
        const code = document.createElement('div')
        const text = document.createElement('div')
        
        text.innerHTML = `&#${i};`
        code.innerText = `&#${i};`

        text.className = 'text-class'
        code.className = 'code-text'

        table.append(code)
        table.append(text)
    }
})


let font = false

document.getElementById('font-change').addEventListener('click', () => {
    font = !font

    Array.from(document.getElementsByClassName('text-class')).forEach(element => {
        element.style.fontFamily = font
                    ? "'Gentium Book Plus', serif"
                    : "sans-serif"
    });
})
