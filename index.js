function loadJSONproducts(){
    fetch('products.json')
    .then(response => response.json())

    .then(data => {
        for(var i=0; i<data.length; i++){
            document.getElementById("products").innerHTML += data[i].name +" :" +data[i].category
        }

        console.log(data)
        
        document.querySelector("#fruList").innerText = data.category = "fruits"
        // document.querySelector("#fruList").innerText = data
        document.querySelector("#vegList").innerText = data
    })
    .catch(error => {
        alert(`An error occured`);
    })
}
loadJSONproducts()

