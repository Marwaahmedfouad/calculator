function addtext(val) {
    document.getElementById("text").value += val
}
function clearData() {
    document.getElementById("text").value = ""
}
function clearLast() {
    let data = document.getElementById("text").value
    document.getElementById("text").value = data.substring(0, data.length - 1)
}
function result() {
    let x = document.getElementById("text").value
    let result = eval(x)
    document.getElementById("text").value = result
}

function calculateSquareRoot() {
    let x = document.getElementById("text").value;
    let result = Math.sqrt(parseFloat(x));
    document.getElementById("text").value = result;
  }
  