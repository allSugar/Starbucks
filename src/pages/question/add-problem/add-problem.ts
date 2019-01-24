import { Component } from '@angular/core';
import { IonicPage, App, NavParams, normalizeURL, ViewController, ToastController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { BaseUI } from '../../../directives/comm/baseui';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

import { HttpService } from '../../../service/HttpService';
import { RES_ROOT } from '../../../providers/httpUrl';

declare var cordova: any; //导入第三方的库定义到 TS 项目中

@IonicPage()
@Component({
  selector: 'page-add-problem',
  templateUrl: 'add-problem.html'
})
export class AddProblemPage extends BaseUI {


  navCtrl: any;
  len: any;
  userId: string;
  userInfo: any;
  lastImage: string = null;
  problem: any;
  Point: any;
  img: any;

  constructor(
    public app: App,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public camera: Camera,
    public transfer: FileTransfer,
    public file: File,
    public filePath: FilePath,
    public storage: Storage,
    public http: HttpService
  ) {
    super();

    this.Point = this.navParams.get('Point');
    this.problem = this.navParams.get('problem') || {};
    this.problem.faultDes = this.problem.faultDes.substring(0, this.problem.faultDes.length - 1);
    this.problem.date = this.crtTimeFtt(new Date());
    let len = this.navParams.get('len');
    if (len) {
      this.len = len;
    }

    this.storage.get("userInfo").then(res => {
      this.userInfo = JSON.parse(res);
      this.problem.name = this.userInfo.name;
    });

    this.navCtrl = this.app.getRootNav();
  }

  ionViewDidEnter() {
    this.userId = '1';
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
    let options = {
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
      } else {
        //获取正确的路径
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1),
          //获取正确的文件名
          currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
    });
  }

  //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
    });
  }

  //为文件生成一个新的文件名
  createFileName() {
    let d = new Date(),
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



  crtTimeFtt(val) {
    if (val != null) {
      let date = new Date(val);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  }

  creatPoint() {
    let loading = super.showLoading(this.loadingCtrl);
    if (this.Point.status) {
      this.problem.pointId = this.Point.pointId;
      this.creatProblem(loading);
      return false;
    }

    this.http.get(this.Point).subscribe(res => {
      if (!!res && res.responseCode == 179010) {
        this.problem.pointId = res.responseObj.id;
        this.creatProblem(loading);
      }
    });
  }

  creatProblem(loading) {
    this.http.get(this.problem).subscribe(res => {
      if (!!res && res.responseCode == 165010) {
        this.problem.id = res.responseObj.id;
        if (this.lastImage) {
          this.uploadImage(loading);
        } else {
          loading.dismiss();
          this.goToOtherPage();
        }
      }
    });
  }

  uploadImage(loading) {
    let url = RES_ROOT + '/ajaxUpload/FileUploader/uploadFile',
      targetPath = this.pathForImage(this.lastImage);

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
      loading.dismiss();

      let response = data.response;

      if (typeof response === "string") {
        response = JSON.parse(response)
      }

      if (!response["result"]) {
        loading.dismiss();
        super.showToast(this.toastCtrl, "上传图片返回异常");
        return false;
      }

      let imagePath = response["dir"] + response["serverFileName"];
      //在用户看清弹窗提示后进行页面的关闭
      this.relationProblem(loading, imagePath);
    }, err => {
      loading.dismiss();
      super.showToast(this.toastCtrl, "图片上传发生错误，请重试。");
    });
  }

  relationProblem(loading, imagePath) {
    let params = { method: "repair.addStoreRepairTemporaryBillFile", fileType: 1, filePaths: imagePath };
    params["storeRepairTemporaryBillId"] = this.problem.id;
    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (res.responseCode == "166010") {
        this.goToOtherPage();
      }
    }, error => {
      loading.dismiss();
    });
  }

  goToOtherPage() {
    this.navCtrl.push("ProblemDetailPage", { remove: true, len: this.len + 1, storeInfoId: this.Point.storeInfoId, pointId: this.problem.pointId });
  }
}
