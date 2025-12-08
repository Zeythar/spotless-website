import type {WhyChooseUsData} from '$lib/types';

export const whyChooseUsData: WhyChooseUsData = {
	title: 'Varför Spotless?',
	description:
		'Vi är inte bara ett städföretag - vi är din partner för en renare och trivsammare vardag',
	stats: [
		{number: '5+', label: 'Års erfarenhet i branschen'},
		{number: '5000+', label: 'Genomförda städuppdrag'},
		{number: '100+', label: 'Nöjda återkommande kunder'},
		{number: '98%', label: 'Av kunderna rekommenderar oss'}
	],
	features: [
		{
			icon: 'Shield',
			title: 'Försäkrade & Certifierade',
			description:
				'Alla våra tjänster är fullständigt försäkrade och utförs av certifierade städare med branschutbildning.',
			category: 'professional'
		},
		{
			icon: 'Award',
			title: 'Kvalitetsgaranti',
			description:
				'Vi garanterar högsta kvalitet på alla uppdrag. Inte nöjd? Vi kommer tillbaka och åtgärdar det utan extra kostnad.',
			category: 'professional'
		},
		{
			icon: 'Users',
			title: 'Fast Kontaktperson',
			description:
				'Du får en dedikerad kontaktperson som känner dina behov och säkerställer kontinuitet i servicen.',
			category: 'professional'
		},
		{
			icon: 'Zap',
			title: 'Snabb Service',
			description:
				'Behöver du akut städhjälp? Vi kan ofta vara på plats inom 24-48 timmar från kontakt.',
			category: 'professional'
		},
		{
			icon: 'TrendingUp',
			title: 'Över 5 Års Erfarenhet',
			description:
				'Med över fem år i branschen har vi expertis och erfarenhet att hantera alla typer av städuppdrag.',
			category: 'professional'
		},
		{
			icon: 'Clock',
			title: 'Flexibla Tider',
			description:
				'Vi anpassar våra städtider efter ditt schema. Städning kan ske tidigt på morgonen, kvällar eller helger.',
			category: 'home'
		},
		{
			icon: 'Leaf',
			title: 'Miljövänligt',
			description:
				'Vi använder miljöcertifierade produkter som är säkra för dig, dina barn, husdjur och miljön.',
			category: 'home'
		},
		{
			icon: 'Heart',
			title: 'Personlig Service',
			description:
				'Vi bryr oss om varje kund. Din nöjdhet och trygghet är vår högsta prioritet.',
			category: 'home'
		},
		{
			icon: 'CheckCircle2',
			title: 'Inga Bindningstider',
			description:
				'Flexibla avtal utan bindningstid. Vi vill att du stannar för att du är nöjd, inte för att du är bunden.',
			category: 'home'
		}
	],
	certifications: {
		title: 'Certifieringar & Kvalitet',
		description:
			'Vi tar kvalitet och säkerhet på största allvar. Därför är vi certifierade enligt branschens högsta standarder och följer alla relevanta bestämmelser och regler.',
		list: [
			'ROT-certifierade',
			'Miljödiplomerade',
			'Arbetsmiljöcertifierade',
			'Försäkrade enligt branschstandard',
			'F-skattebevis'
		],
		image: {
			src: '/images/why-choose-us/vacuum-cleaning.jpg',
			alt: 'Professionell städning'
		}
	},
	testimonials: {
		title: 'Vad säger våra kunder?',
		items: [
			{
				title: 'Fantastisk service!',
				text: '"Spotless har städat vårt hem i två år nu. Alltid samma kvalitet och de är så trevliga och professionella. Kan varmt rekommendera!"',
				author: '- Anna, Söråker'
			},
			{
				title: 'Bästa kontorsstädningen',
				text: '"Vi har provat flera städföretag men Spotless är överlägset bäst. Flexibla, pålitliga och alltid ett perfekt resultat."',
				author: '- Johan, företagare'
			},
			{
				title: 'Proffsig flyttstädning',
				text: '"Flyttstädningen godkändes direkt av hyresvärden. Mycket noggranna och priset var dessutom bra. Rekommenderas varmt!"',
				author: '- Sara, Sundsvall'
			}
		]
	}
};
