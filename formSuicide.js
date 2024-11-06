var resultButton = document.getElementById('button_result');
var windowRresult = document.getElementById('window_result');
var closeResultButton = document.getElementById('close_result');

resultButton.addEventListener('click', function(){
    windowRresult.style.display = 'flex';
})

closeResultButton.addEventListener('click', function(){
    windowRresult.style.display = 'none';
})