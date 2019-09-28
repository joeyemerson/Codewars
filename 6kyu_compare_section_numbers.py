# Section numbers are strings of dot-separated integers. The highest level sections (chapters) are numbered 1, 2, 3, etc. Second level sections are numbered 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, etc. Next level sections are numbered 1.1.1, 1.1.2, 1.1.2, 1.2.1, 1.2.2, erc. There is no bound on the number of sections a document may have, nor is there any bound on the number of levels.

# A section of a certain level may appear directly inside a section several levels higher without the levels between. For example, section 1.0.1 may appear directly under section 1, without there being any level 2 section. Section 1.1 comes after section 1.0.1. Sections with trailing ".0" are considered to be the same as the section with the trailing ".0" truncated. Thus, section 1.0 is the same as section 1, and section 1.2.0.0 is the same as section 1.2.

# Write a function compare(section1, section2) that returns -1, 0, or 1 depending on whether section1 is before, same as, or after section2 respectively.

def compare(s1, s2):
    v1,v2 = version(s1),version(s2)
    return -1 if v1 < v2 else 1 if v1 > v2 else 0

def version( s ):
    v = [int(n) for n in s.split(".")]
    while( v[-1]==0 ) : v = v[0:-1]
    return v


print(compare('1', '2'), -1)
print(compare('1.1', '1.2'), -1)
print(compare('1.1', '1'), 1)
print(compare('1.2.3.4', '1.2.3.4'), 0)
print('Sections containing "0"')
print(compare('3', '3.0'), 0)
print(compare('3', '3.0.0.0'), 0)
print(compare('1.2.1', '1.2.0'), 1)
print(compare('3.0.0', '3.1.1'), -1)
print(compare('3.0.1', '3.1'), -1)
print(compare('1.2.3', '1.02.003'), 0)
