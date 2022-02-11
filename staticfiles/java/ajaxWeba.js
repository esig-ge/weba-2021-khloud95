function getProduit(position){
    // Create an XMLHttpRequest object
    // const produitList = document.getElementById('listPro')
    // const produit = document.getElementById('produit')
    // const butPre = document.getElementById('buttonPrevious')
    // const butNex = document.getElementById('buttonNext')

    // let i = 0
    // let len;
    // let pro;

    // Create an XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function (){

        const response = JSON.parse(xhttp.responseText);
        // console.log(response);
        console.info(response);
        // Here you can use the Data
    }


    // Send a request
    xhttp.open("GET", "produitWithAjax");
    xhttp.send();
}


    /// Function display
    // function displayPro(){
    //     // produit.innerHTML = "Produit nom : ";
    //     for(i = 0; i < response.listProSize; i++){
    //         produit.innerHTML("Produit " + i + " : " + response.pro.nom[i])
    //     }
    // }


    /// Functon Next
    // function next(i) {
    //     if(i < len - 1){
    //         i++;
    //         displayPro(i)
    //     }
    // }
    //
    // /// Functon Previous
    // function previous(i) {
    //     if(i > 0){
    //         i--;
    //         displayPro(i)
    //     }
    // }
    //
    //   ////// Event //////
    // butNex.addEventListener('click', next)
    // butPre.addEventListener('click', previous)

getProduit(0);