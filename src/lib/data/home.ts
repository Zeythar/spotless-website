import type {HeroData, AboutData} from '$lib/types';

export const heroData: HeroData = {
	title: 'Professionell städning för hem och företag',
	description:
		'Släpp städstressen och låt Spotless göra jobbet. Vi erbjuder allt från regelbunden hem- och kontorsstädning till avancerad sanering, utfört med proffsig precision och pålitlighet.',
	buttons: {
		primary: 'Begär offert',
		secondary: 'Se våra tjänster'
	},
	image: {
		src: '/images/home/site-hero.jpg',
		alt: 'Professionell städtjänst'
	}
};

export const aboutData: AboutData = {
	title: 'Om Spotless',
	description: [
		'Spotless är ett ledande städföretag med flera års erfarenhet av professionell städning. Vi erbjuder skräddarsydda lösningar för både privatpersoner och företag.',
		'Vår filosofi bygger på kvalitet, tillförlitlighet och kundnöjdhet. Vi använder miljövänliga produkter och moderna metoder för att leverera bästa möjliga resultat.'
	],
	features: [
		{
			icon: 'Award',
			title: 'Kvalitetsgaranti',
			description: 'Vi garanterar högsta kvalitet på alla våra tjänster'
		},
		{
			icon: 'Users',
			title: 'Erfaret team',
			description: 'Våra medarbetare är utbildade och erfarna'
		},
		{
			icon: 'Clock',
			title: 'Flexibla tider',
			description: 'Vi anpassar oss efter dina behov och tider'
		},
		{
			icon: 'Shield',
			title: 'Försäkrade',
			description: 'Alla våra uppdrag är fullständigt försäkrade'
		}
	],
	image: {
		src: 'https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjM5MzkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		alt: 'Städat kontor'
	}
};
