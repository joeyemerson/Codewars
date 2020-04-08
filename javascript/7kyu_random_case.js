// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"

// Note: this function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

function randomCase(str) {
  return [...str].map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase())).join('');
}

let v = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Donec eleifend cursus lobortis',
  'THIS IS AN ALL CAPS STRING',
  'this is an all lower string',
];

for (const str of v) {
  console.log(randomCase(str) !== str);
  console.log(randomCase(str) !== str.toUpperCase());
  console.log(randomCase(str) !== str.toLowerCase());
}
