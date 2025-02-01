export interface BlogPost {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    content?: string;
  }