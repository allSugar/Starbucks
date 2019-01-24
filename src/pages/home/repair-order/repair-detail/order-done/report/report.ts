import { Component } from '@angular/core';
import { App, IonicPage, NavParams, LoadingController, ActionSheetController, Platform, normalizeURL } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { RES_ROOT } from '@/../../src/providers/httpUrl';

declare var cordova: any; //导入第三方的库定义到 TS 项目中
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage extends BaseUI {

  data: any;
  navCtrl: any;
  loading: any;

  StroeTypeList: any = [];

  userId: any = '1';
  lastImage: any;
  RES_ROOT: string;

  StoreRepairOrderItem: any = {
    method: "repair.reportStoreRepairOrderItem",
    id: "",
    finishDes: "",
    repairWarehouseIds: [],
    reason: '',
    maintenanceHours: '',
    finishFilePaths: []
  };

  constructor(
    public app: App,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public toast: ToastService,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public transfer: FileTransfer,
    public file: File,
    public filePath: FilePath
  ) {
    super();
    this.navCtrl = this.app.getRootNav();
    this.data = this.navParams.get("data");
    this.RES_ROOT = RES_ROOT;
  }

  HandleType() {
    this.navCtrl.push('ReportTypePage', { storeInfoId: this.data.storeInfoId })
  }

  HandleCloseType(i) {
    this.StroeTypeList.splice(i, 1)
    this.StoreRepairOrderItem.repairWarehouseIds.splice(i, 1)
  }

  HandleRequireReason() {

  }

  HandleOrderGoodsClick() {
    this.navCtrl.push('OrderGoodsPage')
  }

  HandleSave() {
    if (!this.data) {
      return false;
    }

    if (!this.StoreRepairOrderItem.finishDes){
      this.toast.info('请填写说明')
      return false
    }

    if (!this.StoreRepairOrderItem.maintenanceHours) {
      this.toast.info('请填写工时')
      return false
    }

    this.StoreRepairOrderItem.id = this.data.id;
    this.StoreRepairOrderItem.repairWarehouseIds = String(this.StoreRepairOrderItem.repairWarehouseIds)

    this.loading = super.showLoading(this.loadingCtrl);
    this.http.get(this.StoreRepairOrderItem).subscribe(res => {
      this.loading.dismiss();
      if (res.responseCode == "168060") {
        this.toast.info("添加报告成功！", () => this.navCtrl.push("ReportDetailPage", { id: this.data.storeRepairOrderId }));
        return false;
      }
      this.toast.info("添加报告失败，请稍后再试！");
    });
  }

  HandleQuit() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    let params = this.navParams.get('type');
    this.navParams.data.type = ''
    if (params) {
      this.StoreRepairOrderItem.repairWarehouseIds.push(params.ids);
      this.StroeTypeList.push(params.names.join(' > '));
    }
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '从图片库中选择',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: '使用相机',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {
    //定义相机的一些参数
    var options = {
      quality: 100, //图片的质量
      sourceType: sourceType,
      saveToPhotoAlbum: false, //是否保存拍摄的照片到相册中去
      correctOrientation: true //是否纠正拍摄的照片的方向
    };

    //获取图片的方法
    this.camera.getPicture(options).then((imagePath) => {
      //特别处理 android 平台的文件路径问题
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
          .then(filePath => {
            //获取正确的路径
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            //获取正确的文件名
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      }
      else {
        //获取正确的路径
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //获取正确的文件名
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.loading.dismiss();
      this.toast.info("选择图片出现错误，请在 App 中操作或检查相关权限。")
    });
    this.loading = super.showLoading(this.loadingCtrl);
  }

  //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName
      this.uploadImage(newFileName)
    }, error => {
      this.toast.info("存储图片到本地图库出现错误。")
    });
  }

  //为文件生成一个新的文件名
  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg"; //拼接文件名
    return newFileName;
  }

  //处理图片的路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return normalizeURL(cordova.file.dataDirectory + img);
    }
  }

  uploadImage(FileName) {
    let url = RES_ROOT + '/ajaxUpload/FileUploader/uploadFile',
      targetPath = this.pathForImage(FileName);

    let filename = this.userId + ".jpg"; //定义上传后的文件名

    //fileTransfer 上传的参数
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'fileName': filename, 'userid': this.userId }
    };

    const fileTransfer: FileTransferObject = this.transfer.create();


    //开始正式地上传
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismiss();
      let response = data.response;

      if (typeof response === "string") {
        response = JSON.parse(response)
      }

      if (!response["result"]) {
        this.toast.info("上传图片返回异常")
        return false;
      }

      let imagePath = response["dir"] + response["serverFileName"];
      this.StoreRepairOrderItem.finishFilePaths.push(imagePath)
    }, err => {
      this.loading.dismiss();
      this.toast.info("图片上传发生错误，请重试。");
    });
  }
}
