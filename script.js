const signupEl = document.querySelector(`#signup`)
const emailEl = document.querySelector(`#email`)
const submitEl = document.querySelector(`#submit`)

submitEl.addEventListener(`click`, (p) => {
    signupEl.innerHTML = ""
    signupEl.innerHTML = `
        <h1>Thanks for signing up!</h1>
    `
    p.preventDefault()
})
