# Regular Tic-Tac-Toe is boring.

# That's why in this Kata you will be playing Tic-Tac-Toe in 3D using a 4 x 4 x 4 matrix!
# [source: imgur.com]
# Kata Task

# Play the game. Work out who wins.

# Return a string

#     O wins after <n> moves
#     X wins after <n> moves
#     No winner

# Rules

#     Player O always goes first
#     Input moves is list/array of [x,y,z] (zero based)
#     Each player takes a turn until you find a winner, or there are no moves left
#     There may be more moves provided than are necessary to finish the game - that is for you to figure out



def play_OX_3D(moves):
    p1_moves, p2_moves = [], []
    p1_turn = True
    for move in moves:
        if p1_turn: p1_moves.append(move)
        else: p2_moves.append(move)
        p1_turn = not p1_turn
    return f'Player 1 moves: {p1_moves}\nPlayer 2 moves: {p2_moves}'



print(play_OX_3D([[0,0,0],[1,1,1],[2,2,2],[3,3,3]]))