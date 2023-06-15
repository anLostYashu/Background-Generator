const button = document.getElementById("subBtn");

button.onclick = function () {
    const inputOne = document.getElementById("color_1").value;
    const inputTwo = document.getElementById("color_2").value;
    const j = Math.floor(Math.random() * 361);

    if(inputOne === "#000000" || inputTwo === "#000000") {
        const heading = document.getElementById("heading");
        heading.style.color = "white";
    } else {
        heading.style.color = "black";
    }

    const container = document.getElementById("dom");
    container.style.background = `linear-gradient(${j}deg, ${inputOne}, ${inputTwo})`;

    console.log(inputOne, inputTwo);
}