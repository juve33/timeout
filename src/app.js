import React from 'react';

import StartPage from './pages/startpage';
import Login from './pages/login';
import Overview from './pages/overview';

import Card from './components/Card';
import TagList from './components/TagList';
import Tag from './components/Tag';

const folders = [
  {title: 'Überfällig', color: 'red'},
  {title: 'Heute', color: 'orange'},
  {title: 'Morgen', color: 'yellow'},
  {title: 'Bald', color: 'blue'},
  {title: 'Erledigt', color: 'green'},
  {title: 'noch ein Ordner', color: 'purple'}
];

const tags = [
  {title: "Haushalt"},
  {title: "Freunde"},
  {title: "Sport"},
  {title: "Studium"},
  {title: "Sonstiges"},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: "startPage"};
  }

  startLogin = () => {
    this.setState({currentPage: "startLogin"});
  }

  login = () => {
    this.setState({currentPage: "overview"});
  }

  render() {
    switch (this.state.currentPage) {
      case "startPage": {
        return (
          <>
            <StartPage>
              <button onClick={this.startLogin}>Einloggen</button>
            </StartPage>
          </>
        );
        break;
      }
      case "startLogin": {
        return (
          <>
          <Login>
            <input onClick={this.login} type="submit" value="Einloggen" />
          </Login>
          </>
        );
        break;
      }
      case "overview": {
        return (
          <>
            <Overview>
              {folders.map((folder) => <Card content={folder.title} color={folder.color} />)}
              <TagList>
                {tags.map((tag) => <Tag content={tag.title} color={tag.color} />)}
              </TagList>
            </Overview>
          </>
        );
        break;
      }
      default: {
        return (
          <>
            <StartPage>
              <button onClick={this.startLogin}>Einloggen</button>
            </StartPage>
          </>
        );
        break;
      }
    }
  }
}

export default App;
