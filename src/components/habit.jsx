import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() { // component가 ui상에 등록이 되고나서 호출
        console.log('habit :' +this.props.habit.name+' mounted');
    }

    componentWillUnmount() { // component가 ui상에서 지우기전에 호출
        console.log('habit :' +this.props.habit.name+' will unmount');
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
// 민지님팟팅
    render() {
        
        const { name, count} = this.props.habit;
        console.log('habit:'+this.props.habit.name); //김태훈
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;