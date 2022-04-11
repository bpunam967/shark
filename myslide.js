let img_array=['unplash.jpg', 'tesla.jpeg','sheep.jpg','volkswagon.jpeg','abc.jpg']
let array_length=img_array.length
let i=0

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src= img_array[i]
}

 let set=setInterval(slider,3000)


function next(){
    i++
    i=i%array_length
    document.getElementById('image').src= img_array[i]
}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    
    document.getElementById('image').src= img_array[i]
}
function stop(){
    clearInterval(set)
}
function  start(){
    set=setInterval(slider,3000)
}
    




