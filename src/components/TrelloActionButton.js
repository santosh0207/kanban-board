import React, { Component } from 'react'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import { Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class TrelloActionButton extends Component {
    
    state = {
         formOpen :false,
         text:''
    }

    handleAddList =() =>{
        const { dispatch} = this.props;
        const { text } = this.state;
        if(text){
            this.setState({text:''});
            dispatch(addList(text))
        }
        return
    }
    handleAddCard =() =>{
        const { dispatch, listId } = this.props;
        const { text } = this.state;
        if(text){
            this.setState({text:''});
            dispatch(addCard(listId,text));
        }
        return
    }

    renderAddButton = ()=>{
        const {list} = this.props; // to decide wheather it is list button or card button
        const buttonText = list ? "Add List.":"Add Card.";
        const buttonTextOpacity = list ? 0.5 : 1;
        const buttonTextColor = list ? 'inherit' : 'white';
        const buttonTextBackground = list ?"rgba(0,0,0,.15)":"rgba(0,0,0,.15)";
        return(
            <div 
                onClick={this.openForm}
                style = {{
                    opacity:buttonTextOpacity,
                    backgroundColor : buttonTextBackground,
                    color:buttonTextColor,
                    ...styles.Buttoncontainer,
                    alignItems: 'center',
                    height:"100%",
                    marginTop:"10px"
                }}
            >
                <AddCircleSharpIcon />
                <div>
                    {buttonText}
                </div>
                
            </div>
        )
    }

    openForm = ()=>{
        this.setState({formOpen:true});
    }
    closeForm = (e)=>{
        this.setState({formOpen:false});
    }
    onChangeHandler =(e)=>{
        this.setState({text:e.target.value});
    }
    renderForm =()=>{
        const { list } = this.props;
        const placeHolder = !list ?"Enter List title..." :"Enter Card title for this Card...";
        const ButtonTitle = !list ?"Add List" :"Add Card";
        return <div>
            <Card style={{
                overflow:"hidden",
                minHeight:"80px",
                minWidth:"152px",
                padding :"6px 8px 2px",
                marginTop: "5px",
            }}>
                <TextareaAutosize 
                     placeholder={placeHolder} 
                     autoFocus onBlur ={this.closeForm}
                     value={this.state.text}
                     onChange={this.onChangeHandler}
                     style={{
                        resize:"none",
                        width:"100%",
                        border:"none",
                        outline:"none" 
                     }}
                />
            </Card>
            <div style={{...styles.Buttoncontainer,alignItems:"center", justifyContent:"space-between"}}>
                    <Button onMouseDown ={list?this.handleAddList:this.handleAddCard} 
                            varient="contained" 
                            style={{color:"white",backgroundColor:"#5aac44"}}
                    >
                        {ButtonTitle}
                    </Button>
                    <CancelSharpIcon />
            </div>
                  
        </div>
    }


    render() {
        return this.state.formOpen ? this.renderForm() :this.renderAddButton();
    }
}

const styles ={
    Buttoncontainer:{
        display:"flex",
        flexDirection: 'row',
        padding: "5px",
        cursor:"pointer",
        borderRadius: 3,
    }
}

export default connect()(TrelloActionButton);