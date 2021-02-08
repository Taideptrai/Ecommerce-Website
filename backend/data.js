import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'tai nguyen',
      email: 'nguyenvantaizzz@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'bestshop.com',
        logo: '/images/bestshop1.jpg',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Nike',
      email: 'nike@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: 'Sophia Shop',
        logo: '/images/shophiashop.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Jack and Jones',
      email: 'jackandjones@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: 'Stephen',
        logo: '/images/stephenshop1.jpg',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Puma hoodie 2021 ',
      category: 'Puma',
      image: '/images/p17.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Nike hoodie for men',
      category: 'Nike',
      image: '/images/p18.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Puma new hoodie ',
      category: 'Puma',
      image: '/images/p19.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Hoodie',
      category: 'Adidas',
      image: '/images/p14.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'MMF New Hoodie',
      category: 'MMF',
      image: '/images/p15.jpg',
      price: 120,
      countInStock: 10,
      brand: 'MMF',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Jack & Jones 2021',
      category: 'Jack & Jones',
      image: '/images/p16.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Jack & Jones',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Champion New Collection 2021',
      category: 'Champion',
      image: '/images/p13.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Champion',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Pull & Bear Hoodie 2021',
      category: 'Pull & Bear',
      image: '/images/p12.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Pull & Bear',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Tommy Essential Hoodie',
      category: 'Tommy',
      image: '/images/p11.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Tommy',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Jack & Jones',
      category: 'Jack & Jones',
      image: '/images/p10.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Jack & Jones',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Nike Essential Hoodie',
      category: 'Nike',
      image: '/images/p9.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Tommy Hilfiger Hoodie',
      category: 'Tommy',
      image: '/images/p7.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Tommy Hilfiger',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
