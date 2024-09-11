//Curso de jQuery básico-Emerson Carvalho.
//Logica de desenvolvimento do Jquery

$('h1').css("color", "rede")//O h1 esta sendo selecionado e mudara a sua cor.

//Encadeamento no Jquery
$('h1').css("color", "green").hide().delay('1000');//Alem da mudança de cor, nos temos a ocultação do elemento e o tempo qu ele vai demorar para aparecer.

//Outra maneira de agrupar
$('h1')
.css("color", "green")
.hide()
.delay('1000');