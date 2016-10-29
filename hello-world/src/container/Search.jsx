import React, {Component} from 'react';
import request from 'superagent';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui';
import PokeList from '../component/PokeList';
const pass = 'http://pokeapi.co/api/v2/pokemon/';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.load();
    this.state = {
      data: []
    }
  }

  load() {
    request.get(pass)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          data: res.body.results
        })
        console.log(this.state)
      }
    })
  }

  render() {
    const ren = this.state.data.map((data, i) => {
      return (
        <PokeList title={data.name} path={i + 1}/>
      )
    })
    return(
      <MuiThemeProvider muiTheme={Mui}>
        <div>
          <AppBar title="Title"/>
          {ren}
        </div>
      </MuiThemeProvider>
    )
  }
}
