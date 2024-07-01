import { valueFinished } from './thumbnails.js';
import { getPosts } from './data.js';

const posts = getPosts();

valueFinished(posts);
