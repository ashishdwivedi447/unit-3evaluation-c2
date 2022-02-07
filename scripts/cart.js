let cart_item=JSON.parse(localStorage.getItem("cart"));

cart_item.map(function(elem){
    let div=document.createElement("div")

    let price=Math.floor(Math.random()*500);
    let img=document.createElement("img");

    img.src=elem.strMealThumb;

    let name=document.createElement("p");

    name.innerText=elem.strMeal;
    let price_tag=document.createElement("p");

    price_tag.innerText=price+"$";

    let button=document.createElement("button");
    button.textContent="Remove";
    button.id="remove";

    div.append(img,name,price,button);

    document.querySelector("#cart").append(div);

})