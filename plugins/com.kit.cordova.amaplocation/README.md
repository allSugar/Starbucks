# com.kit.cordova.amaplocation
使用高德Android定位SDK进行定位，以解决webapp中定位不准的问题

## 安装
`cordova plugin add https://github.com/yanxiaojun617/com.kit.cordova.amaplocation --save`

## 配置
*  修改 plugin.xml(:54)文件中的高德地图android key,更多详情请看http://www.jianshu.com/p/85aceaee3b35

`<meta-data android:name="com.amap.api.v2.apikey" android:value="您申请的高德地图android key"/>`

ps:_此插件android定位功能使用高德定位,ios定位功能使用苹果系统自带的定位功能,所以只需要配置android key,不需要配置ios key_
### ionic1调用方法

	document.addEventListener('deviceready', function(){
		window.LocationPlugin.getLocation(successCallback,errorCallback);
	}, false);

	function successCallback(data) {
		//data.longitude 经度
		//data.latitude 纬度
		//data.accuracy 返回定位精度半径
		//data.address 返回地址的详细描述，包括省、市、区和街道
		//data.floor 返回定位到的室内地图的楼层，如果不在室内或者无数据，则返回默认值null。
		//data.province 返回定位位置的提供者名称。
		//data.road 返回定位信息中道路名称,如“阜荣街”。
		//data.speed 返回定位速度 ，单位：米/秒，如果此位置不具有速度，则返回0.0 。
		//data.time 返回定位时间 ，毫秒时间（距离1970年 1月 1日 00:00:00 GMT的时间）
		//data.hasAccuracy 获取定位精度状态

	}

	function errorCallback(msg) {
	    //高德定位SDK返回的错误代码编号

        //响应码	说明
        //0	正常，有返回结果
        //21	IO 操作异常
        //22	连接异常
        //23	连接超时
        //24	无效的参数
        //25	空指针异常
        //26	url 异常
        //27	未知主机
        //28	连接服务器失败
        //29	通信协议解析错误
        //30	http 连接失败
        //31	未知的错误
        //32	keykey 鉴权验证失败，请检查key绑定的sha1值、packageName与apk是否对应
        //33	没有获取到定位权限，导致定位失败，请告知用户授予定位权限
        //34	无法获取城市信息
		console.log("错误消息："+msg);
	}

### ionic2调用方法

```
import {Injectable} from '@angular/core';
declare var LocationPlugin;

@Injectable()
export class NativeService {
  constructor() { }
  /**
   * 获得用户当前坐标
   * @return {Promise<any>}
   */
  getUserLocation(): Promise<any> {
    return new Promise((resolve) => {
        LocationPlugin.getLocation(data => {
          resolve({'lng': data.longitude, 'lat': data.latitude});
        }, msg => {
          alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
        });
    });
  }
}
```