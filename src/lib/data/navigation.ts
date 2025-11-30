export const navigationData = {
	links: [
		{label: 'Hem', href: '/'},
		{
			label: 'Tjänster',
			href: '#',
			dropdown: [
				{
					title: 'Hem- & Privatstädning',
					description: 'För ett rent och trivsamt hem.',
					href: '/tjanster/hem-och-privatstadning',
					icon: 'House'
				},
				{
					title: 'Företags- & Lokalstädning',
					description: 'Ren och professionell arbetsmiljö.',
					href: '/tjanster/foretags-och-lokalstadning',
					icon: 'Building'
				},
				{
					title: 'Specialstädning & Sanering',
					description: 'Flyttstäd, fönsterputs och specialuppdrag.',
					href: '/tjanster/specialstadning-och-sanering',
					icon: 'SprayCan'
				},
				{
					title: 'Service & Övrigt',
					description: 'Flexibla lösningar och hushållsnära tjänster.',
					href: '/tjanster/service-och-ovrigt',
					icon: 'Settings'
				}
			]
		},
		{label: 'Varför oss', href: '/varfor-oss'},
		{label: 'Priser', href: '/priser'},
		{label: 'Städguide', href: '/stadguide'},
		{label: 'Frågor & Svar', href: '/fragor-och-svar'}
	],
	cta: {
		label: 'Begär offert',
		href: '/#contact'
	}
};
