# antd-theme-switcher
React: Switch between dark and light theme for antd


Procedures:
1) ### `Install package`
     &nbsp;&nbsp;&nbsp; npm i react-app-rewire-antd-theme antd-theme antd

2) ### `Copy the ~public/color.less into your ~public folder`

3) ### `Copy the following codes into your index.html \<head\> tag`
  
    \<link rel="stylesheet/less" type="text/css" href="color.less" \/\>\
      \<script>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; window.less = {\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; async: true,\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; env: 'production'\
        };\
     \<\/script\>

4) ### `Copy ~src/components/dark.json and ~src/components/dark.json`

5) ### `The following is the code of switching theme. They can be found in ~src/components/ThemeSelector.js`

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let vars = value === 'light' ? lightVars : darkVars;\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vars = { ...vars, '@white': '#fff', '@black': '#000' };\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.less.modifyVars(vars).catch(error => {});\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTheme(value)\
