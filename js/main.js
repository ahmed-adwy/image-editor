let saturate    = document.getElementById ( " saturate " ) ;
let contrast    = document.getElementById ( " contrast " ) ;
let brightness  = document.getElementById ( " brightness " ) ;
let sepia       = document.getElementById ( " sepia " ) ;
let grayscale   = document.getElementById ( " grayscale " ) ;
let blur        = document.getElementById ( " blur " ) ;
let hueRotate   = document.getElementById ( " hue-rotate " ) ;

let upload      = document.getElementById ( " upload " ) ;
let download    = document.getElementById ( " download " ) ;
let img         = document.getElementById ( " img " ) ;

let reset       = document.querySelector ( ' span ' ) ;
let imgBox      = document.querySelector ( ' .img-box ' ) ;

function resetVatue(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

window.onload = function(){
    download.style.display  = 'none';
    reset.style.display     = 'none';
    imgBox.style.display    = 'none';
}
upload.onchange = function(){
    resetVatue();
    download.style.display  = 'block';
    reset.style.display     = 'block';
    imgBox.style.display    = 'block';
    let file = new FileReader();
    file.readAsDataURL (upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}

