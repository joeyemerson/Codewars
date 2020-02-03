# The Takeuchi function is defined as:

# def T(x,y,z):
#   if x ≤ y:
#     return y
#   else:
#     return T(T(x-1,y,z),T(y-1,z,x),T(z-1,x,y))

# Let us define function U as:

# U(n) = T(n,0,n+1)

# Let E(n) be the number of times the else clause in the T function is invoked when computing U(n) (no memoization or laziness). We get:

# E(5) = 223  # for n = 5, the else clause is invoked 223 times in the T function
# E(10) = 1029803

# You will be given a number n and your task is to return the digital sum of E(n):

# solve(5) = 7  # E(5) = 223 and the sum of digits in 223 = 7 because 223 => 2 + 2 + 3 = 7
# solve(10) = 23, # E(10) = 1029803 and the sum of digits in 1029803 is 23

# n will not exceed 165. More examples in test cases. Good luck!

## solution 1
from functools import lru_cache

@lru_cache(maxsize=2**15)
def help(x, y, z):
    if x <= y: return (0,y)
    else:
        cnt = 1
        a = help(x - 1, y, z)
        b = help(y - 1, z, x)
        c = help(z - 1, x, y)
        d = help(a[1], b[1], c[1])
        cnt += a[0] + b[0] + c[0] + d[0]
        return (cnt,d[1])

def solve(n):
    return sum(int(x,10) for x in str(help(n, 0, n + 1)[0]))

## solution 2
# U = {}
# def R(Q,W,E) :
#   O = Q << 16 | W << 8 | E
#   if O in U : return U[O]
#   if W < Q :
#     A,Z = R(~-Q,W,E)
#     S,X = R(~-W,E,Q)
#     D,C = R(~-E,Q,W)
#     F,V = R(Z,X,C)
#     U[O] = -~A + S + D + F,V
#     return U[O]
#   else : return 0,W
# solve = lambda Q : sum(map(int,str(R(Q,0,-~Q)[0])))

print(solve(5),7)
print(solve(10),23)
print(solve(20),54)
print(solve(30),113)
print(solve(50),185)
print(solve(99),542)
print(solve(140),809)
print(solve(150),877)