import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/compat/app';
import { map, Observable } from 'rxjs';
//import * as firebase from 'firebase/compat/app';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  currentUser: User;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(
      (user: User | null) => (this.currentUser = user)
    );
  }

  getAllPosts(): Observable<any> {
    return this.afs
      .collection<any>('posts', (CollectionReference) =>
        CollectionReference.orderBy('time', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((item) => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data(),
            };
          });
        })
      );
  }

  getMessage(message: string, ownerName: string, otherItems: any) {
    this.afs
      .collection('posts')
      .add({
        message,
        title: ownerName,
        user_id: this.currentUser.uid,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        ...otherItems,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
