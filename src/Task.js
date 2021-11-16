import React from 'react'
import { Component } from 'react/cjs/react.production.min'
/*v1
const Task = ({ task }) => <span>{task.label}</span>
*/
class Task extends Component {
    render() {
        const { task } = this.props
        return <span>{task.label}</span>
    }
}
export default Task