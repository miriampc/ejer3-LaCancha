var objetosHijo=[{clase1:"arco", clase2:"left",claseNieto:"bolita"},
                 {clase1:"arco",clase2:"right", claseNieto:"bolita"},
                 {clase1:"circulo", clase2:"a", claseNieto:"bolita"}];

window.addEventListener('load',function(){
  var docFragment=document.createDocumentFragment();
  var contenedor=document.createElement('section');
  contenedor.setAttribute("id",'contenedor');

  var cancha=document.createElement('div');
  var borde=document.createElement('div');
  var texto=document.createElement('span');

  cancha.classList.add("cancha");
  borde.classList.add("borde");
  borde.classList.add("border");
  texto.classList.add("texto");
  texto.appendChild(document.createTextNode("Laboratoria 2015 &copy; MadeByGus"));
  borde.appendChild(texto);

  objetosHijo.forEach(function(e){
    var hijo=document.createElement('div');
    var nieto=document.createElement('div');
    hijo.setAttribute("class",e.clase1);
    hijo.classList.add(e.clase2);
    hijo.classList.add("border");
    nieto.setAttribute("class",e.claseNieto);
    hijo.appendChild(nieto);
    borde.appendChild(hijo);
  });

  cancha.appendChild(borde);
  docFragment.appendChild(cancha);
  contenedor.appendChild(docFragment);
  document.body.appendChild(contenedor);
});
