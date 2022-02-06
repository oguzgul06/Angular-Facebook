import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData: Observable<firebase.User>;

  private currentUser: UserData;
  private currentUser$ = new BehaviorSubject<UserData>(null);

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
    this.userData.subscribe(user => {
      if (user) {
        this.afs.collection<UserData>('users').doc<Userdata>(user.uid).valueChanges().subscribe(currentUser=> {
          if (currentUser !== undefined) {
            this.currentUser = currentUser;
            this.currentUser$.next(this.currentUser);
          }else {
            this.currentUser = null;
            this.currentUser$.next(this.currentUser);
          }

        })
      }
    })


    CurrentUser(): Observable<UserData>{
      return this.currentUser$.asObservable();
    }


    SignUp(email:string, password:string,firstname: string, lastname:string, avatar:string='https://pbs.twimg.com/media/EelQUl8XsAAUN-P.jpg'){

      this.afAuth.createUserWithEmailAndPassword(email,password)
          .then(res=> {
            if (res) {
                this.afs.collection('users').doc(res.user.uid)
                  .set({
                    firstname,
                    lastname,
                    email,
                    avatar
                  }).then(()=> {
                    this.afs.collection<UserData>('users')
                        .doc<UserData>(res.user.uid)
                        .valueChanges()
                        .subscribe(user=> {
                          if (user) {
                            this.currentUser = user;
                            this.currentUser$.next(this.currentUser);
                          }
                        })
                  }).catch(err => console.log(err));
            }
          }).catch(err => console.log(err));

  }
    export interface userData {
      firstName: string;
      lastName: string;
      avatar: string;
      email: string;
      id?: string;
    }
}
}
