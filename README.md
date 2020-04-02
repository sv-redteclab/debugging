# Debugging

This repository contains debugging examples for:

1. a simple html page
2. a node application
3. a dockerized node applicatin
4. a react application

### 1. BROWSER

No setup required just open the `index.html` in your browser.

For debugging just use the dev-tools of you browser.
In Chrome breakpoints are set in the 'Source' part.

### 2. NODE

To just start the application, run `node ./node/server.js`.
Add users by running `curl -X PUT -v localhost:8080/user/SOMENAME`
List users by running `curl -X GET -v localhost:8080/user/`

Using VSCode's debuggeer you should be able to set breakpoints in the source files within VSCode by adding a configuration to `.vscode/launch.json` (see 'Launch Node'). Then start it via the debugger instead of running the command above!

Instead of directly launching the application via VSCode you can also attach to a running node application. To do so run `node --inspect-brk=0.0.0.0 ./node/server.js` to expose node's debug mechanic. To use VSCode's debugging you then have to use the 'Attach node' configuration in `.vscode/launch.json`.

### 3. DOCKERIZED NODE

Run `docker build -t talk_debugging_node ./node` to build the image

Run `docker container run --name talk_debugging_node_container -d --rm -p 8080:8080 -p 9229:9229 talk_debugging_node` to start the container in detached mode (`-d`). Note the container will automatically remove itself after exiting (--rm)

As you can see in the `Dockerfile` the wrapped node application exposes the debug port.

To use VSCode for debugging however you have to use the 'Attach node dockerized' configuration.

### 4. REACT

To start the application run `yarn install` and `yarn start` inside of the react folder.

For debugging React Single Page Applications (SPA) or hydrated components in the Browser you have to install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=de) or similar. State and properties of rendered components can then be observed in the 'Components' section of your browser's dev-tools. Breakpoints can be set by starting profiling in the 'Profiler' section.

To attach VSCode to the frotnend executed in Chrome you have to install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) VSCode-extension. Then attach to chrome by using the 'chrome' launch configuration.

The backend part of a react application can be debugged via nodes debugging interface.
