let img_array=['bmw.jpeg', 'volkswagon.jpeg','ford.jpeg']
let array_length=img_array.length
let i=0


function slider(){
    i++
    i=i%4
    document.getElementById('image').src= img_array[2]
    
}

setInterval(slider, 3000)