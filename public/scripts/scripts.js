let menuButton = document.getElementById('menu-abrir');

menuButton.style.left = '40px';
menuButton.style.transform = 'rotate(-91deg)';
menuButton.addEventListener('click', function(e){
    let menuContainer = document.getElementsByClassName('menu')[0];

    if(menuContainer.classList.contains('show')){
        menuContainer.classList.remove('show');
        //Estilos
        menuButton.style.left = '40px';
        menuButton.style.transform = 'rotate(-91deg)';
    }else{
        menuContainer.classList.add('show');
        //Estilos

        menuButton.style.left = '115px';
        menuButton.style.transform = 'rotate(91deg)';
        menu.style.top = '40px';
    }

});

