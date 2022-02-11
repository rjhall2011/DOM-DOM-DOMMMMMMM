var RYGB=["red","yellow","blue","green"];

document.addEventListener("DOMContentLoaded" , function(){
    var btn =document.createElement("button");
    btn.innerText ="Add Square";
    document.body.appendChild(btn);
    btn.addEventListener("click" , function() {
        addSquare()
    });

    var container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    function addSquare(){
        console.log("test")
         var existingSquares = document.getElementsByClassName('squares').length;
        var squares = document.createElement("div");
        squares.className = "squares";
        squares.id=existingSquares;
        document.body.appendChild(squares);
       
        squares.addEventListener("click" , randoColor);
        squares.addEventListener("dblclick" , removeNeighbor);
        squares.addEventListener("mouseenter" , showNum);
        squares.addEventListener("mouseleave" , removeNum);
       
        container.appendChild(squares);
    }
 
        function randoColor(event){
            var index = Math.floor(Math.random()*RYGB.length);
            var newColor = RYGB[index];
            this.style.backgroundColor = newColor;
        }; 

    function showNum() {
        var id = this.id;
        this.innerText = id;
    }

    function removeNum() {
        this.innerText = "";
    }

    function removeNeighbor() {
        var id = this.id;

        if (id % 2 === 0) {

             if (this.nextSibling) {
                 this.nextSibling.remove() ; 
             } else {
                 alert('There are no elements to the right to remove.');
             }

            } else {
             if (this.previousSibling) {
            this.previousSibling.remove();
             } else {
            alert('There are no elements to the left to remove.');
             }
        }
     }
})

