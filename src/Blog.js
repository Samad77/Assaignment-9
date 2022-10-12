import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-lg mb-5 mt-5'>
                <h1>1. What is purpose of react Router?</h1>
                <h1>Ans : React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h1>
            </div>

            <div className='mb-5'>
            <h1>2. How doe's context api work?</h1>
            <h1>Ans : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h1>
            </div>

            <div>
                <h1>3. What is use ref in react?</h1>
                <h1>Ans : Refs provide a way to access DOM nodes or React elements created in the render method. In the typical React dataflow, props are the only way that parent components interact with their children.</h1>
            </div>
        </div>
    );
};

export default Blog;