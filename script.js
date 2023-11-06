const menuCategoryItem = ['Donuts', 'Cakes', 'Bakery Goods', 'Hot Beverages', 'Cold Beverages']; //add menu Category here 
const menuCategoryItemContainer = document.getElementById("menu-category-items"); // the container in which items are to be inserted 

//function to add menu Categories item under Menu Categories 
function addItemsToMenuCategory() {
    for (let index = 0; index < menuCategoryItem.length; index++) {
        let menuCategoryItemDiv = document.createElement("div");
        menuCategoryItemDiv.textContent = menuCategoryItem[index];
        menuCategoryItemDiv.classList.add("menu-category-item");
        menuCategoryItemContainer.append(menuCategoryItemDiv)
    }

}
addItemsToMenuCategory();


const donuts = [
    {
        name: "Carmel Macchiato",
        image: "./images/d (1).png", // Image URL
        price: "₹ 109",
    },
    {
        name: "Chocolate Maia",
        image: "./images/d (2).png",
        price: "₹ 119",

    },
    {
        name: "Cookie Crumble",
        image: "./images/d (3).png",
        price: "₹ 119",

    },
    {
        name: "Coconut Ice",
        image: "./images/d (4).png",
        price: "₹ 119",

    },
    {
        name: "Festive Truffle",
        image: "./images/d (5).png",
        price: "₹ 119",

    },
    {
        name: "Chocolate Hazelnut Kreme",
        image: "./images/d (6).png",
        price: "₹ 119",

    },
    {
        name: "Chocolate & Almond Praline",
        image: "./images/d (7).png",
        price: "₹ 119",

    },
    {
        name: "Lemon maringue Pie",
        image: "./images/d (8).png",
        price: "₹ 119",

    },
    {
        name: "Hazelnut Latte",
        image: "./images/d (9).png",
        price: "₹ 119",

    },
    {
        name: "Salted Carmel",
        image: "./images/d (10).png",
        price: "₹ 119",

    },
    {
        name: "Millionaire's Shortbread",
        image: "./images/d (11).png",
        price: "₹ 119",

    },
    {
        name: "Millionaire's Parcel",
        image: "./images/d (12).png",
        price: "₹ 119",

    },
    {
        name: "The Cobweb",
        image: "./images/d (13).png",
        price: "₹ 119",

    },
    {
        name: "Triple Chocolate Cake",
        image: "./images/d (14).png",
        price: "₹ 119",

    },
    {
        name: "Toffee Apple",
        image: "./images/d (15).png",
        price: "₹ 119",

    },
    {
        name: "Vanilla Cappuccino",
        image: "./images/d (16).png",
        price: "₹ 119",

    },
  
];

const cakes = [
    {
        name: "Chocolate Truffle",
        image: "./images/cake (1).png", // Image URL
        price: "₹ 109",
    },
    {
        name: "Blackout",
        image: "./images/cake (2).png", // Image URL
        price: "₹ 109",
    },
    {
        name: "Fresh Strawberry",
        image: "./images/cake (3).png", // Image URL
        price: "₹ 109",
    },
    {
        name: "Classic Vanilla",
        image: "./images/cake (4).png", // Image URL
        price: "₹ 109",
    },
];


const menuItemContainer = document.getElementById("menu-item-container");


function addMenuItems( menuItemsData, categoryName) // the parameter menuItemsData targets the menu category items 
{
    let menuTitle = document.createElement("div");
    let title = categoryName; 
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = title;
    const menuItemGrid = document.createElement("div");
    menuItemGrid.classList.add("menu-item-grid");
    for(let index=0 ; index < menuItemsData.length ; index++){
        let menuItem = document.createElement("div"); // create a menu item div 
        menuItem.classList.add("menu-item");
        let itemImageDiv = document.createElement("div"); // create an itemImageDiv 
        itemImageDiv.classList.add("menu-item-img");
        let image = document.createElement("img"); // create an image element for itemImageDiv
        image.src = menuItemsData[index].image ; // use menuItemsData[index].image to access the image url 
        itemImageDiv.appendChild(image); // append image to itemImageDiv 
        menuItem.append(itemImageDiv); // append itemImageDiv to menuItem div
        let itemName = document.createElement("div"); // create a div for itemName
        itemName.textContent = menuItemsData[index].name; // access the name from menuItemsData
        menuItem.append(itemName);// append the itemName to the menuItem
        let priceCard = document.createElement("div") // create a div for priceCard
        priceCard.classList.add("price-card"); 
        let priceBtn = document.createElement("button");
        priceBtn.textContent = menuItemsData[index].price ;
        priceBtn.classList.add("price-btn");
        let addBtn = document.createElement("button");
        addBtn.textContent = "ADD";
        addBtn.classList.add("add-btn");
        priceCard.append(priceBtn); // append priceBtn to priceCard
        priceCard.append(addBtn); // append addBtn to priceCard
        menuItem.append(priceCard); // append priceCard to menuItem 
    
       
        menuItemGrid.append(menuItem); // append the menuItem to the menuItemGrid      
        
    }
  
    menuItemContainer.append(menuItemGrid) ;  
    
}

addMenuItems(donuts , "donuts");
addMenuItems(cakes , "cakes");


window.addEventListener('load', function () {
    const primeContainer = document.querySelector('.prime-container');
    const menuContainer = document.querySelector('.menu-item-container');
  
    const updateMenuHeight = function () {
      const windowHeight = window.innerHeight;
      const primeContainerHeight = primeContainer.clientHeight;
      const menuHeight = Math.max(windowHeight, primeContainerHeight);
      menuContainer.style.height = menuHeight + 'px';
    };
  
    // Call the function initially to set the menu height correctly
    updateMenuHeight();
  
    // Add an event listener to update the menu height on resize
    window.addEventListener('resize', updateMenuHeight);
  });