import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
  }

  async createAccount({ email, password, name }) {
    try {
      const account = new Account(this.client); // Initialize Account with the client
      const userAccount = await account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const account = new Account(this.client); // Initialize Account with the client
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const account = new Account(this.client); // Initialize Account with the client
      return await account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      const account = new Account(this.client); // Initialize Account with the client
      await account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
