const form = document.getElementById('devInfo')
form.addEventListener('submit', (ev) => {ev.preventDefault()})

const btnCreateTec = document.getElementById('createTec')
btnCreateTec.addEventListener('click', () => {
    
    const form = document.getElementById('devInfo')
    const section = document.createElement('section')
    
    const labelTec = document.createElement('label')
    const inputTec = document.createElement('input')
    const breakLine = document.createElement('br')

    labelTec.innerText = 'Tecnologia:'
    inputTec.type = 'text'
    inputTec.id = 'devTec'

    const paraOp = document.createElement('p')
    const op1 = document.createElement('input')
    const op2 = document.createElement('input')
    const op3 = document.createElement('input')
    const sectionRadio = document.createElement('section')
    
    const labelOp1 = document.createElement('label')
    const labelOp2 = document.createElement('label')
    const labelOp3 = document.createElement('label')


    paraOp.innerText = 'Anos de Experiência do dev:'
    op1.type = 'radio'
    op2.type = 'radio'
    op3.type = 'radio'
    
    op1.name = 'options'
    op2.name = 'options'
    op3.name = 'options'

    op1.id = 'op1'
    op2.id = 'op2'
    op3.id = 'op3'

    op1.value = '0-2 anos'
    op2.value = '3-4 anos'
    op3.value = '5+ anos'

    labelOp1.for = 'op1'
    labelOp2.for = 'op2'
    labelOp3.for = 'op3'

    labelOp1.innerText = '0-2 anos'
    labelOp2.innerText = '3-4 anos'
    labelOp3.innerText = '5+ anos'

    const btnRemove = document.createElement('button')
    btnRemove.classList.toggle('remove-btn')
    btnRemove.innerText = 'Remover'
    btnRemove.addEventListener('click', () => {
        section.remove()
    })

    sectionRadio.append( paraOp , op1 , labelOp1 , op2 , labelOp2 , op3 , labelOp3)
    section.append(labelTec , inputTec , breakLine , sectionRadio , breakLine , btnRemove)
    form.append(section)
})

let btnRegister = document.getElementById('devRegister')
btnRegister.addEventListener('click', () => {
    
    let dev = []
    let devName = form.children[1].value
    dev.push(devName)
    
    if (form.children[1].value == '') {
        alert('adicione o nome do Dev')
    } else {
        
        if (form.childElementCount == 4) {
            
            console.log(`
                Nome do Dev: ${dev[0]}
                Tecnologias do Dev: O Dev não tem tecnologias
                `)

        } else {
            
            const tecnoNums = parseInt(form.childElementCount) - 4
            
            let allTec = []

            for(let i = 0; i < tecnoNums; i++) {
                let tecName = form.children[4 + i].children[1].value
                let tecTime = document.querySelector('input[type="radio"]:checked').value
                allTec.push(tecName, tecTime)
            }

            console.log(`
                Nome do Dev: ${dev[0]}
                Tecnologias do Dev: ${allTec}
                `)

        }

    }

})