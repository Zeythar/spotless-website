import type {PageServerLoad, Actions} from './$types.js';
import {loadContactForm, handleContactForm} from '$lib/server/contact-form';

export const load: PageServerLoad = async () => {
	return loadContactForm();
};

export const actions: Actions = {
	default: handleContactForm
};
