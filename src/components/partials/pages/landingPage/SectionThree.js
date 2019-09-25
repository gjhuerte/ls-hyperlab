import React, { Component } from 'react';

class SectionThree extends Component {
    state = {  }
    render() { 
        return (
            <section
                id="section-3"
                className="w-full mt-32 sm:p-10 h-64 sm:mt-10 sm:w-auto">
                <div className="sm:flex sm:flex-row sm:justify-between bg-green-100 sm:p-5">
                    <div className="sm:flex-initial">
                        <img
                            src="https://image.freepik.com/free-photo/hand-man-holding-holding-trophy_1368-8447.jpg"
                            alt="Trophy"
                            className="object-cover -mt-20 w-full sm:w-auto h-40"
                        />
                    </div>
                    <div className="p-10 sm:py-0 flex-initial content-center pl-10 pr-10 sm:pr-20">
                        <h3 className="font-bold">IMAGINE CREATING A TOTALLY AUTHENTIC STORIES AND RECEIVE REGULAR MONTHLY PAYOUTS</h3>
                    </div>
                    <div className="flex-initial w-full justify-end">
                        <button
                            type="button"
                            className="bg-teal-900 w-full text-white text-sm sm:rounded sm:w-auto p-3">
                            Create Your Account
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default SectionThree;