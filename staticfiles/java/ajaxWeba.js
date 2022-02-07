alert("Hello")
    // Create an XMLHttpRequest object
    const produitList = document.getElementById('listPro')
    const produit = document.getElementById('produit')
    const butPre = document.getElementById('buttonPrevious')
    const butNex = document.getElementById('buttonNext')

    let i = 0
    let len;
    let pro;

    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function (){

        const response = JSON.parse(xhttp.responseText);
        console.log(response);
        // Here you can use the Data
        // pro = response;
    }


    // Send a request
    xhttp.open("GET", "produitWithAjax");
    xhttp.send();

    /// Function display
    function displayPro(){
        produit.innerHTML = "Produit nom : ";
    }

    /// Functon Next
    function next(i) {
        if(i < len - 1){
            i++;
            displayPro(i)
        }
    }

    /// Functon Previous
    function previous(i) {
        if(i > 0){
            i--;
            displayPro(i)
        }
    }

      ////// Event //////
    butNex.addEventListener('click', next)
    butPre.addEventListener('click', previous)
