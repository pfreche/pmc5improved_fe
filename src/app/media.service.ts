import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  apiUrl = environment.baseUrl;
  mediaTypes = ["11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33","11", "22", "33"]
  locations: any;

  constructor(private http: HttpClient, private router: Router) {
    let apiUrl = localStorage.getItem("apiUrl");
    if (apiUrl) {
      this.apiUrl = apiUrl
      environment.baseUrl = apiUrl;
    }
    this.loadLocations();
  }

  loadLocations() {
    this.http.get(this.apiUrl + "locations/").subscribe((locations) => {
      this.locations = locations;
      localStorage.setItem("location", JSON.stringify(this.locations));  // perhaps for later read
    })
  }

  // storages
  loadStorages() {
    return this.http.get(this.apiUrl + "storages/")
  }
  loadStorage(storage_id) {
    return this.http.get(this.apiUrl + "storages/" + storage_id)
  }
  saveStorage(storage) {
    if (storage.id != undefined)
      return this.http.put(this.apiUrl + "storages/" + storage.id, storage)
    else
      return this.http.post(this.apiUrl + "storages/", storage)
  }

  // folders
  loadFolders() {
    return this.http.get(this.apiUrl + "folders/")
  }
  loadFoldersByStorage(storage_id) {
    return this.http.get(this.apiUrl + "folders/storage/" + storage_id)
  }
  loadFolder(id: number) {
    return this.http.get(this.apiUrl + "folders/" + id)
  }

  // mfiles
  loadMfilesByFolder(folder_id) {
    return this.http.get(this.apiUrl + "mfiles/folder/" + folder_id)
  }
  loadMfile(id) {
    return this.http.get(this.apiUrl + "mfiles/" + id)
  }
  pathLocation(storage_id, typ) {
    let x = this.locations.filter(location =>
      (location.storage_id == storage_id && location.typ == typ && location.inuse))
    if (x[0]) {
      return x[0].uri;
    } else {
      return "not defined"
    }
  }


}

