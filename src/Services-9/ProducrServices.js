class ProductService{
    static productsList = [
        {
            sno : 'AA001',
            image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_UX522_.jpg',
            name : 'MI Watch',
            price : 1500,
            qty : 15
        },
        {
            sno : 'AA002',
            image : 'https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg',
            name : 'SUMSUNG Watch',
            price : 1600,
            qty : 6
        },
        {
            sno : 'AA003',
            image : 'https://media.istockphoto.com/photos/watch-picture-id471712723?k=20&m=471712723&s=612x612&w=0&h=0KCGIGUbondcwPRxjsKDXVKVj-AWYvEqftYQKvLvdw4=',
            name : 'Apple Watch',
            price : 1800,
            qty : 8
        },
        {
            sno : 'AA004',
            image : 'https://m.media-amazon.com/images/I/71gdBQP+qGL._UY741_.jpg',
            name : 'Fire-Bolt Watch',
            price : 1500,
            qty : 4
        },
        {
            sno : 'AA005',
            image : 'https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg',
            name : 'Sonata Watch',
            price : 1300,
            qty : 0
        }
    ];

    static getAllProducts(){
        return this.productsList;
    }
}

export default ProductService;