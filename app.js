var app = (function( $ ) {
	var configMap = {
		extended_height : 434,
		extended_title : 'Click here',
		retracted_height : 16,
		retracted_title : 'Click to extend',
		template_html : '<div class="spa-slider">Click</div>'
	},
	$chatSlider,
	toggleSlider, onClickSlider, initModule;

	initModule = function ( $container ) {
		console.log('starting...');
		$container.html( configMap.template_html );
		$chatSlider = $container.find( '.spa-slider' );

		$chatSlider
			.attr('title', configMap.retracted_title)
			.click( onClickSlider );

		return true;
	};

	onClickSlider = function(){
		alert('u just click...');
	};

	return { initModule : initModule };
}(jQuery));