
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var updateBtn = document.getElementById("mainBtn");

var productContainer ; 
 if(localStorage.getItem("productList") == null){
           productContainer =[];
 }
 else{
     productContainer=JSON.parse(localStorage.getItem("productList"));
     displayProduct();
 }


function addProduct(){

   
        if(checkInputs() == true){
            var product={
                name:productName.value,
                price:productPrice.value,
                category:productCategory.value,
                desc:productDesc.value
                
            }
            productContainer.push(product);
            localStorage.setItem("productList",JSON.stringify(productContainer) );
            displayProduct();
             clearform();       
         }
         else{
             alert('Sorry , You Should add all inputs')
         }
         
}

function clearform(){

    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
}

function displayProduct(){
    var cartoona =``;
    for(var i=0 ; i<productContainer.length ; i++){
          cartoona +=`<tr>
          <td>${i}</td>
          <td>${productContainer[i].name}</td>
          <td>${productContainer[i].price}</td>
          <td>${productContainer[i].category}</td>
          <td>${productContainer[i].desc}</td>
          <td><button onclick=" updateProduct(${i});"  class="btn btn-outline-warning">update</button></td>
          <td><button  onclick="deleteProduct(${i});" class="btn btn-outline-danger">delete</button></td>
          </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}
 function checkInputs(){
  if(productName.value !="" && productPrice.value != "" && productCategory.value != ""
  && productDesc.value != ""){
        return true;
  }
  else{
      return false;
  }
 }

 function searchProducts(searchTerm){

        var cartoona=``;
    for( var i=0 ; i<productContainer.length ; i++){
        if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())== true) {
            cartoona +=`<tr>
          <td>${i}</td>
          <td>${productContainer[i].name}</td>
          <td>${productContainer[i].price}</td>
          <td>${productContainer[i].category}</td>
          <td>${productContainer[i].desc}</td>
          <td><button class="btn btn-outline-warning">update</button></td>
          <td><button class="btn btn-outline-danger">delete</button></td>
          </tr>`;
        }
        else{
            document.getElementById("alarm").innerHTML="Not Found";
        }

    }
    
       document.getElementById("tableBody").innerHTML = cartoona;
    
 }

 function deleteProduct(productIndex){
     productContainer.splice(productIndex,1);
     localStorage.setItem("productList",JSON.stringify(productContainer) );
     displayProduct();
 }

 function updateProduct(productIndex){
   
        cartoona =``;
        productName.value =productContainer[productIndex].name;
        productPrice.value =productContainer[productIndex].price;
        productCategory.value =productContainer[productIndex].category;
        productDesc.value =productContainer[productIndex].desc;
        updateBtn.innerHTML="update product";
          deleteProduct(productIndex);  
            cartoona += ` <tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button class="btn btn-outline-warning">update</button></td>
            <td><button onclick="deleteForm(${i})" class="btn btn-outline-danger">delete</button></td>
          </tr>`
          clearform();
          document.getElementById("tableBody").innerHTML = cartoona;
          
    }
    updateBtn.addEventListener("click", function(){
        updateBtn.innerHTML="Add Product";
    })

    

 function validationProductName(){
     var regex = /^[A-Z][a-z]{3,8}$/;
     if(regex.test == productName.value){
            return true;
     }
     else{
         return false;
     }
 }