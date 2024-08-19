import { initThumbnails } from './thumbnails.js';
import { initForm, setUserFormSubmit, closeModal } from './form.js';
import { getData } from './api.js';

const dataPromis = await getData();
initThumbnails(dataPromis);
initForm();

setUserFormSubmit(closeModal);

