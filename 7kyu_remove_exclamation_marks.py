# Description:

# Remove all exclamation marks from sentence except at the end.
# Examples

# remove("Hi!") == "Hi!"
# remove("Hi!!!") == "Hi!!!"
# remove("!Hi") == "Hi"
# remove("!Hi!") == "Hi!"
# remove("Hi! Hi!") == "Hi Hi!"
# remove("Hi") == "Hi"

import re

def remove(s):
    return re.sub(r'!+(?=[^!])', '', s)


print(remove('Hi!'), 'Hi!')
print(remove('Hi!!!'),'Hi!!!')
print(remove('!Hi'), 'Hi')
print(remove('!Hi!'), 'Hi!')
print(remove('Hi! Hi!'), 'Hi Hi!')
print(remove('Hi'), 'Hi')