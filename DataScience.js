const proyectos = document.querySelectorAll('.radio_proyecto');
const visual = document.getElementById('dashboard_img');
const titulo = document.getElementById('article_titulo');
const articulo = document.getElementById('resumen');
const enlace = document.getElementById('article_enlace');
const herramientas = document.getElementById('extra');
const abrir_visuales = document.getElementById('abrir_visuales');
const visuales_imagenes = document.getElementById('visuales_imagenes');
const visuales_descripcion_texto = document.getElementById('visuales_descripcion_texto')
const cerrar_ventana_emergente = document.getElementById('cerrar_ventana_emergente')

let proyecto_detalles = {
    'radio1': ['Imagenes/sismo_template.png', `<h2>Sismos en México (Limpieza)</h2>`, `<iframe class="sismos" title="sismos contenido" src="CatalogoDeSismo(Limpieza).html" frameborder="0"></iframe>`,'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/blob/master/Sismos%20en%20M%C3%A9xico%20(limpieza)/Sismos_en_Mexico.ipynb', `<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p>Python (mathplotlib, Pandas, Sklearn) y PowerBI</p></div>`, `<img id="img_sis" style="width: 100%; z-index: 1; position: absolute; display: none;" src="Imagenes/sismo_template.png" alt="Gráficos del trabajo" ><img class="unique" style="width: 100%; " src="Imagenes/sismo_template1.png" alt="Gráficos del trabajo" ><button style="width: calc(25px + 3dvw); height: calc(25px + 3dvw); position: absolute; right: 0%; background-image: linear-gradient(to right top, rgb(30, 146, 223), rgb(185, 67, 253)); border: none; border-radius: 50%; font-size: calc(0.7rem + 1dvw); font-weight: bold; color: white; box-shadow: 0px 0px 7px rgb(71, 71, 71);border: 1px rgb(150, 119, 221) solid;" onclick="document.getElementById('img_sis').style.display ='inherit'; document.getElementById('cambiar_diap').style.display ='initial' "> >> </button><button style="display: none; z-index: 2;width: calc(25px + 3dvw); height: calc(25px + 3dvw); position: absolute; right: 0%; background-image: linear-gradient(to right top, rgb(30, 146, 223), rgb(185, 67, 253)); border: none; border-radius: 50%; font-size: calc(0.7rem + 1dvw); font-weight: bold; color: white; box-shadow: 0px 0px 7px rgb(71, 71, 71);border: 1px rgb(150, 119, 221) solid;" onclick="document.getElementById('img_sis').style.display = 'none'; document.getElementById('cambiar_diap').style.display ='none'" id="cambiar_diap"> &lt;&lt; </button>`,'Se hace notar que algunas interpolaciones no representan adecuadamente a los datos (gráficas 3 y 4 del archivo ipybn) y se propone una manera de tratar con ello. <br><br>El dashboard facilita la deducción de información. Por ejemplo, solo de la imagen aquí presentada puede saberse que 7 de cada 10 sismos es de magnitud 4, que el sismo de Orizaba en 1973 pudo alentar la mejora en la detección de sismos, cuál es el sismo de mayor profundidad y magnitud detectado en México, que los epicentros se concentran en toda la zona del Pacífico mexicano, etc. <br> <br> Como se muestra en la portada, el dashboard permite agrupar los eventos por estado, año, hora, magnitud y profundidad para obtener información más específica.'],
    'radio3': ['Imagenes/adidas.png', '<h2>Ventas de Adidas en USA (Visualización)</h2>', 'insertar archivo ipynb', 'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/tree/master/Ventas%20de%20Adidas%20en%20USA%20(visualizaci%C3%B3n)', '<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p>Power BI</p></div>', `<img style="width: 100%;" src="Imagenes/adidas.png" alt="Gráficos del trabajo" >`, ''],
    'radio2': ['Imagenes/mus.png', '<h2>Datos del NIST (web scraping)</h2>', `<iframe class="sismos" title="sismos contenido" src="Abpsortion_mass_coeficientscraping_v2.html" frameborder="0"></iframe>`, 'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/blob/master/Datos%20del%20NIST%20(web%20scraping)/Datos_del_NIST.ipynb', '<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p >Python (mathplotlib, Pandas, Sklearn,<br> BeautifulSoup, Request)</p></div>', `<img style="width: 100%;" src="Imagenes/mus.png" alt="Gráficos del trabajo" >`, 'Una parte de mi trabajo de tesis de licenciatura requería obtener los  coeficientes másicos de absorción de un par de mezclas de varios elementos en un cierto intervalo de Energías. <br> <br> Este proyecto me ahorró el estar copiando y limpiando manualmente los datos de la página del NIST de cada elemento, y puede hacer lo mismo por compañeros con tareas similares.<br> <br>  En la imagen se muestra el resultado de interpolar la información obtenida con ayuda de este trabajo. <br> <br> '],
    'radio4': ['Imagenes/violin.png', '<h2>Clientes de crédito (Análisis)</h2>', `<iframe class="sismos" title="sismos contenido" src="Definitive.html" frameborder="0"></iframe>`, 'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/blob/master/Clientes%20de%20cr%C3%A9dito%20(an%C3%A1lisis)/Clientes_de_credito.ipynb', '<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p >Python (mathplotlib, Seaborn, Pandas, Sklearn,<br> pickle, sys) <br> HTML+Js+CSS</p></div>', `<img style="width: 75%;filter:invert(100%) ;" src="Imagenes/violin.png" alt="Gráficos del trabajo" >`, 'Muestra como hacer paso a paso la limpieza y análisis básico de un conjunto de datos. Muestra como generar funciones para analizar el comportamiento de la variable objetivo en función cualquier número de variables independientes, así como para visualizar el comportamiento en función de hasta dos variables. <br><br> Muestra una forma de determinar qué variables realmente influyen al asignar una categoría y como generar y entrenar un modelo de machine learning que haga la clasificación.'],
    'radio5': ['Imagenes/Suic.png', '<h2>Tweets de suicidio (clasificación)</h2>', `<iframe class="sismos" title="sismos contenido" src="Suicides.html" frameborder="0"></iframe>`, 'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/blob/master/Tweets%20de%20suicidio%20(clasificaci%C3%B3n)/Tweets_de_suicidio.ipynb', '<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p>Python (Pandas, NumPy, Sklearn, Pickle) <br> HTML+Js+CSS</p></div>', `<iframe class="suicidio" title="sismos contenido" src="formSuicide.html" frameborder="0"></iframe>`, 'Explica en qué consiste la técnica Tf-idf y como utilizarla en conjunto con un algoritmo de machine learning para realizar la clasificación de texto. <br><br> Actualmente, se está trabajando en un servidor para que cualquier usuario que ese encuentre con esta página en la red, pueda introducir sus propias frases (No necesariamente un tweet) y recibir un pronóstico. <b> (En desarrollo)</b> <br><br> Por lo pronto se muestra el frontend de dicha funcionalidad.'],
    'radio6': ['Imagenes/Jl_FreeTimeC.png', '<h2>JL-FreeTime (Diseño de base de datos SQL)</h2>', `<iframe class="sismos" title="sismos contenido" src="JL-FreeTime.html" frameborder="0"></iframe>`, 'https://github.com/JorgeLuchogit/Mis-proyectos-de-Data-Science/tree/master/JL-FreeTime%20(dise%C3%B1o%20de%20base%20de%20datos%20SQL)', '<div class="herramientas" id="herramientas"><h4>Herramientas:</h4><p>Python (sqlite3, pandas) <br> SQL (Sqlite)</p></div>', `<img style="width: 95%;filter:invert(100%) ;" src="Imagenes/Jl_FreeTimeC.png" alt="Diagrama de la base de datos" >`, 'Propone una base de datos que el usuario puede utilizar para registrar sus actividades diarias, para un posterior análisis del aprovechamiento de su tiempo. <br><br> En el repositorio de GitHub se anexa un script de Python con el cual pueden realizarse registros de uno o más aspectos de manera automática, lo que ahorra tiempo y es más cómodo. <br><br> Este proyecto se complementará con una rutina que realice un análisis automático de los datos recopilados a lo largo del tiempo, a fin de obtener reportes anuales, semestrales, mensuales etc.  <b> (En desarrollo)</b>']
};




for (indice of proyectos){
    let seleccionado = indice.id;
    indice.addEventListener('click', function(){
        visual.src = proyecto_detalles[seleccionado][0];
        visual.style.display = 'inherit'
        document.getElementById('cortina_visuales').style.display = 'inherit'
        titulo.innerHTML = proyecto_detalles[seleccionado][1];
        articulo.innerHTML = proyecto_detalles[seleccionado][2] ;
        enlace.href = proyecto_detalles[seleccionado][3];
        herramientas.innerHTML = proyecto_detalles[seleccionado][4];
        visuales_imagenes.innerHTML = proyecto_detalles[seleccionado][5];
        visuales_descripcion_texto.innerHTML = proyecto_detalles[seleccionado][6];
        document.getElementById('article_enlace_contenedor').style.display = 'initial'
    });
};

abrir_visuales.addEventListener('click', function(){
    document.getElementById('ventana_viasuales').style.display = 'inherit'
});

cerrar_ventana_emergente.addEventListener('click', function(){
    document.getElementById('ventana_viasuales').style.display = 'none'
});

