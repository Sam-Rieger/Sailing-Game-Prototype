const game = require('./modules/game_utilities.js');
const UI = require('./modules/UI_utilities.js');

UI.clear_terminal();
console.log("hi1");

const return_promise = new Promise(UI.display_UI_options_tabs()).then((return_value => console.log(return_value)));



//if(UI.yes_or_no_question('Do you like javascript? [y|n]\n') == 1) {
    
//}