export const privacyData = {
	hero: {
		badge: 'Integritet & Cookies',
		title: 'Integritetspolicy och Cookie-information',
		description:
			'Vi värnar om din integritet och är transparenta med hur vi använder cookies på vår webbplats.',
		updated: 'Senast uppdaterad: 8 december 2025'
	},
	introduction:
		'På Spotless Städ & Service tar vi din integritet på största allvar. Denna policy förklarar vilka cookies vi använder, varför vi använder dem, och hur du kan hantera dina inställningar.',
	whatAreCookies: {
		title: 'Vad är cookies?',
		description:
			'Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De hjälper webbplatsen att komma ihåg information om ditt besök, vilket kan göra det enklare att besöka webbplatsen igen och göra den mer användbar för dig.'
	},
	cookiesWeUse: {
		title: 'Cookies vi använder',
		essential: {
			title: 'Nödvändiga cookies',
			badge: 'Alltid aktiv',
			description:
				'Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av i våra system.',
			recaptcha: {
				title: 'Google reCAPTCHA v3',
				purpose: 'Skyddar vårt kontaktformulär mot spam och automatiserade bottar',
				provider: 'Google LLC',
				cookies: '_GRECAPTCHA, rc::a, rc::b, rc::c',
				duration: '6 månader',
				privacyLink: 'Google Privacy Policy',
				privacyUrl: 'https://policies.google.com/privacy'
			}
		},
		analytics: {
			title: 'Analyscookies',
			badge: 'Valfri',
			description:
				'Dessa cookies hjälper oss förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt.',
			google: {
				title: 'Google Analytics',
				purpose:
					'Analyserar hur besökare använder webbplatsen för att förbättra användarupplevelsen',
				provider: 'Google LLC',
				cookies: '_ga, _ga_*, _gid, _gat',
				duration: 'Upp till 2 år',
				dataCollected:
					'Sidvisningar, sessionsvaraktighet, ungefärlig geografisk plats, webbläsartyp',
				cookieLink: 'Google Cookie Policy',
				cookieUrl: 'https://policies.google.com/technologies/cookies'
			}
		}
	},
	managingCookies: {
		title: 'Hantera cookies',
		description:
			'Du kan när som helst ändra dina cookie-inställningar genom att klicka på knappen nedan. Observera att om du blockerar nödvändiga cookies kan vissa delar av webbplatsen sluta fungera korrekt.',
		button: 'Hantera cookie-inställningar',
		browserInfo:
			'Du kan också blockera cookies genom att aktivera inställningen i din webbläsare som tillåter dig att neka alla eller vissa cookies. De flesta webbläsare accepterar cookies automatiskt, men du kan vanligtvis ändra inställningarna för att neka cookies om du föredrar det.'
	},
	dataPrivacy: {
		title: 'Datasäkerhet och integritet',
		p1: 'Vi samlar aldrig in personligt identifierbar information (PII) genom cookies utan ditt samtycke. All data som samlas in genom analyscookies är anonym och används endast för att förbättra webbplatsen.',
		p2: 'Google reCAPTCHA kan samla in viss teknisk information (som IP-adress och webbläsardata) för att bedöma om en användare är en människa eller en bot. Denna information behandlas enligt Googles integritetspolicy.'
	},
	contact: {
		title: 'Kontakta oss',
		description:
			'Om du har några frågor om vår användning av cookies eller integritetspolicy, vänligen kontakta oss:',
		email: 'info@spotlessnorrland.se',
		phone: '070-245 17 90',
		phoneLink: '070-2451790'
	},
	banner: {
		title: 'Vi använder cookies',
		description:
			'Vi använder nödvändiga cookies för att säkerställa att vårt formulär fungerar korrekt och skydda mot spam (Google reCAPTCHA v3). Vi vill också använda Google Analytics för att förbättra din upplevelse. Du kan välja vilka cookies du accepterar.',
		settingsTitle: 'Cookie-inställningar',
		essentialTitle: 'Nödvändiga cookies',
		essentialBadge: 'Alltid aktiv',
		essentialDesc:
			'Google reCAPTCHA v3 används för att skydda vårt kontaktformulär mot spam och automatiserade bottar. Vi sparar även dina cookie-inställningar. Dessa cookies är nödvändiga för att webbplatsen ska fungera.',
		analyticsTitle: 'Analyscookies',
		analyticsDesc:
			'Google Analytics hjälper oss förstå hur besökare använder vår webbplats så att vi kan förbättra den. Dessa cookies samlar in anonym information om sidvisningar och användarinteraktioner.',
		links: {
			policy: 'Läs vår integritetspolicy'
		},
		buttons: {
			customize: 'Anpassa',
			essential: 'Endast nödvändiga',
			accept: 'Acceptera alla',
			cancel: 'Avbryt',
			save: 'Spara inställningar'
		}
	}
};
