//스테이스는 오직 리듀서가 관여한다.
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state
}