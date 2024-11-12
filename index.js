const images=['./images/IMG20220429175701.jpg','./images/IMG20220429175759.jpg','./images/IMG20220429175806.jpg','./images/IMG20220429175814.jpg','./images/IMG20220429175825.jpg'];

const image='./images/IMG20220429175701.jpg';

let index=0;
document.getElementById('next').addEventListener('click',function(){
    index++;
    if(index>4){
        index=0;
    }
   const imageContainer=document.getElementById('imageContainer');
   imageContainer.innerHTML=`

   <img src="${images[index]}" alt="">

   `   
})

document.getElementById('previous').addEventListener('click',function(){
    index--;
    if(index<0){
        index=4;
    }
    const imageContainer=document.getElementById('imageContainer');
    imageContainer.innerHTML=`
 
    <img src="${images[index]}" alt="">
 
    `   

})