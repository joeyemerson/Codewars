// In my "getQuotes" function, I am trying to extract only the quotes from a string.

// #Example

// getQuotes('"example quote #1" some text "example quote #2"');
// should return ["\"example quote #1\"","\"example quote #2\""]

// However, my test results are not as expected. can you find out what I did wrong?

const regex = /".+?"/g;

const getQuotes = string => {
  return string.match(regex);
};

console.log(
  getQuotes(
    '"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'" - Henry Rollins'
  ),
  ['"Winners never quit and quitters never win."', '"My motto is, \'Never quit.\'"']
);
