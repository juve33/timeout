import React from 'react';

import FolderList from '../components/FolderList';
import Folder from '../components/Folder';
import TagList from '../components/TagList';
import Tag from '../components/Tag';

import './app.css';

const folders = [
  {id: 0, title: 'Überfällig', color: 'red'},
  {id: 1, title: 'Heute', color: 'orange'},
  {id: 2, title: 'Morgen', color: 'yellow'},
  {id: 3, title: 'Bald', color: 'blue'},
  {id: 4, title: 'Erledigt', color: 'green'},
  {id: 5, title: 'noch ein Ordner', color: 'purple'}
];

const tags = [
  {id: 0, title: "Haushalt"},
  {id: 1, title: "Freunde"},
  {id: 2, title: "Sport"},
  {id: 3, title: "Studium"},
  {id: 4, title: "Sonstiges"},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <FolderList>
          {folders.map((folder) => <Folder key={folder.id} content={folder.title} color={folder.color} />)}
        </FolderList>
        <TagList>
          {tags.map((tag) => <Tag key={tag.id} content={tag.title} color={tag.color} />)}
        </TagList>
        <div className="add">+</div>
      </div>
    );
  }
}

export default App;
