# Background

# My TV remote control has arrow buttons and an OK button.

# I can use these to move a "cursor" on a logical screen keyboard to type words...

# The screen "keyboard" layout looks like this
# a	b	c	d	e	1	2	3
# f	g	h	i	j	4	5	6
# k	l	m	n	o	7	8	9
# p	q	r	s	t	.	@	0
# u	v	w	x	y	z	_	/
# Kata task

# How many button presses on my remote are required to type a given word?
# Notes

#     The cursor always starts on the letter a (top left)

#     Remember to also press OK to "accept" each letter.

#     Take a direct route from one letter to the next

#     The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)

# Example

# word = codewars

#     c => a-b-c-OK = 3
#     o => c-d-e-j-o-OK = 5
#     d => o-j-e-d-OK = 4
#     e => d-e-OK = 2
#     w => e-j-o-t-y-x-w-OK = 7
#     a => w-r-m-h-c-b-a-OK = 7
#     r => a-f-k-p-q-r-OK = 6
#     s => r-s-OK = 2

# Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

kb = {'a':(0,0),'b':(0,1),'c':(0,2),'d':(0,3),'e':(0,4),'1':(0,5),'2':(0,6),'3':(0,7),
      'f':(1,0),'g':(1,1),'h':(1,2),'i':(1,3),'j':(1,4),'4':(1,5),'5':(1,6),'6':(1,7),
      'k':(2,0),'l':(2,1),'m':(2,2),'n':(2,3),'o':(2,4),'7':(2,5),'8':(2,6),'9':(2,7),
      'p':(3,0),'q':(3,1),'r':(3,2),'s':(3,3),'t':(3,4),'.':(3,5),'@':(3,6),'0':(3,7),
      'u':(4,0),'v':(4,1),'w':(4,2),'x':(4,3),'y':(4,4),'z':(4,5),'_':(4,6),'/':(4,7)}

def tv_remote(word):
    pc = 'a'
    res = len(word)
    for c in word:
        res += abs(kb[c][0] - kb[pc][0]) + abs(kb[c][1] - kb[pc][1])
        pc = c
    return res

## another solution...
# KEYBOARD = "abcde123fghij456klmno789pqrst.@0uvwxyz_/"
# MAP      = {c: (i//8, i%8) for i,c in enumerate(KEYBOARD)}

# def manhattan(*pts): return sum( abs(z2-z1) for z1,z2 in zip(*pts))

# def tv_remote(word):
#     return len(word) + sum( manhattan(MAP[was], MAP[curr]) for was,curr in zip('a'+word, word))

print(tv_remote("does"), 16)
print(tv_remote("your"), 23)
print(tv_remote("solution"),33)
print(tv_remote("work"), 20)
print(tv_remote("for"), 12)
print(tv_remote("these"), 27)
print(tv_remote("words"), 25)