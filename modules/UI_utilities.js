const terminal = require( 'terminal-kit' ).terminal;
const termkit = require( 'terminal-kit' );

// example function that displays a question, and returns the user's
// response as 1 or 0.  Takes question text as an argument.
exports.yes_or_no_question = function (question_text, returnFunction) {
	terminal.blue( question_text ) ;

	terminal.yesOrNo( { yes: [ 'y' , 'ENTER' ], no: [ 'n' ] } , function( error , result ) {
	
		if ( result ) {
			terminal.green( "'Yes'\n" );
			terminal.processExit();
		}
		else {
			terminal.red( "'No'\n" );
			terminal.processExit();
		}
	});
}

//clear terminal
exports.clear_terminal = function () {
	terminal.clear();
}

//display the options a player has
exports.display_UI_options_tabs = function (returnFunction) {

	var menu_options = ["Option1", "Option2", "Option3", "Option4"];

	var display_format = {
		y: 1,
		style: terminal.inverse,
		selectedStyle: terminal.dim.blue.bgGreen
	};

	terminal.singleLineMenu(menu_options, display_format, function( error , response ) {
			//terminal.red(response.selectedText);
			//console.log(response.selectedIndex);
			//process.exit();
			returnFunction(response);
			terminal.processExit();
		}
	);

}