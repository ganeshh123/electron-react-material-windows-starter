import React from "react";
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import { Close, Remove, Crop54 } from '@material-ui/icons';
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id='mainWindow'>
        <header id="titlebar">
          <div id="dragRegion">
          <div id="windowTitle">
            <span>Electron React Material Windows</span>
          </div>
          <div id="windowControls">
          <IconButton id="minimizeButton" class="windowButton" component='span' disableRipple='true' >
            <Remove />
          </IconButton>
          <IconButton id="maximizeButton" class="windowButton" component='span' disableRipple='true' >
            <Crop54 />
          </IconButton>
          <IconButton id="closeButton" class="windowButton" component='span' disableRipple='true' >
            <Close />
          </IconButton>
          </div>
          </div>
        </header>
        <div id='appContainer'>
          <h1>Welcome to the Boilerplate Electron Material React Windows App</h1>
          <h2>Enhancements:</h2>
          <ul>
            <li>React and Material UI</li>
            <li>Custom, Minimal, Integrated Title Bar</li>
            <li>Rounded Corners</li>
            <li>Slimmier Scrollbar</li>
            <li>Bundled with Webpack</li>
          </ul>
          <h2>Important Files</h2>
          <ul>
            <li>src/main/index.js - Main Electron Process</li>
            <li>src/renderer/index.js - Rendered Process</li>
            <li>src/renderer/app/App.js - Main React Component</li>
            <li>src/renderer/app/theme.js - Material UI Theme File</li>
            <li>src/renderer/app/style.css - Main CSS Stylesheet</li>
          </ul>
          <h2>Credits</h2>
          <h3 >Electron, React Material UI Bundle</h3>
          <p>This build is based on this NPM package:<br />
          <a href="https://www.npmjs.com/package/react-material-minimal-electron-starter">React Material Minimal Electron</a></p>
          <h3 >Title Bar</h3>
          <p >The title bar was built using this guide:<br />
          <a href="https://github.com/binaryfunt/electron-seamless-titlebar-tutorial">Electron Seamless Titlebar Tutorial</a></p>
        </div>
      </div>
    </ThemeProvider>
  );
}
