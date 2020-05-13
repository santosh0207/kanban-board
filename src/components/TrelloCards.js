import React from 'react';
import {Card,Typography,CardContent} from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
    padding: 2px;
    margin-top:10px
`;

export default function TrelloCards({text, id, index}) {
    //console.log(text,"inside trello cards")
    return (
        <Draggable draggableId={String(id)} index={index}>
           
            {
                (provided)=>(
                    <CardContainer  
                        ref ={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {text}
                                    </Typography>
                                </CardContent>
                            </Card>     
                    </CardContainer>
                )
            }           
           
       </Draggable>
    )
}

const style ={
    component:{
        backgroundColor: 'white',
        padding: "10px",
        marginTop:"5px"
    }
}