import {Inject} from "@angular/core";
import {User} from "../models/user.model";


@Inject({
  providerIN: 'root'
})
export class UserService {

  userInfo: User;

  public isLoggedInUser(): boolean{
    return this.userInfo && this.userInfo.IsLoggedIn;
  }

  public GetUserData() {
    return this.userInfo;
  }

  public setUserOnLoggedIn(userInfo: any){
    this.userInfo = userInfo;
  }

}
