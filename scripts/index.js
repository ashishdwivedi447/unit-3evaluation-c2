

async function get_dishes(){

   try{
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");

    let data=await res.json();



    append_data(data.meals);


    
  }
  catch(err){
      console.log("err:",err);
  }

 }

   get_dishes();


   let cart=localStorage.getItem("cart");

   if(!cart){
       cart=[];
       localStorage.setItem("cart",JSON.stringify(cart));

       refereshcartcount(cart);
   }
   else{
       cart=JSON.parse(cart);
       refereshcartcount(cart);
   }

      function refereshcartcount(cart){
          let cartcount=document.querySelector("#count");
          cartcount.textContent="cart count:"+cart.length;
      }

   function append_data(data){
       data.forEach(function(elem){
           let div=document.createElement("div");

           let img=document.createElement("img");

           img.src=elem.strMealThumb;

           let name=document.createElement("p");

           name.innerText=elem.strMeal;

           let button=document.createElement("button");
           button.id="Add to cart";
           
            button.innerText="Add to Cart";

            button.onclick=function(event){
                addtocart(elem);
            }

           let price=Math.floor(Math.random()*500);
           
           let=price_tag=document.createElement("p");
           price_tag.innerText=price+"$";


           div.append(img,name,button,price_tag);

           document.querySelector("#menu").append(div);
        

       });

       function addtocart(elem){
           let cart=JSON.parse(localStorage.getItem("cart"));
           cart.push(elem);
           localStorage.setItem("cart",JSON.stringify(cart));
           refereshcartcount(cart);
       }
   }

     