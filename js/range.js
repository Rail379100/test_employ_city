var slider = document.getElementById('checkout__noUi');

noUiSlider.create(slider, {
    start: 75,
    connect: 'lower',
    step:1,
    range: {
        'min': 0,
        'max': 100
    }
    
});

const slider_value = document.getElementById('checkout__range-value');
slider.noUiSlider.on('update', function (values, handle) { 
   slider_value.textContent = Math.round(values);
});


let filed = document.getElementById('filed');
let filed_text = document.getElementById('filed-text');
filed.onchange = function() {
    filed_text.textContent = 'Файл выбран';
};

