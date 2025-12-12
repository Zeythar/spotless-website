import type {PricesData} from '$lib/types';

export const pricesData: PricesData = {
	title: 'Priser & Paket',
	description:
		'Transparenta priser utan dolda kostnader. Alla offerter är kostnadsfria och förbindelsefria.',
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
				'RUT-avdrag möjligt',
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
		title: 'RUT- & ROT-avdrag - Sänk din kostnad',
		description:
			'Som privatperson har du rätt till skattereduktion på många av våra tjänster. Vi drar av beloppet direkt på fakturan.',
		list: [
			'Upp till 50% på städtjänster (RUT)',
			'Upp till 30% på service- och hantverkstjänster (ROT)',
			'Vi sköter all administration',
			'Avdraget görs direkt på fakturan'
		]
	},
	faq: {
		title: 'Vanliga frågor om priser',
		items: [
			{
				question: 'Hur beräknas priset för städning?',
				answer: 'Priset beror på flera faktorer: typ av städning, bostadens/lokalens storlek, frekvens och omfattning. Vi gör alltid ett kostnadsfritt hembesök och lämnar en transparent offert innan vi påbörjar arbetet.'
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
				answer: 'Timpriset inkluderar arbetskostnad, alla städprodukter, utrustning och material. Du behöver inte tillhandahålla något själv.'
			}
		]
	},
	cta: {
		title: 'Vill du veta exakt vad det kostar?',
		description: 'Begär en kostnadsfri offert idag - utan förbindelser',
		buttonText: 'Begär kostnadsfri offert'
	}
};
