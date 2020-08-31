import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import { TextBlock } from './components/text-block'

const data = [
  'Ich fahre',
  'Du fährst',
  'Sie fährt',
  'Sie fahren',
  'Ich habe',
  'Ich brauche'
];

const data2 = [
  'mit der U-Bahn',
  'mit der Straßenbahn',
  'mit dem Auto',
  'mit dem Fahrrad',
  'ein Fahrrad',
  'kein Fahrrad',
  'nur fünf Minuten',
  'eine ganze Stunde zur Schule'
];

const data3 = [
  'zur Schule',
  'zur Arbeit',
  '(-)'
];

const styleCol = {
  height: '100vh',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  lineHeight: '1.25rem'
};

class App extends React.Component {

  constructor() {
    super();
    this.state = { pos1: 0, pos2: 0, pos3: 0 };
  }

  onUpPos1 = () => {
    this.setState({ pos1: this.state.pos1 + 1 })
  }

  onDownPos1 = () => {
    this.setState({ pos1: this.state.pos1 - 1 })
  }

  onUpPos2 = () => {
    this.setState({ pos2: this.state.pos2 + 1 })
  }

  onDownPos2 = () => {
    this.setState({ pos2: this.state.pos2 - 1 })
  }

  onUpPos3 = () => {
    this.setState({ pos3: this.state.pos3 + 1 })
  }

  onDownPos3 = () => {
    this.setState({ pos3: this.state.pos3 - 1 })
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column style={styleCol}>
              <TextBlock pos={this.state.pos1} onUp={this.onUpPos1} onDown={this.onDownPos1} data={data}></TextBlock>
            </Grid.Column>
            <Grid.Column style={styleCol}>
              <TextBlock pos={this.state.pos2} onUp={this.onUpPos2} onDown={this.onDownPos2} data={data2}></TextBlock>
            </Grid.Column>
            <Grid.Column style={styleCol}>
              <TextBlock pos={this.state.pos3} onUp={this.onUpPos3} onDown={this.onDownPos3} data={data3}></TextBlock>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    );
  }

}

export default App;
