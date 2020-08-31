import React from 'react'

export class TextBlock extends React.Component {


    constructor (props){
        super(props)
        const pos = this.props.pos || 0;
        this.state = { pos: (10 - pos)};        
        this.style={ lineHeight: '1.25rem', paddingBottom: this.state.pos * 1.25 + 'rem'}
    }

    render(){
        return (
            <React.Fragment>
                <div className="ui list" style={this.style}>
                    {this.props.data.map(i => (<div key={i} className="item">{i}</div>))}
                </div>
            </React.Fragment>
        );
    }
}