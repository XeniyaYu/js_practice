//видимая часть
let viewport = document.getElementById('slider__viewport').offsetWidth;
//кнопка вперед
let btnNext = document.getElementById('slider__control-next');
//кнопка назад
let btnPrev = document.getElementById('slider__control-prev');
//слайдер со слайдами
let slider = document.querySelector('div.slider');
//получаем элементы для показа слайда
let viewSliders = document.querySelectorAll('.viewSlide');
//объявляем переменную для номера слайда и инициализация запуска
let viewSlide = 0;

//Назначаем цвет индикатора слайда
viewSliders[0].style.backgroundColor = "blue";
//viewSliders[0].classList.add("active");

//Обработка клика на кнопку вперед
btnNext.addEventListener('click', function(){
   //Делаем индикатор слайда

    viewSliders[viewSlide].style.backgroundColor="#8fbaff";
//Условие, если номер слайда менбше четырех
    if(viewSlide < 4) { //Если верно, то
        //Увеличиваем номер слайда на один
        viewSlide++;
    } else { //Иначе
        //Номер слайда равен нулю
        viewSlide = 0;
    }
    //Закрашиваем индикатор слайда  в синий
    viewSliders[viewSlide].style.backgroundColor="blue"
   
    //Меняем позицию всего слайда
    slider.style.left= -viewSlide * viewport + 'px';
});

//Обработка клика на кнопку назад
btnPrev.addEventListener('click', function(){
    //Делаем индикатор слайда голубой
    viewSliders[viewSlide].style.backgroundColor="#8fbaff";
//Условие, если номер слайда больше нуля
    if(viewSlide > 0) { //Если верно, то
        //Уменьшаем номер слайда
        viewSlide--;
    } else { //Иначе
        //Номер слайда равен четырем
        viewSlide = 4;
    }
    //Закрашиваем индикатор слайда в синий
    viewSliders[viewSlide].style.backgroundColor="blue";

    //Меняем позицию всего слайда
slider.style.left = -viewSlide * viewport + 'px';
});

