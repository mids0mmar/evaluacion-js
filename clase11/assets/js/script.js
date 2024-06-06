
// para alerta
const alerta = document.getElementById('alertaLive')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" data-contenido="Modificando datos">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alerta.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('¡Muy bien! Descubriste la alerta', 'success')
  })
}

//funcion para manipular los eventos 
//se obtiene elemento por id y se le agrega un event listener q indica q al hacer click, el mensaje dentro del botón cambie

document.getElementById('liveAlertBtn').addEventListener('click', function() {
  let mensaje = this.getAttribute('data-button');
  this.innerText = mensaje;
  console.log(mensaje);
});



//popover variables

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


document.getElementById('popoverLis').addEventListener('click', function() {
  let mensaje = this.getAttribute('data-boton');
  this.innerText = mensaje;
  console.log(mensaje);

  let nuevoContenido = this.getAttribute('data-boton');
  this.setAttribute('data-bs-content', nuevoContenido);
  document.querySelector('.popover-body').innerHTML = nuevoContenido;

});




//toast variables
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastTitulo = document.getElementById('toastTitulo');
const toastBody = document.querySelector('.toast-body')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {

    let nuevoTitulo = toastLiveExample.getAttribute('data-titulo');
    let nuevoBody = toastLiveExample.getAttribute('data-dentro');
    toastTitulo.innerHTML = nuevoTitulo;
    toastBody.innerHTML = nuevoBody;
    
    toastBootstrap.show()
  })
}

toastTrigger.addEventListener('click', function() {
  let mensaje = this.getAttribute('data-toast');
  this.innerText = mensaje;
  console.log(mensaje);
});



//variables para offcanvas  


offcanvasExample.addEventListener('show.bs.offcanvas', function(event){

 
  let boton = event.relatedTarget

  let mensaje = boton.getAttribute('data-titulo')

  let contenido = boton.getAttribute('data-contenido')

  document.getElementById('offcanvasExampleLabel').innerText = mensaje 
  document.querySelector('.offcanvas-body').innerHTML = contenido

})



document.getElementById('offcanvasBoton').addEventListener('click', function() {
  let mensaje = this.getAttribute('data-titulo');
  this.innerText = mensaje;
  console.log(mensaje);
});






