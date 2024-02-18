let addcartbutton = document.querySelectorAll(".myaddcartbtn")
let cartShow = document.querySelector('#showcart')
let cartContent = document.querySelector(".cart-content")
let products = [];

for (let j = 0; j < addcartbutton.length; j++) {
    addcartbutton[j].addEventListener('click', function () {
        let parent = this.parentElement
        let imagesrc = parent.querySelector("img").src
        let prd_name = parent.querySelector("h4").innerHTML
        // let prd_desc=parent.querySelector('p')[0].innerHTML;
        let prd_price = parent.querySelector(".productprice").innerHTML;
        console.log(prd_price)

        let product = {
            "prdimg1": imagesrc,
            "prdname": prd_name,
            "prdprice": prd_price,
            "quantity": 1,
            "total": prd_price
        }
        addcartitem(product)
    })
}
//================================ add to cart ======================================
function addcartitem(product) {
    let cartitem = JSON.parse(localStorage.getItem('prdcart')) || [];
    console.log(cartitem)
    if (cartitem === null) {
        products.push(product)
        localStorage.setItem('prdcart', JSON.stringify(products))
    }
    else {
        cartitem.forEach(item => {
            if (product.prdname == item.prdname) {
                product.quantity = item.quantity += 1
                product.total = item.quantity *= product.prdprice;
            }
            else {
                products.push(item)
            }

        });
        products.push(product)
    }
    localStorage.setItem('prdcart', JSON.stringify(products))
    window.location.reload()
}

//============================== display cart ======================================
function dispcart() {
    let cartrow = ''
    let cartitem = JSON.parse(localStorage.getItem('prdcart')) || [];
    cartitem.forEach(item => {
        cartrow += `
        <div class="row m-2 cartbox">
         <div class="col-md-3 col-2 cart-box">
         <img src="${item.prdimg1}" alt="" class="cart-img img-fluid"><br>
         <span class="text-muted">${item.prdname}</span>
        </div>
        
        <div class="col-3 col-2">
          <button class="btnminus">-</button>
         <input type="text" class="qty" id="textbox1" value="${item.quantity}" readonly>
         <button class="btnplus">+</button>
        </div>
        <div class="col-md-2 col-2 price">${item.prdprice}</div>
        <div class="col-md-2 col-2 total">${item.total}
        </div>
        <div class="col-md-2 col-2 ps-5 remove-cart">
        <iconify-icon icon="ic:baseline-delete" width="20" height="20"></iconify-icon>
        </div>
        </div>  
      `
    });
    document.querySelector('.cart-content').innerHTML = cartrow

    let rembtn = document.querySelectorAll(".remove-cart")
    for (let i = 0; i < rembtn.length; i++) {
        rembtn[i].addEventListener('click', removebtn, {

        })
    }

    let minus = document.querySelectorAll(".btnminus");
    let plus = document.querySelectorAll(".btnplus");
    let qty = document.querySelectorAll(".qty");
    let price = document.querySelectorAll(".price");
    let total = document.querySelectorAll(".total");


    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', () => {
            let cartitem = JSON.parse(localStorage.getItem('prdcart'));
            cartitem.forEach(item  => {
                if (cartitem === null) {
                    products.push(item)
                    localStorage.setItem('prdcart', JSON.stringify(products))
                    
                }
                else {
                    if (item.prdname === item.prdname) {
                        cartitem[i].quantity = item.quantity += 1
                        item.total = item.quantity * item.prdprice
                        total.innerHTML=item.quantity * item.prdprice
                    }
                    else {
                       
                        products.push(item)
                    }
                    products.push(item)
                    
                }

            })
            localStorage.setItem('prdcart', JSON.stringify(products))
            window.location.reload()

        })
    }
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', decrementbtn, {

        })
    }

}
dispcart()


function cartnumberdisp() {
    let cartcount = 0
    let cartitem = JSON.parse(localStorage.getItem('prdcart')) || [];
    cartitem.forEach(item => {
        cartcount = item.quantity += cartcount
    });
    document.querySelector("#showcart").innerHTML = cartcount
}
cartnumberdisp()

//=============================== remove btn ======================================
function removebtn() {
    let products = [];
    let cartitem = JSON.parse(localStorage.getItem('prdcart'));
    console.log(cartitem)
    // console.log(event.target.parentElement.parentElement.children[1].children[0].innerHTML)
    cartitem.forEach(item => {
        if (item.prdname != event.target.parentElement.parentElement.children[1].children[0].innerHTML) {
            products.push(item)
        }
    });
    localStorage.setItem('prdcart', JSON.stringify(products))
    window.location.reload();

}

// function incrementbtn(){

//     let cartitem = JSON.parse(localStorage.getItem('prdcart'));
//     cartitem.forEach(item => {
//         if(cartitem==null){
//             products.push(item)
//             // localStorage.setItem('prdcart', JSON.stringify(products))

//         }
//         else{
//             if(item[i].prdname===item[i].prdname){
//                 item[i].quantity=item[i].quantity+=1
//                 item[i].prdprice=item[i].quantity*item.prdprice
//                 // item.prdprice = item.quantity *=item.prdprice
//                 // console.log(item.prdprice)

//             }
//             else{
//                 products.push(item)
//             }

//             products.push(item)    
//         }


//     })        
//     localStorage.setItem('prdcart', JSON.stringify(products))
//     window.location.reload()

// }

function decrementbtn() {
    let cartitem = JSON.parse(localStorage.getItem('prdcart'));
    cartitem.forEach(item => {
        if (cartitem == null) {
            products.push(item)
            // localStorage.setItem('prdcart', JSON.stringify(products))

        }
        else {
            if (item.prdname === item.prdname) {
                item.quantity = item.quantity -= 1
                item.total = item.quantity * item.prdprice

                if (item.quantity <= 0) {
                    item.quantity = item.quantity = 1
                    item.prdprice = item.quantity * item.prdprice

                }
                // item.prdprice = item.quantity *=item.prdprice
                // console.log(item.prdprice)

            }
            else {
                products.push(item)
            }

            products.push(item)
        }


    })
    localStorage.setItem('prdcart', JSON.stringify(products))
    window.location.reload()


}










