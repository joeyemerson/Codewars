# Given: an array containing hashes of names

# Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

# Example:

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# # returns 'Bart & Lisa'

# namelist([ {'name': 'Bart'} ])
# # returns 'Bart'

# namelist([])
# # returns ''
# Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

def namelist(names):
    #your code here
    name_string = ''
    count = 0
    for name in names:
        name_string += name['name'] + str(count)
        count += 1
    if count == 1:
        return name_string.replace('0', '')
    elif count == 2:
        return name_string.replace('0', ' & ').replace('1', '')
    else:
        for n in range(0, count - 2):
            name_string = name_string.replace(str(n), ', ')
        name_string = name_string.replace(str(count - 2), ' & ').replace(str(count - 1), '')
    return name_string
        
# clever solution 1
# def namelist(names):
#     if len(names) > 1:
#         return '{} & {}'.format(', '.join(name['name'] for name in names[:-1]), 
#                                 names[-1]['name'])
#     elif names:
#         return names[0]['name']
#     else:
#         return ''

# clever solution 2
# def namelist(names):
#   return ", ".join([name["name"] for name in names])[::-1].replace(",", "& ",1)[::-1]


print(namelist([{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'},{'name': 'Homer'},{'name': 'Marge'}]))
print(namelist([{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'}]))
print(namelist([{'name': 'Bart'},{'name': 'Lisa'}]))
print(namelist([{'name': 'Bart'}]))
print(namelist([]))