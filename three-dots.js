const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const allAges = ages.concat(ages2);
console.log(allAges);
const ages3 = [22, 25, 29];
const allAges2 = ages.concat(ages2).concat ([50]).concat(ages3)
console.log(allAges2);
const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges3);
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib)
console.log(maximum);
const takaPoisa = [650, 450, 250];
//const maximum2 = Math.max(takaPoisa);
//console.log(maximum2); outpot: NaN

const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);