import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Greg29',
      email: 'greglouis1738@gmail.com',
      password: bcrypt.hashSync('140118Ng', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'GregSeller',
        logo: '/images/prod1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Nath12',
      email: 'nath14@gmail.com',
      password: bcrypt.hashSync('140118Ng', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'NathaliaSeller',
        logo: '/images/prod1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'testing',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    },
  ],
    products: [{
            
            name: 'White Drake Snapback',
            category: 'Snapbacks',
            image: '/images/prod1.jpg',
            price: 350,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'White Trend Snapbacks for your coming summer'
        },
        {
            
            name: 'Black Drake Snapback',
            category: 'Snapbacks',
            image: '/images/prod2.jpg',
            price: 400,
            countInStock: 20,
            brand: 'Puma',
            rating: 4,
            numReviews: 5,
            description: 'Black Trend Snapbacks for your coming summer'
        },
        {
            
            name: 'Gray Drake Snapback',
            category: 'Snapbacks',
            image: '/images/prod3.jpg',
            price: 550,
            countInStock: 0,
            brand: 'Adidas',
            rating: 5,
            numReviews: 55,
            description: 'Gray Trend Snapbacks for your coming summer'
        },
        {
            
            name: 'Gods Plan Drake Snapback',
            category: 'Snapbacks',
            image: '/images/prod4.jpg',
            price: 650,
            countInStock: 15,
            brand: 'Mercedes',
            rating: 5,
            numReviews: 70,
            description: 'Gods Plan Trend Snapbacks for your coming summer'
        },
        {
            
            name: 'Blue Drake Snapback',
            category: 'Snapbacks',
            image: '/images/prod5.jpg',
            price: 750,
            countInStock: 5,
            brand: 'Ellesse',
            rating: 5,
            numReviews: 100,
            description: 'Blue Trend Snapbacks for your coming summer'
        },
    ],
};

export default data;