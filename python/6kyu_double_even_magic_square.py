# A Magic Square contains the integers 1 to n2, arranged in an n by n array
# such that the columns, rows and both main diagonals add up to the same
# number.

# For doubly even positive integers (multiples of 4) the following method can
# be used to create a magic square.

# Fill an array with the numbers 1 to n2 in succession. Then, for each 4 by 4
# subarray, replace the entries on the blue and red diagonals by n2+1-aij.
# So, in the following example, a11 (row 1, column 1) was initially 1 and is
# replaced by 82+1-1 = 64
# n=8

# 642 3 61606 7 57
# 9 55541213515016
# 1747462021434224
# 4026273736303133
# 3234352928383925
# 4123224445191848
# 4915145253111056
# 8 58595 4 62631

# The function even_magic() should return a 2D array as follows:-
# Example:
# n=4: Output: [[16,2,3,13],[5,11,10,8],[9,7,6,12],[4,14,15,1]]

# 162 3 13
# 5 11108
# 9 7 6 12
# 4 14151

# Only doubly even numbers will be passed to the function in the tests.


def even_magic(n):
    arr = [[i*n + j for j in range(1, n+1)] for i in range(n)]
    for i in range(n):
        for j in range(0, n, n//2):
            # arr[i][j] = n**2 + 1 - arr[i][j]
            # arr[i][(j+n//2) % n] = n**2 + 1 - arr[i][(j+n//2) % n]
    return arr


for row in even_magic(4):
    print(row)


# print(
#     even_magic(4)
#     == [[16, 2 , 3 , 13],
#         [5 , 11, 10, 8 ],
#         [9 , 7 , 6 , 12],
#         [4 , 14, 15, 1]]
# )

# print(
#     even_magic(8)
#     == [
#         [64, 2 , 3 , 61, 60, 6 , 7 , 57],
#         [9 , 55, 54, 12, 13, 51, 50, 16],
#         [17, 47, 46, 20, 21, 43, 42, 24],
#         [40, 26, 27, 37, 36, 30, 31, 33],
#         [32, 34, 35, 29, 28, 38, 39, 25],
#         [41, 23, 22, 44, 45, 19, 18, 48],
#         [49, 15, 14, 52, 53, 11, 10, 56],
#         [8 , 58, 59, 5 , 4 , 62, 63, 1 ],
#     ]
# )
