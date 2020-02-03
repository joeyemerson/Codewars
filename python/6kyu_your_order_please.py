import re

def order(sentence):
    ordered = dict()
    for w in sentence.split():
        key = int(re.sub('[^0-9]', '', w))
        ordered[key] = w
    result = []
    for x in range(1, len(ordered) + 1):
        result.append(ordered[x])
    return ' '.join(x for x in result)


print(order("is2 Thi1s T4est 3a"))
print(order("4of Fo1r pe6ople g3ood th5e the2"))
print(order(""))
print(order("4of Fo1r pe6ople g3ood th5e the2 tes10t tes9t 8test t7est te11st"))