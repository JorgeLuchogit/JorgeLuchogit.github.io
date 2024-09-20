const divInformacion = document.getElementById("inf");
const radiusList = document.querySelectorAll(".checkbox");
let imagenesDiccionario = {
    'check1' : ['python-logo.png','width:270px; height:300px;', 'py.pdf', `Se tratan (muy brevemente) los conceptos más básicos del lenguaje <b>Python</b>,  así como algunos atajos útiles. <br><br> Se tiene un "catálogo" con algunos de los métodos y funciones inherentes  de <b>Python)</b> más comunes, con una breve descripción de lo que hacen.<br><br>. También se enlistan algunas de las funciones y métodos de los módulos <b>NumPy, Pandas y Scikit-learn</b>.`], 
    'check2' : ['htmlcss.png','width:170px; height:170px;', 'html.pdf', `Se tratan los conceptos más básicos de <b>HTML + CSS</b>. <br><br> Se tiene un "catálogo" con algunas de las etiquetas de <b>HTML</b> más comunes, así como algunas de sus propiedades <b>CSS</b> más comunes con una breve descripción.<br><br>. Se planea agregar el infaltable capítulo de <b>JavaScript</b>.`], 
    'check5' : ['github.png', 'width:300px; height:300px;', 'mod.pdf', `Notas del curso de Introducción a la Modelación Epidemiológica, impartido por el M. en C. Augusto Cabrera Becerril de la Facultad de Ciencias de la UNAM. Los videos del curso se encuentran en su canal de YouTube, titulado:<a id="regreso-icono" href="https://www.youtube.com/@CursosAugustoCabreraBecerril" rel="nopener noreferer nofolow" title="Ir al canal de Youtube" style="text-decoration:none; color:black;"><b>Cursos Augusto Cabrera Becerril</b><a>. <br><br> Por supuesto, todo el crédito es para quiénes imparten los cursos. Yo solo tomé notas (los fallos de estas todos míos). <br><br> Aquí se puede apreciar más lo genial de <b>Látex </b>.`], 
    'check3' : ['sql.png','width:200px; height:200px;', 'sql.pdf', `Se tratan (muy brevemente) los conceptos más básicos del lenguaje <b>SQL</b> y de las bases de datos. <br><br> Se tiene un "catálogo" con algunas de las consultas más comunes, con una breve descripción de lo que hacen; su sintaxis considera el uso de <b>SQLite</b>.<br><br> Al final se muestra una forma de realizar a través de <b>Python</b>.`], 
    'check4' : ['git.png','width:120px; height:120px;', 'git.pdf', `Se tratan (muy brevemente) los conceptos más básicos de <b>Git y Github</b> y se tiene un "catálogo" con algunos de los comandos y funcionalidades más útiles, con una breve descripción de lo que hacen.`], 
}

let x = 0

for (radius of radiusList){
    let seleccionado = radius.id
    radius.addEventListener('click', function(){
        divInformacion.style.opacity = 1;
        x = seleccionado;
        document.getElementById('enlace-notas').href=`Documentos/${imagenesDiccionario[seleccionado][2]}`
        document.getElementById('descripcionContenido').innerHTML =imagenesDiccionario[seleccionado][3]
        if (x === 'check4'){
            document.getElementById('descripcion-imagen').innerHTML = `<img src="Imagenes/${imagenesDiccionario[seleccionado][0]}" style = ${imagenesDiccionario[seleccionado][1]} ><img src="Imagenes/${imagenesDiccionario['check5'][0]}" style = ${imagenesDiccionario['check5'][1]} >`
        } else if (x === 'check5'){
            document.getElementById('descripcion-imagen').innerHTML = `<p style=" font-size: 1.9em; font-weight: bolder; color: rgba(33, 30, 56, 0.925);">Modelación epidemiológica</p>`
        }
        else{
            document.getElementById('descripcion-imagen').innerHTML = `<img src="Imagenes/${imagenesDiccionario[seleccionado][0]}" style = ${imagenesDiccionario[seleccionado][1]} >`
        }
    });
};

const cerrar = divInformacion.firstElementChild;
cerrar.addEventListener('click', function(){
    divInformacion.style.opacity = 0
    document.getElementById(x).checked = false
})
