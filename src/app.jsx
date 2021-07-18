import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [ // habits data
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
};

// 로직 작성
handleIncrement = habit => { 
    //console.log('handleIncrement $(habit.name)');
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count +1 }; // 새로운 habit을 return한다 안의 data는 같고 겉의 obj가 바뀌는거 
      }
      return item; //아이템아이디랑 해빗아이디랑 같지 안하면 기존값 그대로 불러옴
    })
   // this.setState({ habits = habits }); 키 = 밸류 근데 이렇게 일하면 그냥 하나로써수있음
   this.setState({ habits });
};

handleDecrement = habit => {
    //console.log('handleDecrement $(habit.name)');
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count -1;
        return { ...habit, count: count < 0 ? 0 : count}; // 새로운 habit을 return한다 안의 data는 같고 겉의 obj가 바뀌는거 
      }
      return item; //아이템아이디랑 해빗아이디랑 같지 안하면 기존값 그대로 불러옴
    })
   this.setState({ habits });
};

handleDelete = habit => {
  //console.log('handleDelete $(habit.name)');
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({ habits });
};

handleAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name, count:0}];
  this.setState({ habits });
};

handleReset = () => {
  
  const habits = this.state.habits.map(habit => {
    if (habit.count !== 0) {
      return { ...habit, count: 0};
    }
    return habit;
  
  });
  this.setState({ habits });
};

  render() {
    console.log('app');
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

