export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      name: string;
      email: string;
      isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean = false) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }

      setSuperAdmin(status: boolean): void {
        this.isSuperAdmin = status;
      }

      getInfo(): string {
        return `${this.name} (${this.email}) - SuperAdmin: ${this.isSuperAdmin}`;
      }
    }
  }
}