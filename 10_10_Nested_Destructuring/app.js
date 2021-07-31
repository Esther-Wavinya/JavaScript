const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

//not structured
const [,silverMedal] = results;
const {country} = silverMedal;


// with NESTED DESTRUCTURING
const [{
  first: goldWinner
}, {
  country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"