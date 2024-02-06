import { ProfileIntrface } from './profile.intrface';

export interface ArticleInteface {
    author: ProfileIntrface;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
}
