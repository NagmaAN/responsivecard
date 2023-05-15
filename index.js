let red=document.getElementById('red');
let black=document.getElementById('black');
let orange=document.getElementById('orange');
let productImage=document.getElementsByTagName('img')[0];
let productCost=document.querySelector('.product-cost');
let btnColor=document.querySelector('.buy-btn');

red.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://m.media-amazon.com/images/I/71HjqzXIGNL._UX695_.jpg');
  btnColor.style.backgroundColor = '#E6404D';
  productCost.textContent = '$1800.00'; 
});

orange.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://i.pinimg.com/564x/76/15/76/7615768ab2b626ebf44aeb35558ccae1.jpg');
  btnColor.style.backgroundColor = '#fe7427';
  productCost.textContent = '$1040.00'; 
});

black.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://i.pinimg.com/564x/1a/c8/07/1ac807490e1d45033b053096e560d006.jpg');
  btnColor.style.backgroundColor = 'black';
  productCost.textContent = '$1560.00';
});
