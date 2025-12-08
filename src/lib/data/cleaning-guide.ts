import type {CleaningGuideData} from '$lib/types';

export const cleaningGuideData: CleaningGuideData = {
	title: 'Städguide & Tips',
	description: 'Praktiska råd och tips för att hålla ditt hem rent mellan våra städbesök',
	quickTips: {
		title: 'Snabba städtips',
		items: [
			{
				title: 'Börja uppifrån',
				description:
					'Städa alltid från tak till golv för att fånga upp damm som faller ner.'
			},
			{
				title: 'Använd mikrofiberdukar',
				description: 'Mikrofiberdukar tar upp mer damm och bakterier än vanliga trasor.'
			},
			{
				title: 'Ventilera ordentligt',
				description:
					'Öppna fönster under städning för bättre luftkvalitet och snabbare torkning.'
			},
			{
				title: 'Skölj rengöringsmedel',
				description:
					'Skölj alltid av ytor ordentligt efter städning för att undvika rester.'
			},
			{
				title: 'Rengör städredskap',
				description: 'Tvätta moppar och trasor regelbundet för bästa resultat.'
			},
			{
				title: 'Röj först',
				description: 'Plocka undan saker innan du börjar städa för att spara tid.'
			}
		]
	},
	roomTips: {
		title: 'Rumsspecifika tips',
		kitchen: {
			title: 'Kökets städrutiner',
			description: 'Så håller du köket rent och fräscht',
			badge: 'Kök',
			image: {
				src: '/images/cleaning-guide/kitchen.jpg',
				alt: 'Kök'
			},
			tips: [
				{
					task: 'Daglig rengöring',
					description:
						'Torka av bänkar, diskho och spis efter matlagning. Torka upp spill direkt.'
				},
				{
					task: 'Kylskåpet',
					description:
						'Rengör kylskåpet en gång i månaden. Släng gamla rester och torka av hyllor.'
				},
				{
					task: 'Ugnen',
					description:
						'Använd ugnsspray eller bikarbonat för att lossa inbränt fett. Låt verka i 30 min.'
				},
				{
					task: 'Diskmaskin',
					description:
						'Rengör filtret månadsvis och kör ett tomt program med diskmaskinrengörare.'
				},
				{
					task: 'Vitvaror',
					description:
						'Torka av utsidan av vitvaror med milt diskmedel. Glöm inte handtagen!'
				},
				{
					task: 'Skåp',
					description: 'Rengör skåp in- och utvändigt 2-3 gånger per år vid storstädning.'
				}
			]
		},
		bathroom: {
			title: 'Badrummets städrutiner',
			description: 'Håll badrummet rent och fritt från mögel',
			badge: 'Badrum',
			image: {
				src: '/images/cleaning-guide/bathroom.jpg',
				alt: 'Badrum'
			},
			tips: [
				{
					task: 'Daglig rengöring',
					description:
						'Torka av tvättställ och kranar dagligen. Använd squeegee på duschdörrar.'
				},
				{
					task: 'Bekämpa mögel',
					description:
						'Ventilera efter dusch. Använd klorin på mögelskador och behandla fuger.'
				},
				{
					task: 'Toalettstol',
					description:
						'Rengör med toalettborste och rengöringsmedel. Glöm inte utsidan och sittringen.'
				},
				{
					task: 'Avlopp',
					description: 'Häll kokande vatten i avloppet månadsvis för att förebygga stopp.'
				},
				{
					task: 'Speglar',
					description:
						'Använd glasrengöringsmedel eller en blandning av vatten och vinäger.'
				},
				{
					task: 'Duschkabin',
					description:
						'Rengör kakelfogarna med tandborste och rengöringsmedel för djuprengöring.'
				}
			]
		}
	},
	seasonalTasks: {
		title: 'Säsongsbetonat städschema',
		items: [
			{
				season: 'Vår',
				tasks: [
					'Fönsterputsning in- och utvändigt',
					'Rengöring av balkonger och utomhusmöbler',
					'Genomgång av garderober - vårplock',
					'Dammsugning bakom möbler',
					'Rengöring av element och värmepumpar'
				]
			},
			{
				season: 'Sommar',
				tasks: [
					'Djuprengöring av kök och vitvaror',
					'Tvätt av gardiner och mattor',
					'Rengöring av grillplatser',
					'Underhåll av trädgård och uteplatser',
					'Sköljning av takrännor'
				]
			},
			{
				season: 'Höst',
				tasks: [
					'Förvaring av sommarmöbler',
					'Rengöring av entré och hallmattor',
					'Genomgång av garderober - höstplock',
					'Rengöring av lampor och armaturer',
					'Förberedelser för vinterförvaring'
				]
			},
			{
				season: 'Vinter',
				tasks: [
					'Städning av förråd och källare',
					'Genomgång av garderober och skåp',
					'Djuprengöring av badrum',
					'Organisering och sortering',
					'Rengöring av inomhusmiljön extra noga'
				]
			}
		]
	},
	ecoTips: {
		title: 'Miljövänlig städning',
		items: [
			{
				icon: 'Droplets',
				title: 'Naturliga alternativ',
				tips: [
					'Bikarbonat - universalrengöringsmedel för fläckar',
					'Ättikssprit - bra mot kalk och bakterier',
					'Citronsaft - naturlig blekning och fräsch doft',
					'Såpa - mild men effektiv rengöring'
				]
			},
			{
				icon: 'Sparkles',
				title: 'Miljövänliga vanor',
				tips: [
					'Använd mikrofiberdukar som kan tvättas',
					'Välj koncentrerade produkter för mindre förpackningar',
					'Dosera rätt - mer är inte bättre',
					'Återanvänd förpackningar när du fyller på'
				]
			}
		]
	},
	cta: {
		title: 'Vill du slippa städa själv?',
		description: 'Låt våra proffs ta hand om städningen medan du ägnar tid åt det du tycker om',
		buttonText: 'Begär offert'
	}
};
