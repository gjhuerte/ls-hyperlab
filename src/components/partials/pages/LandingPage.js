import React, { Component } from 'react';
import SectionOne from './index/SectionOne';
import SectionTwo from './index/SectionTwo';
import SectionThree from './index/SectionThree';

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