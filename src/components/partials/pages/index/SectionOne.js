import React, { Component } from 'react';

class SectionOne extends Component {
    state = {  }
    render() { 
        return ( 
            <section
                className="flex flex-row w-full" 
                id="section-1">
                <div
                    className="flex-1 justify-start pt-10 pl-20" 
                    id="section-1__text-section">
                    <h4 className="text-teal-600 text-md font-bold">Why Journal</h4>
                    <h1 className="text-5xl font-extrabold">Visual Storytelling Platform for You</h1>
                    <p className="my-5 text-left text-gray-700">
                        Journal gives content creators like you the ability to integrate licensed rband photography into your stories. It's a new and more transparent way to make brands part of the conversation
                    </p>

                    <button
                        type="button"
                        className="bg-teal-700 text-xs text-white p-3 rounded">
                        Create Your Account
                    </button>
                </div>

                <div
                    className="flex-1" 
                    id="section-1__image-display">
                    <img 
                        className="h-full w-full object-cover"
                        alt="Banner 1"
                        src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2915&q=80" 
                    />
                </div>
            </section>
        );
    }
}
 
export default SectionOne;