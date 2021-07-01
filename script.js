'use strict';

class GoodsItem {
    constructor(id, title, picture, price) {
        this.id = id;
        this.title = title;
        this.picture = picture;
        this.price = price;
    }
    renderProductMarcup() {
        return `<div class="product-cart">
                    <div class="product-flex"><img class="product-img" src="img/${this.picture}" alt="photo">
                        <div class="product-name">${this.title}</div>
                        <div>${this.price} руб.</div>
                    </div>
                    <button data-productId="${this.id}" class="product-button">Добавить</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Название товара 1', picture: '1.jpg', price: 150 },
            { id: 2, title: 'Название товара 2', picture: '2.jpg', price: 160 },
            { id: 3, title: 'Название товара 3', picture: '3.jpg', price: 170 },
            { id: 4, title: 'Название товара 4', picture: '4.jpg', price: 1340 },
            { id: 5, title: 'Название товара 5', picture: '5.jpg', price: 1520 },
            { id: 6, title: 'Название товара 6', picture: '6.jpg', price: 230 },
            { id: 7, title: 'Название товара 7', picture: '7.jpg', price: 450 },
            { id: 8, title: 'Название товара 8', picture: '8.jpg', price: 50 },
            { id: 9, title: 'Название товара 9', picture: '9.jpg', price: 439 },
            { id: 10, title: 'Название товара 10', picture: '10.jpg', price: 130 },
            { id: 11, title: 'Название товара 11', picture: '11.jpg', price: 630 },
            { id: 12, title: 'Название товара 12', picture: '12.jpg', price: 103 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.picture, good.price);
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

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.calculatePrice());