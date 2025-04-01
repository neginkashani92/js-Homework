/*Name this external file gallery.js*/

function upDate(previewPic){
    let div =  document.getElementById("image");
    div.style.backgroundImage = "url('https://picsum.photos/575/650')";
    div.innerHTML = "this is a new text";
       }
   
       function unDo(){
        let div =  document.getElementById("image");
        div.style.backgroundImage = "url('')";
        div.innerHTML = "Hover over an image below to display here.";
       }