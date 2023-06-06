const input= document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const updateDebounceText = debounce((text) =>{
debounceText.textContent = text
})

input.addEventListener("input", e => {
    updateDebounceText(e.target.value)
    defaultText.textContent = e.target.value
})

function debounce(cb, delay = 1000){
    let timeout
    return (...args)=> {
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}