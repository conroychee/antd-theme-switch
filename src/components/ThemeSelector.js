import React, { useState } from 'react';
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
                    console.log(window.less)
                    if (value === 'light')
                        window.less.modifyVars(lightVars)
                    else
                        window.less.modifyVars(darkVars)
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
