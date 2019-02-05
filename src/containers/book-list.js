import React, {Component} from 'react';
import { connect } from 'react-redux'; // 리액트와 리덕스 연결하기위한 라이브러리
//CONNECT 함수를 이용

//컨테이너는 리덕스에 의해 만들어지는 스테이트를 직접 접근하는 컴포넌트

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){ // 함수기억
    //booklist안의 props형태로 보여지는 곳
    return {
        books: state.books // 객체배열, 위의 this.props를 가져옴
    };
}

export default connect(mapStateToProps)(BookList);