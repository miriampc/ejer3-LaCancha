var objetosHijo=[{clase1:"arco", clase2:"left",claseNieto:"bolita"},
                 {clase1:"arco",clase2:"right", claseNieto:"bolita"},
                 {clase1:"circulo", clase2:"a", claseNieto:"bolita"}];

window.addEventListener('load',function(){
  console.log("fsdf");
  var docFragment=document.createDocumentFragment();
  var contenedor=document.createElement('section');
  contenedor.setAttribute("id",'contenedor');

  var cancha=document.createElement('div');
  var borde=document.createElement('div');

  cancha.classList.add("cancha");
  borde.classList.add("borde");
  borde.classList.add("border");
  cancha.appendChild(borde);

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
  contenedor.appendChild(cancha);
  document.body.appendChild(contenedor);
});
