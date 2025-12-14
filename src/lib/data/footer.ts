import type {FooterData} from '$lib/types';

export const footerData: FooterData = {
	companyInfo: {
		description: 'Professionell städning för hem och företag sedan 2019'
	},
	sections: {
		pages: {
			title: 'Sidor',
			links: [
				{label: 'Hem', href: '/'},
				{label: 'Varför oss', href: '/varfor-oss'},
				{label: 'Priser', href: '/priser'},
				{label: 'Städguide', href: '/stadguide'},
				{label: 'Frågor & Svar', href: '/fragor-och-svar'},
				{label: 'Integritetspolicy', href: '/integritetspolicy'}
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
			phone: '070-245 17 90, 073-568 64 67',
			phoneLink: 'tel:0735686467',
			email: 'info@spotlessnorrland.se',
			emailLink: 'mailto:info@spotlessnorrland.se',
			social: [
				{icon: 'Facebook', href: '#facebook', label: 'Facebook'},
				{icon: 'Instagram', href: '#instagram', label: 'Instagram'}
			]
		}
	},
	copyright: (year: number) =>
		`&copy; ${year} Spotless Städ & Service. Alla rättigheter förbehållna.`
};
