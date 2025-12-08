import type {LayoutServerLoad} from './$types';
import {loadContactForm} from '$lib/server/contact-form';

export const load: LayoutServerLoad = async () => {
	return loadContactForm();
};
