document.addEventListener("DOMContentLoaded", function(){
    const abrirmenu = document.getElementById('menu');
    const menutodo = document.getElementById('bodymenu');
    const abrirperfil = document.getElementById('foto_perfil');
    const perfiltodo = document.getElementById('bodyperfil');
    



    abrirmenu.addEventListener('click', function(e){
        menutodo.style.display = "block";
        perfiltodo.style.display="none";
    });
    abrirperfil.addEventListener('click', function(e) {
        menutodo.style.display="none";
        perfiltodo.style.display="flex";
    })
    document.addEventListener('click', function(fechar) {
        if(!bodymenu.contains(fechar.target) && fechar.target !== menu)
            bodymenu.style.display="none"
    })
    document.addEventListener('click', function(fechar){
        if(!bodyperfil.contains(fechar.target) && fechar.target !==foto_perfil)
            bodyperfil.style.display="none"
    })
    
})