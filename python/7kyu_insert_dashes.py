# This is a follow up from my kata Insert Dashes.
# Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
# For example:
# insertDashII(454793) --> 4547-9-3
# insertDashII(1012356895) --> 10123-56*89-5

# Zero shouldn't be considered even or odd.

import re

def insert_dash2(num):
    return re.sub(r'([2468])(?=[2468])', r'\1*', re.sub(r'([13579])(?=[13579])', r'\1-', str(num)))



print(insert_dash2(454793), '4547-9-3')
print(insert_dash2(123456), '123456')
print(insert_dash2(40546793), '4054*67-9-3')
print(insert_dash2(1012356895), '10123-56*89-5')
print(insert_dash2(0), '0')