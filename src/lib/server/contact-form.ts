import {fail} from '@sveltejs/kit';
import {superValidate} from 'sveltekit-superforms';
import {zod4} from 'sveltekit-superforms/adapters';
import {formSchema} from '$lib/schema';
import type {RequestEvent} from '@sveltejs/kit';

export const loadContactForm = async () => {
	return {
		form: await superValidate(zod4(formSchema))
	};
};

export const handleContactForm = async (event: RequestEvent) => {
	const form = await superValidate(event, zod4(formSchema));
	if (!form.valid) {
		return fail(400, {
			form
		});
	}
	console.log('Form submitted:', form.data);
	return {
		form
	};
};
