const lista = document.getElementById('products')

fetch('../SRC/data.json')
  .then( (res) => res.json())
  .then( (data) => {


    data.forEach(item => {
        const div = document.createElement('div')
        div.className = "product"
        div.innerHTML = `
        <img src="${item.image}" alt="${item.description}">
        <p class="title">${item.title}</p>
        <p class="description">${item.description}</p>
        <p class="price">
           <span>$</span>
           <span>${item.price}</span>
        </p>
        <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
    `;

    lista.append(div)
    });

}) 




