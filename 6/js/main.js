import { initThumbnails } from './thumbnails.js';
import { getPosts } from './data.js';

const posts = getPosts();

initThumbnails(posts);
