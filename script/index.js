
let result = document.querySelector("#items");
let addItem = document.querySelector(".abtn");
let sortItem = document.querySelector(".sbtn");
let tempImg = document.querySelector(".img-link");
let priceInput = document.querySelector(".price");
let itemInput = document.querySelector(".brand");
let specsInput = document.querySelector(".specs")
let output = document.querySelector(".output");
let clientItems = []
let tempID = 8;
let checkBox;
let editbtn = document.querySelector(".edit-btn")

let  itemDisplay = [
    {
    id: " 1 ",
    name: "iPhone 14 Pro Max",
    imageUrl: "",
    details: "Storage: 128GB - 1TB; Dimensions: Width= 3.05in, Height= 6.33, Display: 6.7in OLED display 120Hz; Hardware: A16 Bionic Chip; Camera: 48MP Main, 12MP Front, 12MP Ultra Wide, 4K video recording up to 60fps, Face ID; Power & Battery: 4323 mAh",
    price: "R 30 399.00",
    },
    {
    id: " 2 ",
    name: "Samsung Galaxy S23 Ultra",
    imageUrl: " ",
    details: "Storage: 256GB; Dimensions: Width= 3.07, Height= 6.43in; Display: 6.8in Dynamic AMOLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 8GB RAM, Android 13; Camera: 200MP Main, 12MP Front, 12MP Ultra Wide, 10MP Telephoto, 8K + 4K video recording up to 960fps, Face Unlock; Power & Battery: 5000mAh up to 45W wired charging, Reverse Wireless Charging",
    price: "R 28 999.00",
    },
    {
    id: " 3 ",
    name: "Xiaomi 13 Ultra",
    imageUrl: " ",
    details: "Storage: 256GB; Dimensions: Width= 2.94in, Height= 6.43in; Display: 6.7in AMOLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 12GB LPDDR RAM, Android 13; Camera: 50MP Main, 32MP Front, 50MP Telephoto, 50MP Periscope, 50MP Ultra Wide, 8K & 4K video recording up to 1920fps; Power & Battery: 5000mAh up to 90W Fast Charging",
    price: "R 30 136.00",
    },
    {
    id: " 4 ",
    name: "OPPO Find X6 Pro",
    imageUrl: " ",
    details: " ",
    price: "R 19 000.00",
    },
    {
    id: " 5 ",
    name: "Google Pixel 7 Pro ",
    imageUrl: " ",
    details: " ",
    price: "R 31 442.00",
    },
    {
    id: " 6 ",
    name: "Huawei P60 Pro",
    imageUrl: " ",
    details: "  ",
    price: "R 11 135.00",
    },
     {
    id: " 7 ",
    name: "Sony Xperia 1 V ",
    imageUrl: " ",
    details: "  ",
    price: "R 114 790.00",
    },
];
