import React,{ Component } from 'react'

class TaskForm extends Component {
    constructor(props) {
            super(props)
            this.state = { label: ''}
    }
    render() {
        return (
            <div>
                <input type="text" 
                placeholder="Nouvelle tâche"
                value={this.state.label}
                onChange={event=>{
                    this.setState
                    ({
                        label: event.target.value
                    })
                }}>
                </input>
                <button onClick={() => {
                    this.props.addTask(this.state.label)
                    this.setState({ label:'' })
                }
                }
                >
                    Ajouter</button>
            </div>
        )
    }
}