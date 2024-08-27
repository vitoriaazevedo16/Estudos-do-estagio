     const form = document.querySelector('#formulario')
     const nameinput =  document.querySelector('#nome')
     const whatsappinput =  document.querySelector('#whatsapp')
     const emailinput =  document.querySelector('#email')
     const cnpjinput =  document.querySelector('#cnpj')
     const somainput =  document.querySelector('#soma')

     form.addEventListener("submit", (event) =>{
        event.preventDefault();

        //Verifica se o nome está vazio
        if(nameinput.value ==="" ){
            alert('Por favor, preencha seu nome!');
            return;
        }

        //Verifica se o email está preenchido e é valido
        if(emailinput.value ==="" ||!isEmailValid(emailinput.value) ){
            alert('Por favor, preencha seu email!');
            return;
        }

        //Se todos os campos estiverem preenchidos, o formulario será enviado
        form.submit();
     });

     //Função que vai validar o email
     function isEmailValid(email){

    //Regex de validação do email
        const emailRegex = new RegExp(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        if(emailRegex.test(email)){
            return true;
        }
        return false;
     }
   
