import {contactData} from '$lib/data/contact';
import {validationData} from '$lib/data/validation';
import {z} from 'zod';

const serviceOptions = (contactData.form.fields.service.options || []).map((o) => o.value) as [
	string,
	...string[]
];

export const formSchema = z.object({
	name: z.string().min(1, validationData.name.required).min(2, validationData.name.invalid),
	email: z.string().min(1, validationData.email.required).email(validationData.email.invalid),
	phone: z.string().min(1, validationData.phone.required),
	service: z
		.string()
		.min(1, validationData.service.required)
		.refine((val) => serviceOptions.includes(val), {
			message: 'Ogiltig tjänst vald'
		}),
	message: z
		.string()
		.min(1, validationData.message.required)
		.min(10, validationData.message.minLength),
	confirmEmail: z.string().optional()
});

export type FormSchema = typeof formSchema;
