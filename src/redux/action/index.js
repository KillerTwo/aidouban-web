/**
 * Action 类型
 * 
 */
export const type = {
    BOOK_DETAIL: 'BOOK_DETAIL'
}

export function switchMenu(menuName){
//console.log('action', menuName);
    return {
        type: type.BOOK_DETAIL,
        menuName
    }
}