

// const imgAdmin = document.getElementById("imgMargaux");

function addNode(){
    const node = document.getElementById("lastParagraphe");
    const newDiv = document.createElement('div');
    const newParagraphe = document.createElement('p');
    const img = document.getElementById('imgMargaux');

    node.appendChild(newDiv);
    newDiv.appendChild(newParagraphe);

    newDiv.setAttribute("id", "lastDiv");

    function ajoutParagraph(){
        var elements = document.querySelectorAll('p')
        for (var i; i < elements.length; i++) {
            if(i.length === 0){
                text = document.createTextNode("Margaux, créatrice de la marque Amatha")
                newParagraphe.appendChild(text);
                newDiv.style.backgroundColor = 'yellow';
                newDiv.style.width = '20%';
                newDiv.style.margin = 'auto';
            }
        }
    }
    
}

img.addEventListener('mouseover', addNode)

