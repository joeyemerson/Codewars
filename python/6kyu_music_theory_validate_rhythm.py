# Your task is to validate rhythm with a meter.

# Rules:

#     Rhythmic division requires that in one whole note (1) there are two half notes (2) or four quarter notes (4) or eight eighth notes (8).

#     Examples: 1 = 2 + 2, 1 = 4 + 4 + 4 + 4 ... 
#     Note that: 2 = 4 + 4, 4 = 8 + 8, 2 = 8 + 8 + 4 ... 

#     Meter gives an information how many rhythmic types of notes should be in one bar. Bar is the the primary section of a musical score.

#     Examples: 
#            4/4 -> 4 quarter notes in a bar
#            5/2 -> 5 half notes in a bar
#            3/8 -> 3 eighth notes in a bar
#     Note that: 
#     for 4/4 valid bars are: '4444', '88888888', '2488' ...
#     for 5/2 valid bars are: '22222', '2244244', '8888244888844' ...
#     for 3/8 valid bars are: '888', '48' ...

#     Anacrusis occurs when all bars but the first and last are valid, and the notes in the first and last bars when combined would also make a valid bar.

#     Examples: 
#     for 4/4 valid anacrusis is -> 44|...|44 or 88|...|888888 or 2|...|488 
#     for 5/2 valid anacrusis is -> 22|...|222 or 222|...|22 or  2244|...|244
#     for 3/8 valid anacrusis is -> 8|...|88 or 4|...|8 or 8|...|4
#     Note:
#     When anacrusis is valid but other bars in score are not -> return 'Invalid rhythm'

# Input:

# meter - array: eg. [4, 4],
# score - string, bars separated with '|': eg. '4444|8484842|888'

# Output:
# string message: 'Valid rhythm', 'Valid rhythm with anacrusis' or 'Invalid rhythm'

# Optimized for Python 2.7. 3 was unavailable for the challenge.
def validate_rhythm(meter, score):
    if 16 % meter[1]: return "Invalid rhythm"
    meter = float(meter[0]) / float(meter[1])
    measures = [sum(1/float(j) for j in i) for i in score.split("|")]
    if all((True if bar == meter else False) for bar in measures[1:-1]):
        if all((True if bar == meter else False) for bar in (measures[0], measures[-1])):
            return "Valid rhythm"
        if measures[0] + measures[-1] == meter:
            return "Valid rhythm with anacrusis"
    return "Invalid rhythm"


print("\nValid\n--------------------------------------")
print(validate_rhythm([4, 4], '4444|88888888|22|2488|1'))
print(validate_rhythm([5, 2], '22222|2244244|8888244888844|112'))
print(validate_rhythm([3, 8], '888|48|84'))

print("\nValid One Bar\n--------------------------------------")
print(validate_rhythm([4, 4], '4444'))
print(validate_rhythm([5, 2], '22222'))
print(validate_rhythm([1, 4], '4'))
print(validate_rhythm([3, 8], '888'))

print("\nValid with Anacrusis\n--------------------------------------")
print(validate_rhythm([4, 4], '44|4444|884884|22|1|44'))
print(validate_rhythm([5, 2], '222|1144|41188|22'))
print(validate_rhythm([3, 8], '88|48|84|8'))

print("\nInvalid Rhythms\n--------------------------------------")
print(validate_rhythm([4, 4], '44|11|224|44'))
print(validate_rhythm([5, 2], '222|111|222222|22'))
print(validate_rhythm([3, 8], '8|8888|448|88'))

print("\nInvalid Rhythm - Valid Anacrusis\n--------------------------------------")
print(validate_rhythm([4, 4], '44|11|224|44'))
print(validate_rhythm([5, 2], '222|111|222222|22'))
print(validate_rhythm([3, 8], '8|8888|448|88'))

print("\nInvalid Rhythm - Empty First/Last Bar\n--------------------------------------")
print(validate_rhythm([4, 4], '|11|224|4444'))
print(validate_rhythm([5, 2], '2288888244|111|222222|'))
print(validate_rhythm([3, 8], '|884|888|'))