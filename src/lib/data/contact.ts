import type {ContactData} from '$lib/types';

export const contactData: ContactData = {
	title: 'Kontakta oss',
	description: 'Begär en kostnadsfri offert eller kontakta oss för mer information',
	contactInfo: {
		title: 'Kontaktinformation',
		description: 'Så når du oss',
		details: [
			{icon: 'Phone', title: 'Telefon', value: '070-245 17 90, 073-568 64 67'},
			{icon: 'Mail', title: 'E-post', value: 'info@spotlessnorrland.se'}
		]
	},
	emergency: {
		title: 'Akut städbehov?',
		description: 'Vi erbjuder akutstädning 24/7',
		buttonText: 'Ring nu: 070-245 17 90, 073-568 64 67'
	},
	form: {
		title: 'Begär offert',
		description: 'Fyll i formuläret så återkommer vi till dig',
		submitButton: 'Skicka',
		success: {
			title: 'Tack för ditt meddelande!',
			description: 'Vi har mottagit din förfrågan och återkommer så snart vi kan.'
		},
		fields: {
			name: {label: 'Namn', placeholder: 'Ditt namn'},
			email: {label: 'E-post', placeholder: 'din@epost.se'},
			phone: {label: 'Telefonnummer', placeholder: '070-123 45 67'},
			service: {
				label: 'Tjänst',
				placeholder: 'Välj en tjänst',
				options: [
					{value: 'home', label: 'Hem- & Privatstädning'},
					{value: 'business', label: 'Företags- & Lokalstädning'},
					{value: 'special', label: 'Specialstädning & Sanering'},
					{value: 'service', label: 'Service & Övrigt'}
				]
			},
			message: {label: 'Meddelande', placeholder: 'Beskriv ditt ärende...'}
		}
	}
};
