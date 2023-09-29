(function(){
    const listaElementos=document.querySelectorAll('.menu_item_show');
    const lista=document.querySelector('.menu_links');
    const menu=document.querySelector('.menu_hamburguer');

    const addClick = ()=>{
        listaElementos.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item_active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = () => {
        listaElementos.forEach(element => {
            const subMenu = element.children[1];
            if (subMenu && subMenu.getAttribute('style')) {
                subMenu.removeAttribute('style');
                element.classList.remove('menu_item_active');
            }
        });
    }


    /*const deleteStyleHeight = ()=>{
        listaElementos.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item_active');
            }

        });
    }*/

    window.addEventListener('resize',()=>{
        if(window.innerWidth>700){
            deleteStyleHeight();
            if(lista.classList.contains('menu_links_show'))
                lista.classList.remove('menu_links_show');
        }
        else{
            addClick();
        }
    });

    if(window.innerWidth<=700){
        addClick();
    }

    menu.addEventListener('click',()=>lista.classList.toggle('menu_links_show'));
})();