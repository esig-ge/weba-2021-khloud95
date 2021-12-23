//
//
// function replaceContent(){
//         var myContent = document.getElementById("myContent");
//         var myParagraphe = myContent.getElementsByTagName("p");
//         myParagraphe[0].innerHTML = "Hello AMATHA"
//     }
//
//
// replaceContent();

const imgAdmin = document.getElementById("imgMargaux");

function addNode(){
    const node = document.getElementById("lastParagraphe");
    const newDiv = document.createElement('div');
    const newParagraphe = document.createElement('p');
    const img = document.getElementById('imgMargaux');

    node.appendChild(newDiv);
    newDiv.appendChild(newParagraphe);

    newDiv.setAttribute("id", "lastDiv");

    function ajoutParagraph(){
        newParagraphe.textContent = 'Margaux, créatrice de la marque Amatha';
        newDiv.style.backgroundColor = 'yellow';
        newDiv.style.width = '20%';
        newDiv.style.margin = 'auto';
    }

    img.addEventListener('mouseover', ajoutParagraph)
    img.addEventListener('mousedown', cacherParagraphe);


}


addNode();
