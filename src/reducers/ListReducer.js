import {CONSTANTS} from '../actions'

let listID = 0;
let cardID = 0;

// const initialState = [
//     {
//         title:'Last Episode',
//         id: `list-${0}`,
//         cards:[
//             {
//                 id:`card-${0}`,
//                 text:"Text for card one."
//             },
//             {
//                 id:`card-${1}`,
//                 text:"Add some text  here so yo can remember."
//             }
//         ]
//     },
//     {
//         title:'New Episode',
//         id: `list-${1}`,
//         cards:[
//             {
//                 id:`card-${2}`,
//                 text:"New text for card new episode"
//             },
//             {
//                 id:`card-${3}`,
//                 text:"There are so any things to do. why dont you start fro beginning."
//             },
//             {
//                 id:`card-${4}`,
//                 text:"card text Three"
//             }
//         ]
//     }
// ]
const initialState=[];
const listReducer = (state = initialState, action)=>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards:[],
                id:`list-${listID}`
            }
            listID++;
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
        {
            const newCard = {
                text:action.payload.text,
                id:`card-${cardID}`
            }
            cardID++;

           const newState = state.map((list)=>{

            if(list.id === action.payload.listID){
                   return { 
                            ...list,
                            cards:[...list.cards,newCard]
                        }
                }else{
                    return list;
                } 
            })

            return newState;
        }
        case CONSTANTS.DRAG_HAPPEND:
        {
            const { droppableStart,droppableEnd,droppableIndexStart,droppableIndexEnd,draggableId } = action.payload;
            const newState = [...state];
            //In the same list
            console.log(droppableStart,droppableEnd,droppableIndexStart,droppableIndexEnd)
            if(droppableStart === droppableEnd){
                const list = state.find((list)=>{
                    if(droppableStart===list.id)
                        return list;
                })
                console.log("new List ", list)
                const card = list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd, 0,...card)
            }

            //In some other List
            if(droppableStart !== droppableEnd){
                //current List where dragg happend
                const list = state.find(list=>droppableStart===list.id);
                //current card on which dragg happend
                const card = list.cards.splice(droppableIndexStart,1); 
                // list on which drag ended
                const endlist = state.find(list=>droppableEnd===list.id);

                endlist.cards.splice(droppableIndexEnd,0,...card);

            }
            return newState;
        }
        default:
            return state;
    }
}

export default listReducer;