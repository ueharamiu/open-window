(function () {
	let shareButton = document.querySelectorAll( ".sns a" );
	for ( var i = 0; i < shareButton.length; i++ ) {
		shareButton[i].addEventListener( "click", function( e ) {
			e.preventDefault();
			window.open( this.href, "SNS_window", "width=600, height=600, height=500, menubar=no, toolbar=no, scrollbars=yes" );
		}, false );
	}

})()
