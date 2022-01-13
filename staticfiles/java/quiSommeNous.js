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
        text = document.createTextNode("Margaux, créatrice de la marque Amatha")
        newParagraphe.appendChild(text);
        newDiv.style.backgroundColor = 'yellow';
        newDiv.style.width = '20%';
        newDiv.style.margin = 'auto';
    }

    // function cacherparagraphe(){
    //     newDiv.removeChild(newParagraphe);
    // }

}

img.addEventListener('mouseover', addNode)


// img.addEventListener('mousedown', cacherparagraphe);
