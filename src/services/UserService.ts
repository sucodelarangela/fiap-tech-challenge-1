import { User } from "@/models/User";
import { StorageService } from "./StorageService";

export class UserService {
  private storage: StorageService;
  private readonly USER_KEY = "user";

  constructor() {
    this.storage = new StorageService();
  }

  public getCurrentUser(): User | null {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userData = this.storage.getData<any>(this.USER_KEY);
    return userData ? User.fromJSON(userData) : null;
  }

  public saveUser(user: User): void {
    this.storage.saveData(this.USER_KEY, user.toJSON());
  }

  public updateBalance(amount: number): void {
    const user = this.getCurrentUser();
    if (user) {
      user.balance += amount;
      this.saveUser(user);
    }
  }
}
