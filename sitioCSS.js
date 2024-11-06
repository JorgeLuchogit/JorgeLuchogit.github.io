const menuWindow = document.getElementById('slicer-menu');
const oneHundred= document.getElementById('oneHundred');
const animations= document.getElementById('animations');
const components= document.getElementById('components');
const componentBox = document.getElementById('component-box');
const codeBox = document.getElementById('codes');

let sectionsMenuSlider = document.querySelectorAll('.section');
let sectionDictionary ={
    'section-1':[],
    'section-2':[],
    'section-3':[],
};

for (section of sectionsMenuSlider){
    let selectionSection = section.id 
    section.addEventListener('click', function(){
        menuWindow.style.display = 'block'
        x = selectionSection;
        if(x === 'section-1'){
            oneHundred.style.display = 'block'
            animations.style.display = 'none'
            components.style.display = 'none'
        }
        else if(x === 'section-2'){
            oneHundred.style.display = 'none'
            animations.style.display = 'block'
            components.style.display = 'none'
        }
        else if(x === 'section-3'){
            oneHundred.style.display = 'none'
            animations.style.display = 'none'
            components.style.display = 'block'
        };
        componentBox.innerHTML = `<p style="color: rgb(129, 129, 129); position: absolute; top: 40%; left: 35%;">Elija un componente</p>`
        codeBox.style.display = 'Flex'
    });
};
function choseDay(){
    let dayChosen = document.getElementById('day-select');
    let dayChosenValue =  dayChosen.value;
    if (dayChosenValue == 0){
        componentBox.innerHTML = `<p style="color: rgb(129, 129, 129); position: absolute; top: 40%; left: 41%;">Elija un componente</p>`;
    }
    else{
        componentBox.innerHTML = `<iframe class="css-day" title="Día 1" src="100_dias_css/dia${dayChosenValue}.html" frameborder="0"></iframe>`;
    }
};
let pseudoRandomColors = [`#d98880`, `#c39bd3`,`#7fb3d5`,`#76d7c4`,`#7dcea0`,`#f4d03f`,`#e59866`,`#85929e`]
let animationNames = ['Wife','Onda', 'Hilandero', 'Carrusel','remolino', 'Bloques'];
let componentNames = ['Botón 1','Botón 2', 'spinner'];
let animationCode =``; 
let componentCode  =``;
daySelectCode =`<option value="0"></option>`;

for (let i = 0; i < animationNames.length; i++){
    randominteger = parseInt(Math.floor(Math.random() * (7 + 1)));
    animationCode += ` <input type="radio" name="radio_animations" class="radio_animations_class" id="animation-${i}" ><label for="animation-${i}"><div class="item-${i}" style="background-color:${pseudoRandomColors[randominteger]};">${animationNames[i]}</div></label>`;
};
document.getElementById('item_selections').innerHTML = animationCode;
for(let i = 1; i < 3; i++){
    daySelectCode +=`<option value="${i}">${i}</option>`
};
document.getElementById('day-select').innerHTML = daySelectCode;

for(let i = 0; i < componentNames.length; i++){
    randominteger = parseInt(Math.floor(Math.random() * (7 + 1)));
    componentCode += `<input type="radio" name="radio_compounds" class="radio_component_class" id="compound-${i}" ><label for="compound-${i}"><div class="item-${i}" style="background-color:${pseudoRandomColors[randominteger]};">${componentNames[i]}</div></label>`;
};
document.getElementById('item_selections2').innerHTML = componentCode;

let animationRadius = document.querySelectorAll('.radio_animations_class');
for (radio of animationRadius){
    let radioSelection = radio.id;
    radio.addEventListener('click', function(){
        componentBox.innerHTML = `<iframe class="css-day" title="${radioSelection}" src="Animaciones/${radioSelection}.html" frameborder="0"></iframe>`;
    });
};
let componentRadius = document.querySelectorAll('.radio_component_class');
for (radio of componentRadius){
    let radioSelection = radio.id;
    radio.addEventListener('click', function(){
        componentBox.innerHTML = `<iframe class="css-day" title="${radioSelection}" src="Componentes/${radioSelection}.html" frameborder="0"></iframe>`;
    });
};

