# Longest Palindrome

# Find the length of the longest substring in the given string s that is the same in reverse.

# As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

# If the length of the input string is 0, the return value must be 0.
# Example:

# "a" -> 1 
# "aab" -> 2  
# "abcde" -> 1
# "zzbaabcd" -> 4
# "" -> 0

def is_palindrome(s):
    return s == s[::-1]

def longest_palindrome(s):
    result = 0
    for i in range(0, len(s)):
        for j in range(i, len(s)):
            if is_palindrome(s[i:j+1]) and result < len(s[i:j+1]):
                result = len(s[i:j+1])
    return result



print(longest_palindrome("a"), 1)
print(longest_palindrome("aa"), 2)
print(longest_palindrome("baa"), 2)
print(longest_palindrome("aab"), 2)
print(longest_palindrome("abcdefghba"), 1)
print(longest_palindrome("baablkj12345432133d"), 9)