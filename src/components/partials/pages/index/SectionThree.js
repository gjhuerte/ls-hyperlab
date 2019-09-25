import React, { Component } from 'react';

class SectionThree extends Component {
    state = {  }
    render() { 
        return (
            <section
                id="section-3"
                className="p-10 h-64 mt-10">
                <div className="flex flex-row justify-between bg-green-100 p-5">
                    <div className="flex-initial">
                        <img
                            src="https://image.freepik.com/free-photo/hand-man-holding-holding-trophy_1368-8447.jpg"
                            alt="Trophy"
                            className="object-cover -mt-20 w-auto h-40"
                        />
                    </div>
                    <div className="flex-initial content-center pl-10 pr-20">
                        <h3 className="font-bold">IMAGINE CREATING A TOTALLY AUTHENTIC STORIES AND RECEIVE REGULAR MONTHLY PAYOUTS</h3>
                    </div>
                    <div className="flex-initial justify-end">
                        <button
                            type="button"
                            className="bg-teal-900 text-white text-sm rounded p-3">
                            Create Your Account
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default SectionThree;