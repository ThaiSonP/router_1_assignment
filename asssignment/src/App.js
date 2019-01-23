import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import {RandomBreed} from './RandomBreed'
import {RandomImage} from './RandomImg.js'
import {RandomImageNum} from './RandomImgNum.js'


class App extends Component {
  constructor(){
    super()
      this.state={
        breeds:[],
        image:"",
        chosen:'',
        num:1
      }
      this.makeOptions =this.makeOptions.bind(this)
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  makeBreeds=()=>{
    axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response=>{
      this.setState({
        breeds:Object.keys(response.data.message)
      })
    })
  }

  resetState=()=>{
    this.setState({
      image:""
    })
  }

  callImage=()=>{
    if(!this.state.chosen){
      axios
      .get(`https://dog.ceo/api/breeds/image/random/${this.state.num}`)
      .then(response=>{
        this.setState({
          image:response.data.message
        })
      })
    }
    else{
      axios
      .get(`https://dog.ceo/api/breed/${this.state.chosen}/images/random`)
      .then(response=>{
        this.setState({
          image:response.data.message
        })
      })
    }
  }

  makeOptions=()=>{
    return this.state.breeds.map((el,i)=>{return <option key={i} value={el}>
      {el}
    </option>})
  }

  componentDidMount(){
    this.makeBreeds()
  }

  makeImage = ()=>{
    return this.state.image.map((thing)=>{ return <img src = {thing} />})
  }

  render() {
    const {breeds,image,choosen}=this.state
    console.log(this.state)
    return (
      <>
      <div className = 'app'>
        <div>
        <NavBar/>
          <Route exact path = '/' />
          <Route exact path ='/random'
            render={(props)=>
              <RandomImage{...props}
                callImage = {this.callImage}
                image = {this.state.image} />}
            />

          <Route path = '/randomBreed'
            render={(props)=>
              <RandomBreed{...props}
                resetState={this.resetState}
                makeOptions={this.makeOptions}
                callImage = {this.callImage}
                handleChange={this.handleChange}
                image = {this.state.image}
                breeds={this.state.breeds}/>}
            />
          <Route path = '/random/:num' component ={RandomImageNum}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
