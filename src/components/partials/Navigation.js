import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch,
    faPlus,
    faList,
    faIcons
} from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
    state = {
        navigationShown: false,
    };

    handleResponsiveButtonClick = () => {
        this.setState({
            navigationShown: ! this.state.navigationShown
        });
    }

    render() { 
        const { navigationShown } = this.state;

        return ( 
            <nav className="flex justify-between flex-wrap content-center p-3">
                <div className="flex flex-initial sm:flex-1 items-center">
                    <a 
                        className="flex flex-1 flex-row justify-center"
                        href="/">
                        <FontAwesomeIcon
                            className="mr-2" 
                            icon={faIcons} />
                    </a>
                </div>

                <div className="sm:block flex-initial sm:hidden">
                    <button 
                        onClick={() => this.handleResponsiveButtonClick()}
                        className="flex items-center px-3 py-2 border-none rounded text-teal-900 border-teal-900">
                        <svg 
                            className="fill-current h-3 w-3" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div className={(navigationShown ? 'w-full' : 'opacity-0 hidden') + " opacity-100 smooth-transition mt-5 sm:mt-0 sm:flex sm:flex-initial sm:text-center sm:items-center sm:w-auto"}>
                    <ul className="inline-block sm:flex sm:flex-row sm:justify-center">
                        <li className="block flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                DISCOVER
                            </a>
                        </li>
                        <li className="block flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                TOP STORIES
                            </a>
                        </li>
                        <li className="block flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                TRENDING
                            </a>
                        </li>
                        <li className="flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                MY LOCATION
                            </a>
                        </li>
                        <li className="flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                CALL FOR STORIES
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={(navigationShown ? 'w-full' : 'opacity-0 hidden') + " opacity-100 smooth-transition border-t-2 mt-5 sm:mt-0 sm:border-t-0 sm:flex sm:flex-1 sm:items-center"}>
                    <ul className="flex flex-1 flex-row justify-center">
                        <li className="flex-initial">
                            <a 
                                className="text-xl"
                                href="/">
                                <FontAwesomeIcon 
                                    icon={faSearch} 
                                    className="p-1" />
                            </a>
                        </li>
                        <li className="flex-initial">
                            <a 
                                className="text-xl"
                                href="/">
                                <FontAwesomeIcon 
                                    icon={faPlus} 
                                    className="p-1" />
                            </a>
                        </li>
                        <li className="flex-initial">
                            <a 
                                className="text-xl"
                                href="/">
                                <FontAwesomeIcon 
                                    icon={faList} 
                                    className="p-1" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navigation;