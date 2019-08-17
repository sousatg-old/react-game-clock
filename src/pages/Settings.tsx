import React, {FC} from 'react';
import { useSettingsState, useSettingsDispatch } from '../context/SettingsContext';
import FormControl from '@material-ui/core/FormControl'
import { InputLabel } from '@material-ui/core';

const Settings: FC = () => {
    const {time} = useSettingsState();
    const dispatch = useSettingsDispatch();

    return (
        <div>
            <form>
                 <FormControl>
                    <InputLabel>Time</InputLabel>
                    <input type="text" />
                </FormControl>
            </form>
        </div>    
    );
}

export default Settings;