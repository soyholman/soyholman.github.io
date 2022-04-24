// let nombres=[
//     "Lugares","Ciencia","Nostradamus","Anatomía","Animales","Animados","Cultura General","Sexo"
//     ,"Literatura","Mitología","Frases","Mecánica","Fitness","Reyno","Animal","Sobrevivir","Emblema","Biblia","Historia","Mundiales","Marcas","Celebridades","Leones","Aprender","Inglés","Artes Marciales","Síndromes","Games Of Thrones","Ojos","Copas","Harry Potter"

// ];
// let soredNames=nombres.sort();
// input = document.getElementById("myInput");

// input.addEventListener("keyup",(e)=>{

//     removeElements();

//     for (let i of soredNames){

//         if(i.toLowerCase().startsWith(input.value.toLowerCase())&& input.value!=""){

//             let listitems=document.createElement("li");
//             listitems.classList.add("list-items");
//             listitems.style.cursor="pointer";

//             listitems.setAttribute("onclick"," displaynames('"+ i + "')");
//             let word="<b>~ "+i.substring(0,input.value.length)+"</b>";
//             word+=i.substring(input.value.length);
//             listitems.innerHTML=word;
//             document.querySelector(".list").append(listitems);

//         }
//     }
// });
// function displaynames(value){
//    input.value=value;
//     removeElements();
// }

// function removeElements(){
//     let items=document.querySelectorAll(".list-items");
//     items.forEach((item)=>{

//         item.remove();
//     });
// }

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  li = document.getElementsByClassName("box");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// function clear(){
//     document.querySelector('#myInput').value = "";
// }
window.addEventListener("beforeunload", () => {
  // const button = document.querySelector('#clear');
  // button.addEventListener('click', () => {
  document.querySelector("#myInput").value = "";
  myFunction();
  // });
});
