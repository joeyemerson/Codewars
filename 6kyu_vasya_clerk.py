# The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

# Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

# Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

# Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
# Examples:

# tickets([25, 25, 50]) # => YES 
# tickets([25, 100]) # => NO. Vasya will not have enough money to give change to 100 dollars
# tickets([25, 25, 50, 50, 100]) # => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50

def tickets(people):
    bank = {25:0, 50:0, 100:0}
    for p in people:
        if p == 25:
            bank[25] += 1
        if p == 50:
            if bank[25] < 1:
                return 'NO'
            bank[25] -= 1
            bank[50] += 1
        if p == 100:
            if bank[25] > 0 and bank[50] > 0:
                bank[25] -= 1
                bank[50] -= 1
                bank[100] += 1
            elif bank[25] >= 3:
                bank[25] -= 3
                bank[100] += 1
            else: return 'NO'
    return 'YES'
        
            


print(tickets([25, 25, 50]))
print(tickets([25, 100]))
print(tickets([]))


# clever
# def tickets(people):
#   till = {100.0:0, 50.0:0, 25.0:0}

#   for paid in people:
#     till[paid] += 1
#     change = paid-25.0
    
#     for bill in (50,25):
#       while (bill <= change and till[bill] > 0):
#         till[bill] -= 1
#         change -= bill

#     if change != 0:
#       return 'NO'
        
#   return 'YES'

# another...
# def tickets(a):
#     n25 = n50 = n100 = 0
#     for e in a:
#         if   e==25            : n25+=1
#         elif e==50            : n25-=1; n50+=1
#         elif e==100 and n50>0 : n25-=1; n50-=1
#         elif e==100 and n50==0: n25-=3
#         if n25<0 or n50<0:
#             return 'NO'
#     return 'YES'