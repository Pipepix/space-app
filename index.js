
const formulario = document.getElementById('formulario-name');
const videosource = document.getElementById('video-inicio');

const buttonNav= document.getElementById('button-nav');

 function cambiarvideos(video, url){
    video.onended = (event) => {
        video.src = url; 
        video.load(); 
        video.play(); 
    
      };
}

formulario && formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const nombre = document.getElementById('name').value;
    console.log(nombre)
    const formData = {
        nombre: nombre,
    };
     nombre.value = "";
     sessionStorage.setItem('formData', JSON.stringify(formData));
     /* location.href = '/pages/form.html' */
})

videosource.addEventListener("ended", (e) => {
    buttonNav.click()
})
