window.onload = function (){

    /// Page Header ///
    const cosButton = document.getElementById("secondBut");
    /// Page Accueil ///
    const content = document.getElementById("originContent");

    const myContent = document.getElementById("produitContent");


    function changeContent(){
        content.style.display = 'none';
        console.log("Hello");
    }

    // cosButton.addEventListener('click', changeContent);


    ////////////////////// AJAX //////////////////////

    function afficherPro(){
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
          // Here you can use the Data
            const response = JSON.parse(xhttp.responseText);
            console.log(response.listeProCos);


            for (let i = 0; i < response.listeProCos.length; i++) {
                // newEle = document.createTextNode("Margaux, créatrice de la marque Amatha")
                const contenu = document.createTextNode("Produit " + " : " + response.listeProCos[i].nom + " " +
                                                                response.listeProCos[i].description);
                myContent.appendChild(contenu);
                // myContent.appendChild(newEle);
                console.log(i)
            }

        }

        // Send a request
        // true --> async
        xhttp.open("GET", "proCosMenu");
        xhttp.send();

        /// remove event
        cosButton.removeEventListener('click', afficherPro);



    }

    cosButton.addEventListener('click', changeContent);
    cosButton.addEventListener('click', afficherPro);

    // if(myContent.innerHTML === null){
    //     cosButton.addEventListener('click', afficherPro);
    // }

}


