import type {AboutData, HeroData} from '$lib/types';

export const heroData: HeroData = {
	title: 'Professionell städning för hem och företag',
	description:
		'Slipp städstressen och låt Spotless göra jobbet. Vi erbjuder allt från regelbunden hem- och kontorsstädning till avancerad sanering, utfört med professionell precision och pålitlighet.',
	buttons: {
		primary: 'Begär offert',
		secondary: 'Se våra tjänster'
	},
	image: {
		src: '/images/home/site-hero-1920.jpg',
		srcset: [
			'/images/home/site-hero-480.jpg 480w',
			'/images/home/site-hero-768.jpg 768w',
			'/images/home/site-hero-1024.jpg 1024w',
			'/images/home/site-hero-1440.jpg 1440w',
			'/images/home/site-hero-1920.jpg 1920w',
			'/images/home/site-hero-2560.jpg 2560w'
		].join(', '),
		sizes: '(max-width: 1024px) 100vw, 50vw',
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
		src: '/images/home/office.jpg',
		alt: 'Städat kontor'
	}
};
