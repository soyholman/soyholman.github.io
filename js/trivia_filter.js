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

window.addEventListener('load', () => {
    const button = document.querySelector('#clear');
    button.addEventListener('click', () => {
        document.querySelector('#myInput').value = "";
        myFunction();
    });
   
}); 
