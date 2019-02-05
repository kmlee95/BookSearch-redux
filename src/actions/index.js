//액션 생성자가 액션을 호출함

export function selectBook(book){
    //선택한 책은 액션 생성자고, 액션반환이 필요하다.(타입 프로퍼티 오브젝트)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}