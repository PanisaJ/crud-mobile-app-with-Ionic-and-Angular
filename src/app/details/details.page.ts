import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { debuglog } from 'util';
import { DebugContext } from '@angular/core/src/view';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage {
  
  item: Item;

  constructor(public api: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private storageService: StorageService,
    private plt: Platform,
    private toastController: ToastController) {
      this.plt.ready().then(() => {
      this.loadItems();
    });
    }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.item = items[this.route.snapshot.paramMap.get('id')];
    });
  }

}
