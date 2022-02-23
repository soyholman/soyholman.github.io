
var user = firebase.auth().currentUser;
auth.onAuthStateChanged(user=>{

const nombre=document.getElementById('getname');

var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();
var data_carpet=dd+'_'+mm+'_'+yyyy;
nombre.textContent='Cuenta Registrada:'+user.displayName+'';
var userPicURL = user.photoURL; 
console.log("look:"+userPicURL);
document.querySelector('.avatar__image').src =  user.photoURL;
var firebaseref=firebase.database().ref('Sugerencias/'+user.displayName+"/"+ data_carpet.toString());
const fs=firebase.firestore();

document.querySelector("#Enviar").addEventListener("click",()=>{
const dinamica= document.getElementById('dinamic');
const sugerencia=document.getElementById('suggest').value;



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
usuario:user.displayName,
correo:user.email,
      tema:sugerencia
});
document.getElementById('suggest').value = ''
console.log(nombre.textContent);
  
})

}

});
})