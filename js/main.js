import { initThumbnails } from './thumbnails.js';
import { getPosts } from './data.js';
import { initForm } from './form.js';

const posts = getPosts();

initThumbnails(posts);
initForm();
