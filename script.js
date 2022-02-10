document.addEventListener("DOMContentLoaded", function() {
    let id = 0;

    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square")

    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        id++;

        let div = document.createElement("div");

        div.setAttribute("class", "myDiv");
        div.setAttribute("id", id);

        document.body.appendChild(div);
    });

    function getRandomColor() {
        var letters ='0123456789ABCDEF'
        var color = '#'
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.randon() * 16)];
        }
        return color;
    }
});

