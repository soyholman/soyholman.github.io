
var user = firebase.auth().currentUser;
auth.onAuthStateChanged(user=>{

const nombre=document.getElementById('getname');

var firebaseref=firebase.database().ref('Sugerencias/'+user.displayName);
const fs=firebase.firestore();

document.querySelector("#Enviar").addEventListener("click",()=>{
const dinamica= document.getElementById('dinamic');
const sugerencia=document.getElementById('suggest').value;

var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();

if(dinamica=="" || sugerencia==""){

Swal.fire({
       
       icon: 'error',
       title: 'Por favor seleccione la dinamica y escriba el tema a sugerir.',
       text: '',
       showConfirmButton: false,
       timer:1600
      
     })

}
else{



Swal.fire({
       
       icon: 'success',
       title: 'Se ha enviado tu sugerencia',
       text: 'Muchas Gracias',
       showConfirmButton: false,
      timer:1600
     }).then(function(){

        firebaseref.push({
fecha:dd+'/'+mm+'/'+yyyy,
dinamica:dinamica.value,
usuario:user.email,
      tema:sugerencia
});
document.getElementById('suggest').value = ''
console.log(nombre.textContent);
  
})

}

});
})