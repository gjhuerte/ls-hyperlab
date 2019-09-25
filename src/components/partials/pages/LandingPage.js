import React, { Component } from 'react';
import SectionOne from './landingPage/SectionOne';
import SectionTwo from './landingPage/SectionTwo';
import SectionThree from './landingPage/SectionThree';

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Profiler
                id="landing-page-body-section"
                onRender={() => {}}>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </React.Profiler>
        );
    }
}
 
export default LandingPage;