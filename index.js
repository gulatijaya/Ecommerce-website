let nav = document.querySelector(".active")
function home() {
  document.querySelector("#shop").style.color = "#333333 ";
  document.querySelector("#about1").style.color = "#333333";
  document.querySelector("#contact1").style.color = "#333333";
  nav.classList.add('active')
}
function shop() {
  document.querySelector("#shop").style.color = " #eb4d4b";
  document.querySelector("#about1").style.color = "#333333";
  document.querySelector("#contact1").style.color = "#333333";
  nav.classList.remove('active')
}

function about() {

  document.querySelector("#shop").style.color = "#333333 ";
  document.querySelector("#about1").style.color = "#eb4d4b";
  document.querySelector("#contact1").style.color = "#333333";
  nav.classList.remove('active')
}

function contact() {
  document.querySelector("#shop").style.color = "#333333 ";
  document.querySelector("#about1").style.color = "#333333";
  document.querySelector("#contact1").style.color = "#eb4d4b";
  nav.classList.remove('active')

}
// card product1 =======================
let product1 = {
  prdimg: ["./images/menswear-1.jpg", "./images/menswear-2.jpg", "./images/menswear-3.jpg", "./images/menswear-4.jpg"],
  prdbackimg:["./images/menswear-1smallimg2.jpg","./images/menswear-2smallimg1.jpg","./images/menswear-3smallimg1.jpg","./images/menswear-4smallimg2.jpg"],
  prdname: [ "White Shirt", "Black T-Shirt", "Green T-Shirt", "Jacket"],
  prddesc: ["this is tshirt", "this is shirt", "this is shirt", "this is shirt"],
  prdprice: ["500", "400", "600", "800"],
  

}

function showcard() {
  for (let i = 0; i < product1.prdimg.length; i++) {
   
    document.getElementById("card1").innerHTML += `
    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3 py-xl-0 pb-4">
    <div class="card ">
    <div class="crd cardimg">
    
    <img src="${product1.prdimg[i]}" width="100%" height="320px" class="productsimg" data-bs-toggle="modal"
    data-bs-target="#exampleModal" >

    <img src="${product1.prdbackimg[i]}" width="100%" height="320px" class="backimg proimg" data-bs-toggle="modal"
    data-bs-target="#exampleModal" >
    
    <h4 class="mt-3 ps-2">${product1.prdname[i]}</h4>
    <p class="mt-3 ps-2">${product1.prddesc[i]}</p>
    <p class="mt-3 ps-2">Rs.<span class="productprice">${product1.prdprice[i]}</span></p>
    <div class="star mt-3 mb-3 ps-2">
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled" width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    </div>
    <button class="btn addcart-btn allbtn mb-3 ps-2 myaddcartbtn">Add to Cart</button>
    </div>
    </div>
    </div>
    `
  }
}
showcard();

//card product2 =========================

let product2 = {
  prdimg: ["./images/womenswear-1.jpg", "./images/womenswear-2.jpg", "./images/womenswear-3.jpg", "./images/womenswear-4.jpg"],
  prdbackimg:["./images/womenswear-1smallimg1.jpg", "./images/womenswear-2smallimg4.jpg","./images/womenswear-3smallimg3.jpg","./images/womenswear-4smallimg1.jpg"],
  prdname: ["Black Top", "Floral Dress", "Kurti", "Printed Shirt"],
  prddesc: ["this is tshirt", "this is shirt", "this is shirt", "this is shirt"],
  prdprice: ["500", "400", "600", "800"],
}
function showcard1() {
  for (let i = 0; i < product2.prdimg.length; i++) {
    document.getElementById("card2").innerHTML += `
    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3 py-xl-0 pb-4">
    <div class="card ">
    <div class="crd cardimg">
    <img src="${product2.prdimg[i]}" width="100%" height="320px" class="productsimg" data-bs-toggle="modal"
    data-bs-target="#exampleModal" >
    <img src="${product2.prdbackimg[i]}" width="100%" height="320px" class="backimg proimg" data-bs-toggle="modal"
    data-bs-target="#exampleModal" >
    <h4 class="mt-3 ps-2">${product2.prdname[i]}</h4>
    <p class="mt-3 ps-2">${product2.prddesc[i]}</p>
    <p class="mt-3 ps-2 ">Rs.<span class="productprice">${product2.prdprice[i]}</span></p>
    <div class="star mt-3 mb-3 ps-2">
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled" width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    </div>
    <button class="btn addcart-btn allbtn mb-3 ps-2 myaddcartbtn">Add to Cart</button>
    </div>
    </div>
    </div>
    `
  }
}
showcard1();

// featured product ===================

let product3 = {
  prdimg: ["./images/menswear-2.jpg", "./images/womenswear-1.jpg", "./images/menswear-3.jpg", "./images/menswear-1.jpg", "./images/menswear-4.jpg"],
  prdname: ["Black Top", "Kurti", "Denim Jacket", "Top", "top"],
  prddesc: ["this is tshirt", "this is shirt", "this is shirt", "this is shirt", "top"],
  prdprice: ["500", "400", "600", "800", "400"]
}
function showcard2() {
  for (let i = 0; i < product3.prdimg.length; i++) {
    document.getElementById("card3").innerHTML += `
    <div class="col m-2">
    <div class="card border-none">
    <div class="cardimg">
    <img src="${product3.prdimg[i]}" class="card-img-top proimg" width="100%" height="320px" data-bs-toggle="modal"
    data-bs-target="#exampleModal" >
    <h4 class="mt-3 ps-2">${product3.prdname[i]}</h4>
    <p class="mt-3 ps-2">${product3.prddesc[i]}</p>
    <p class="mt-3 ps-2">Rs.<span class="productprice">${product3.prdprice[i]}</span></p>
    <div class="star mt-3 mb-3 ps-2">
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled" width="20" height="20"></iconify-icon>
    <iconify-icon icon="tabler:star-filled"  width="20" height="20"></iconify-icon>
    </div>
    <button class="btn addcart-btn allbtn mb-3 ps-2 ms-2 myaddcartbtn">Add to Cart</button>
    </div>
    </div>
    </div>
    `
  }
}
showcard2();













/*
let addcartbutton = document.querySelectorAll(".myaddcartbtn")

console.log(addcartbutton)
let x = 0;

for (let j = 0; j < addcartbutton.length; j++) {
  // console.log(j)
  console.log(product1['prdimg'][j])

  addcartbutton[j].addEventListener('click', function () {

    
    x = x + 1;
    document.querySelector("#showcart").innerHTML = x;

    // getting parentelement
    let parent = this.parentElement;
    let imagesrc = parent.querySelector("img").src;
    let prd_name = parent.querySelector("h4").innerHTML;
    // let prd_desc=parent.querySelector('p')[0].innerHTML;
    let prd_price = parent.querySelector(".productprice").innerHTML;




    const mycartrow = `
    <div class="row m-2">
     <div class="col-2 cart-box">
     <img src="${imagesrc}" alt="" class="cart-img img-fluid">
    </div>
    <div class="col-3  detail-box">
     <h4 class="text-muted">${prd_name}</h4>
    
    </div>
    <div class="col-3  ">
     <button class="btnminus">-</button>
     <input type="text" class="qty" id="textbox1" value="0" readonly>
     <button class="btnplus">+</button>
    
    </div>
    <div class="col ps-4 price">${prd_price}</div>
    
    <div class="col ps-5 total">
    
    0
    </div>
    
    <div class="col ps-5 cart-remove">
     <iconify-icon icon="ic:baseline-delete" width="20" height="20"></iconify-icon>
    </div>
    
    </div>



    
    `
    let newnode = document.createElement("div")



    newnode.innerHTML = mycartrow

    // .replaceWith('" "','')
    // console.log(typeof(mycartrow))
    let cartContent = document.querySelector(".cart-content")
    cartContent.append(newnode);


    // cartContent.replace(/h/ig,' i')

    // console.log(typeof(cartContent))

    let cartremove = document.querySelectorAll(".cart-remove")



    for (let i = 0; i < cartremove.length; i++) {

      cartremove[i].onclick = function () {

        this.parentElement.remove();
        document.querySelector("#showcart").innerHTML = i




      }


    }


    // function tl() {
    //   let sum = 0;
    //   for (let i = 0; i < minus.length; i++) {
    //     sum += parseInt(total[i].innerHTML)
    //    
    //     document.querySelector(".total-p").innerHTML = sum



    //   }
    // }

    let minus = document.querySelectorAll(".btnminus");
    let plus = document.querySelectorAll(".btnplus");
    let qty = document.querySelectorAll(".qty");
    let price = document.querySelectorAll(".price");
    let total = document.querySelectorAll(".total");






    for (let i = 0; i < minus.length; i++) {




      minus[i].onclick = function () {
        let v = Number(qty[i].value)
        if (v > 0) {

          v--;
          qty[i].value = v;


        }
        let p = (price[i].innerHTML);


        total[i].innerHTML = p * v

        console.log(p)
        console.log(v)



        // console.log(typeof(p))
        // console.log(typeof(v))





      }






    }

    for (let i = 0; i < minus.length; i++) {




      plus[i].onclick = function () {

        let v = Number(qty[i].value)
        v++;
        qty[i].value = v;

        let p = parseInt(price[i].innerHTML);
        total[i].innerHTML = p * v


        console.log(p)
        console.log(v)



      }
    }










  })












}

*/





//cart sidebar ======================

// let cart = document.querySelector(".cart")
// let cartsidebar = document.querySelector(".cart-sidebar")
// let closecart = document.querySelector(".close-cart")
// cart.onclick = function () {
//   cartsidebar.style.transform = "translate(0%)"
//   let bodyOverlay = document.createElement("div")
//   bodyOverlay.classList.add('overlay')
//   setTimeout(function () {
//     document.querySelector("body").append(bodyOverlay)
//   }, 200)




// }
// closecart.onclick = function () {
//   cartsidebar.style.transform = "translate(100%)"
//   let bodyOverlay = document.querySelector(".overlay")
//   document.querySelector("body").removeChild(bodyOverlay)



// }






// slick slider =======================

$('.slider').slick({
  dots: false,
  infinite: true,
  // speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,


      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});























  
