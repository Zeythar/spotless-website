export const contactData = {
	title: 'Kontakta oss',
	description: 'Begär en kostnadsfri offert eller kontakta oss för mer information',
	contactInfo: {
		title: 'Kontaktinformation',
		description: 'Så når du oss',
		details: [
			{icon: 'Phone', title: 'Telefon', value: '0735-686 467'},
			{icon: 'Mail', title: 'E-post', value: 'kontakt@spotlessnorrland.se'},
			{icon: 'MapPin', title: 'Adress', value: 'Midälvavägen 20, Sundsvall'},
			{icon: 'Clock', title: 'Öppettider', value: 'Mån-Fre: 08:00-17:00'}
		]
	},
	emergency: {
		title: 'Akut städbehov?',
		description: 'Vi erbjuder akutstädning 24/7',
		buttonText: 'Ring nu: 0735-686 467'
	},
	form: {
		title: 'Begär offert',
		description: 'Fyll i formuläret så återkommer vi till dig',
		submitButton: 'Skicka',
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
