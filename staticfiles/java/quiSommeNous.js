

const imgAdmin = document.getElementById("imgMargaux");

function addNode(){
    const node = document.getElementById("lastParagraphe");
    const newDiv = document.createElement('div');
    const newParagraphe = document.createElement('p');
    const img = document.getElementById('imgMargaux');

    node.appendChild(newDiv);
    newDiv.appendChild(newParagraphe);

    newDiv.setAttribute("id", "lastDiv");

    // for (const imgKey in img) {

    // }
    function ajoutParagraph(){
        text = document.createTextNode("Margaux, créatrice de la marque Amatha")
        newParagraphe.appendChild(text);
        newDiv.style.backgroundColor = 'yellow';
        newDiv.style.width = '20%';   
        newDiv.style.margin = 'auto';
        newParagraphe.style.display = 'block';
    }

     function cacherparagraphe(){
        if (newParagraphe.style.display = 'block'){
            // newParagraphe.style.display = 'none';
            newParagraphe.removeChild(text)
        }

    }

    img.addEventListener('mouseover', ajoutParagraph)
    img.addEventListener('mouseout', cacherparagraphe)

}


addNode()
