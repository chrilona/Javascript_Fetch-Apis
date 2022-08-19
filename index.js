function loadJSONproducts(){
    fetch('products.json')
    .then(response => response.json())

    .then(data => {
        for(var i=0; i<data.length; i++){
            document.getElementById("products").innerHTML += data[i].id + data[i].name + " " +data[i].category}
        console.log(data)
        // document.querySelector("#products").innerText = data
        document.querySelector("#fruList").innerText = data
        document.querySelector("#vegList").innerText = data
    })
    .catch(error => {
        alert(`An error occured`);
    })
}
loadJSONproducts()