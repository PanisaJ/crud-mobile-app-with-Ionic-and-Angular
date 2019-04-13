import { Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  //products: Product[] = [];

  items: Item[] = [];

  @ViewChild('mylist')mylist: IonList;

  constructor(public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
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
      this.items = items;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}
