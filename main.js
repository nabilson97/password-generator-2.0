var input=document.querySelector('input'),
    button=document.querySelector('.button')
    
  button.addEventListener('click',randomPassword)
  
  
  
  var smallAlph= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  var capitalAlph=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  var nums=[0,1,2,3,4,5,6,7,8,9]
  
  var syms=['~','!','@','#','$','%','^','&','*','(',')','_','\\','|','/','[',']','{','}','<','>',',']
  
  function randomPassword() {
    var password = ''
    var array2=''
    var array1=''
    var array3=''
    var array4=''
    
    for (let i = 0; i < 1; i++) {
      let random = Math.floor(Math.random() * capitalAlph.length)
      array1 += capitalAlph[random]
    }
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * smallAlph.length)
      array2 += smallAlph[random]
    }
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * nums.length)
      array3 += nums[random]
    }
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * syms.length)
      array4 += syms[random]
    }
    password=array1+array2+array3+array4
    input.value=password
    input.animate([{opacity:'0.4'},{opacity:'1'},{opacity:'1.0'}],{duration:700,fill:'forwards'})
  }











