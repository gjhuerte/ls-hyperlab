import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch,
    faPlus,
    faList,
    faIcons
} from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="flex justify-between content-center p-3">
                <div className="flex flex-1 items-center">
                    <a 
                        className="flex flex-1 flex-row justify-center"
                        href="/">
                        <FontAwesomeIcon
                            className="mr-2" 
                            icon={faIcons} />
                    </a>
                </div>

                <div className="flex flex-initial text-center">
                    <ul className="flex flex-row justify-center">
                        <li className="flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                DISCOVER
                            </a>
                        </li>
                        <li className="flex items-center flex-initial mx-3">
                            <a 
                                className="text-xs"
                                href="/">
                                TOP STORIES
                            </a>
                        </li>
                        <li className="flex items-center flex-initial mx-3">
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

                <div className="flex flex-1 items-center">
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