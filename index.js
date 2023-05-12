let red=document.getElementById('red');
let black=document.getElementById('black');
let orange=document.getElementById('orange');
let productImage=document.getElementsByTagName('img')[0];
let btnColor=document.querySelector('.buy-btn');

red.addEventListener('click',()=>{
productImage.setAttribute('src','https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png');
btnColor.style.backgroundColor='#E6404D';
});

orange.addEventListener('click',()=>{
productImage.setAttribute('src','https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png');
btnColor.style.backgroundColor='#fe7427';
});
black.addEventListener('click',()=>{
productImage.setAttribute('src','https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png');
btnColor.style.backgroundColor='black';
});
