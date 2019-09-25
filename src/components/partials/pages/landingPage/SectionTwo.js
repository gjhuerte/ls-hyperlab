import React, { Component } from 'react';

class SectionTwo extends Component {
    state = {  }
    render() { 
        return (
            <section
                className="flex w-full mt-10"
                id="section-2">
                <div
                    className="sm:block hidden flex-1 visible"
                    id="section-2__banner-image">
                    <img
                        alt="Meeting"
                        src="https://images.unsplash.com/photo-1531270279937-aca3e712ad01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        className="object-cover h-full w-full" />
                </div>
                <div
                    className="flex-1 ml-10 mr-10 sm:ml-20 sm:mr-20"
                    id="section-2__text">
                    <h4 className="text-teal-700 font-bold">Brand Authenticity</h4>
                    <h1 className="font-semibold text-4xl">
                        Branded Stories and Reach
                    </h1>

                    <p className="text-sm text-gray-600 mt-5 mb-10">
                        If you've developed an area of expertise, and are building a following, then Joirnal could be a great way to connect with the brands that operate in your chosen field. Journal is connecting with brands.
                    </p>

                    <hr className="border-1" />

                    <p className="text-gray-600 text-xs italic my-5">
                        "Born in 1964, a nostalgy collector. Interest in exporing city, cats, toy-train, hand craft, aand taking pic with studio light."
                    </p>

                    <div className="flex flex-row justify-start">
                        <div className="flex-initial">
                            <img
                                alt="Profile"
                                src="https://images.pexels.com/photos/34667/person-human-male-man.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                className="object-cover rounded-full h-10 w-10" />
                        </div>

                        <div className="flex-initial ml-2">
                            <h4 className="text-sm font-bold text-teal-900">Michael Petzwal</h4>
                            <p className="text-xs text-gray-600">Marketing Director, Maserati</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default SectionTwo;