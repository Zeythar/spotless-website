import {email, z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, 'Fyll i namn.').min(2, 'Ogiltigt namn'),
	email: z.string().min(1, 'Fyll i e-postadress.').email('Ogiltig E-postadress'),
	phone: z.string().min(1, 'Fyll i telefonnummer.'),
	service: z.string().min(1, 'Välj en tjänst.'),
	message: z
		.string()
		.min(1, 'Fyll i meddelande.')
		.min(10, 'Meddelandet måste vara minst 10 tecken långt')
});

export type FormSchema = typeof formSchema;
