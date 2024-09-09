document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const email = document.getElementById('email').value;
        const cnpj = document.getElementById('cnpj').value;
        const soma = document.getElementById('soma').value;


        // Validação dos campos
        if (nome == '' || whatsapp == '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (email == '' || cnpj == '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (soma == '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }


        // Se passar na validação, irá ser enviado os dados para uma nova página
        const newPage = window.open('', '_blank'); // Abre uma nova página em branco
        newPage.document.open();
        newPage.document.write(`

            <html>
            <head><title>Dados Recebidos</title></head>
            <body>
                <h1>Dados recebidos do Formulário</h1>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Whatsapp:</strong> ${whatsapp}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>CNPJ:</strong> ${cnpj}</p>
                <p><strong>Soma:</strong> ${soma}</p>
            </body>
            </html>
        `);
        newPage.document.close();
    });
});