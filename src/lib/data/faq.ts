import type {FaqData} from '$lib/types';

export const faqData: FaqData = {
	title: 'Vanliga frågor',
	description: 'Här hittar du svar på de vanligaste frågorna om våra städtjänster',
	general: {
		title: 'Allmänna frågor',
		items: [
			{
				question: 'Vad kostar städtjänster hos Spotless?',
				answer: 'Priset varierar beroende på typ av tjänst, frekvens och omfattning. För hemstädning börjar priserna på ca 300 kr/timme, medan specialiserade tjänster som sanering prissätts efter behov. Kontakta oss för en kostnadsfri offert anpassad efter dina behov.'
			},
			{
				question: 'Vilka områden täcker ni?',
				answer: 'Vi täcker hela Sundsvalls kommun och närliggande områden. För vissa specialtjänster kan vi även ta uppdrag längre bort. Kontakta oss så berättar vi om vi kan hjälpa dig i ditt område.'
			},
			{
				question: 'Är era städare försäkrade?',
				answer: 'Ja, alla våra medarbetare är fullt försäkrade. Vi har både ansvarsförsäkring och olycksfallsförsäkring som täcker eventuella skador under arbetet.'
			},
			{
				question: 'Är era städare anställda eller inhyrda?',
				answer: 'Alla våra städare är fast anställda av Spotless. Vi tror på långsiktiga anställningar vilket ger kontinuitet och kvalitet för våra kunder.'
			},
			{
				question: 'Hur säkerställer ni kvaliteten?',
				answer: 'Vi har ett strukturerat kvalitetssäkringssystem med regelbundna kontroller, utbildning av personal och uppföljning med kunder. Alla våra städare följer detaljerade checklistor och vi gör regelbundna kvalitetskontroller.'
			},
			{
				question: 'Vad händer om jag inte är nöjd med städningen?',
				answer: 'Att du är nöjd är vår högsta prioritet. Om du inte är nöjd med resultatet, kontakta oss inom 24 timmar så kommer vi tillbaka och åtgärdar det utan extra kostnad. Vi har kvalitetsgaranti på alla våra tjänster.'
			},
			{
				question: 'Använder ni miljövänliga produkter?',
				answer: 'Ja, vi använder miljövänliga och allergivänliga städprodukter som standard. Våra produkter är certifierade och säkra för både människor, djur och miljö.'
			},
			{
				question: 'Kan jag avboka eller ändra en bokning?',
				answer: 'Ja, du kan avboka eller ändra din bokning fram till 24 timmar innan planerad städning utan kostnad. Vid senare avbokning kan en avgift tillkomma.'
			},
			{
				question: 'Behöver jag teckna ett långt avtal?',
				answer: 'Nej, vi har inga bindningstider. Du kan avsluta eller ändra ditt städavtal med en månads varsel. Vi tror på att behålla våra kunder genom kvalitet, inte genom bindande avtal.'
			},
			{
				question: 'Erbjuder ni RUT- och ROT-avdrag?',
				answer: 'Ja, för privatpersoner erbjuder vi RUT-avdrag (upp till 50%) på städtjänster och ROT-avdrag (upp till 30%) på service- och hantverkstjänster (t.ex. målning). Vi drar av skattereduktionen direkt på fakturan och sköter kontakten med Skatteverket.'
			},
			{
				question: 'Hur betalar jag för tjänsterna?',
				answer: 'Vi skickar faktura efter utförd tjänst. Betalningsvillkor är normalt 15-30 dagar för privatpersoner och 30 dagar för företag.'
			},
			{
				question: 'Städar ni på helger?',
				answer: 'Ja, vi erbjuder städning även på helger för både privat- och företagskunder. Kontakta oss för att boka en tid som passar dig.'
			},
			{
				question: 'Vad händer vid sjukdom hos min ordinarie städare?',
				answer: 'Vi har alltid backup-personal tillgänglig. Om din ordinarie städare är sjuk skickar vi en ersättare som får all information om ditt hem eller kontor för att säkerställa samma kvalitet.'
			},
			{
				question: 'Kan jag ha husdjur hemma under städningen?',
				answer: 'Ja, det är inga problem. Informera oss gärna i förväg om du har husdjur så att städaren vet om det. Många av våra städare är vana vid och trivs med djur.'
			},
			{
				question: 'Hur lång tid tar en städning?',
				answer: 'Det beror på omfattning och bostadens storlek. En vanlig hemstädning av en trerummare tar ca 3-4 timmar, medan en storstädning kan ta 6-8 timmar. Vi ger en tidsuppskattning när vi planerar städningen.'
			}
		]
	},
	payment: {
		title: 'Betalning & Priser',
		items: [
			{
				question: 'Vilka betalningsmetoder accepterar ni?',
				answer: 'I dagsläget accepterar vi betalning via Bankgiro. Vi arbetar på att införa fler betalningsalternativ som Swish och delbetalning inom kort.'
			},
			{
				question: 'Hur fungerar RUT- och ROT-avdraget?',
				answer: 'Vi drar av RUT (upp till 50%) eller ROT (upp till 30%) direkt på din faktura. Du behöver bara se till att du har utrymme kvar för skattereduktionen hos Skatteverket, så sköter vi resten.'
			},
			{
				question: 'Kan jag få en offert innan jag bokar?',
				answer: 'Ja, vi erbjuder alltid en kostnadsfri och förbindelsefri offert. Kontakta oss med dina önskemål så återkommer vi med ett prisförslag.'
			}
		]
	},
	contact: {
		title: 'Hittar du inte svaret?',
		description: 'Kontakta oss direkt så hjälper vi dig gärna!',
		phone: '070-245 17 90, 073-568 64 67',
		email: 'info@spotlessnorrland.se'
	}
};
