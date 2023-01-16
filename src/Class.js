import React from "react";


class Class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {change: false}
    }
    
    render() {
      
        return (
            <div>
                <div>
                    <h1>Class component</h1>
                    <button className="app-btn" onClick={() => {this.setState({change: !this.state.change})}}>class Component</button>
                    {this.state.change && <h2>hello, i am class component</h2>}
                </div>             
            </div>
        )
    }
}

export default Class