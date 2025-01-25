import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
        { id: 2, title: "الحاوي في الطب", author: "أبو بكر الرازي", isbn: "893847239479" },
        { id: 3, title: "تاريخ الطبري", author: "الطبري", isbn: "5984201837" },
        { id: 4, title: "البيان والتبيين", author: "الجاحظ", isbn: "2039485738" },
      ],
    };
  }

  render() {
    return (
      <main style={{ display: 'flex', margin: '20px', justifyContent: 'center' }}>
        {this.state.books.map((book) => (
          <div className="card" key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
          </div>
        ))}
      </main>
    );
  }
  
}

export default App;

