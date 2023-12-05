import React from 'react';

import DropdownList from '../components/DropdownList';
import DropdownListItem from '../components/DropdownListItem';
import TaskList from '../components/TaskList';

import jsonData from '../dummydata.json';
import Task from '../components/Task';

import './app.css';

const data_items = jsonData.items;

const folders = [
  {id: 0, title: 'Critic', color: 'red'},
  {id: 1, title: 'Today', color: 'green'},
  {id: 2, title: 'Incomplete', color: 'yellow'},
  {id: 3, title: 'Planned', color: 'purple'}
];

const tags = [
  {id: 0, title: "work"},
  {id: 1, title: "urgent"},
  {id: 2, title: "meeting"},
  {id: 3, title: "finance"},
  {id: 4, title: "development"},
  {id: 5, title: "presentation"},
  {id: 6, title: "team"},
  {id: 7, title: "update"},
  {id: 8, title: "training"},
  {id: 9, title: "code"},
  {id: 10, title: "demo"},
  {id: 11, title: "assignment"},
  {id: 12, title: "testing"},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <DropdownList title="folders">
          {folders.map((folder) => <DropdownListItem key={folder.id} content={folder.title} color={folder.color} />)}
        </DropdownList>
        <DropdownList title="tags">
          {tags.map((tag) => <DropdownListItem key={tag.id} content={tag.title} color={tag.color} />)}
        </DropdownList>
        <TaskList title="test">
          {data_items.map((content) => (
            <Task items={content} type="" />
          ))}
        </TaskList>
        <div className="add">+</div>
      </div>
    );
  }
}

export default App;
