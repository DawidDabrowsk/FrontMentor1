const popup = document.querySelector('.popup')
const input = document.querySelector('input')
const subscribeBtn = document.querySelector('.subscribe-btn')
const dismissBtn = document.querySelector('.dismiss-btn')
const validError = document.querySelector('.valid-error')
const wrapper = document.querySelector('.wrapper')
const subscribeInfo = document.querySelector('.subscribe-info')

const hideError = () => {
    validError.style.display = 'none'
    input.classList.remove('wrong-email')
}

const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!input.value.match(reg)) {
        input.classList.add('wrong-email')
        validError.style.display = 'flex'
    } else {
        hideError()
        popup.classList.add('popup-anim')
        wrapper.classList.add('popup-anim')
        subscribeInfo.innerHTML = `A confirmation email has been sent to ${input.value}. Please open it and click the button inside to confirm your subscription`
        input.value = ''
    }
}

const subscribeAccept = () => {
    popup.classList.add('popup-anim-back')
    wrapper.classList.add('popup-anim-back')
}

subscribeBtn.addEventListener('click', validateEmail)
dismissBtn.addEventListener('click', subscribeAccept)