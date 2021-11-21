$(document).ready(function() 
{
	$('.header__burger').click(function(event) 
	{
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		
	});

	$('.slider').slick({
		adaptiveHeight:true,
		slidesToShow:2,
		variableWidth: true,
		centerMode: true
	});
})