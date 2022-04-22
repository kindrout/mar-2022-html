// for ( let i = 0; i < 10; i++) {
//     document.write(`<div>Aleksa ${i}</div>`)
// }
//
// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>Aloha ${i}</h1>`)
//     i++;
// }
//
// let list = ['html','css','js','react','nysq','angular','node'];
// document.write(`<ol>`);
// for (let skill of list) {
//     document.write(`<li>${skill}</li>`)
// }
// document.write(`</ol>`);

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}</h3>
        <h3 class="product-price">${product.price}</h3>
        <img src="${product.image}" alt="photo" class="product-image">
</div>`);
}


