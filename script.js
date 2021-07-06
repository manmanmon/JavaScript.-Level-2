'use strict';

const basketEl = document.querySelector('.basket');
const cartButtonEl = document.querySelector('.cart-button');
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

cartButtonEl.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('Error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        }
        xhr.send();
    })
}

class GoodsItem {
    constructor(id_product, product_name, picture, price) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.picture = picture;
        this.price = price;
    }
    renderProductMarcup() {
        return `<div class="product-cart">
                    <div class="product-flex"><img class="product-img" src="img/${this.picture}" alt="product_photo">
                        <div class="product-name">${this.product_name}</div>
                        <div>${this.price} руб.</div>
                    </div>
                    <button data-productId="${this.id_product}" class="product-button">Добавить</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        //эта функция получает список товаров с сервера
        makeGETRequest(`${API_URL}/catalogData.json`)
            .then(goods => {
                this.goods = JSON.parse(goods)
            })
            .then(() => list.render());
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.picture, good.price);
            listHtml += goodItem.renderProductMarcup();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    calculatePrice() {
        let price = null;
        this.goods.forEach(function (good) {
            price += good.price;
        })
        return price;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }

}

const list = new GoodsList();
list.fetchGoods()
console.log(list.calculatePrice());

