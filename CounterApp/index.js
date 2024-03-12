let count = 0
let sum = 0

function increment() {
    count++
    document.getElementById("count-el").textContent = count
}

function decrement() {
    if (count <= 0) {
        return
    }
    count--
    document.getElementById("count-el").textContent = count
}

function save(){
    console.log("Saving...")
    document.getElementById("save-el").textContent += count+"-"+" "
    sum += count
    document.getElementById("sum-el").textContent = "Total: " + sum
    reset()
}

function reset(){
    count = 0
    document.getElementById("count-el").textContent = count
}