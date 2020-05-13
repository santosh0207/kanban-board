import { CONSTANTS } from './index' ;

export const addList = (title)=>{
    return {
        type: CONSTANTS.ADD_LIST,
        payload:title
    }
}

export const addCard = (listID,text)=>{
    return {
        type: CONSTANTS.ADD_CARD,
        payload:{text , listID}
    }
} 

export const sort = (
    droppableStart,
    droppableEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) =>{
    return{
        type:"DRAG_HAPPENED",
        payload:{
            droppableStart,
            droppableEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}