const data = {
  likes: {
    books: ['Ulysses', 'Moby Dick']
  },
  friends: [{
    id: 'YazL',
    likes: {
      books: ['Ulysses', 'War and Peace'],
    },
  },
  {
    id: 'queen9',
    likes: {
      books: ['The Great Gatsby', 'Ulysses'],
    },
  },
  {
    id: 'joyJoy',
    likes: {
      books: ['Don Quixote', 'The Great Gatsby'],
    },
  },
  {
    id: '0sin5k1',
    likes: {
      books: ['The Great Gatsby', 'War and Peace'],
    },
  },
  {
    id: 'mariP',
    likes: {
      books: ['Don Quixote', 'Hamlet', 'Ulysses'],
    },
  }]
}

const getLikes = ({ userData, minimalScore }) => {
  const userBooks = userData?.likes?.books || [];
  const { friends = [] } = userData;
  let allFriendsBooks = [];

  friends.forEach(f => {
    const b = f?.likes?.books || [];
    const filteredBooks = b.filter(item => !userBooks.includes(item));
    allFriendsBooks = [...allFriendsBooks, ...filteredBooks];
  });
  
  allFriendsBooks = [...new Set(allFriendsBooks)];
  
  if (minimalScore > 0) {
    const qtdMustLike = minimalScore * friends.length;

    let books = allFriendsBooks.map(book => {
      let likes = 0

      friends.forEach(friend => {
        const books =  friend?.likes?.books || [];
        if (books.includes(book)) {
          likes += 1
        }
      })

      return {
        book,
        likes
      }
    }).filter(item => item.likes >= qtdMustLike);

    const result = books.sort(function (a, b) {
      return b.likes - a.likes;
    }).sort((a, b) => {
      if (a.likes === b.likes) {
        return a.book.localeCompare(b.book, 'en', { sensitivity: 'base' })
      }
    })

    return result
  }

  return allFriendsBooks
}

const res = getLikes({ userData: data, minimalScore: 0.3})
console.log(res.map(({ book }) => book));


