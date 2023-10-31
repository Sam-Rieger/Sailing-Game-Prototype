const game = require('./modules/game_utilities.js');
const UI = require('./modules/UI_utilities.js');

UI.clear_terminal();
console.log("hi1");

let user_response;
UI.display_UI_options_tabs(function selection(response) {user_response = response});


//if(UI.yes_or_no_question('Do you like javascript? [y|n]\n') == 1) {
    
//}