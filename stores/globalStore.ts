export class GlobalStore {
  private stories: any;

  constructor() {
    this.stories = {};
  }

  get getStories(): string | null {
    return this.stories;
  }

  setStories(stories: any): void {
    console.log('stories', stories);
    this.stories = stories;
  }
};

export const globalStore = new GlobalStore();