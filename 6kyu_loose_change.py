# Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

# Notes:

#     If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
#     If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.

# Examples

# loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
# loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
# loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

def loose_change(cents):
    change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
    if cents < 1: return change 
    change['Quarters'] += int(cents // 25)
    cents = cents % 25
    change['Dimes'] += int(cents // 10)
    cents = cents % 10
    change['Nickels'] += int(cents // 5)
    cents = cents % 5
    change['Pennies'] += int(cents)
    return change


print(loose_change(29),  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 1})
print(loose_change(91),  {'Nickels': 1, 'Pennies': 1, 'Dimes': 1, 'Quarters': 3})
print(loose_change(0),   {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0})
print(loose_change(-2),  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0})
print(loose_change(3.9), {'Nickels': 0, 'Pennies': 3, 'Dimes': 0, 'Quarters': 0})