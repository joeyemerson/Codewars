# Normally, we decompose a number into binary digits by assigning it with
# powers of 2, with a coefficient of 0 or 1 for each term:

# 25 = 1*16 + 1*8 + 0*4 + 0*2 + 1*1

# The choice of 0 and 1 is... not very binary. We shall perform the true
# binary expansion by expanding with powers of 2, but with a coefficient of 1
# or -1 instead:

# 25 = 1*16 + 1*8 + 1*4 - 1*2 - 1*1

# Now this looks binary.

# Given any positive number n, expand it using the true binary expansion, and
# return the result as an array, from the most significant digit to the least
# significant digit.

# true_binary(25) == [1,1,1,-1,-1]

# It should be trivial (the proofs are left as an exercise to the reader) to
# see that:

#     Every odd number has infinitely many true binary expansions
#     Every even number has no true binary expansions

# Hence, n will always be an odd number, and you should return the least true
# binary expansion for any n.

# Also, note that n can be very, very large, so your code should be very
# efficient.


def true_binary(n):
    binary = bin(n)[2:]
    true_binary = [1]
    for i in range(1, len(binary)):
        if binary[i-1] == "0":
            true_binary.append(-1)
        else:
            true_binary.append(1)
    return true_binary


print(true_binary(25) == [1, 1, 1, -1, -1])
print(true_binary(47) == [1, 1, -1, 1, 1, 1])
print(true_binary(1) == [1])
print(true_binary(3) == [1, 1])
print(
    true_binary(1234567) == [1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1]
    + [-1, -1, -1, -1, 1, 1]
)

# clever solution from Bubbler
# def true_binary(n):
#     return [(c == '1') * 2 - 1 for c in '1' + bin(n)[2:-1]]
