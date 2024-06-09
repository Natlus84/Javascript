const books = [
    {
    id: 1,
    title: 'The Great Gatsby',
    author: {
    name: 'F. Scott Fitzgerald',
    country: 'USA',
    },
    genre: 'Classic',
    price: 1800,
    stock: 300,
    reviews: [
    { user: 'Alice', rating: 5, comment: 'Loved it!' },
    { user: 'Bob', rating: 4, comment: 'Great read.' },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
    { date: '01-06-2024', quantity: 10 },
    { date: '02-06-2024', quantity: 15 },
    { date: '03-06-2024', quantity: 9 },
    { date: '04-06-2024', quantity: 30 },
    { date: '05-06-2024', quantity: 46 },
    { date: '06-06-2024', quantity: 6 },
    { date: '07-06-2024', quantity: 0 },
    ],
    },
    {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: {
    name: 'Harper Lee',
    country: 'USA',
    },
    genre: 'Classic',
    price: 1250,
stock: 700,
reviews: [
{ user: 'Charlie', rating: 5, comment: 'A masterpiece.'},
{ user: 'Dave', rating: 3, comment: 'Average' },
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 7 },
{ date: '02-06-2024', quantity: 15 },
{ date: '03-06-2024', quantity: 9 },
{ date: '04-06-2024', quantity: 6 },
{ date: '05-06-2024', quantity: 36 },
{ date: '06-06-2024', quantity: 16 },
{ date: '07-06-2024', quantity: 40 },
],
},
{
id: 3,
title: '1984',
author: {
name: 'George Orwell',
country: 'UK',
},
genre: 'Dystopian',
price: 1500,
stock: 1000,
reviews: [
{ user: 'Eve', rating: 4, comment: 'Little boring.' },
{ user: 'Frank', rating: 5, comment: 'A must-read.' },
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 70 },
{ date: '02-06-2024', quantity: 1 },
{ date: '03-06-2024', quantity: 19 },
{ date: '04-06-2024', quantity: 32 },
{ date: '05-06-2024', quantity: 21 },
{ date: '06-06-2024', quantity: 0 },
{ date: '07-06-2024', quantity: 0 },
],
},
{
id: 4,
title: 'The Catcher in the Rye',
author: {
name: 'J.D. Salinger',
country: 'USA',
},
genre: 'Classic',
price: 2900,
stock: 0,
reviews: [
{ user: 'Grace', rating: 4, comment: 'Really enjoyed it'},
{ user: 'Hank', rating: 3, comment: 'It was okay.' },
],
availability: { online: false, inStore: false },
weeklySales: [
{ date: '01-06-2024', quantity: 25 },
{ date: '02-06-2024', quantity: 11 },
{ date: '03-06-2024', quantity: 44 },
{ date: '04-06-2024', quantity: 3 },
{ date: '05-06-2024', quantity: 1 },
{ date: '06-06-2024', quantity: 0 },
{ date: '07-06-2024', quantity: 11 },
],
},
{
id: 5,
title: 'Moby Dick',
author: {
name: 'Herman Melville',
country: 'USA',
},
genre: 'Adventure',
price: 2320,
stock: 20,
reviews: [
{ user: 'Ivy', rating: 2, comment: 'Did not enjoy readi'},
{ user: 'Jack', rating: 4, comment: 'Long but worth it.'},
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 21 },
{ date: '02-06-2024', quantity: 62 },
{ date: '03-06-2024', quantity: 140 },
{ date: '04-06-2024', quantity: 4 },
{ date: '05-06-2024', quantity: 16 },
{ date: '06-06-2024', quantity: 87 },
{ date: '07-06-2024', quantity: 22 },
],
},
{
id: 6,
title: 'War and Peace',
author: {
name: 'Leo Tolstoy',
country: 'Russia',
},
genre: 'Historical Fiction',
price: 1350,
stock: 80,
reviews: [
{ user: 'Kelly', rating: 5, comment: 'A true classic.'},
{ user: 'Liam', rating: 3, comment: 'Very long but good'}
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 47 },
{ date: '02-06-2024', quantity: 2 },
{ date: '03-06-2024', quantity: 40 },
{ date: '04-06-2024', quantity: 14 },
{ date: '05-06-2024', quantity: 25 },
{ date: '06-06-2024', quantity: 7 },
{ date: '07-06-2024', quantity: 26 },
],
},
{
id: 7,
title: 'Pride and Prejudice',
author: {
name: 'Jane Austen',
country: 'UK',
},
genre: 'Romance',
price: 1780,
stock: 25,
reviews: [
{ user: 'Mia', rating: 2, comment: 'not good' },
{ user: 'Noah', rating: 3, comment: 'Average.' },
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 11 },
{ date: '02-06-2024', quantity: 8 },
{ date: '03-06-2024', quantity: 0 },
{ date: '04-06-2024', quantity: 7 },
{ date: '05-06-2024', quantity: 18 },
{ date: '06-06-2024', quantity: 1 },
{ date: '07-06-2024', quantity: 3 },
],
},
{
id: 8,
title: 'The Hobbit',
author: {
name: 'J.R.R. Tolkien',
country: 'UK',
},
genre: 'Fantasy',
price: 900,
stock: 30,
reviews: [
    { user: 'Olivia', rating: 5, comment: 'Fantastic advent'},
    { user: 'Pete', rating: 4, comment: 'Loved it.' },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
    { date: '01-06-2024', quantity: 1 },
    { date: '02-06-2024', quantity: 78 },
    { date: '03-06-2024', quantity: 57 },
    { date: '04-06-2024', quantity: 12 },
    { date: '05-06-2024', quantity: 14 },
    { date: '06-06-2024', quantity: 61 },
    { date: '07-06-2024', quantity: 47 },
    ],
    },
    {
    id: 9,
    title: 'Brave New World',
    author: {
    name: 'Aldous Huxley',
    country: 'UK',
    },
    genre: 'Dystopian',
    price: 3100,
    stock: 0,
    reviews: [
    { user: 'Quinn', rating: 1, comment: 'not good' },
    { user: 'Rachel', rating: 4, comment: 'Very intriguing.'}
    ],
    availability: { online: false, inStore: false },
    weeklySales: [
    { date: '01-06-2024', quantity: 11 },
    { date: '02-06-2024', quantity: 58 },
    { date: '03-06-2024', quantity: 10 },
    { date: '04-06-2024', quantity: 47 },
    { date: '05-06-2024', quantity: 98 },
    { date: '06-06-2024', quantity: 0 },
    { date: '07-06-2024', quantity: 0 },
],
},
{
id: 10,
title: 'The Lord of the Rings',
author: {
name: 'J.R.R. Tolkien',
country: 'UK',
},
genre: 'Fantasy',
price: 1599,
stock: 25,
reviews: [
{ user: 'Steve', rating: 5, comment: 'An epic saga.' },
{ user: 'Tina', rating: 5, comment: 'Absolutely amazing'}
],
availability: { online: true, inStore: true },
weeklySales: [
{ date: '01-06-2024', quantity: 67 },
{ date: '02-06-2024', quantity: 34 },
{ date: '03-06-2024', quantity: 120 },
{ date: '04-06-2024', quantity: 44 },
{ date: '05-06-2024', quantity: 106 },
{ date: '06-06-2024', quantity: 26 },
{ date: '07-06-2024', quantity: 10 },
],
},
]

// console.log(books)
// 1. Calculate Total Revenue from All Books (last 7 days of revenue)
// function calculateTotalRevenue(books) {
//     let totalRevenue = 0;
//     for(let eachBook of books){
//         let totalSalesEachBook = 0;
//         for(key in eachBook["weeklySales"]){
//             sold = eachBook["weeklySales"][key]["quantity"]
//             // console.log(sold)
//             totalSalesEachBook += sold    
//         }
//     console.log(totalSalesEachBook)
//     totalRevenue += totalSalesEachBook*eachBook["price"]
//     }
//     return totalRevenue;
// }
// console.log(books[0]["weeklySales"][0]["quantity"])
// console.log(calculateTotalRevenue(books))



// 2. Find Revenue for Specific Date


// function findBooksSoldOnDate(books, date){
//     let totalRevenueOnSpecificDate = 0;
//     for(let eachBook of books){
//         let totalSalesEachBookOnDate = 0;
//         for(key in eachBook["weeklySales"]){
//             if(books[key]["weeklySales"][key]["date"] != date){continue}
//             else{
//             sold = eachBook["weeklySales"][key]["quantity"]
//             // console.log(sold)
//             }
//             totalSalesEachBookOnDate += sold    
//         }
//     // console.log(totalSalesEachBookOnDate)
//     totalRevenueOnSpecificDate += totalSalesEachBookOnDate*eachBook["price"]
//     }
//     return totalRevenueOnSpecificDate;
// }
// console.log(findBooksSoldOnDate(books, "06-06-2024"))


// 3. Get Daily Sales Summary

// function getDailySalesSummary(books) {
//   let totalDailySales = 0;
//   dailySales = {};
//   for (let book of books) {
//     var date = book.weeklySales[book.weeklySales.length - 1]["date"];
//     totalDailySales +=
//       book["weeklySales"][book.weeklySales.length - 1]["quantity"];
//   }
//   // }
//   dailySales = { [date]: totalDailySales };
//   console.log(dailySales);
// }
// getDailySalesSummary(books);


// 4. Find the Most and Least Sold Books on a Specific Date

function mostLeastSoldBooksOnSpecificDate(books, date) {
  let maxSoldBooksOnSpecificDate = Infinity;
  let minSoldBooksOnSpecificDate = -Infinity;
  let countMax = 0;
  let countMin = 0;
  let information = {
    mostSoldBooks: [],
    leastSoldBooks: [],
  };
  for (let book of books) {
    for (let key in book.weeklySales) {
      if (book.weeklySales[key].date == date) {
        if (book.weeklySales[key].quantity > maxSoldBooksOnSpecificDate) {
          maxSoldBooksOnSpecificDate = book.weeklySales[key].quantity;
          information.mostSoldBooks[countMax] = book.title;
        } else if (book.weeklySales[key].quantity < minSoldBooksOnSpecificDate) {
          minSoldBooksOnSpecificDate = book.weeklySales[key].quantity;
          information.leastSoldBooks[countMin] = book.title;
        }
      }
    }
  }
  for (let book of books) {
    for (let key in book.weeklySales) {
      if (book.weeklySales[key].date == date) {
        if (
          book.weeklySales[key].quantity == maxSoldBooksOnSpecificDate &&
          book.title !== information.mostSoldBooks[countMax]
        ) {
          countMax++;
          information.mostSoldBooks[countMax] = book.title;
        } else if (
          book.weeklySales[key].quantity == minSoldBooksOnSpecificDate &&
          book.title !== information.leastSoldBooks[countMin]
        ) {
          countMin++;
          information.leastSoldBooks[countMin] = book.title;
        }
      }
    }
  }
  return information;
}

// console.log(mostLeastSoldBooksOnSpecificDate(books, "07-06-2024"))

// format with square brackets
function mostLeastSoldBooksOnSpecificDate(books, date) {
  let maxSoldBooksOnSpecificDate = 0;
  let minSoldBooksOnSpecificDate = 9999999999;
  let countMax = 0;
  let countMin = 0;
  let information = {
    mostSoldBooks: [],
    leastSoldBooks: [],
  };
  for (let book of books) {
    for (let key in book["weeklySales"]) {
      if (book["weeklySales"][key]["date"] == date) {
        if (book["weeklySales"][key]["quantity"] > maxSoldBooksOnSpecificDate) {
          maxSoldBooksOnSpecificDate = book["weeklySales"][key]["quantity"];
          information["mostSoldBooks"][countMax] = book["title"];
        } else if (book["weeklySales"][key]["quantity"] < minSoldBooksOnSpecificDate) {
          minSoldBooksOnSpecificDate = book["weeklySales"][key]["quantity"];
          information["leastSoldBooks"][countMin] = book["title"];
        }
      }
    }
  }

  for (let book of books) {
    for (let key in book["weeklySales"]) {
      if (book["weeklySales"][key]["date"] == date) {
        if (
          book["weeklySales"][key]["quantity"] == maxSoldBooksOnSpecificDate &&
          book["title"] !== information["mostSoldBooks"][countMax]
        ) {
          countMax++;
          information["mostSoldBooks"][countMax] = book["title"];
        } else if (
          book["weeklySales"][key]["quantity"] == minSoldBooksOnSpecificDate &&
          book["title"] !== information["leastSoldBooks"][countMin]
        ) {
          countMin++;
          information["leastSoldBooks"][countMin] = book["title"];
        }
      }
    }
  }
  return information;
}
// console.log(mostLeastSoldBooksOnSpecificDate(books, "07-06-2024"))


// 5. Calculate Daily Average Sales for Each Book

function calculateDailyAverageSalesForBooks(books) {
  avgDailySales = [];
  for (let book of books) {
    let totalSales = 0;
    for (let key in book["weeklySales"]) {
      totalSales += book.weeklySales[key].quantity;
    }
    avg = Math.floor(totalSales / book.weeklySales.length);
    avgDailySales.push({ bookId: book.id, averageDailySalesQuantity: avg });
  }
  return avgDailySales;
}
// console.log(calculateDailyAverageSalesForBooks(books));


// 6. Find the Highest Rated Book
function findHighestRatedBook(books) {
  let avgRating = 0;
  let highestRatedBook = { bookName: "a", averageRating: 0 };
  for (let book of books) {
    let total = 0;
    for (let key in book.reviews) {
      total += book.reviews[key].rating;
    }
    avgRating = total / book.reviews.length;
    if (avgRating > highestRatedBook.averageRating) {
      highestRatedBook.bookName = book.title;
      highestRatedBook.averageRating = avgRating;
    }
  }
  return highestRatedBook;
}
// console.log(findHighestRatedBook(books))

// 7. Calculate Total Number of Reviews for Each Book
function calculateTotalReviewsForBooks(books){
  totalReviews = [];
  for (let book of books) {
    totalReviews.push({bookTitle:book.title, amountOfReviews:book.reviews.length})
  }
return totalReviews;
}
calculateTotalReviewsForBooks(books)