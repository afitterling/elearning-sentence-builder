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

const data2 = [
  'Schwimmbad',
  'U-Bahn'
];

const styleCol = {
  height: '50rem',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  lineHeight: '1.25rem'
};

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column  style={styleCol}>
            <TextBlock pos={0} data={data}></TextBlock>
          </Grid.Column>
          <Grid.Column style={styleCol}>
            <TextBlock pos={-1} data={data2}></TextBlock>
          </Grid.Column>
          <Grid.Column  style={styleCol}>
            <TextBlock pos={0} data={data}></TextBlock>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div >
  );
}

export default App;
