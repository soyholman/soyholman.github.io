const firebaseConfig = {
   apiKey: "AIzaSyCLx7EClnZjSKXmWTCWx0GXjGE3ZCXbsf4",
   authDomain: "emailtest-98f89.firebaseapp.com",
   projectId: "emailtest-98f89",
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
          
          icon: 'warning',
          title: 'Debe iniciar sesión',
          showConfirmButton: false,
          timer: 1600
        }).then(function(){

           location.href="/Login.html";

        })
 
}
})

}

// const logout=document.querySelector('#leave');

// logout.addEventListener('click', e=>{
    

          

//    Swal.fire({
//       title: 'Desea Cerrar Sesión?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'No cerrar sesión',
//       cancelButton: 'btn btn-success',
//         cancelButtonText: 'Cerrar Sesion',
//         cancelButtonColor: 'red',

//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
       

    
//             Swal.fire({
                   
//                 icon: 'success',
//                 title: 'Sesión mantenida',
//                 showConfirmButton: false,
//                 timer: 1600
//               })
           
        
         
//       } else  {
//          firebase.auth().signOut().then(()=> {



//          }).catch(e=>{
//              console.error('Sign Out Error', e);
//             });
   
//       }
//     })

// })
