import React, { Component } from 'react';
import BookList from '../containers/book-list';
//app이 하는 일은 오로지  booklist, bookdetail을 렌더링
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
      
    );
  }
}
