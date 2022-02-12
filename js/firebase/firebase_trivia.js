const firebaseConfig = {
   apiKey: "AIzaSyCLx7EClnZjSKXmWTCWx0GXjGE3ZCXbsf4",
   authDomain: "emailtest-98f89.firebaseapp.com",
   projectId: "emailtest-98f89",   
    databaseURL:"https://emailtest-98f89-default-rtdb.firebaseio.com/",
   storageBucket: "emailtest-98f89.appspot.com",
   messagingSenderId: "1098470238354",
   appId: "1:1098470238354:web:dd90ac6dd974704ea35e4b"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 
const fs=firebase.firestore();


 
function params(){
     
 
   var user = firebase.auth().currentUser;
      auth.onAuthStateChanged(user=>{
     
if(user!=null){




}
else if(user==null){

  Swal.fire({
   title: 'Debe registrarse',
   icon: 'warning',
backdrop: `
rgba(0,0,0,0.6)
`,
   html:
   'Para continuar debe <b>registrarse</b> ' +
   'como usuario de <strong style="color:green">Cultura general.</strong>',
   showCancelButton: true,
   confirmButtonText: 'Seguir como usuario Anonimo',
   cancelButton: 'btn btn-success',
     cancelButtonText: 'Iniciar Sesión',
     cancelButtonColor: 'green',

   }).then((result) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
        firebase.auth().signInAnonymously().then(result=>{

   
           Swal.fire({
                  
               icon: 'success',
               title: 'Ha iniciado sesión como usuario anónimo',
               showConfirmButton: false,
               timer: 1600
             })
          
       
          }).catch(err=>{
              console.log(err);
          })
     } else  {
       
        location.href="/Login.html";
     }
   })


 
}
})

}
