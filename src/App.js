import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import { TextBlock } from './components/text-block'

const data = [
  'Das',
  'Der',
  'Die'
];

const styleCol = {height: '100vh'};

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column  style={styleCol}>
            <TextBlock data={data}></TextBlock>
          </Grid.Column>
          <Grid.Column  style={styleCol}>
            <TextBlock data={data}></TextBlock>
          </Grid.Column>
          <Grid.Column  style={styleCol}>
            <TextBlock data={data}></TextBlock>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div >
  );
}

export default App;
