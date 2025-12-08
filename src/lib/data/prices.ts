import type {PricesData} from '$lib/types';

export const pricesData: PricesData = {
	title: 'Priser & Paket',
	description:
		'Transparenta priser utan dolda kostnader. Alla offerter är kostnadsfria och förpliktelsefria',
	pricingTiers: [
		{
			name: 'Hemstädning',
			description: 'Perfekt för privatpersoner',
			price: 'Offert efter behov',
			popular: false,
			features: [
				'Regelbunden städning',
				'Flexibel schemaläggning',
				'Samma städare varje gång',
				'Miljövänliga produkter',
				'ROT-avdrag möjligt',
				'Ingen bindningstid'
			]
		},
		{
			name: 'Företagsstädning',
			description: 'För kontor och lokaler',
			price: 'Offert efter behov',
			popular: true,
			features: [
				'Anpassad städplan',
				'Städning utanför kontorstid',
				'Kvalitetskontroller',
				'Fast kontaktperson',
				'Backup-städare',
				'Månadsfakturering'
			]
		},
		{
			name: 'Specialstädning',
			description: 'För krävande uppdrag',
			price: 'Offert efter besiktning',
			popular: false,
			features: [
				'Certifierad sanering',
				'Professionell utrustning',
				'Diskret hantering',
				'Försäkringssamarbete',
				'Dokumentation ingår',
				'Akut service tillgänglig'
			]
		}
	],
	rotInfo: {
		title: 'ROT-avdrag - Sänk din kostnad med 30%',
		description:
			'Som privatperson har du rätt till ROT-avdrag på många av våra tjänster. Det innebär att du får tillbaka 30% av arbetskostnaden via skatten.',
		list: [
			'30% skattereduktion på arbetskostnaden',
			'Max 75 000 kr per person och år',
			'Vi sköter all administration',
			'Pengarna tillbaka via deklarationen'
		]
	},
	faq: {
		title: 'Vanliga frågor om priser',
		items: [
			{
				question: 'Hur beräknas priset för städning?',
				answer: 'Priset beror på flera faktorer: typ av städning, bostadens/lokalens storlek, frekvens och omfattning. Vi gör alltid en kostnadsfri besiktning och lämnar en transparent offert innan vi påbörjar arbetet.'
			},
			{
				question: 'Finns det några dolda kostnader?',
				answer: 'Nej, vi har inga dolda kostnader. Priset vi anger i offerten är det du betalar. Eventuella extratjänster diskuteras och prissätts alltid i förväg.'
			},
			{
				question: 'Kan jag få rabatt vid regelbunden städning?',
				answer: 'Ja, vi erbjuder förmånliga priser för kunder som tecknar avtal om regelbunden städning. Kontakta oss för att diskutera ett anpassat avtal.'
			},
			{
				question: 'Vad ingår i timpriset?',
				answer: 'Timpriset inkluderar arbetskostnad, alla städprodukter, utrustning och materialhantering. Du behöver inte tillhandahålla något själv.'
			}
		]
	},
	cta: {
		title: 'Vill du veta exakt vad det kostar?',
		description: 'Begär en kostnadsfri offert idag - ingen förpliktelse',
		buttonText: 'Begär kostnadsfri offert'
	}
};
