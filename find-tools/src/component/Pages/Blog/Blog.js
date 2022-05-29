import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5'>Blog</h1>
            <div className="answer my-10">
                <h1 className='text-3xl text-center my-10'>How will you improve the performance of a React Application?</h1>
                <p>Before developing a React app, we need to understand how React updates its UI and how to measure app performance. This makes it easy to solve any React performance issues.
                    Let's start by reviewing how the React UI updates. When we create a given component, React creates a visual DOM of its feature tree in the component. Now, whenever a component status changes, React re-creates the visual DOM tree and compares the result with the previous offer.
                    It then only updates the feature that has changed in the actual DOM. This process is called separation.</p>
            </div>
            <div className="answer my-10">
                <h1 className='text-3xl text-center my-10'>What are the different ways to manage a state in a React application?</h1>
                <p>There are 4 types of state you need to properly manage in your React application.
                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state
                    we can manage state using this 4 state. A local region is probably the easiest country to manage in React, considering that there are so many tools built into the React Contextual Library.
                    UseState is the first tool you should have to manage the status of your sections.
                    It can take acceptance of any valid data value, including old and item values. Additionally, its set function can be transferred to other components as a callback function (without the need for a configuration such as callback).
                </p>
            </div>
            <div className="answer my-10">
                <h1 className='text-3xl text-center my-10'>How does prototypical inheritance work?</h1>
                <p>JavaScript is a prototype-based, object-based programming language. Following the ES6 updates, JavaScript approved a "prototypal asset", meaning that objects and methods could be shared, expanded, and copied.
                    Sharing between items simplifies structural asset (data fields), behavior (functions / methods), and status (data values).
                    JavaScript is the most common in prototype languages, and its capabilities are quite different. Used properly, a prototypical asset in JavaScript is a powerful tool that can save hours writing code.</p>
            </div>
            <div className="answer my-10">
                <h1 className='text-3xl text-center my-10'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>In this problem we can solve this by using creating a new api or we can use filter or find. we can create a new api by sending parameter parameter. Backend get parameter name and it will find all the product which will matched with the name then it will send to the api and front end render with this </p>
            </div>
            <div className="answer my-10">
                <h1 className='text-3xl text-center my-10'>What is a unit test? Why should write unit tests?</h1>
                <p>Unit testing is an essential tool in the toolbox of any dedicated software developer. However, sometimes it can be very difficult to write a good test unit for a particular piece of code. Having difficulty checking their own or someone else's code, developers often assume
                    that their difficulty stems from a lack of specific basic test information or secret unit testing techniques.</p>
            </div>
        </div>
    );
};

export default Blog;