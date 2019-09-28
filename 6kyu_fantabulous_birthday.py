# Fibsieve had a fantabulous (yes, it's an actual word) birthday party this year. He had so many gifts that he was actually thinking of not having a party next year.

# Among these gifts there was an N x N glass chessboard that had a light in each of its cells. When the board was turned on a distinct cell would light up every second, and then go dark.

# The cells would light up in the sequence shown in the diagram. Each cell is marked with the second in which it would light up:

# image

# In the first second the light at cell (1, 1) would be on. And in the 5th second the cell (3, 1) would be on. Now Fibsieve is trying to predict which cell will light up at a certain time (given in seconds).

# Output: (x, y) - the column and the row number of a cell which would light up at the N'th second.
# Notes

#     Column and row indices are 1-based.
#     x is the column index, and y is the row index.
#     The cells are indexed from bottom-left corner.
#     N will be large.

from math import ceil, sqrt

def fantabulous_birthday(n):
    layer = ceil(sqrt(n))
    layer_max = layer**2
    layer_min = layer_max - layer - (layer - 2)
    if layer % 2 == 0:
        col = layer if layer_max - layer < n else n - layer_min + 1
        row = layer if layer_min + layer > n else layer_max - n + 1
    else:
        col = layer if layer_min + layer > n else layer_max - n + 1
        row = layer if layer_max - layer < n else n - layer_min + 1
    return [col, row]

# nice solution using XOR bitwise operator
# def fantabulous_birthday(n):
#     a = ceil(sqrt(n))
#     b = a*a-a+1
#     c = a-abs(n-b)
#     return [a,c] if (n < b) ^ (a % 2) == 0 else [c,a]

print(fantabulous_birthday(24), [2,5])
print(fantabulous_birthday(2), [1,2])
print(fantabulous_birthday(30), [5,6])