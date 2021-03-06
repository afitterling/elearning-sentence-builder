import React from 'react'

export class TextBlock extends React.Component {


    style={ 
        lineHeight: '1.25rem', paddingBottom: (0) * 1.25 + 'rem',
        width: '100%'
    }    

    componentDidMount(){
    }

    render(){
        return (
            <React.Fragment>
                <div className="ui list" style={this.style}>
                    <button className="ui button icon" onClick={this.props.onUp}>
                    <i className="icon angle up"></i>
                    </button>
                    {this.props.data.map((i,k) => (
                        <div key={i} className={'item'}
                            style={{fontWeight: k===(this.props.data.length - 1 - this.props.pos) ? '900' : '200'}}
                        >{i}
                        </div>
                    ))}
                    <button className="ui button icon" onClick={this.props.onDown}>
                        <i className="icon angle down"></i>
                    </button>

                </div>
            </React.Fragment>
        );
    }
}