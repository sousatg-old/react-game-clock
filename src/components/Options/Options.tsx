import React, { FC } from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Reload} from '../../icons/reload.svg';
import {ReactComponent as Play} from '../../icons/next.svg';
import {ReactComponent as Pause} from '../../icons/pause.svg';
import {ReactComponent as Settings} from '../../icons/settings.svg';

import './Options.css';

interface OptionsProps {
    pause: boolean;
    handlePlayClick: any;
    handleResetClick: any;
}

const Options: FC<OptionsProps> = ({pause, handlePlayClick, handleResetClick}: OptionsProps) => {
 return (
    <div className="options">
        {/* <Link to="/settings">
            <Settings width="25" fill="white" />
        </Link> */}
        <button className="btn" onClick={handlePlayClick}>
            {pause ? <Play width="25" fill="white" /> : <Pause width="25" fill="white" /> }
        </button>
        <button className="btn" onClick={handleResetClick}>
            <Reload width="25" fill="white" />
        </button>
    </div>);
}

export default Options;
