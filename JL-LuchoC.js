const lenguajeRadiusList = document.querySelectorAll('.radius');
const mensaje = document.getElementById('lenguajes');
const barra = document.getElementById('lenguaje-barra');
const experiencia = document.getElementById('exp');
const mensajeTitulo = document.getElementById('mensajeTitulo')
const skills = document.getElementById('skills');
let lenguajeDiccionario = {
    'lenguaje1':['Python', '80%', 'Es el que más uso. <br><br> Estoy familiarizado con las librerías <b> NumPy, Pandas, Matplotlib, SymPy, SciPy, Scikit-learn, Scikit-image </b>'],
    'lenguaje2':['R', '60%', 'Aprendí a usarlo en mi curso de Matemáticas Finacieras en la Facultad de Ciencias, UNAM. <br><br> Aún me encuentro en el nivel en el que lo que puedo hacer con el, lo puedo hacer con Python' ],
    'lenguaje3':['C++', '30%', 'Aprendí a usarlo en mi curso de Computación en la Facultad de Ciencias, UNAM. <br><br> Me encuentro en el nivel en el que lo que puedo hacer con el, lo puedo hacer con Python'],
    'lenguaje4':['Fortran', '40%', 'Aprendí a usarlo en mi curso de Física Computacional en la Facultad de Ciencias, UNAM. <br><br> Aprendí a generar y a correr los scripts a través de la terminal de Ubuntu. <br><br> '],
    'lenguaje5':['Látex', '80%', 'Lo he usado a lo largo de mi carrera para crear notas de cursos, tareas y los reportes científicos de mis cursos de laboratorio.'],
    'lenguaje6':['HTML', '70%', 'Lo aprendí de manera autodidacta. <br><br> Lo usé para crear esta página.'],
    'lenguaje7':['CSS', '70%', 'Lo aprendí de manera autodidacta. <br><br> Lo usé para dar el estilo de esta página.'],
    'lenguaje8':['JavaScript', '40%', 'Lo aprendí de manera autodidacta. <br><br> Lo usé para ampliar la funcionalidad de esta página.'],
    'lenguaje9':['SQL (SQLite)', '50%', 'Lo aprendí de manera autodidacta. <br><br> Estoy familiarizado con las consultas más usadas, con la sintaxis requerida por SQLite.'],
};
document.getElementById('SobreMiLink').addEventListener('click', function(){
    skills.checked = true
});
document.getElementById('homeLink').addEventListener('click', function(){
    skills.checked = false;
    mensaje.style.display = 'none';
    document.getElementById(x).checked = false;
    barra.style.width = '2%';
    experiencia.innerHTML ='';
    mensajeTitulo.innerHTML= '';
    
});

skills.addEventListener('click', function(){
    if (skills.checked === false){
        mensaje.style.display = 'none';
        document.getElementById(x).checked = false;
        barra.style.width = '2%';
        experiencia.innerHTML ='';
        mensajeTitulo.innerHTML= '';
    }
});


document.getElementById('abrirLen').addEventListener('click', function(){
    mensaje.style.display = 'flex';
});

let x = 0
for (radio of lenguajeRadiusList){
    let seleccionado = radio.id;
    radio.addEventListener('click', function(){
        x = seleccionado;
        barra.style.width = lenguajeDiccionario[seleccionado][1];
        barra.innerHTML = lenguajeDiccionario[seleccionado][1];
        experiencia.innerHTML = lenguajeDiccionario[seleccionado][0] + " Experience:";
        mensajeTitulo.innerHTML = lenguajeDiccionario[seleccionado][2]

    });
};

document.getElementById('cerrarLen').addEventListener('click', function(){
    mensaje.style.display = 'none';
    document.getElementById(x).checked = false;
    barra.style.width = '2%';
    experiencia.innerHTML ='';
    mensajeTitulo.innerHTML= '';

});




