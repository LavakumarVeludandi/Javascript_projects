
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Player",
    chips: 100
}
let playerEl = document.querySelector("#player-el")
let cards_el = document.querySelector("#cards-el")
let sum_el = document.querySelector("#sum-el")
let message_el = document.querySelector("#message-el")
let game_btn = document.querySelector("#game-btn")

update_player_chips()

function start_game() {
    if (player.chips >= 10)
    {
        player.chips -= 10
        take_chips_animation()
        update_player_chips()
        isAlive = true
        cards = []
        sum = 0
        cards.push(get_random_card())
        cards.push(get_random_card())
        for(let i=0;i<cards.length;i++){
            sum+=cards[i]
        }
        render_game()
    }    
}
function reset_game() {
    player.chips = 100
    update_player_chips()
    isAlive = false
    hasBlackJack = false
    cards = []
    sum = 0
    cards_el.textContent = "Cards: "
    sum_el.textContent = "Sum: "
    message_el.textContent = "Do you want to play?"
    update_game_button()
}



function render_game(){
    cards_el.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
       cards_el.textContent += cards[i] + " "
    }
    sum_el.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        isAlive = true
        update_game_button()
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        isAlive = false
        player.chips = 1000000
        update_player_chips()
        update_game_button()
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        update_game_button()
    }
    message_el.textContent = message
}

function draw_card(){
    if(isAlive && !hasBlackJack){
        let new_card = get_random_card()
        cards.push(new_card)
        sum += new_card
        render_game()
    }
}

function get_random_card(){
    let rand_num = Math.floor(Math.random() * 13) + 1
    if (rand_num === 1) {
        return 11
    } else if (rand_num > 10) {
        return 10
    } else {
        return rand_num
    }

}

function update_player_chips(){
    playerEl.textContent = player.name + ": $" + player.chips
}

function update_game_button(){
    if (isAlive){
        game_btn.textContent = "Draw New Card";
        game_btn.onclick = draw_card;
        game_btn.classList.add("draw")
    }
    else{
        if(player.chips < 10 || hasBlackJack){
            game_btn.textContent = "Reset";
            game_btn.onclick = reset_game;
            game_btn.classList.add("reset")
        }
        else{
            game_btn.textContent = "Start Game";
            game_btn.onclick = start_game;
            if (game_btn.classList.contains("draw")) {
                game_btn.classList.remove("draw")
            }
            if (game_btn.classList.contains("reset")) {
                game_btn.classList.remove("reset")
            }
        }
    }
}

function take_chips_animation() {
    const notification = document.querySelector("#sum-update-el");
    notification.textContent = "-$10";
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 1000);
}