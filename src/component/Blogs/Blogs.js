import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='question-container'>
            <div className='question-1'>
                <h4>What is Context API?</h4>
                <p>Answer:  Context API is most popular data passing way to every level. We can easily data pass by props but it’s create problems when react application have many components and passing data top to down level. Context API uses of any type of data passing for each to other components very easily.   React Hooks allow us to manage state data inside functional components; now we don’t need to create class components just to manage state data.</p>
            </div>
            <div className='question-2'>
                <h4>What is Semantic tags?</h4>
                <p>Answer:  Semantic markup is a way of writing and structuring your HTML to describe its content's structural semantics or meaning, not how it visually presents the content. With semantic markup, both users and machines will be able to understand the content structure, the relationship among page elements. Search engine crawlers are the most important part when you consider the SEO of your web page. Semantics are about meaning, and using semantic markup to build your web pages means creating more meaningful web pages that both users and machines can access.</p>
            </div>
        </div>
    );
};

export default Blogs;