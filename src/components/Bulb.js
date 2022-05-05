import React, { Component } from 'react'

export default class Bulb extends Component {
    constructor(props){
        super(props)
        this.state={
            bulbStatus:false
        }
    }
    turnBulb=()=>{this.state.bulbStatus?this.setState({bulbStatus:false }):this.setState({bulbStatus:true}) }
  render() {
      let off="https://www.w3schools.com/js/pic_bulboff.gif"
      let on="https://www.w3schools.com/js/pic_bulbon.gif"
    return (
        <>
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <img src={this.state.bulbStatus?on:off} alt="" />
             <br/>
             <button onClick={this.turnBulb}>{this.state.bulbStatus?"off":"on"} </button>
        </>
    )
  }
}
