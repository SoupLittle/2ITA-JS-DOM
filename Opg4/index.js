
var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
var redBtn = document.getElementById("red-btn")
var blueBtn = document.getElementById("blue-btn")
var randomBtn = document.getElementById("random-btn")

redBtn.addEventListener("click", function() {
    div1.classList.add("red")
});

blueBtn.addEventListener("click", function() {
    div2.classList.add("blue")
});

randomBtn.addEventListener("click", function() {
    var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"]
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    div3.style.backgroundColor = randomColor
})
