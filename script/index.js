let prodDisplay = document.querySelector("#productDisplay");

let data = [
  {
    id: " 1 ",
    name: "iPhone 14 Pro Max",
    imageUrl:
      "https://i.postimg.cc/XNkHdTcC/Apple-i-Phone-14-Pro-Max-FINAL-featured-image-packshot-review-1-removebg-preview.png",
    details:
      "Storage: 128GB - 1TB; Dimensions: Width= 3.05in, Height= 6.33, Display: 6.7in OLED display 120Hz; Hardware: A16 Bionic Chip; Camera: 48MP Main, 12MP Front, 12MP Ultra Wide, 4K video recording up to 60fps, Face ID; Power & Battery: 4323 mAh",
    price: "R 30 399.00",
  },
  {
    id: " 2 ",
    name: "Samsung Galaxy S23 Ultra",
    imageUrl:
      "https://i.postimg.cc/YSvZxbqw/Samsung-Galaxy-S23-Ultra-featured-image-packshot-review-1024x691-removebg-preview.png",
    details:
      "Storage: 256GB; Dimensions: Width= 3.07, Height= 6.43in; Display: 6.8in Dynamic AMOLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 8GB RAM, Android 13; Camera: 200MP Main, 12MP Front, 12MP Ultra Wide, 10MP Telephoto, 8K + 4K video recording up to 960fps, Face Unlock; Power & Battery: 5000mAh up to 45W wired charging, Reverse Wireless Charging",
    price: "R 28 999.00",
  },
  {
    id: " 3 ",
    name: "Xiaomi 13 Ultra",
    imageUrl:
      "https://i.postimg.cc/VkfcXqCY/pms-1677071738-62061206-800x800-85-removebg-preview.png",
    details:
      "Storage: 256GB; Dimensions: Width= 2.94in, Height= 6.43in; Display: 6.7in AMOLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 12GB LPDDR RAM, Android 13; Camera: 50MP Main, 32MP Front, 50MP Telephoto, 50MP Periscope, 50MP Ultra Wide, 8K & 4K video recording up to 1920fps; Power & Battery: 5000mAh up to 90W Fast Charging",
    price: "R 30 136.00",
  },
  {
    id: " 4 ",
    name: "OPPO Find X6 Pro",
    imageUrl:
      "https://i.postimg.cc/CLDKcs5k/Oppo-Find-X6-Pro-featured-image-packshot-review-removebg-preview.png",
    details:
      "Storage: 256BG UFS 4.0; Dimensions: Width= 3.0in, Height=6.49in; Display: 6.8in AMOLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 12GB LPDDR5 RAM; Camera: 50MP Main, 50MP Telephoto, 50MP Ultra Wide, 32MP Front; Power & Battery: 5000mAh up to 100W Fast Charging;",
    price: "R 19 000.00",
  },
  {
    id: " 5 ",
    name: "Google Pixel 7 Pro ",
    imageUrl:
      "https://i.postimg.cc/CxCxgG3D/Google-Pixel-7-featured-image-packshot-review-removebg-preview.png",
    details:
      "Storage: ; Dimensions: ; Display: ; Hardware: ; Camera: ; Power & Battery: ;",
    price: "R 31 442.00",
  },
  {
    id: " 6 ",
    name: "Huawei P60 Pro",
    imageUrl: "https://i.postimg.cc/QCdM62BM/p60-Pro-removebg-preview.png",
    details:
      "Storage: 256GB; Dimensions: Width= 2.93in, Height= 6.34in ; Display: 6.7in OLED display 120Hz; Hardware: Snapdragon 8+ Gen 1 4G, 8GB RAM; Camera: 48MP Main, 48MP Telephoto, 13MP Ultra Wide, 13MP Front; Power & Battery: 4815mAh up to 88W Fast Charging;",
    price: "R 11 135.00",
  },
  {
    id: " 7 ",
    name: "Sony Xperia 1 V ",
    imageUrl: "https://i.postimg.cc/Z5GCTsQf/1-V-removebg-preview.png",
    details:
      "Storage: 256GB; Dimensions: Width= 2.80in, Height= 6.50in; Display: 6.5in OLED display 120Hz; Hardware: Snapdragon 8 Gen 2, 12GB RAM, Android 13; Camera: 48MP Main, 12MP Telephoto, 12MP Ultra Wide, 4K UHD video recording, 12MP Front; Power & Battery: 5000mAh up to 30W Fast Charging;",
    price: "R 114 790.00",
  },
  {
    id: "8",
    name: "Nothing Phone 1",
    imageUrl: "https://i.postimg.cc/BQhFGgsy/nothing-1-removebg-preview.png",
    details:
      "Storage: 128GB; Dimensions: Width= , Height= ; Display: 6.5in AMOLED display 120Hz; Hardware: Snapdragon 778G+, 8GB Ram; Camera: 50MP Main, 50MP Ultra Wide, 4K UHD video recording, 16MP Front; Power & Battery: 4500mAh up to 33W Fast Charging;",
    price: "R 12 999.00",
  },
];
prodDisplay.innerHTML = "";
data.forEach((item) => {
  // let varia = obj[item];
  prodDisplay.innerHTML += `
        <div class="cardStructure">
        <div class="cardImage">
        <img src="${item.imageUrl}">
        </div>
        <div class="cardBody">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>
        </div>
    `;
});
//with reference to Code With Yousaf

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  let tabledata = document.querySelector(".data_table");

  let object = localStorage.getItem("object");
  let objectData = JSON.parse(object);
  let elements = "";

  objectData.map(
    (record) =>
      (elements += `
        <tr>
        <td>${record.name}</td>
        <td>${record.details}</td>
        <td><img class= "image-fluid image" src="${record.imageUrl}" loading="lazy" alt= "${record.name}"></td>
        <td>${record.price}</td>
        <td>
             <button>Edit</button>
             <button>Delete</button>
        </td>
        </tr>`)
  );

  tabledata.innerHTML = elements;
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
}

function add() {
  let name = document.querySelector(".brand").value;
  let specs = document.querySelector(".specs").value;
  let image = document.querySelector(".imageUrl").value;
  let price = document.querySelector(".price").value;

  let newObj = { id: 3, name: name, specs: specs };
  data.push(newObj);

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_div").style.display = "block";

  readAll();
}

// let objectData = JSON.parse(object);
// let elements = "";
