# antd-theme-switcher
React: Switch between dark and light theme for antd


Procedures:
1) <b>Install package</b>\
      npm i react-app-rewire-antd-theme antd-theme antd

2) <b>Copy the ~public/color.less into your ~public folder</b>

3) <b>Copy the following codes into your index.html \<head\> tag</b>
  
    \<link rel="stylesheet/less" type="text/css" href="color.less" \/\>\
      \<script>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; window.less = {\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; async: true,\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; env: 'production'\
        };\
     \<\/script\>

4) <b>Copy ~src/components/dark.json and ~src/components/dark.json</b>

5) <b>The following is the code of switching theme. They can be found in ~src/components/ThemeSelector.js</b>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let vars = value === 'light' ? lightVars : darkVars;\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vars = { ...vars, '@white': '#fff', '@black': '#000' };\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.less.modifyVars(vars).catch(error => {});\
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTheme(value)\