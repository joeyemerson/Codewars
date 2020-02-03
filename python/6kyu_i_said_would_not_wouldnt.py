# For all those times when your mouth says the opposite of what your brain told it to say...
# Kata Task

# In this Kata you will write a method to return what you really meant to say by negating certain words (adding or removing n't)

# The words to be negated are drawn from this pool:

#     are - aren't
#     can - can't
#     could - couldn't
#     did - didn't
#     do - don't
#     had - hadn't
#     has - hasn't
#     have - haven't
#     is - isn't
#     might - mightn't
#     must - mustn't
#     should - shouldn't
#     was - wasn't
#     were - weren't
#     would - wouldn't

# Input

#     words - these are the words your brain has trouble with (contains only lower case positive form of the word)

#     speech - what your mouth said

# Output

#     What you meant to say. This is the speech sentence, but with any of the words (both positive and negative forms) negated

# Notes

#     Case rules
#         when changing negative to positive the replacement word must be same case as the original
#         when changing positive to negative use n't (except if the original word (plus any 've part) was entirely uppercase, then use N'T)

#     Beware of the word can

#     Beware of punctuation

#     Beware of variations with an 've suffix, such as should've, would've, could've, etc

# Examples

#     words = ["can", "do", "have", "was", "would"]

#     speech
#         I do like pizza. ==> I don't like pizza.
#         I haven't seen you wearing that hat before. ==> I have seen you wearing that hat before.
#         I could see why you would say that. ==> I could see why you wouldn't say that.
#         I didn't say it! It wasn't me! ==> I didn't say it! It was me!
#         YES, WE CAN ==> YES, WE CAN'T
#         Wouldn't you believe it? I can't! ==> Would you believe it? I can!
#         I must be more careful in future. ==> I must be more careful in future.
#         I don't see why it WOULD be them ==> I do see why it WOULDN'T be them

# not working; use regex
def speech_correction(words, speech):
    new_speech = list()
    words_pos = [w for w in words]
    if 'can' in words_pos:
        words_neg = [w + 'n\'t' for w in words_pos if w != 'can']
        words_neg = words_neg[0:words_pos.index('can')] + ['can\'t'] + words_neg[words_pos.index('can'):]
    else:
        words_neg = [w + 'n\'t' for w in words_pos]
    for w in speech.split():
        if w.lower() in words_pos:
            if w.isupper():
                new_speech.append(words_neg[words_pos.index(w.lower())].upper())
            else:
                new_speech.append(words_neg[words_pos.index(w.lower())])
        elif w.lower() in words_neg:
            if w.isupper():
                new_speech.append(words_pos[words_neg.index(w.lower())].upper())
            else:
                new_speech.append(words_pos[words_neg.index(w.lower())])
        else:
            new_speech.append(w)
    if speech.split()[0].isupper():
        first_word = new_speech[0].upper()
    elif speech[0].istitle():
        first_word = new_speech[0].title()
    else:
        first_word = new_speech[0].lower()
    return first_word + ' ' + ' '.join(new_speech[1:])


words = {"can","do","have","was","would"}
print(speech_correction(words, "I do like pizza."))
print(speech_correction(words, "I haven't seen you wearing that hat before."))
print(speech_correction(words, "I could see why you would say that."))
print(speech_correction(words, "I didn't say it! It wasn't me!"))
print(speech_correction(words, "I must be more careful in future."))
print(speech_correction(words, "YES, WE CAN"))
print(speech_correction(words, "Wouldn't you believe it? I can't!"))
print(speech_correction(words, "I don't see why it WOULD be them"))