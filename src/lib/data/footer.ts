export const footerData = {
	companyInfo: {
		description: 'Professionell städning för hem och företag sedan 2025'
	},
	sections: {
		pages: {
			title: 'Sidor',
			links: [
				{label: 'Hem', href: '/'},
				{label: 'Varför oss', href: '/varfor-oss'},
				{label: 'Priser', href: '/priser'},
				{label: 'Städguide', href: '/stadguide'},
				{label: 'Frågor & Svar', href: '/fragor-och-svar'}
			]
		},
		services: {
			title: 'Våra tjänster',
			links: [
				{label: 'Hem- & Privatstädning', href: '/tjanster/hem-och-privatstadning'},
				{label: 'Företags- & Lokalstädning', href: '/tjanster/foretags-och-lokalstadning'},
				{
					label: 'Specialstädning & Sanering',
					href: '/tjanster/specialstadning-och-sanering'
				},
				{label: 'Service & Övrigt', href: '/tjanster/service-och-ovrigt'}
			]
		},
		contact: {
			title: 'Kontakt',
			phone: '0735-686 467',
			phoneLink: 'tel:0735686467',
			email: 'info@spotlessnorrland.se',
			emailLink: 'mailto:info@spotlessnorrland.se',
			address: 'Midälvavägen 20, Sundsvall',
			hours: 'Mån-Fre 08:00-17:00',
			social: [
				{icon: 'Facebook', href: '#facebook', label: 'Facebook'},
				{icon: 'Instagram', href: '#instagram', label: 'Instagram'},
				{icon: 'Linkedin', href: '#linkedin', label: 'LinkedIn'}
			]
		}
	},
	copyright: (year: number) => `&copy; ${year} Spotless Norrland. Alla rättigheter förbehållna.`
};
