'use strict';

const pathToProductsImages = 'img';
const featuredItemsEl = document.querySelector('.product__items');

/**
 * Функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о товаре
 * @returns html-разметка карточки товара
 */
function getProductMarcup(product) {
    return `
    <div class="product__card">
    <a class="product__link" href="#"><img class="product__img" src="${pathToProductsImages}/${product.image}" alt="${product.name}">
        <p class="product__box-text">${product.name}<br>
        </p>
        <p class="product__price">$${product.price}</p>
    </a>
    <div class="box-add">
        <button data-productID='${product.id}' class="add"><img class="add-img" src="img/cart-add.svg" alt="cart">Add to cart</button>
    </div>
</div>
`
}

/**
 * Функция вставляет карточки товаров на страницу
 * @param {ProductDTO[]} products массив товаров из файла product.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .product__items
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarcup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup)
}

insertProductsIntoPage(products, featuredItemsEl);