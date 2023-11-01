let brands = document.querySelectorAll(".brand")
let count = 0

brands.forEach((slides,index)=>{
    slides.style.left=`${index*100}%`
})

setInterval(()=>{
if(count==brands.length){
    count=0

}
count++
    sliderimage()
    

},1000)


function sliderimage(){
    brands.forEach((value)=>{
value.style.transform=`translateX(-${count*100}%)`

    })
}