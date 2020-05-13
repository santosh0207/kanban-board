import React, { Component } from 'react'
import classes from './header.module.css';
//import MusicToggle from '../MusicToggle/MusicToggle';
//import BGSound from '../../assets/audio/BathingTimeBG.mp3';
//import Logo from '../Logo/Logo';
//import UndoButton from '../UndoButton/UndoButton';
//import Timer from '../Timer/Timer'

export default class Header extends Component {
    

    onMusicHandler =()=>{
        this.setState({isMusic:!this.state.isMusic});
    }
    
    render(){
        //console.log(this.state.dateAndTime,"time in Header")
        return (
            <div className={classes.Header}>
                {/* <Timer currentDate ={this.state.dateAndTime}></Timer> */}
                <p style={{}}>Create Your Kanban Board!!!</p>
            </div>
        )
    }
}
