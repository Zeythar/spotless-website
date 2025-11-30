<script lang="ts">
	import {
		Shield,
		Award,
		Users,
		Clock,
		Leaf,
		TrendingUp,
		Heart,
		CheckCircle2,
		Star,
		Zap
	} from '@lucide/svelte';
	import {Card, CardContent, CardHeader, CardTitle} from '$lib/components/ui/card/';

	const features = [
		{
			icon: Shield,
			title: 'Försäkrade & Certifierade',
			description:
				'Alla våra tjänster är fullständigt försäkrade och utförs av certifierade städare med branschutbildning.',
			category: 'professional'
		},
		{
			icon: Award,
			title: 'Kvalitetsgaranti',
			description:
				'Vi garanterar högsta kvalitet på alla uppdrag. Inte nöjd? Vi kommer tillbaka och åtgärdar det utan extra kostnad.',
			category: 'professional'
		},
		{
			icon: Users,
			title: 'Fast Kontaktperson',
			description:
				'Du får en dedikerad kontaktperson som känner dina behov och säkerställer kontinuitet i servicen.',
			category: 'professional'
		},
		{
			icon: Zap,
			title: 'Snabb Service',
			description:
				'Behöver du akut städhjälp? Vi kan ofta vara på plats inom 24-48 timmar från kontakt.',
			category: 'professional'
		},
		{
			icon: TrendingUp,
			title: 'Över 10 Års Erfarenhet',
			description:
				'Med över ett decennium i branschen har vi expertis och erfarenhet att hantera alla typer av städuppdrag.',
			category: 'professional'
		},
		{
			icon: Clock,
			title: 'Flexibla Tider',
			description:
				'Vi anpassar våra städtider efter ditt schema. Städning kan ske tidigt på morgonen, kvällar eller helger.',
			category: 'home'
		},
		{
			icon: Leaf,
			title: 'Miljövänligt',
			description:
				'Vi använder miljöcertifierade produkter som är säkra för dig, dina barn, husdjur och miljön.',
			category: 'home'
		},
		{
			icon: Heart,
			title: 'Personlig Service',
			description:
				'Vi bryr oss om varje kund. Din nöjdhet och trygghet är vår högsta prioritet.',
			category: 'home'
		},
		{
			icon: CheckCircle2,
			title: 'Inga Bindningstider',
			description:
				'Flexibla avtal utan bindningstid. Vi vill att du stannar för att du är nöjd, inte för att du är bunden.',
			category: 'home'
		},
		{
			icon: Star,
			title: '4.9/5 i Kundnöjdhet',
			description:
				'Våra kunder ger oss genomsnittligt 4.9 av 5 stjärnor. Läs våra recensioner och se varför.',
			category: 'home'
		}
	];

	const stats = [
		{number: '10+', label: 'Års erfarenhet i branschen'},
		{number: '500+', label: 'Nöjda återkommande kunder'},
		{number: '5000+', label: 'Genomförda städuppdrag'},
		{number: '98%', label: 'Av kunderna rekommenderar oss'}
	];

	const certifications = [
		'ROT-certifierade',
		'Miljödiplomerade',
		'Arbetsmiljöcertifierade',
		'Försäkrade enligt branschstandard',
		'Medlemmar i Städföretagen',
		'F-skattebevis'
	];
</script>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl lg:text-4xl">Varför Spotless?</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Vi är inte bara ett städföretag - vi är din partner för en renare och trivsammare
				vardag
			</p>
		</div>

		<!-- Stats Section -->
		<div class="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
			{#each stats as stat, index (stat.label)}
				{@const color = index === 0 || index === 2 ? '#1a9bce' : '#61c9b7'}
				<Card
					class="border-t-4 text-center"
					style="border-top-color: {color}"
				>
					<CardContent class="pt-6">
						<div
							class="mb-2 text-3xl lg:text-4xl"
							style="color: {color}"
						>
							{stat.number}
						</div>
						<p class="text-sm text-muted-foreground">{stat.label}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Features Grid -->
		<div class="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature, index (feature.title)}
				{@const color = feature.category === 'professional' ? '#1a9bce' : '#61c9b7'}
				<Card
					class="border-l-4 transition-shadow hover:shadow-lg"
					style="border-left-color: {color}"
				>
					<CardHeader>
						<div
							class="mb-3 w-fit rounded-lg p-3"
							style="background-color: {color}20"
						>
							<feature.icon
								class="h-6 w-6"
								style="color: {color}"
							/>
						</div>
						<CardTitle>{feature.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">{feature.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Certifications and Image Section -->
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h3 class="mb-6 text-2xl">Certifieringar & Kvalitet</h3>
				<p class="mb-6 text-muted-foreground">
					Vi tar kvalitet och säkerhet på största allvar. Därför är vi certifierade enligt
					branschens högsta standarder och följer alla relevanta bestämmelser och regler.
				</p>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each certifications as cert, index (cert)}
						<div class="flex items-center gap-3">
							<div class="rounded bg-[#1a9bce]/20 p-1">
								<CheckCircle2 class="h-4 w-4 text-[#1a9bce]" />
							</div>
							<span class="text-sm">{cert}</span>
						</div>
					{/each}
				</div>
			</div>

			<div class="relative">
				<div class="aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
					<img
						src="https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzYzOTIxNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
						alt="Professionell städning"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>

		<!-- Testimonial Section -->
		<div class="mt-16">
			<h3 class="mb-8 text-center text-2xl">Vad säger våra kunder?</h3>
			<div class="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader>
						<div class="mb-2 flex gap-1">
							{#each {length: 5} as _, i}
								<Star class="h-4 w-4 fill-[#1a9bce] text-[#1a9bce]" />
							{/each}
						</div>
						<CardTitle class="text-lg">Fantastisk service!</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="mb-4 text-sm text-muted-foreground">
							"Spotless har städat vårt hem i två år nu. Alltid samma kvalitet och
							de är så trevliga och professionella. Kan varmt rekommendera!"
						</p>
						<p class="text-sm">- Anna L., Stockholm</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="mb-2 flex gap-1">
							{#each {length: 5} as _, i}
								<Star class="h-4 w-4 fill-[#1a9bce] text-[#1a9bce]" />
							{/each}
						</div>
						<CardTitle class="text-lg">Bästa kontorsstädningen</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="mb-4 text-sm text-muted-foreground">
							"Vi har provat flera städföretag men Spotless är överlägset bäst.
							Flexibla, pålitliga och alltid ett perfekt resultat."
						</p>
						<p class="text-sm">- Johan M., företagare</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="mb-2 flex gap-1">
							{#each {length: 5} as _, i}
								<Star class="h-4 w-4 fill-[#1a9bce] text-[#1a9bce]" />
							{/each}
						</div>
						<CardTitle class="text-lg">Proffsig flyttstädning</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="mb-4 text-sm text-muted-foreground">
							"Flyttstädningen godkändes direkt av hyresvärden. Mycket noggranna och
							priset var dessutom bra. Rekommenderas varmt!"
						</p>
						<p class="text-sm">- Sara K., Solna</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>
