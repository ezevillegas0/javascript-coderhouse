/* 
const lista = document.querySelector('#listado')

fetch('../SRC/data.json')
.then( (res) => res.json())
.then( (data) => {

    data.forEach((producto) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${producto.title}</h4>
            <p>${producto.price}</p>
            <p>Código: ${producto.description}</p>
            <hr/>
        `

        lista.append(li)
    })

})  */

/* 
  let http = new XMLHttpRequest();
  http.open('get', '../SRC/data.json', true);
  http.send();
  http.onload = function(){
     if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
           output += `
              <div class="product">
                 <img src="${item.image}" alt="${item.description}">
                 <p class="title">${item.title}</p>
                 <p class="description">${item.description}</p>
                 <p class="price">
                    <span>${item.price}</span>
                    <span>€</span>
                 </p>
                 <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
              </div>
           `;
        }
        document.querySelector(".products").innerHTML = output;
     }
  } */
