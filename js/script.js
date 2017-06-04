$(document).ready(function () {

	$('select').material_select();

	$('.home').on('click', function () {
		$('.sessao-home').removeClass('hide');
		$('.sessao-home').addClass('show');
		$('.sessao-historico').addClass('hide');
		$('.sessao-analises').addClass('hide');
	});

	$('.historico').on('click', function () {
		$('.secao-historico').removeClass('hide');
		$('.secao-historico').addClass('show');
		$('.sessao-home').addClass('hide');
		$('.sessao-analise').addClass('hide');
	});

	$('.analises').on('click', function () {
		$('.secao-analises').removeClass('hide');
		$('.secao-analises').addClass('show');
		$('.secao-home').addClass('hide');
		$('.secao-historico').addClass('hide');
	});



	$("#leitor_pagamento").click(() => {
		$.ajax({
			url: "https://prestacontashacka.herokuapp.com/salvar",
			data: {
				cnpj: '1',
				nf: '1',
				data: '1',
				valor: '1',
				local: 'Xablau',
				vereador: '1s'
			},
			success: function () {
				alert("FOI")
			}
		})
	})

	$(".button-collapse").sideNav();

});






