document.addEventListener("DOMContentLoaded", function(){
    const abrirmenu = document.getElementById('menu');
    const menutodo = document.getElementById('bodymenu');
    const abrirperfil = document.getElementById('foto_perfil');
    const perfiltodo = document.getElementById('bodyperfil');
    const backdrop = document.getElementById('backdrop');
    const irmapa = document.getElementById('botaomapa');
    const mapalinhas = document.getElementById('mapabody')
    const setamapavoltarmenu = document.getElementById('setamapa')



    abrirmenu.addEventListener('click', function (event){
        event.stopPropagation();
        menutodo.classList.add('active');
        backdrop.classList.add('active');
    });
    abrirperfil.addEventListener('click', function (event){
        event.stopImmediatePropagation();
        perfiltodo.classList.add('active');
        backdrop.classList.add('active');
    });
    backdrop.addEventListener('click', function(){
        menutodo.classList.remove('active');
        perfiltodo.classList.remove('active');
        backdrop.classList.remove('active');
    });
    document.addEventListener('click', function(event){
        const clicoufora = !menutodo.contains(event.target) &&event.target !==menutodo;
        const clicouforaperfil = !perfiltodo.contains(event.target) && event.target !==foto_perfil;

        if(clicoufora && menutodo.classList.contains ('active')) {
            menutodo.classList.remove('active');
    
        }
        if(clicouforaperfil && perfiltodo.contains ('active')){
            perfiltodo .classList.remove('active');
        }
        if(!menutodo.classList.contains('active') &&
    !perfiltodo.classList.contains('active'))
    {
        backdrop.classList.remove('active');
    }
    })

    irmapa.addEventListener('click', function(event){
        event.stopImmediatePropagation();
        mapalinhas.classList.add('active')
    })
    document.addEventListener('click', function(event){
        if(event.target == setamapavoltarmenu)
            mapalinhas.classList.remove('active')
    })


})