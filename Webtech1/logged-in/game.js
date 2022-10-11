var gameArray = [
    {
        "Id" : 1,
        "name" : "Skyrim",
        "price" : 40,
        "store" : "Steam"
    },
    {
        "Id" : 2,
        "name" : "Rainbow Six Siege",
        "price" : 20,
        "store" : "Ubisoft"
   },
   {
        "Id" : 3,
        "name" : "Assassin's creed black flag",
        "price" : 12,
        "store" : "Steam"
    },
    {
        "Id" : 4,
        "name" : "Red Dead Redemption 2",
        "price" : 60,
        "store" : "Steam"
    },
    {
        "Id" : 5,
        "name" : "ELDEN RING",
        "price" : 60,
        "store" : "Steam"
    },
    {
        "Id" : 6,
        "name" : "Far Cry 6",
        "price" : 24,
        "store" : "Ubisoft"
    }
];


var helpArray = [];
function createGame(){
 gameArray = helpArray;
}
 
 for (let index = 0; index < gameArray.length; index++) {
            drawGame(gameArray, index);
    }

function drawNewGame(){
    if(Validate()){
        var inputName = document.getElementById("gameName").value.trim();
        var inputPrice = document.getElementById("price").value.trim();
        var inputStore = document.getElementById("store").value.trim();

        gameArray.push({
            "Id" : gameArray.length,
            "name" : inputName,
            "price" : inputPrice,
            "store" : inputStore
        });
        drawGame(gameArray, gameArray.length-1);

        document.getElementById("gameName").value = "";
        document.getElementById("price").value = "";
        document.getElementById("store").value = "";
    }
}
function Validate(){
    var inputName = document.getElementById("gameName").value.trim().length;
    var inputPrice = document.getElementById("price").value.trim().length;
    var inputStore = document.getElementById("store").value.trim().length;
    var inputNameValue = document.getElementById("gameName").value.trim();
    var inputPriceValue = document.getElementById("price").value.trim();

    if(validateGameName() & validatePrice() & validateStore()  & existName()){
        return true;
    }
    else{
        return false;
    }

    function existName(){
        var exist = false;
        for (let index = 0; index < gameArray.length; index++) {
        if(gameArray[index].name === inputNameValue){
            exist = true;
        }
    }
    if(exist){
        document.getElementById("empty-gameName").style.display="block";
        document.getElementById("empty-gameName").innerHTML = "Ez az játék már létezik!";
        return false;
    } else {
        document.getElementById("empty-gameName").style.display = "none";
        return true;
    }
}
    
    function validateGameName(){
        if(inputName === 0){
            document.getElementById("empty-gameName").style.display="block";
            document.getElementById("empty-gameName").innerHTML = "A név mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-gameName").style.display = "none";
            return true;
        }
    }

    function validatePrice(){
        if(inputPrice === 0){
            document.getElementById("empty-price").style.display="block";
            document.getElementById("empty-price").innerHTML = "Az ár mező kitöltése kötelező!";
            return false;
        } else {
            if(isNaN(inputPriceValue) | inputPriceValue < 0){
                document.getElementById("empty-price").style.display="block";
                document.getElementById("empty-price").innerHTML = "A formátum nem megfelelő!";
                return false;
            }
            else{
            document.getElementById("empty-price").style.display = "none";
            return true;
            }
        }

    }

    function validateStore(){
        if(inputStore=== 0){
            document.getElementById("empty-store").style.display="block";
            document.getElementById("empty-store").innerHTML = "A store mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-store").style.display = "none";
            return true;
        }

    }
    
}

document.getElementById('search_categories').addEventListener('change', (e) => {
    let selected = document.getElementById('search_categories');
    let selectedValue = selected.options[selected.selectedIndex].value;
    if (selectedValue == 1) {
        removeGame();
        createGame();
        for (let index = 0; index < gameArray.length; index++) {
            for (let jindex = index+1; jindex < gameArray.length; jindex++) {
                if(gameArray[index].name > gameArray[jindex].name){
                    let tmp = gameArray[index];
                    gameArray[index] = gameArray[jindex];
                    gameArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < gameArray.length; index++) {
                drawGame(gameArray, index);
        }
    }
    if (selectedValue == 2) {
        removeGame();
        createGame();
        for (let index = 0; index < gameArray.length; index++) {
            for (let jindex = index+1; jindex < gameArray.length; jindex++) {
                if(gameArray[index].price > gameArray[jindex].price){
                    let tmp = gameArray[index];
                    gameArray[index] = gameArray[jindex];
                    gameArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < gameArray.length; index++) {
                drawGame(gameArray, index);

        }
    }
    if (selectedValue == 3) {
        removeGame();
        createGame();
        for (let index = 0; index < gameArray.length; index++) {
            for (let jindex = index+1; jindex < gameArray.length; jindex++) {
                if(gameArray[index].price < gameArray[jindex].price){
                    let tmp = gameArray[index];
                    gameArray[index] = gameArray[jindex];
                    gameArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < gameArray.length; index++) {
                drawGame(gameArray, index);
        }
    }   
});
function removeGame(){
    var gameContainer = document.getElementById("game-container");
    gameContainer.parentNode.removeChild(gameContainer);

   var addGameContainer = document.getElementById("add-game-container");
    var div = document.createElement("div");
    div.classList.add("games-container");
    div.setAttribute("id", "game-container");
    addGameContainer.appendChild(div);
    helpArray = gameArray;
    gameArray = [];
}

function drawGame(gameArray, index) {
    var gameContainer = document.getElementById("game-container");
    var div = document.createElement("div");
    div.classList.add("dynamic-game");
    gameContainer.appendChild(div);

    var img = document.createElement("img");
    img.classList.add("game-item-img");
    img.src = "../img/game-icon.png"
    div.appendChild(img);

    var title = document.createElement("p");
    title.textContent = gameArray[index].name;
    title.classList.add("game-title");
    div.appendChild(title);

    var price = document.createElement("p");
    price.textContent = gameArray[index].price;
    price.classList.add("game-price");
    div.appendChild(price);

    var cart = document.createElement("div");
    cart.classList.add("buy-item");
    cart.setAttribute("id", `${gameArray[index].Id}-1`);
    cart.setAttribute("onClick", `addGame()`); 
    div.appendChild(cart);

    var StoreInfo = document.createElement("div");
    StoreInfo.classList.add("tooltip");
    div.appendChild(StoreInfo); 

    var StoreText = document.createElement("span");
    StoreText.textContent = gameArray[index].store + '\n';
    StoreText.classList.add("tooltiptext");
    StoreInfo.appendChild(StoreText);
    gameFlysToCart();
}



function gameFlysToCart() {

    jQuery(function ($) {
        $(window).scroll(function fix_element() {
            $('.cart-wrap').css(
                $(window).scrollTop() > 700 ?
                {
                    'position': 'fixed',
                    'top': '10px',
                    'border-radius': '40px',
                    'right': '-130px',
                    'background-color': 'rgb(107, 182, 130)',
                    'width': '80px'
                } :
                {
                    'position': 'relative',
                    'top': 'auto',
                    'right': '0',
                    'background-color': '',
                    'height': '50px',
                    'width': '50px'
                }
            );
            $('.cart-items-wrap').css(
                $(window).scrollTop() > 650 ?
                {
                    'right': '130px'
                } :
                {
                    'right': '0'
                }
            );
            return fix_element;
        }());
    });
}

