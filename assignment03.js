const products = [
    {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 28.95,
    stock: 34,
    sales: 150
    },
    {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 95.50,
    stock: 12,
    sales: 200
    },
    {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 910.75,
    stock: 7,
    sales: 50
    },
    {
    id: 4,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 45.30,
    stock: 0,
    sales: 85,
    stock: 0,
sales: 90
},
{
id: 10,
name: "Running Shoes",
category: "Footwear",
price: 57.45,
stock: 20,
sales: 120
},
{
id: 11,
name: "Air Conditioner",
category: "Home Appliances",
price: 389.95,
stock: 8,
sales: 30
},
{
id: 12,
name: "Bookshelf",
category: "Furniture",
price: 142.30,
stock: 15,
sales: 40
},
{
id: 13,
name: "Smartwatch",
category: "Electronics",
price: 192.99,
stock: 18,
sales: 75
},
{
id: 14,
name: "Electric Toothbrush",
category: "Personal Care",
price: 27.55,
stock: 22,
sales: 55
},
{
id: 15,
name: "Yoga Mat",
category: "Sports",
price: 17.20,
stock: 30,
sales: 100
},
{
id: 16,
name: "Gaming Console",
category: "Electronics",
price: 489.00,
stock: 10,
sales: 95
},
{
id: 17,
name: "Water Bottle",
category: "Sports",
price: 9.50,
stock: 40,
sales: 85
},
{
id: 18,
name: "Microwave Oven",
category: "Home Appliances",
price: 94.75,
stock: 8,
sales: 60
},
{
id: 19,
name: "T-Shirt",
category: "Apparel",
price: 13.99,
stock: 60,
sales: 110
},
{
id: 20,
name: "Jeans",
category: "Apparel",
price: 47.30,
stock: 20,
sales: 75
}
];

span=products.length;

// console.log(products)

// console.log(products[0]["sales"])


// 1. Find the Best Selling Product

// function findBestSellingProduct(products){
//     sold=-1;

//     for (i=0; i<span; i++){
//         if(products[i]["sales"]>sold){
//             sold= products[i]["sales"];
//             indexNum=i;
//         }
//         else {
//             continue
//         };
//     }
//     console.log(`The best selling product is ${products[indexNum]["name"]} with a total sales of ${products[indexNum]["sales"]} `)
//     return
// }
// findBestSellingProduct(products);


// 2. Find the Out of Stock Products (products that have 0 stock)
// function findOutOfStockProducts(products) {
//     zeroStockItems=[];
//     count = 0

//     for (i=0; i<span; i++){
//         if(products[i]["stock"]==0){
//             zeroStockItems[count] = products[i]["name"]
//             count ++;
//         }
//         else {continue}
//     }
//     console.log(zeroStockItems);
// }
// findOutOfStockProducts(products)

// 3. Calculate the Total Revenue

// function calculateTotalRevenue(products) {
//     totalRevenue=0;
//     for (i=0; i<span; i++){
//     eachItemRevenue = products[i]["price"]*products[i]["sales"]
//     // console.log(eachItemRevenue)
//     totalRevenue = totalRevenue + eachItemRevenue;
//     }
//     console.log(` The total revenue generated is ${totalRevenue}`)
//     return
// }
// calculateTotalRevenue(products)

// 4. Apply Sale to Less-Selling Products

// function applySaleToLessSellingProducts(products, percentage){
//     updatedProductsPrice=products.slice();
    
//     for (i=0; i<span; i++){
//         if(updatedProductsPrice[i]["sales"]<=50){
//             reducedPrice = (100-percentage)/100*updatedProductsPrice[i]["price"];
//             updatedProductsPrice[i]["price"] = reducedPrice;
//             // console.log(i)
//         }
//         else{
//             continue
//         }
//     }
//     console.log("updated products",updatedProductsPrice)
//     return
// }

// applySaleToLessSellingProducts(products,50)
// console.log("Old Products",products)


// 5. Find Products in a Specific Category

// function findProductsInCategory(products, category) {
//     for (let prod of products){
//         if(prod.category === category){
//         console.log(prod);
//     }
//     else{continue}
//     }
//     return
// }
// findProductsInCategory(products, "Sports")

// 6. Find Products with Stock Less Than a Specific Quantity

// function findProductsWithLowStock(products, quantity) {
//     for (let prod of products){
//         if(prod.stock < quantity){
//             console.log(prod)
//         }
//         else(confirm)

//     }
// }
// findProductsWithLowStock(products, 50)


// 7. Calculate Total Stock Value

// function calculateTotalStockValue(products) {
//     totalStockValue=0;
//     for (let key in products){
//         // console.log(key)
//         eachProductCost=products[key]["stock"]*products[key]["price"];
//         // console.log(eachProductCost)
//         totalStockValue=totalStockValue + eachProductCost;
//     }
//     console.log(totalStockValue)
// }
// calculateTotalStockValue(products)

// 8. Get Products with High Sales but Low Stock
// function getHighSalesLowStockProducts(products, salesThreshold, stockThreshold) {
//     for (let prod of products){
//         if(prod.sales > salesThreshold && prod.stock < stockThreshold){
//             console.log(prod)
//         }
//         else{continue}
//     }
//     return  
// }
// getHighSalesLowStockProducts(products, 100, 50)

// 9. Find the Most Expensive Product in Each Category


// function findMostExpensiveProductInEachCategory(products) {
//     const mostExpensiveProducts = {};

//     for (let prod of products) {
        
//         if (!mostExpensiveProducts[prod.category] || prod["price"] > mostExpensiveProducts[prod.category].price) {
//             mostExpensiveProducts[prod.category] = prod;
//         }
//         // console.log(mostExpensiveProducts[prod.category].price)
//     }
//     console.log(mostExpensiveProducts)
// }
// findMostExpensiveProductInEachCategory(products)


// 10. Group Products by Category
// function groupProductsByCategory(products) {
//     const group = {};
//     for (let prod of products) {
//         if (!group[prod.category]) {
//             group[prod.category] = [];
//         }
//         group[prod.category].push(prod);
//     }
// console.log(group)
// }
// groupProductsByCategory(products)


// 11. Get Top N Selling Products
// function getTopNSellingProducts(products, n){
//     const copyProd=products;
//     const topSellingProd = [];
//     for(i=0; i<n;i++){
//         sold = -1;
//     for(let key in copyProd){    
//         if(products[key]["sales"]>=sold){
//             sold= products[key]["sales"];
//             indexNum=key;
//             console.log(indexNum)
            
//         }
//         copyProd.splice(indexNum,1)
//         topSellingProd[i]=products[indexNum]


//         // console.log(copyProd)
//         // console.log(indexNum)
//     }
//     }
//     console.log(topSellingProd)
// }
// getTopNSellingProducts(products,2)
// console.log(products)


        // 11. Get Top N Selling Products
function getTopNSellingProducts(products, n){
    const clone = products;
    const topSellingProd = {};
    for(i=0; i<n;i++){
                sold = -1;
            for(let key in clone){
                if(clone[key]["sales"]>sold){
                    sold= clone[key]["sales"];
                    indexNum=key;
                }
            }
            topSellingProd[i]=clone.splice(indexNum,1)
        }
        console.log(topSellingProd)
}


getTopNSellingProducts(products,2)
console.log(products)