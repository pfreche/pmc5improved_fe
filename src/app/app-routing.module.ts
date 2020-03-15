import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoragesComponent } from './storages/storages.component';
import { TestTableComponent } from './test-table/test-table.component';
import { StorageDetailComponent } from './storage-detail/storage-detail.component';
import { FoldersComponent } from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component';
import { MfileDetailComponent } from './mfile-detail/mfile-detail.component';


const routes: Routes = [
  {path: 'storages', component: StoragesComponent},
  {path: 'storages/:id', component: StorageDetailComponent},  
  {path: 'folders', component: FoldersComponent},
  {path: 'folders/:id', component: FolderDetailComponent},
  {path: 'folders/storage/:id', component: FoldersComponent},
  {path: 'mfile/:id', component: MfileDetailComponent},

  {path: 'tt', component: TestTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
