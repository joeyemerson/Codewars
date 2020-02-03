# Write a function that removes every lone 9 that is inbetween 7s.

# seven_ate9('79712312') => '7712312'
# seven_ate9('79797') => '777'

# Input: String Output: String

def seven_ate9(s):
    return s.replace('797', '77').replace('797', '77')

print(seven_ate9('165561786121789797'),'16556178612178977')
print(seven_ate9('797'),'77')
print(seven_ate9('7979797'),'7777')