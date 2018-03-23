# BUG

### 02-01
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

### 02-12
防止ios惯性滑动
```
.scroll-content{
    -webkit-overflow-scrolling: auto !important;
}
```

### 02-15

.vscode增加[Markdown Theme Kit]插件  查看MD文件预览

### 02-17 
增加[ion-calendar]插件

### 03-17
修改真机http请求失败bug
```
<preference name="CordovaWebViewEngine" value="CDVUIWebViewEngine" />
$ ionic cordova plugin rm cordova-plugin-ionic-webview --save
$ rm -rf platforms/
$ rm -rf plugins/
$ ionic cordova build ios
```

### 03-20
修改StatusBar状态

### 03-23
Android 增加秘钥
根目录下增加[release-signing.properties]文件
```
keyAlias=io.ionic.starbucks
keyPassword=123456
storeFile=/Users/sticker/Desktop/GITHUB/Starbucks/starbucks
storePassword=123456
```

