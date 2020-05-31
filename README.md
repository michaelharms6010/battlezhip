# Battlezhip / Zgame lounge

## User flow

Sign up ==> Create Game and wait for a joiner -or- Join an already existing game ==> When the game is on, the server will z2z the player whose turn it is with a representation of the board and a hash to verify the proper turn => user sends the next coordinate along with the valid hash.

### Aim for after signing up, game can be played entirely from the wallet

- Send a transaction to the "start game" address, with fee and your zaddr, and a game is created. Game id is returned upon creation in a z2z memo.
- Someone else sends their zaddr and a game id in to the "start game" address and the game begins.

## Cost structure

Starting a game costs .01 ZEC - This is to cover the transaction fees associated with the transactions that run the game. 

The winner receives the remaining funds, less transaction fees.