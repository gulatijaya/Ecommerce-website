
let suggestions = [
    "Mens Wear",
    "Womens Wear",
    "Womens Top",
    "Shirt",
    "Tshirt",
    "top",
    "suit",
    "Dress",
    "women dress",
    "jacket",
    "girls shirt",
    "mens shirt",
    "mens tshirt",
    "white shirt",
    "black shirt",
    "green shirt",
    "denim jacket"
];

// getting all required elements
const searchInput = document.querySelector("#input-box");
const resultBox = document.querySelector(".resultBox");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release

searchInput.onkeyup=function(){
    let result=[]
    let input=searchInput.value

    if(input.length){
        result=suggestions.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase())
           
        })
        
    }
    setTimeout(() => {
        if(searchInput.value=="top" || searchInput.value=="womens wear" || searchInput.value=="womens top"){
            let url="./shop2.html" 
            window.location=url
        }
        else if(searchInput.value=="shirt" || searchInput.value=="mens wear"){
            let url="./shop1.html"
            window.location=url
        }
        
      }, 3000);
    
    display(result)
    if(!result.length){
        resultBox.innerHTML=""
    }
    
}

function display(result){
        let content=result.map((list)=>{

            return "<li onclick=selectInput(this)>" + list + "</li>"
            
        })
        resultBox.innerHTML=`<ul>  ${content.join('')} </ul>`

}
function selectInput(list){
    searchInput.value=list.innerHTML
    resultBox.innerHTML=''
    
}



