window.onload = function (){

    /// Page Header ///
    const cosButton = document.getElementById("secondBut");
    /// Page Accueil ///
    const content = document.getElementById("originContent");

    const myContent = document.getElementById("produitContent");

    // Compteur pour compter les produits
     var cpt = 1;


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
                var image = document.createElement("img");
                image.src = "../img/listeProCos[i].nomFichier";
                myContent.appendChild(document.createTextNode("Produit " + " " + cpt + " : " + response.listeProCos[i].nom + ", Description : " +
                                                                response.listeProCos[i].description));

                myContent.appendChild(image);

                cpt += 1;

                myContent.appendChild(document.createElement("br"));

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


}


