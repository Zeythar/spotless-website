import type {ServicesData} from '$lib/types';

export const serviceCategories: ServicesData = {
	hem: {
		id: 'hem',
		title: 'Hem & Privatstädning',
		description: 'Professionell hemstädning anpassad efter dina behov och schema',
		longDescription:
			'Vi på Spotless erbjuder omfattande hemstädningstjänster för privatpersoner i hela Sundsvalls kommun och närområden. Oavsett om du behöver regelbunden hemstädning, en grundlig storstädning eller akut städhjälp, så har vi rätt lösning för dig. Våra erfarna städare använder miljövänliga produkter och modern utrustning för att ge ditt hem den omsorg det förtjänar. Vi förstår att varje hem är unikt, därför skräddarsyr vi våra tjänster efter dina specifika önskemål och behov.',
		services: [
			{
				name: 'Hemstädning',
				description: 'Regelbunden städning av ditt hem enligt dina önskemål',
				features: [
					'Dammsugning och våttorkning av alla golv',
					'Dammtorkning av ytor och möbler',
					'Rengöring av kök och badrum',
					'Tömning av papperskorgar',
					'Putsning av speglar och vägguttag',
					'Flexibel schemaläggning'
				]
			},
			{
				name: 'Storstädning',
				description: 'Omfattande städning av hela hemmet inklusive svåråtkomliga områden',
				features: [
					'Alla tjänster från hemstädning ingår',
					'Rengöring av fönster invändigt',
					'Torkning av skåp in- och utvändigt',
					'Avfrostning och rengöring av kyl och frys',
					'Ugnsrengöring',
					'Rengöring av dörrar, karmar och lister'
				]
			},
			{
				name: 'Flyttstädning',
				description: 'Garanterad flyttstädning godkänd av hyresvärdar',
				features: [
					'Rotcertifierad enligt branschstandard',
					'Garanterad godkännande',
					'Rengöring av alla ytor, in- och utvändigt',
					'Fönsterputsning ingår',
					'Rengöring av vitvaror och vattenlås',
					'Besiktningsrapport ingår'
				]
			},
			{
				name: 'Akutstädning',
				description: 'Snabb städinsats när du behöver det som mest',
				features: [
					'Tillgänglig samma dag',
					'Städning efter händelse eller fest',
					'Snabb återställning av hemmet',
					'Flexibel omfattning',
					'Erfarna städare',
					'24/7 tillgänglighet'
				]
			},
			{
				name: 'Fönsterputs',
				description: 'Professionell fönsterputsning för kristallklara fönster',
				features: [
					'Invändig och utvändig rengöring',
					'Rengöring av karmar och bleck',
					'Rengöring av persienner vid önskemål',
					'Inga ränder eller fläckar',
					'Miljövänliga produkter',
					'Säsongsanpassad service'
				]
			}
		],
		benefits: [
			'Mer fritid för dig och din familj',
			'Professionellt resultat varje gång',
			'Miljövänliga städprodukter som standard',
			'Erfarna och försäkrade städare',
			'Flexibel schemaläggning efter dina behov',
			'Transparenta priser utan dolda kostnader',
			'Kvalitetsgaranti på alla tjänster',
			'Personlig kontaktperson för ditt konto'
		],
		process: [
			'Kontakta oss för ett kostnadsfritt hembesök där vi går igenom dina önskemål och behov',
			'Vi skapar en skräddarsydd städplan och lämnar en tydlig offert',
			'Du får en fast kontaktperson och städare som lär känna ditt hem',
			'Vi utför städningen enligt överenskommet schema med högsta kvalitet',
			'Efter varje städning gör vi en kvalitetskontroll för att säkerställa din nöjdhet',
			'Vi följer upp regelbundet för att säkerställa att allt fungerar perfekt'
		],
		faq: [
			{
				question: 'Hur ofta bör jag låta städa mitt hem?',
				answer: 'Det beror på dina behov och livssituation. Många av våra kunder väljer varannan vecka för grundlig städning, medan andra föredrar veckovis städning. Vi kan också erbjuda månadsvis storstädning kombinerat med egen underhållsstädning.'
			},
			{
				question: 'Behöver jag vara hemma under städningen?',
				answer: 'Nej, det behöver du inte. Många av våra kunder lämnar nyckel eller kodlås så att vi kan städa när det passar dem bäst. Alla våra städare är noggrannt kontrollerade och försäkrade.'
			},
			{
				question: 'Vilka städprodukter använder ni?',
				answer: 'Vi använder miljövänliga och allergivänliga städprodukter som standard. Har du specifika önskemål eller allergier kan vi använda dina egna produkter eller anpassa vårt sortiment efter dina behov.'
			},
			{
				question: 'Vad ingår i en flyttstädning?',
				answer: 'Vår flyttstädning är rotcertifierad och uppfyller alla krav från hyresvärdar och bostadsrättsföreningar. Vi städar alla ytor, både in- och utvändigt, inklusive skåp, vitvaror, fönster och alla utrymmen. En besiktningsrapport ingår.'
			},
			{
				question: 'Kan jag få samma städare varje gång?',
				answer: 'Ja, vi strävar alltid efter att ge dig samma städare så att ni bygger en relation och städaren lär känna ditt hem och dina preferenser. Detta ger bäst resultat och kontinuitet.'
			}
		]
	},
	foretag: {
		id: 'foretag',
		title: 'Företags- & Lokalstädning',
		description: 'Skräddarsydda städlösningar för företag och kommersiella lokaler',
		longDescription:
			'Ett rent och välskött kontor eller lokal är inte bara en fråga om estetik - det handlar om att skapa en professionell arbetsmiljö som främjar produktivitet och välmående. Spotless erbjuder kompletta städlösningar för företag i alla branscher. Vi förstår att varje verksamhet har unika behov, därför arbetar vi nära våra kunder för att utveckla skräddarsydda städprogram som passar er verksamhet, budget och schema. Våra erfarna team arbetar diskret och professionellt, ofta utanför kontorstid för att inte störa er dagliga verksamhet.',
		services: [
			{
				name: 'Kontorsstädning',
				description: 'Daglig eller regelbunden städning av kontorsmiljöer',
				features: [
					'Städning av arbetsytor och skrivbord',
					'Rengöring av mötesrum och gemensamma utrymmen',
					'Kök och pausrum',
					'Toaletter och omklädningsrum',
					'Golvvård och dammsugning',
					'Tömning av papperskorgar'
				]
			},
			{
				name: 'Butikstädning',
				description: 'Anpassad städning för detaljhandel och butiker',
				features: [
					'Städning före eller efter öppettid',
					'Golvvård anpassad för kundflöde',
					'Rengöring av skyltfönster',
					'Dammning av hyllor och produkter',
					'Anpassning efter säsong och kampanjer',
					'Diskret städning under öppettid vid behov'
				]
			},
			{
				name: 'Hotellstädning',
				description: 'Professionell hotellstädning enligt branschstandard',
				features: [
					'Städning av hotellrum enligt checklistor',
					'Bäddning med hotellstandard',
					'Påfyllning av amenities',
					'Snabb omsättning mellan gäster',
					'Städning av allmänna utrymmen',
					'Flexibel bemanning efter beläggning'
				]
			},
			{
				name: 'Skolstädning',
				description: 'Omfattande städning av utbildningslokaler',
				features: [
					'Klassrum och korridorer',
					'Matsalar och kök',
					'Toaletter och sanitära utrymmen',
					'Gymnastikhallar och omklädningsrum',
					'Extra fokus på hygien och bakteriereduktion',
					'Anpassning efter skollov och terminer'
				]
			},
			{
				name: 'Trappstädning',
				description: 'Regelbunden städning av trappuppgångar och entréer',
				features: [
					'Dammsugning och våttorkning av trapphus',
					'Rengöring av räcken och ledstänger',
					'Torkning av fönster och ljusinsläpp',
					'Tömning av soprum',
					'Putsning av mässingsdetaljer',
					'Vinterdaglig halkbekämpning'
				]
			},
			{
				name: 'Lagerstädning',
				description: 'Industriell städning av lager och produktionslokaler',
				features: [
					'Städning av stora ytor effektivt',
					'Dammreducering i produktionsmiljöer',
					'Rengöring av maskiner och utrustning',
					'Högtryckstvätt vid behov',
					'Anpassning efter produktionsstopp',
					'Arbetsmiljöfokus och säkerhet'
				]
			},
			{
				name: 'Byggstädning',
				description: 'Grovstädning och slutstädning av byggprojekt',
				features: [
					'Grovstädning under byggtid',
					'Slutstädning inför inflyttning',
					'Borttagning av byggdamm och rester',
					'Rengöring av fönster och ytor',
					'Golvvård och behandling',
					'Samarbete med byggledning'
				]
			}
		],
		benefits: [
			'Professionell företagsprofil med rena lokaler',
			'Ökad produktivitet i ren arbetsmiljö',
			'Minskad sjukfrånvaro genom bättre hygien',
			'Flexibla städtider som passar er verksamhet',
			'Erfarna team med branschkunskap',
			'Kvalitetssäkrade rutiner och checklistor',
			'En kontaktperson för er verksamhet',
			'Transparenta avtal utan bindningstid'
		],
		process: [
			'Vi gör ett kostnadsfritt besök på plats för att förstå era behov och lokaler',
			'Vi tar fram ett skräddarsytt städprogram med tydlig omfattning och frekvens',
			'Ni får en fast offert utan dolda kostnader',
			'Vi tilldelar ett erfaret team som blir bekanta med era lokaler',
			'Regelbunden städning enligt schema med kvalitetskontroller',
			'Löpande uppföljning och anpassning efter era behov'
		],
		faq: [
			{
				question: 'Kan ni städa utanför kontorstid?',
				answer: 'Ja, det är mycket vanligt att vi städar tidigt på morgonen eller på kvällen för att inte störa er verksamhet. Vi anpassar oss helt efter era önskemål och arbetstider.'
			},
			{
				question: 'Hur ofta behöver vårt kontor städas?',
				answer: 'Det beror på storlek, antal anställda och typ av verksamhet. Många kontor väljer daglig eller 2-3 gånger per vecka för grundstädning, kompletterat med månatlig storstädning. Vi hjälper er att hitta rätt frekvens.'
			},
			{
				question: 'Vad händer om vår ordinarie städare är sjuk?',
				answer: 'Vi har alltid backup-personal som kan hoppa in. Era lokaler städas enligt schema oavsett, och ersättaren får tydliga instruktioner om era specifika behov.'
			},
			{
				question: 'Kan ni hantera specialrengöring av datorer och elektronik?',
				answer: 'Ja, våra städare är utbildade i att städa runt känslig elektronik på ett säkert sätt. Vi använder lämpliga produkter och metoder för att rengöra skärmar, tangentbord och annan utrustning.'
			},
			{
				question: 'Har ni egna städprodukter och utrustning?',
				answer: 'Ja, vi kommer alltid fullt utrustade med professionell utrustning och miljövänliga städprodukter. Har ni specifika önskemål kan vi givetvis anpassa oss.'
			}
		]
	},
	special: {
		id: 'special',
		title: 'Specialstädning & Sanering',
		description: 'Professionell sanering och djuprengöring i krävande miljöer',
		longDescription:
			'Vissa städsituationer kräver specialistkompetens och särskild utrustning. Spotless har lång erfarenhet av avancerad sanering och specialstädning i utmanande miljöer. Vi hanterar allt från socialsanering och grovsanering till liksanering och vård av golv och mattor. Vårt team är utbildat enligt branschens högsta standarder och arbetar alltid med diskretion, respekt och professionalism. Vi förstår att dessa situationer ofta är känsliga, och vi hanterar varje uppdrag med största omsorg och empati. Alla våra saneringstjänster utförs enligt strikta säkerhetsprotokoll och miljöbestämmelser.',
		services: [
			{
				name: 'Socialsanering',
				description: 'Omfattande sanering av bostäder med svår föroreningsgrad',
				features: [
					'Borttagning av skräp och grovsopor',
					'Djuprengöring och sanering av alla ytor',
					'Luktborttagning och sanering',
					'Behandling mot skadedjur vid behov',
					'Återställning till normalt skick',
					'Diskret hantering av hela processen'
				]
			},
			{
				name: 'Liksanering',
				description: 'Professionell och respektfull sanering efter dödsfall',
				features: [
					'Certifierad hantering enligt branschstandard',
					'Fullständig desinficering och sanering',
					'Borttagning av biologiska ämnen',
					'Luktborttagning med professionell utrustning',
					'Hantering av dödsbon vid behov',
					'Diskret och empatisk service'
				]
			},
			{
				name: 'Dödsbo',
				description: 'Varsam och respektfull städning av dödsbo',
				features: [
					'Tömning och bortforsling',
					'Fullständig städning av bostaden',
					'Diskret och respektfull hantering',
					'Samarbete med anhöriga',
					'Helhetslösning för dödsbon',
					'Omtanke om hemmet'
				]
			},
			{
				name: 'Dödsbo',
				description: 'Varsam och respektfull städning av dödsbo',
				features: [
					'Tömning och bortforsling',
					'Fullständig städning av bostaden',
					'Diskret och respektfull hantering',
					'Samarbete med anhöriga',
					'Helhetslösning för dödsbon',
					'Omtanke om hemmet'
				]
			},
			{
				name: 'Golvvård',
				description: 'Professionell vård och behandling av alla golvtyper',
				features: [
					'Kristallisering av marmor och kalksten',
					'Slipning och lackering av trägolv',
					'Vård av klinkergolv och kakel',
					'Mattbehandling och impregnering',
					'Borttagning av gamla ytskikt',
					'Regelbunden underhållsservice'
				]
			},
			{
				name: 'Mattvätt',
				description: 'Djuprengöring av mattor och textilier',
				features: [
					'Professionell matttvätt på plats eller i tvätteri',
					'Fläck- och luktborttagning',
					'Impregnering för långvarigt skydd',
					'Behandling av orientaliska och exklusiva mattor',
					'Möbelklädsel och gardinrengöring',
					'Snabbtorkning och miljövänliga metoder'
				]
			}
		],
		benefits: [
			'Specialiserad kompetens för krävande uppdrag',
			'Diskret och respektfull hantering',
			'Certifierad utrustning och metoder',
			'Fullständig sanering enligt branschstandard',
			'Stöd genom hela processen',
			'Samarbete med försäkringsbolag',
			'Dokumentation och certifikat',
			'Tillgängliga för akuta situationer'
		],
		process: [
			'Kontakta oss för en diskret konsultation där vi bedömer situationen',
			'Vi gör en kostnadsfri besiktning och lämnar en detaljerad offert',
			'Vi planerar genomförandet med hänsyn till diskretionsbehov',
			'Professionell genomförd sanering med rätt utrustning och metoder',
			'Kvalitetskontroll och dokumentation av genomfört arbete',
			'Uppföljning och certifikat att lokalen är återställd'
		],
		faq: [
			{
				question: 'Hur snabbt kan ni påbörja en sanering?',
				answer: 'Vi förstår att många saneringssituationer är brådskande. I akuta fall kan vi ofta påbörja arbetet inom 24-48 timmar efter kontakt. Kontakta oss så hittar vi en lösning som passar er situation.'
			},
			{
				question: 'Hanterar ni försäkringsärenden?',
				answer: 'Ja, vi har stor erfarenhet av att arbeta med försäkringsbolag och kan hjälpa till med dokumentation och kommunikation. Vi tar fram detaljerade rapporter som underlättar försäkringsprocessen.'
			},
			{
				question: 'Är saneringen diskret?',
				answer: 'Absolut. Vi förstår att många saneringssituationer är känsliga. Vi arbetar diskret, använder omärkta fordon vid behov och respekterar fullständig tystnadsplikt.'
			},
			{
				question: 'Vilken utrustning använder ni vid sanering?',
				answer: 'Vi använder professionell saneringsutrustning inklusive ozongeneratorer för luktborttagning, HEPA-filter, desinfektionsmedel av högsta klass och skyddsutrustning enligt branschstandard.'
			},
			{
				question: 'Får jag någon dokumentation efter saneringen?',
				answer: 'Ja, efter genomförd sanering får ni ett certifikat och dokumentation som visar att lokalen är återställd till säkert och hygieniskt skick. Detta är viktigt för försäkring och fastighetsägare.'
			}
		]
	},
	service: {
		id: 'service',
		title: 'Service, Fastighet & Övrigt',
		description: 'Kompletta fastighetstjänster och servicelösningar',
		longDescription:
			'Spotless erbjuder mycket mer än traditionell städning. Vi är din kompletta partner för fastighetsskötsel och servicetjänster. Från trädgårdsskötsel och gräsklippning till målning - vi hjälper dig att hålla din fastighet i toppskick året runt. Vårt breda tjänsteutbud gör att du kan använda en enda leverantör för alla dina fastighets- och servicebehov, vilket sparar tid och förenklar administration. Vi arbetar både med privatpersoner, bostadsrättsföreningar och fastighetsbolag.',
		services: [
			{
				name: 'Gräsklippning',
				description: 'Professionell gräsklippning och trädgårdsskötsel',
				features: [
					'Regelbunden gräsklippning under säsong',
					'Kantstickning och finishing',
					'Ogräsbekämpning i gräsmatta',
					'Gödsling och översådd vid behov',
					'Vertikalskärning för hälsosammare gräs',
					'Höst- och vårstädning av trädgården'
				]
			},
			{
				name: 'Skyliftarbete',
				description: 'Arbete på hög höjd med professionell utrustning',
				features: [
					'Fönsterputs på höga byggnader',
					'Rengöring av takrännor',
					'Fasadtvätt och underhåll',
					'Målning på hög höjd',
					'Beskärning av höga träd och buskar',
					'Certifierad personal och utrustning'
				]
			},
			{
				name: 'Inomhusmålning',
				description: 'Professionell målning av inomhusutrymmen',
				features: [
					'Målning av väggar och tak',
					'Spackling och förberedande arbeten',
					'Lackering av dörrar och foder',
					'Tapetsering vid behov',
					'Färgkonsultation ingår',
					'Skydd av möbler och golv'
				]
			},
			{
				name: 'Fasadmålning',
				description: 'Omfattande fasadmålning och underhåll',
				features: [
					'Målning av trä- och putsade fasader',
					'Förberedande arbeten och slipning',
					'Röta- och mögelbehandling',
					'Högtryckstvätt av fasader',
					'Arbete enligt säkerhetsföreskrifter',
					'Långvariga färgsystem för bästa resultat'
				]
			},
			{
				name: 'Mattvätt',
				description: 'Djuprengöring av mattor och textilier för kontor',
				features: [
					'Professionell matttvätt på plats',
					'Fläck- och luktborttagning',
					'Snabbtorkning och miljövänliga metoder',
					'Bidrar till bättre arbetsmiljö',
					'Förlänger mattans livslängd',
					'Anpassad för kontorsmiljöer'
				]
			}
		],
		benefits: [
			'En leverantör för alla fastighetsbehov',
			'Erfarna hantverkare och servicetekniker',
			'Flexibel schemaläggning året runt',
			'Professionell utrustning för alla uppdrag',
			'Transparent prissättning per timme eller projekt',
			'Försäkrade tjänster för din trygghet',
			'Snabb respons på akuta behov',
			'Långsiktiga serviceavtal tillgängliga'
		],
		process: [
			'Kontakta oss med en beskrivning av ditt servicebehov',
			'Vi gör en bedömning och lämnar en prisuppskattning',
			'Vi bokar in uppdraget vid en tidpunkt som passar dig',
			'Våra servicetekniker utför arbetet professionellt',
			'Du granskar resultatet och godkänner arbetet',
			'Vi följer upp för att säkerställa din nöjdhet'
		],
		faq: [
			{
				question: 'Hur bokar jag era servicetjänster?',
				answer: 'Kontakta oss via telefon, e-post eller kontaktformuläret på hemsidan. Beskriv vad du behöver hjälp med så återkommer vi med en prisuppskattning och förslag på tid.'
			},
			{
				question: 'Tar ni med egen utrustning?',
				answer: 'Ja, vi kommer alltid fullt utrustade med allt som behövs för uppdraget. För vissa uppdrag som målning kan vi behöva diskutera färgval och material i förväg.'
			},
			{
				question: 'Kan ni hjälpa till med akuta reparationer?',
				answer: 'Ja, vi erbjuder jour-service för vissa akuta ärenden. Kontakta oss så bedömer vi hur snabbt vi kan hjälpa till baserat på ärendets karaktär.'
			},
			{
				question: 'Arbetar ni med bostadsrättsföreningar?',
				answer: 'Ja, vi har många bostadsrättsföreningar och fastighetsbolag som kunder. Vi kan teckna ramavtal för löpande fastighetsskötsel och service.'
			},
			{
				question: 'Hur prissätter ni tjänsterna?',
				answer: 'Det beror på typen av uppdrag. Vissa tjänster som gräsklippning prissätts per tillfälle eller säsong. Vi ger alltid en tydlig offert innan arbetet påbörjas.'
			}
		]
	}
};

export const servicePageData = {
	hero: {
		buttonText: 'Begär offert'
	},
	sections: {
		services: {
			title: (categoryTitle: string) => `Våra tjänster inom ${categoryTitle}`
		},
		benefits: {
			title: 'Fördelar med våra tjänster'
		},
		process: {
			title: 'Så går det till'
		},
		faq: {
			title: 'Vanliga frågor'
		},
		cta: {
			title: 'Redo att komma igång?',
			description:
				'Kontakta oss idag för en kostnadsfri offert och upplev skillnaden med professionell städning',
			buttonText: 'Begär offert nu'
		}
	}
};
