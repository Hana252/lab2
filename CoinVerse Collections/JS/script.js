let products = {
  data: [
    {
      productName: "10mm 1917 Old Coin",
      category: "Silver",
      price: "195",
      image: "../imgs/coin2.jpg",
    },
    {
      productName: "Vintage 70's Edition Coin Set of 10 Collectible Keepsake Coins",
      category: "Silver",
      price: "225",
      image: "../imgs/coin1.jpg",
    },
    {
      productName: "Old Coin Rare King Fad First - Milliman and Half 1933 ",
      category: "Silver",
      price: "170",
      image: "../imgs/coin3.jpg",
    },
    {
      productName: "",
      category:"Byzantine",
      price: "1750",
      image: "../imgs/byzan1.gif",
    },
    {
      productName: "1",
      category:"Byzantine",
      price: "140",
      image: "../imgs/byzan2jpg.jpg",
    },
    {
      productName: "3",
      category:"Byzantine",
      price: "520",
      image: "../imgs/byzan4.jpg",
    },
    {
      productName: "4",
      category:"Byzantine",
      price: "120",
      image: "../imgs/coin13.avif",
    },
    {
      productName: "",
      category:"Byzantine",
      price: "59",
      image: "../imgs/byzan3jpg.jpg",
    },
   
    {
      productName: "10mm 1917 Old Coin",
      category: "Silver",
      price: "195",
      image: "../imgs/coin2.jpg",
    },
    {
      productName: "10mm 1917 Old Coin",
      category: "",
      price: "195",
      image: "../imgs/coin2.jpg",
    },
    {
      productName: "10mm 1917 Old Coin",
      category: "",
      price: "195",
      image: "../imgs/99.png",
    },
    {
      productName: "10mm 1917 Old Coin",
      category: "",
      price: "195",
      image: "../imgs/432.jpeg",
    },
    {
      productName: " 1917 Old Coin",
      category: "",
      price: "195",
      image: "../imgs/eo.jpeg",
    },
    {
      productName: "10mm 1917 Old Coin",
      category: "Silver",
      price: "195",
      image: "../imgs/er.jpeg",
    },

    
    
  ],
};

for (let i of products.data) {   //loop that iterates over each element (i) in the products.data array.
  //Create Card
  let card = document.createElement("div"); //create a new HTML div element and assigns it to the variable card. 
                                              //This div will represent a card for each product.
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {  //select all HTML elements with the class "button-value" and stores them in the variable buttons. 
                                  //These elements are assumed to be buttons.
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
// Search button click
function search(){
  // console.log("hey")
  let searchInput = document.getElementById("search-input").value.trim().toLowerCase(); // Trim and convert to lowercase
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the trimmed and lowercase search value
    if (element.textContent.toLowerCase().includes(searchInput)) {
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
}

