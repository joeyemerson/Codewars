// According to Gary Chapman, marriage counselor and the author of "The Five Love Languages" books, there are five
// major ways to express our love towards someone: words of affirmation, quality time, gifts, acts of service, and
// physical touch. These are called the love languages. Usually, everyone has a main language: the one that he/she
// "speaks" and understands best. In a relationship, it's import to find your partner's main love language, so that
// you get along better with each other.

// Your task
// Unfortunately, your relationship got worse lately... After a long discussion with your partner, you agreed to give
// yourself a few weeks to improve it, otherwise you split up...

// You will be given a partner instance, and n weeks. The partner has a .response method, and the responses may be:
// "positive" or "neutral". You have n * 7 tries (= n weeks) to find the main love language of your partner!

// The love languages are: "words", "acts", "gifts", "time", "touch" (available predefined as LOVE_LANGUAGES)

// Note: your partner may (and will) sometimes give a positive response to any love language ("false positive"), but
// the main one has a much higher possibility. On the other hand, you may get a neutral response even for the main
// language, but with a low possibility ("false negative").

// There will be 50 tests. Although it's difficult to fail, in case you get unlucky, just run the tests again. After
// all, a few weeks may not be enough...

// Examples

// main love language: "words"

// partner.response("words") ==> "positive"
// partner.response("acts")  ==> "neutral"
// partner.response("words") ==> "positive"
// partner.response("time")  ==> "neutral"
// partner.response("acts")  ==> "positive"    # false positive
// partner.response("gifts") ==> "neutral"
// partner.response("words") ==> "neutral"     # false negative
// etc.

LOVE_LANGUAGES = ['words', 'acts', 'gifts', 'time', 'touch'];

function loveLanguage(partner, weeks) {
  const counts = {};
  let attempts = 0;

  while (attempts < weeks) {
    LOVE_LANGUAGES.forEach(language => {
      if (partner.response(language) === 'positive') {
        counts[language] = (counts[language] + 1) | 1;
      }
    });
    attempts++;
  }

  let res;
  let max = 0;

  for (language in counts) {
    if (counts[language] > max) {
      res = language;
      max = counts[language];
    }
  }
  return res;
}

class Partner extends String {
  response(language) {
    return this.toString() === language
      ? Math.random() < 0.85
        ? 'positive'
        : 'neutral'
      : Math.random() < 0.15
      ? 'positive'
      : 'neutral';
  }
}

console.log(loveLanguage(new Partner('words'), 6), 'words');
console.log(loveLanguage(new Partner('gifts'), 6), 'gifts');
