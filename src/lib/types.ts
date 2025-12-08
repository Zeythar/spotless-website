export interface Image {
	src: string;
	alt: string;
}

export interface Link {
	label: string;
	href: string;
	icon?: string;
}

export interface DropdownLink extends Link {
	title: string;
	description: string;
}

export interface NavigationItem {
	label: string;
	href: string;
	dropdown?: DropdownLink[];
}

export interface NavigationData {
	links: NavigationItem[];
	cta: Link;
}

export interface HeroData {
	title: string;
	description: string;
	buttons: {
		primary: string;
		secondary: string;
	};
	image: Image;
}

export interface Feature {
	icon: string;
	title: string;
	description: string;
	category?: string;
}

export interface AboutData {
	title: string;
	description: string[];
	features: Feature[];
	image: Image;
}

export interface ServiceFeature {
	name: string;
	description: string;
	features: string[];
}

export interface ServiceCategory {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	services: ServiceFeature[];
	benefits?: string[];
	process?: string[];
	faq?: FaqItem[];
}

export interface ServicesData {
	[key: string]: ServiceCategory;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface FaqSection {
	title: string;
	items: FaqItem[];
}

export interface FaqContact {
	title: string;
	description: string;
	phone: string;
	email: string;
}

export interface FaqData {
	title: string;
	description: string;
	general: FaqSection;
	payment: FaqSection;
	contact: FaqContact;
}

export interface ContactDetail {
	icon: string;
	title: string;
	value: string;
}

export interface FormField {
	label: string;
	placeholder: string;
	options?: {value: string; label: string}[];
}

export interface ContactData {
	title: string;
	description: string;
	contactInfo: {
		title: string;
		description: string;
		details: ContactDetail[];
	};
	emergency: {
		title: string;
		description: string;
		buttonText: string;
	};
	form: {
		title: string;
		description: string;
		submitButton: string;
		success: {
			title: string;
			description: string;
		};
		fields: Record<string, FormField>;
	};
}

export interface FooterLink {
	label: string;
	href: string;
}

export interface SocialLink {
	icon: string;
	href: string;
	label: string;
}

export interface FooterData {
	companyInfo: {
		description: string;
	};
	sections: {
		pages: {title: string; links: FooterLink[]};
		services: {title: string; links: FooterLink[]};
		contact: {
			title: string;
			phone: string;
			phoneLink: string;
			email: string;
			emailLink: string;
			social: SocialLink[];
		};
	};
	copyright: (year: number) => string;
}

export interface PricingTier {
	name: string;
	description: string;
	price: string;
	popular: boolean;
	features: string[];
}

export interface AdditionalService {
	service: string;
	price: string;
	description: string;
}

export interface RotInfo {
	title: string;
	description: string;
	list: string[];
}

export interface PricesCta {
	title: string;
	description: string;
	buttonText: string;
}

export interface PricesData {
	title: string;
	description: string;
	pricingTiers: PricingTier[];
	rotInfo: RotInfo;
	faq: FaqSection;
	cta: PricesCta;
}

export interface Stat {
	number: string;
	label: string;
}

export interface Certifications {
	title: string;
	description: string;
	list: string[];
	image: Image;
}

export interface Testimonial {
	title: string;
	text: string;
	author: string;
}

export interface Testimonials {
	title: string;
	items: Testimonial[];
}

export interface WhyChooseUsData {
	title: string;
	description: string;
	stats: Stat[];
	features: Feature[];
	certifications: Certifications;
	testimonials: Testimonials;
}

export interface CleaningTip {
	title: string;
	description: string;
}

export interface RoomTip {
	task: string;
	description: string;
}

export interface RoomGuide {
	title: string;
	description: string;
	badge: string;
	image: Image;
	tips: RoomTip[];
}

export interface SeasonalTask {
	season: string;
	tasks: string[];
}

export interface EcoTip {
	icon: string;
	title: string;
	tips: string[];
}

export interface CleaningGuideCta {
	title: string;
	description: string;
	buttonText: string;
}

export interface CleaningGuideData {
	title: string;
	description: string;
	quickTips: {
		title: string;
		items: CleaningTip[];
	};
	roomTips: {
		title: string;
		kitchen: RoomGuide;
		bathroom: RoomGuide;
		[key: string]: RoomGuide | string;
	};
	seasonalTasks: {
		title: string;
		items: SeasonalTask[];
	};
	ecoTips: {
		title: string;
		items: EcoTip[];
	};
	cta: CleaningGuideCta;
}
