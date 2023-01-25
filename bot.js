const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Hello, my name is pBot. What is your name?",
        `Hello ${data?.name}, How old are you?`,
        `Ohh ${data?.age}, What is your hobby?`,
        `ohh ${data?.hobby}, you have a nice hobby, Btw do you have girlfriend?`,
        `oh ${data?.girlfriend}, okay then have a nice day!`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart () {
    if (jawaban.value.length < 1) return alert("Please fill the input!")
    init++
    if (init === 1) {
        botDelay({name: jawaban.value})
    } else if (init === 2) {
        botDelay({age: jawaban.value})
    } else if (init === 3) {
        botDelay({hobby: jawaban.value})
    } else if (init === 4) {
        botDelay({girlfriend: jawaban.value})
    } else if(init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter ="blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter ="none"
    }, [1250])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing () {
    pertanyaan.innerHTML = `Thank you ${usersData[0]} for coming here 😊`
    jawaban.value = "Thank you"
}


function botEnd() {
    alert(`Thank you ${usersData[0]}`)
    window.location.reload()
}