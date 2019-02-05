export class Repository {
  public showDescription: boolean;
  constructor(public name: string, public public_repos: number, public followers: number, public following: number, public html_url: string) {
    this.showDescription = false;
  }
}
