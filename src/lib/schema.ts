import {email, z} from 'zod';
import {validationData} from '$lib/data/validation';

export const formSchema = z.object({
	name: z.string().min(1, validationData.name.required).min(2, validationData.name.invalid),
	email: z.string().min(1, validationData.email.required).email(validationData.email.invalid),
	phone: z.string().min(1, validationData.phone.required),
	service: z.string().min(1, validationData.service.required),
	message: z
		.string()
		.min(1, validationData.message.required)
		.min(10, validationData.message.minLength)
});

export type FormSchema = typeof formSchema;
