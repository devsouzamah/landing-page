function logar(){
   var email = document.getElementById('email').value;
   var senha = document.getElementById('senha').value;

   if (email == 'admin' && senha == 'admin'){
    alert ('Você está logada(o)!');
   }
}