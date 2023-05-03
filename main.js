const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#ProductDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const productlist = [];


console.log(navbarEmail)

// MENÚ EMAIL

navbarEmail.addEventListener('click',() =>{
  const  shoppingCartContainerInactive =  shoppingCartContainer.classList.contains('inactive');

  const ProductDetailContainerInactive = ProductDetailContainer.classList.contains('inactive');

  if(!shoppingCartContainerInactive || !ProductDetailContainerInactive ){
    shoppingCartContainer.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
});

// MENÚ HAMBURGUESA

menuHamburguesa.addEventListener('click',() =>{
  const  shoppingCartContainerInactive =  shoppingCartContainer.classList.contains('inactive');

  const ProductDetailContainerInactive = ProductDetailContainer.classList.contains('inactive');

  if(!shoppingCartContainerInactive || !ProductDetailContainerInactive){
    shoppingCartContainer.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');
  }
    mobileMenu.classList.toggle('inactive');
  
});

// CARRITO COMPRAS
menuCarrito.addEventListener('click',() =>{
  const mobileMenuInactive = mobileMenu.classList.contains('inactive');

  const desktopMenuInactive = desktopMenu.classList.contains('inactive');

  
  const ProductDetailContainerInactive = ProductDetailContainer.classList.contains('inactive');

  if(!mobileMenuInactive || !desktopMenuInactive || !ProductDetailContainerInactive ){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');
  }

    shoppingCartContainer.classList.toggle('inactive')


});

// CERRAR ASIDE DESCRIPCION PRODUCTO

productDetailClose.addEventListener('click',() =>{

  const  shoppingCartContainerInactive =  shoppingCartContainer.classList.contains('inactive');

  const desktopMenuInactive = desktopMenu.classList.contains('inactive');

  if(!shoppingCartContainerInactive || !desktopMenuInactive){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }

  ProductDetailContainer.classList.add('inactive');
})

// PRODUCTOS DEL ARRAY PRODUCLIST (Lista)

productlist.push({name:'Bike',precio:120,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patines',precio:90,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patineta',precio:620,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patineta',precio:620,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});


  // FUNCION RECORRE EL PRODUCTLIST Y CREA LOS PRODUCTOS EN EL DOM
function ImprimirProductosDOM (listaProductos){
  listaProductos.forEach(product =>{

    // MAQUETACION DEL HTML EN JS
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const ProductImg =document.createElement('img');
    ProductImg.setAttribute('src',product.imagen);
    ProductImg.setAttribute("style", "cursor: pointer;");

    ProductImg.addEventListener('click',() =>{


      ProductDetailContainer.classList.remove('inactive');
    })
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv= document.createElement('div');
  
    const precio = document.createElement('p');
    precio.innerText = `$ ${product.precio}`;
  
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;
   
     const productFigure = document.createElement('figure');
    
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productFigure.append(productFigureImg);
    productInfoDiv.append(precio,productName);
    productInfo.append(productInfoDiv, productFigure);
    productCard.append(ProductImg,productInfo);
    cardsContainer.append(productCard);
 })
}

ImprimirProductosDOM(productlist);
