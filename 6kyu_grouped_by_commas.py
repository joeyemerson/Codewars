# Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

# Assume: 0 <= n < 1000000000
# Examples

#        1  ->           "1"
#       10  ->          "10"
#      100  ->         "100"
#     1000  ->       "1,000"
#    10000  ->      "10,000"
#   100000  ->     "100,000"
#  1000000  ->   "1,000,000"
# 35235235  ->  "35,235,235"

def group_by_commas(n):
    result = ''
    num_string = str(n)
    while len(num_string) > 3:
        result = ',' + num_string[-3:] + result
        num_string = num_string[:-3]
    if num_string:
        result = num_string + result
    return result

def group_by_commas2(n):
    return format(n, ',')



print(group_by_commas2(1), '1')
print(group_by_commas2(10), '10')
print(group_by_commas2(100), '100')
print(group_by_commas2(1000), '1,000')
print(group_by_commas2(10000), '10,000')
print(group_by_commas2(100000), '100,000')
print(group_by_commas2(1000000), '1,000,000')
print(group_by_commas2(35235425), '35,235,425')