# Definition

# Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
# Task

# Given a number, Find if it is Disarium or not .
# Warm-up (Highly recommended)
# Playing With Numbers Series
# Notes

#     Number passed is always Positive .
#     Return the result as String

# Input >> Output Examples

# disariumNumber(89) ==> return "Disarium !!"

# Explanation:

#     Since , 81 + 92 = 89 , thus output is "Disarium !!"

# disariumNumber(564) ==> return "Not !!"

# Explanation:

# Since , 51 + 62 + 43 = 105 != 546 , thus output is "Not !!"

def disarium_number(n):
    sum_powers = sum([int(digit)**(index+1) for index, digit in enumerate(str(n))])
    return 'Disarium !!' if sum_powers == n else 'Not !!'


print(disarium_number(89)  , "Disarium !!")
print(disarium_number(518) , "Disarium !!")
print(disarium_number(1024), "Not !!")