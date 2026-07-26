import {handleContactForm} from '$lib/server/contact-form';
import {redirect} from '@sveltejs/kit';
import type {Actions, PageServerLoad} from './$types';

export const prerender = false;

export const load: PageServerLoad = async () => {
	redirect(302, '/');
};

export const actions: Actions = {
	default: handleContactForm
};
