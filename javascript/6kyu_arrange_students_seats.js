// So Easy: Arrange students' seats
// Task

// You are a teacher, and you decide to arrange the seats of the students according to their height and sex. This is the students' list:

// list=[
// {name:"John",height:170,sex:"M"},
// {name:"Tom",height:175,sex:"M"},
// {name:"Jack",height:180,sex:"M"},
// {name:"Jone",height:175,sex:"F"},
// {name:"Anne",height:175,sex:"F"},
// {name:"Alice",height:178,sex:"F"}
// ]

// "M" is male, "F" is female.

// In the classroom, each desk can sit two students:

// {desk:1,seat1:"???",seat2:"???"}

// The number of desk is start from 1. You need to arrange seats in accordance with the height from the low to the high, and each desk is arranged with a boy and a girl(seat1 sit a boy,seat2 sit a girl). If two boys or two girls are in the same height, they are sorted by their names.

// The example above can get the following results:

//  result=[
//  {desk:1,seat1:"John",seat2:"Anne"},
//  {desk:2,seat1:"Tom",seat2:"Jone"},
//  {desk:3,seat1:"Jack",seat2:"Alice"}
//  ]

// You can assume that the number of boys and girls is always the same.

// sort by height AND name

function arrangeSeats(arr) {
  arr = arr.slice();

  const boys = [];
  const girls = [];

  arr.sort((a, b) => a.height - b.height || a.name.localeCompare(b.name));

  arr.forEach(student => (student.sex === 'F' ? girls.push(student) : boys.push(student)));

  return Array.from({ length: boys.length }, (_, i) => {
    return { desk: i + 1, seat1: boys[i].name, seat2: girls[i].name };
  });
}

let list = [
  { name: 'John', height: 170, sex: 'M' },
  { name: 'Tom', height: 175, sex: 'M' },
  { name: 'Jack', height: 180, sex: 'M' },
  { name: 'Jone', height: 175, sex: 'F' },
  { name: 'Anne', height: 175, sex: 'F' },
  { name: 'Alice', height: 178, sex: 'F' },
];

let result = [
  { desk: 1, seat1: 'John', seat2: 'Anne' },
  { desk: 2, seat1: 'Tom', seat2: 'Jone' },
  { desk: 3, seat1: 'Jack', seat2: 'Alice' },
];

console.log(arrangeSeats(list), result);

list = [
  { name: 'Ewjfqt', height: 203, sex: 'M' },
  { name: 'Jtokc', height: 181, sex: 'F' },
  { name: 'Gxleidlg', height: 198, sex: 'M' },
  { name: 'Lmoncosoz', height: 172, sex: 'F' },
  { name: 'Bplom', height: 204, sex: 'M' },
  { name: 'Nvfzryuna', height: 212, sex: 'F' },
  { name: 'Gtvzo', height: 180, sex: 'M' },
  { name: 'Etcixlpeo', height: 173, sex: 'F' },
  { name: 'Muvt', height: 172, sex: 'M' },
  { name: 'Iweryh', height: 179, sex: 'F' },
  { name: 'Jmxbofz', height: 185, sex: 'M' },
  { name: 'Lyovwr', height: 166, sex: 'F' },
  { name: 'Ysfeuk', height: 184, sex: 'M' },
  { name: 'Asyy', height: 219, sex: 'F' },
  { name: 'Yattbi', height: 184, sex: 'M' },
  { name: 'Xhisn', height: 211, sex: 'F' },
  { name: 'Tymy', height: 198, sex: 'M' },
  { name: 'Asxvjd', height: 206, sex: 'F' },
  { name: 'Pnjtigpcg', height: 212, sex: 'M' },
  { name: 'Addb', height: 205, sex: 'F' },
  { name: 'Zqjp', height: 190, sex: 'M' },
  { name: 'Qtknd', height: 177, sex: 'F' },
  { name: 'Bhudktf', height: 180, sex: 'M' },
  { name: 'Mprco', height: 176, sex: 'F' },
  { name: 'Upainnkes', height: 200, sex: 'M' },
  { name: 'Iwlvy', height: 167, sex: 'F' },
  { name: 'Yupfslcy', height: 209, sex: 'M' },
  { name: 'Whkdj', height: 166, sex: 'F' },
  { name: 'Wmsqyjoi', height: 196, sex: 'M' },
  { name: 'Fvmqmdsm', height: 216, sex: 'F' },
];

result = [
  { desk: 1, seat1: 'Muvt', seat2: 'Lyovwr' },
  { desk: 2, seat1: 'Bhudktf', seat2: 'Whkdj' },
  { desk: 3, seat1: 'Gtvzo', seat2: 'Iwlvy' },
  { desk: 4, seat1: 'Yattbi', seat2: 'Lmoncosoz' },
  { desk: 5, seat1: 'Ysfeuk', seat2: 'Etcixlpeo' },
  { desk: 6, seat1: 'Jmxbofz', seat2: 'Mprco' },
  { desk: 7, seat1: 'Zqjp', seat2: 'Qtknd' },
  { desk: 8, seat1: 'Wmsqyjoi', seat2: 'Iweryh' },
  { desk: 9, seat1: 'Gxleidlg', seat2: 'Jtokc' },
  { desk: 10, seat1: 'Tymy', seat2: 'Addb' },
  { desk: 11, seat1: 'Upainnkes', seat2: 'Asxvjd' },
  { desk: 12, seat1: 'Ewjfqt', seat2: 'Xhisn' },
  { desk: 13, seat1: 'Bplom', seat2: 'Nvfzryuna' },
  { desk: 14, seat1: 'Yupfslcy', seat2: 'Fvmqmdsm' },
  { desk: 15, seat1: 'Pnjtigpcg', seat2: 'Asyy' },
];

console.log(arrangeSeats(list), result);
