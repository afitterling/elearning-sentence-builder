import React from 'react'

export class TextBlock extends React.Component {

    render(){
        return (
            <div className="ui list">
                {this.props.data.map(i => (<div key={i} className="item">{i}</div>))}
            </div>
        );
    }
}