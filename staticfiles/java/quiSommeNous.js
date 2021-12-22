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
    var node = document.getElementById("lastParagraphe");
    var newDiv = document.createElement('div');
    var newParagraphe = document.createElement('p');

    node.appendChild(newDiv);
    newDiv.appendChild(newParagraphe);

    newDiv.setAttribute("id", "lastDiv");

    newParagraphe.textContent = 'Margaux, créatrice de la marque Amatha';

    newDiv.style.backgroundColor = 'yellow';
    newDiv.style.width = '50%';
    newDiv.style.margin = 'auto';
}

addNode();
