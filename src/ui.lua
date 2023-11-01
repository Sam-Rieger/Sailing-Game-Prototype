UI = {};

TextStyles = {DEFAULT = 0, MENU_OPTION = 1, TITLE = 2, FLAVOR = 3, ALERT = 4, PLAYER_INPUT = 5}

function UI.print(text, style)
    local escape_codes = {};
    escape_codes[TextStyles.DEFAULT] = "\033[0m"; -- no formatting
    escape_codes[TextStyles.MENU_OPTION] = "\033[93;4m"; -- yellow, underlined
    escape_codes[TextStyles.TITLE] = "\033[94;1m"; -- blue, bold
    escape_codes[TextStyles.FLAVOR] = "\033[96;3m"; -- light blue, italics
    escape_codes[TextStyles.ALERT] = "\033[91;5m"; -- bright red flashing
    escape_codes[TextStyles.PLAYER_INPUT] = "\033[35m"; -- magenta


    print(escape_codes[style] .. text .. escape_codes[TextStyles.DEFAULT]); --print formatted text, then clear formatting

end

function UI.clear()
    print("\033[2J;H"); --clears screen and sets cursor to home
end