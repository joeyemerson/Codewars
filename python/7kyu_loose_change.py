# You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

# Good thing you can code!

# Create change_count() to return a dollar amount of how much change you have!

# Valid types of change include:

# penny: 0.01
# nickel: 0.05
# dime: 0.10
# quarter: 0.25
# dollar: 1.00

# These amounts are already preloaded as floats into the CHANGE dictionary for you to use!

# You should return the total in the format $x.xx.

# Examples:

# change_count('nickel penny dime dollar') == '$1.16'
# change_count('dollar dollar quarter dime dime') == '$2.45'
# change_count('penny') == '$0.01'
# change_count('dime') == '$0.10'

# Warning, some change may amount to over $10.00!

CHANGE = {'penny': 0.01, 'nickel': 0.05, 'dime': 0.10, 'quarter': 0.25, 'dollar': 1.00}

def change_count(change):
    total = float()
    for coin in change.split():
        total += CHANGE[coin]
    return f'${total:.2f}'

# solution using map
# def change_count(change):
#     return '${:.2f}'.format(sum(map(CHANGE.get, change.split())))

#solution using single line fstring
# def change_count(s):
#     return f"${sum(CHANGE[x] for x in s.split()):.2f}"


print(change_count('dime penny dollar'), '$1.11')
print(change_count('dime penny nickel'), '$0.16')
print(change_count('quarter quarter'), '$0.50')
print(change_count('dollar penny dollar'), '$2.01')
print(change_count('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'), '$10.01')