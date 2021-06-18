
if(window.SimpleSlide){
new SimpleSlide({
    slide: "quote",
    time: 5000
});

new SimpleSlide({
    slide: "portifolio",
    time: 5000,
    nav: true
});
}
//animacao da pagina
if(window.SimpleAnime){
new SimpleAnime();
}
if(window.SimpleForm) {
	new SimpleForm({
	  form: ".form_Php", // seletor do formulário
	  button: "#enviar", // seletor do botão
		erro: "<div id='form-erro'> <h1>Erro no envio!</h1> <h4>Um erro ocorreu, tente outro email.</h4> <p>Email: robbsonsp2012@gmail.com </p></div>", // mensagem de erro
		
	  sucesso: "<div id='form-sucesso'> <h2>Formulário enviado com sucesso</h2> <p>Em breve entramos em contato com você.</p></div>", // mensagem de sucesso
	});
}
