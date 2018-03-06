# BUG

02-01
修改BUG
```
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: read ECONNRESET
    at exports._errnoException (util.js:1018:11)
    at TCP.onread (net.js:572:26)
```
运行代码
```
npm install @ionic/app-scripts@nightly --save-dev
```