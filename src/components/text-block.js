import React from 'react'

export class TextBlock extends React.Component {


    constructor (props){
        super(props)
        const pos = this.props.pos || 0;
        this.state = { pos: (10 - pos)};        
        this.style={ 
            lineHeight: '1.25rem', marginBottom: this.state.pos * 1.25 + 'rem',
            width: '100%'
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="ui list" style={this.style}>
                    <button className="ui button icon">
                    <i className="icon angle up"></i>
                    </button>
                    {this.props.data.map((i,k) => (
                        <div key={i} className={'item'}
                            style={{fontWeight: k===(this.props.data.length - 1 - this.props.pos) ? '900' : '200'}}
                        >{i}</div>
                    ))}
                                        <button className="ui button icon">
                    <i className="icon angle down"></i>
                    </button>

                </div>
            </React.Fragment>
        );
    }
}