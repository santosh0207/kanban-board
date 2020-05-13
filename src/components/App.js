import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from "./TrelloActionButton";
import {DragDropContext} from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';
import Header from './Header/header';
import Footer from './Footer/Footer'

const ListContainer = styled.div`
  
  display:flex ;
  flex-direction : row;
  margin:10px;
    
`

class App extends Component {
  
  onDragEnd=(result)=>{
    //Todo reordeing Logic

    const {destination, source, draggableId} = result;
    if(!destination){
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }

  render(){

    const {lists} = this.props;

    return (
      <DragDropContext onDragEnd ={this.onDragEnd}>
            <Header />
            <ListContainer >
                {lists.map(list=>{
                      return <TrelloList listId ={list.id} key={list.id} title={list.title} cards={list.cards}/>
                })}
                <TrelloActionButton list/>
            </ListContainer>
            <Footer />  
      </DragDropContext>
    );
  }
 
}

const mapStateToProps = (state) =>({  
    lists: state.lists
})

export default connect(mapStateToProps)(App);
