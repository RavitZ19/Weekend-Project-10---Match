import React from 'react';
import ImagesBank from './components/ImagesBank';
import Main from './components/Main';
import Button from './components/Button';
import './App.css';
import { render } from '@testing-library/react';


class Header extends React.Component {
  
  costructor() {
    super();
    this.state =  {
      count:0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1;
    })
  }

  render() {
    let { count } = this.state;
    <div>
    <h2> count: { count }</h2> 
    <button title = {MdOutlineThumbUpOffAlt} task = { () => this.incrementCount() } />
    </div>
  }
}

export default App;
