window.onload = function (){

    /// Page Header ///
    const cosButton = document.getElementById("secondBut");
    /// Page Accueil ///
    const content = document.getElementById("originContent");



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
            console.log(response);

            for (let i = 0; i < response.dicPro.nom.length; i++) {
                const contenu = document.createTextNode("Produit " + i + " : " + response.dicPro.nom[i]);
                content.appendChild(contenu);
            }

        }

        // Send a request
        // true --> async
        xhttp.open("GET", "proCosMenu");
        xhttp.send();

    }

    cosButton.addEventListener('click', changeContent);
    cosButton.addEventListener('click', afficherPro);
}


