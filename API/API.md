# 本地测试（http://localhost:8080/YunZhuServer/yunzhuApi/getData）
# 外网测试（http://121.42.197.153:8080/YunZhuServer/yunzhuApi/getData）
# 外网正式（http://www.sunanyun.com/yunzhuApi/getData）
# API介绍 （http://121.42.197.153:8080/YunZhuServer/api/api.common.xml）

### 登录
2.37　 根据用户名获取用户简要信息及账号列表
```
?method=userManager.findUserAccount&userName=admin&appkey=123456&appsecret=123456

```
2.2　 用户登录
```
?method=userManager.login&userName=admin&passWord=admin
&accountId=1&appkey=123456&appsecret=123456&clientId=request
帐号：13920905364
密码：1234567
权限：项目经理
```
### 首页
10.5　 根据条件获取门店附件（全景图，门店照，使用说明）
```
?method=store.findStoreFile&storeInfoIds=1,2,3&fileType=2
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
### 我的
11.34　 根据条件获取订单统计
```
?method=repair.getStoreRepairOrderStatistics&storeStaffId=1
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
### 门店管理
10.2　 获取门店信息列表
```
?method=store.findStoreInfo&storeStaffIds=1&storeStaffType=5
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
10.8　 获取门店员工列表
```
?method=store.findStaffByStoreInfo&higherStaffUserId=1
&higherStaffType=4&staffSource=2&staffType=5&clientId=14a01fdab38b4bf3b93781e20aa3777b<br>
&appkey=123456&appsecret=123456
```
11.1　 根据门店ID或门店代码获取门店信息
```
?method=repair.getStoreInfoByIdOrCode&id=5&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```
### 维修点管理
10.11　 根据条件获取门店竣工资料
```
?method=store.findStoreCompletionData&storeInfoId=1&topClass=1
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
10.14　 获取门店竣工资料附件（图片，图纸）
```
?method=store.findStoreCompletionDataFile&storeCompletionDataId=1
&fileType=2&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```
10.40　 根据条件获取点列表
```
?method=store.findPoint&type=2&drawingId=5&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```


维修单（我关注的维修单）

### 点下的问题列表页面

### 获取未提交问题（购物车问题）列表
11.3　 获取门店临时维修点列表（文字描述有问题，回头更新，为获取点下未提交的问题列表）
```
?method=repair.findStoreRepairTemporaryBillList&pointId=2&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```

### 创建点及购物车问题（按照图的设计，这里在一个新点下创建问题时，点击保存时，需要先创建点，再创建问题）
10.39　 创建图纸上的点
```
?method=store.createPoint&type=2&drawingId=1&coordinateX=100&coordinateY=100
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
11.2　 保存门店临时维修问题信息（文字描述有问题，回头更新，为创建或编辑点下的问题）
```
?method=repair.saveStoreRepairTemporaryBill&storeInfoId=1&pointId=2
&repairCompanyId=1&storeRepairWarehouseId=5&faultDes=灯泡不亮&emergency=2
&faultPointPaths=&faultDesPaths=&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```
11.6　 添加临时维修点附件（故障点图，故障说明图）（文字描述有问题，回头更新，为编辑问题图片时使用）
```
?method=repair.addStoreRepairTemporaryBillFile&storeRepairTemporaryBillId=2
&fileType=1&filePaths=&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```
11.8　 删除指定的门店临时维修点附件（故障点，故障说明）（文字描述有问题，回头更新，为编辑问题图片时使用）
```
?method=repair.deleteStoreRepairTemporaryBillFileById&ids=2&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```
11.25　 获取门店下的维修库列表（分页）
```
?method=repair.findStoreRepairWarehouseForPage&storeInfoId=2&topClass=1
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
11.26　 保存子订单的维修类型（维修库）（文字描述有问题，回头更新，缺少维修类型种类参数，type=1，甲方指定，可能需合并到11.2）

### 删除购物车问题
11.4　 删除指定的门店临时维修点（文字描述有问题，回头更新）
```
?method=repair.deleteStoreRepairTemporaryBillById&ids=2&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```

### 下单
11.9　 创建门店维修单（下单）（文字描述有问题，回头更新）
```
?method=repair.createStoreRepairOrder&srtbIds=2&clientId=14a01fdab38b4bf3b93781e20aa3777b
&appkey=123456&appsecret=123456
```

### 获取进行中和已完成问题列表
11.16　 获取门店维修子订单列表（文字描述有问题，回头更新，暂时缺少问题状态和所属点参数）
```
?method=repair.findStoreRepairOrderItem&statuss=1,2&statuss=1,2,3,4,5,6
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```

### 获取维修单列表页面 / 获取维修单列表
11.10　 获取门店维修单列表（返回数据需要稍做一些调整）
```
?method=repair.findStoreRepairOrder&pointId=2&statuss=1,2,3,4,5,6
&clientId=14a01fdab38b4bf3b93781e20aa3777b&appkey=123456&appsecret=123456
```
11.11　 根据ID获取门店维修单信息（维修单详情）

### 操作维修单
11.13　 操作门店维修单（针对维修单的操作为3：指派维修员；4：已接单；5：出发；6：（到达）维修中；）
11.14　 评价门店维修单

### 获取维修单下的问题列表
11.16　 获取门店维修子订单列表（文字描述有问题，回头更新）
11.17　 根据id获取门店维修子订单信息（文字描述有问题，回头更新，为维修单问题详情）

### 操作维修单问题
11.34　 操作门店维修单问题（采购、完成、退回）
11.15　 保存门店维修子订单信息（文字描述有问题，回头更新，为编辑维修单问题（故障说明、故障图））
11.19　 门店经理评价维修子订单（文字描述有问题，回头更新，为甲方评价维修单问题）

### 乙方维修单报告
11.28　 维修员提交维修报告（文字描述有问题，回头更新，为维修员提交维修单问题报告）
11.29　 维修员报告维修单总工时（文字描述有问题，回头更新，为维修员提交维修单总工时）
11.31　 获取维修单耗材列表
11.30　 保存维修单耗材
11.33　 维修主管核准耗材金额

### 维修单跟踪页面
11.23　 获取指定的维修单记录跟踪列表
