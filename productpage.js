let prdimage = document.querySelectorAll(".proimg")
let modalp = {
    img1:["./images/menswear-1smallimg1.jpg","./images/menswear-2smallimg1.jpg","./images/menswear-3smallimg1.jpg","./images/menswear-4smallimg1.jpg"],
    img2:["./images/menswear-1smallimg2.jpg","./images/menswear-2smallimg2.jpg","./images/menswear-3smallimg2.jpg","./images/menswear-4smallimg2.jpg"],
    img3:["./images/menswear-1smallimg3.jpg","./images/menswear-2smallimg3.jpg","./images/menswear-3smallimg3.jpg","./images/menswear-4smallimg3.jpg"],
    img4:["./images/menswear-1smallimg4.jpg","./images/menswear-2smallimg4.jpg","./images/menswear-3smallimg4.jpg","./images/menswear-4smallimg4.jpg"]
}
for (let i = 0; i< prdimage.length; i++) {
    prdimage[i].addEventListener('click', function () {
        let parent = this.parentElement
        let imagesrc = parent.querySelector("img").src
        let productname = parent.querySelector("h4").innerHTML
        let productprice = parent.querySelector(".productprice").innerHTML
        let src = imagesrc
        console.log(src);
        
        let modalproduct = `<section class="container product-page">
   <div class="row mt-5">
       <div class="col-lg-5 col-md-12 col-12">
           <img src="${imagesrc}" class="img-fluid w-100 h-75">
           <div class="small-img-group mt-3 d-flex justify-content-between">
               <div class="small-img-col">
                   <img src= "${modalp.img1[i]}" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="${modalp.img2[i]}" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="${modalp.img3[i]}" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="${modalp.img4[i]}" width="100%" class="small-img">
               </div>
           </div>
       </div>
       <div class="col-lg-6 col-md-12 col-12 mt-3">
           <h4>${productname}</h4>
           <p class="mt-3 ps-2">Rs.<span class="productprice">${productprice}</span></p>
           <select class="my-3">
               <option>Select Size</option>
               <option>Xl</option>
               <option>XXl</option>
               <option>Small</option>
               <option>Large</option>
           </select>
           <input type="number" name="" value="1"><br>

           <button class="btn addcart-btn allbtn mt-3 mb-3 ps-2 myaddcartbtn">Add to Cart</button>
           <h4>Product Details</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut minus doloribus deserunt laborum maxime cum omnis laudantium pariatur culpa!</p>

       </div>
   </div>
</section>`

        document.querySelector(".mdl-body").innerHTML = modalproduct

    }) 

}




