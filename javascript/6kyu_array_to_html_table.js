// The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.

// You need to write a function called to_table/toTable, that takes three arguments:

//     data - a 2D array (list),
//     headers - an optional boolean value. If True, the first row of the array is considered a header. Defaults to False,
//     index - an optional boolean value. If True, the first column in the table should contain 1-based indices of the corresponding row. If headers arguments is True, this column should have empty header. Defaults to False.

// and returns a string containing HTML tags representing the table.

// HTML table is structured like this:

// <table>
//   <thead>                 <!-- an optional table header -->
//     <tr>                  <!-- a header row -->
//       <th>header1</th>    <!-- a single header cell -->
//       <th>header2</th>
//     </tr>
//   </thead>
//   <tbody>                 <!-- a table's body -->
//     <tr>                  <!-- a table's row -->
//       <td>row1, col1</td> <!-- a row's cell -->
//       <td>row1, col2</td>
//     </tr>
//     <tr>
//       <td>row2, col1</td>
//       <td>row2, col2</td>
//     </tr>
//   </tbody>
// </table>

// The table header is optional. If header argument is False then the table starts with <tbody> tag, ommiting <thead>.

// So, for example:

// toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)

// returns

// "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"

// As you can see, no linebreaks or whitespaces (except for the ones present in the array values) are included, so the HTML code is minified.
// IMPORTANT NOTE: if the value in the array happens to be None, the value of the according cell in the table should be en ampty string ("")! Otherwise, just use a string representation of the given value, so, dependent on the language, the output can be slightly different. No additional parsing is needed on the data.

// For your convenience, there is a preloaded function esc_html/escHtml that takes a string with HTML tags and escape them; it is necessary if you want to use print/console.log on your resulting strings, elsewise Codewars processes HTML tags, so they appear invisible in the stdout.

// Test cases will always provide valid data, that is - up to three arguments, first a NxM array (list) with N and M > 0, second and third a boolean. The values in the array will always be either string, number, bool or None/null.

// <table>
//   <thead>                 <!-- an optional table header -->
//     <tr>                  <!-- a header row -->
//       <th>header1</th>    <!-- a single header cell -->
//       <th>header2</th>
//     </tr>
//   </thead>
//   <tbody>                 <!-- a table's body -->
//     <tr>                  <!-- a table's row -->
//       <td>row1, col1</td> <!-- a row's cell -->
//       <td>row1, col2</td>
//     </tr>
//     <tr>
//       <td>row2, col1</td>
//       <td>row2, col2</td>
//     </tr>
//   </tbody>
// </table>

function toTable(data, headerFlag = false, indexFlag = false) {
  const bodyStartIndex = +headerFlag;
  let tableHTML = '<table>';

  if (headerFlag) tableHTML += generateHeaderHTML(data[0], indexFlag);
  tableHTML += generateBodyHTML(data.slice(bodyStartIndex), indexFlag);

  return tableHTML + '</table>';
}

function generateHeaderHTML(data, indexFlag) {
  // Add a blank cell at start of header if we have an index column
  let headerHTML = indexFlag ? '<thead><tr><th></th>' : '<thead><tr>';

  data.forEach(item => {
    headerHTML += `<th>${item}</th>`;
  });

  return headerHTML + '</tr></thead>';
}

function generateBodyHTML(data, indexFlag) {
  let bodyHTML = '<tbody>';

  data.forEach((row, idx) => {
    // Populate index cell first if index column flag true
    let rowHTML = indexFlag ? `<tr><td>${idx + 1}</td>` : '<tr>';

    // null is the only value not to be included as text in the HTML
    row.forEach(item => {
      rowHTML += `<td>${item === null ? '' : item}</td>`;
    });

    bodyHTML += rowHTML + '</tr>';
  });

  return bodyHTML + '</tbody>';
}

cases = [
  {
    input: [[['o']]],
    output: '<table><tbody><tr><td>o</td></tr></tbody></table>',
  },
  {
    input: [
      [
        ['lorem', 'ipsum'],
        ['dolor', 'sit amet'],
      ],
      true,
      true,
    ],
    output:
      '<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>',
  },
  {
    input: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      false,
      true,
    ],
    output:
      '<table><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>2</td><td>4</td><td>5</td><td>6</td></tr><tr><td>3</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>',
  },
  {
    input: [
      [
        ['id', 'name', 'price', 'quantity'],
        [24351, 'pen', 2.41, 500],
        [null, 'pencil', 0.99, 25],
        [63401, 'grizzly bear', null, 1],
        [3532, 'rubber duck', 5.45, 24],
        [1523, null, 3.0, 6.8],
        [11765, 'caviar', 67.95, null],
      ],
      true,
    ],
    output:
      '<table><thead><tr><th>id</th><th>name</th><th>price</th><th>quantity</th></tr></thead><tbody><tr><td>24351</td><td>pen</td><td>2.41</td><td>500</td></tr><tr><td></td><td>pencil</td><td>0.99</td><td>25</td></tr><tr><td>63401</td><td>grizzly bear</td><td></td><td>1</td></tr><tr><td>3532</td><td>rubber duck</td><td>5.45</td><td>24</td></tr><tr><td>1523</td><td></td><td>3</td><td>6.8</td></tr><tr><td>11765</td><td>caviar</td><td>67.95</td><td></td></tr></tbody></table>',
  },
  {
    input: [
      [
        ['a', 'b', 'c', 'd', 'e'],
        [true, false, false, true, true],
      ],
      true,
    ],
    output:
      '<table><thead><tr><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th></tr></thead><tbody><tr><td>true</td><td>false</td><td>false</td><td>true</td><td>true</td></tr></tbody></table>',
  },
];

for (testCase of cases) {
  actual = toTable(...testCase.input);
  expected = testCase.output;
  console.log(actual === expected ? 'PASS' : 'FAIL', '\n');
  console.log(actual);
  console.log('\n');
  console.log(expected);
  console.log('='.repeat(40));
}
