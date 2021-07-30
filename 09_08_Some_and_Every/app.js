//EVERY Tests whether all elements in the array pass the provided function. It returns a Boolean value

const words = ["dog", 'dig', 'log', 'bag', 'wag'];

//Is every word 3 characters long?
const all3Letters = words.every(word => word.length === 3);
all3Letters;    //true

// Do all words end in 'g'?
const allEndInG = words.every(word => {
  const last = word.length - 1;   //last index
  return word[last] === 'g'
});
allEndInG;       //true



//SOME - similar to every, but returns true if ANY of the array elements pass the test function
//Does at least 1 book start with 'd'?
const someStartWithD = words.some(word => word[0] === 'd');
someStartWithD;           //true

// Do all words start with 'd'?
const allStartWithD = words.every(word => word[0] === 'd');
allStartWithD;        //false


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
//Are all books rated 3.5 or higher?
const allGoodBooks = books.every(book => book.rating > 3.5);
allGoodBooks;      //true


//Do any books have 2 authors?
const any2Authors = books.some(book => book.authors.length === 2);
any2Authors;       //true