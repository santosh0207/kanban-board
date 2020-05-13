import React from 'react';
import TrelloCards from './TrelloCards'
import  TrelloActionButton from './TrelloActionButton';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #dfe30c;
    border-radius: 3px;
    width:200px;
    padding: 10px 5px;
    margin: 10px;
    height:100%;
`;



export default function TrelloList({title, cards, listId}) {
    return (
        <Droppable droppableId={String(listId)}>

            {//we will do this Otherwise it gives error...for droppable
                (provided)=>(
                    <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
                        {title}  
                        {
                            cards.map((card, index)=>{
                                return  <TrelloCards index = {index} text={card.text} key={card.id} id={card.id}/>         
                            })
                        }
                        <TrelloActionButton listId={listId}/>
                        {provided.placeholder}
                    </ListContainer>
                )
            }
           
       </Droppable>
    )
}
