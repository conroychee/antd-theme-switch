import React, { useState} from 'react';
import { Select } from 'antd';
import darkVars from './dark.json';
import lightVars from './light.json';
const { Option } = Select;


function ThemeSelector() {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            <Select
                placeholder="Please select theme"
                value={theme}
                onSelect={(value) => {
                    let vars = value === 'light' ? lightVars : darkVars;
                    vars = { ...vars, '@white': '#fff', '@black': '#000' };
                    window.less.modifyVars(vars).catch(error => {});
                    setTheme(value)
                }}
            >
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
            </Select>
        </div>
    )
}

export default ThemeSelector
