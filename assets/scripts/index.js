const texts = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
]

const body = document.querySelector('body')

const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal__text')
const close = document.querySelector('.modal__close')

const buttons = document.querySelectorAll('.suggestion__row-elem')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        body.style.overflow = 'hidden'
        modal.style.display = 'block'
        modalText.textContent = texts[index]
    })
})

close.addEventListener('click',() => {
    modal.style.display = 'none'
    body.style.overflow = 'auto'
})
