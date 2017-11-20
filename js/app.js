var addList = document.querySelector('.add-list-js');

var form = document.querySelector('.form-js');

var section = document.querySelector('.container-form-js');



addList.addEventListener('click', list);

function list  () {
    var input = document.createElement('input');
    input.setAttribute('placeholder', 'Añadir un lista ...')
    input.setAttribute('type', 'text')

    var button = document.createElement('button');
    button.textContent = 'Guardar';
    
    var a = document.createElement('a');
    a.setAttribute('href', '#')
    a.textContent = 'X';
    

    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(a);
    //remuevo addList para q no se logre visualizar 
    form.removeChild(addList);

    form.classList.add ('hide');
    button.classList.add('form-btn');
    input.classList.add('form-input');
    a.classList.add('cerrar');

    a.addEventListener('click', close);

    function close () {        
        form.removeChild(input);
        form.removeChild(button);
        form.removeChild(a);
        form.classList.remove('hide');
        form.appendChild(addList);
        
        addList.getAttribute('class','add-list add-list-js')
    }

    button.addEventListener('click', save)

    function save() {
        if ( input.value){
            var div = document.createElement('div');
            var p = document.createElement('p');
            var añadirTarea = document.createElement('a');

            div.appendChild(p);
            div.appendChild(añadirTarea);

            section.insertBefore(div,form);
            añadirTarea.setAttribute('href','#');
            p.textContent = input.value;
            añadirTarea.textContent = 'añadir una tarjeta ...'
            div.setAttribute('class','container-tarea');
            a.setAttribute('class','a-tarea');

            input.value = '';
            
            añadirTarea.addEventListener('click',añadirCard);
            
                    function añadirCard() {
                        var textarea = document.createElement('textarea');
                        var btnAñade = document.createElement('button');
                        var cerrar = document.createElement('a');
            
                        cerrar.setAttribute('href','#');
                        btnAñade.textContent = 'Añadir';
                        cerrar.textContent= 'X';

                        btnAñade.setAttribute('class','form-btn');
                        textarea.setAttribute('class','textarea');
                        cerrar.setAttribute('class','cerrar');
            
                        div.appendChild(textarea);
                        div.appendChild(btnAñade);
                        div.appendChild(cerrar);
                        div.removeChild(añadirTarea);

                        btnAñade.addEventListener('click', añade)
            
                        function añade () {
                            if(textarea.value) {
                                var p = document.createElement('p');
                                p.textContent = textarea.value;
                                div.appendChild(p);
                                div.insertBefore (p,btnAñade);
                                textarea.value = '';
                            }
                
                        }

                        
                    }

        }


    }


}




