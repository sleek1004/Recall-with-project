let figureEL = document.getElementById("figure-el")
let previewEL = document.getElementById ("preview-el")

let count = 0

function add(){
     count += 1
     figureEL.textContent = count
     

}


function save(){

previewEL.textContent += count + "-"
figureEL.textContent = 0
}
