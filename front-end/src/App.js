import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { ThemeContext, themes } from './theme-context';
import ToggleSwitch from './components/toggle-switch/toggle-switch';
import './App.css';

const App = () => { 

const [lightMode, setLightMode] = useState(true);
const [posts, setPosts] = useState([]);
const [searchField, setSearchField] = useState('');
const [filteredPosts, setFilteredPosts] = useState(posts);


useEffect(() => {
  const fetchPosts = async() => {
    const posts = await axios({
      url: 'http://localhost:3001/posts',
      method: "GET"
    })
    .then(res => res.data)
    .catch(err => console.log(err));
    setPosts(posts);
  };
  fetchPosts();
}, []);

useEffect(() => {
    const newFilteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchField)
  });
    setFilteredPosts(newFilteredPosts)
}, [posts, searchField]);


const onSearchChange = e => {
  const searchFieldString = e.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString)
}

        return (
          <div className="App">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
                <ToggleSwitch label="dark mode"
                  toggleLight={() => {
                    setLightMode(!lightMode);
                    changeTheme(lightMode ? themes.dark : themes.light);
                  }}
                  checked={themes.dark}
                />
              )}
            </ThemeContext.Consumer>
              <h1 className='app-title'>The Blog Archive</h1>    
              <SearchBox 
                onChangeHandler={onSearchChange} 
                placeholder='search posts' 
                className='search-box-posts'
              />
            <CardList posts={filteredPosts} />
          </div>
      );
    }

export default App;
