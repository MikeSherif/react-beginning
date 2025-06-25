import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('текст в input');
    const [posts, setPosts] = useState([
        {id: 1, title: 'React', body: 'Description'},
        {id: 2, title: 'Props', body: 'I use it'},
        {id: 3, title: 'Hooks', body: 'I discover it'},
        {id: 4, title: 'Titties', body: 'I like it'}
    ]);

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Test props', body: 'Description'},
        {id: 2, title: 'Test', body: 'Description'},
        {id: 3, title: 'Test', body: 'Description'},
        {id: 4, title: 'Test', body: 'Description'}
    ]);

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostList posts={posts} title="Список постов №1"/>
            <PostList posts={posts2} title="Список постов №2"/>
        </div>
    );
}

export default App;
