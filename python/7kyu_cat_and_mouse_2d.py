# You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

# You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

# Finally, if one of two animals are not present, return "boring without two animals".
# Examples

# moves = 5

# map =
# ..C......
# .........
# ....m....

# returns "Caught!" because the cat can catch the mouse in 4 moves

# moves = 5

# map =
# .C.......
# .........
# ......m..

# returns "Escaped!" because the cat cannot catch the mouse in

def cat_mouse(map_, moves):
    if 'C' not in map_ or 'm' not in map_:
        return 'boring without two animals'
    for row, line in enumerate(map_.splitlines()):
        if 'C' in line:
            cat = row, line.index('C')
        if 'm' in line:
            mouse = row, line.index('m')
    distance = abs(cat[0] - mouse[0]) + abs(cat[1] - mouse[1])
    return 'Caught!' if distance <= moves else 'Escaped!'

map_ = '''\
..C......
.........
....m....'''
print(cat_mouse(map_, 5), 'Caught!')

map_ = '''\
.C.......
.........
......m..'''
print(cat_mouse(map_, 5), 'Escaped!')

map_ = '''\
..C......
.........
.........'''
print(cat_mouse(map_, 5), 'boring without two animals')

map_ = '''\
m........
.C.......
.........'''
print(cat_mouse(map_, 2), 'Caught!')