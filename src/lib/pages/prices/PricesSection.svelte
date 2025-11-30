<script lang="ts">
	import {Badge} from '$lib/components/ui/badge/index.js';
	import {Button} from '$lib/components/ui/button/index.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';
	import {Alert, AlertDescription} from '$lib/components/ui/alert/';
	import { CheckCircle2, Info } from '@lucide/svelte';

	const pricingTiers = [
		{
			name: 'Hemstädning',
			description: 'Perfekt för privatpersoner',
			price: 'Från 350 kr/tim',
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
	];

	const additionalServices = [
		{
			service: 'Storstädning',
			price: 'Från 450 kr/tim',
			description: 'Omfattande städning inklusive skåp, vitvaror och fönster'
		},
		{
			service: 'Flyttstädning',
			price: 'Från 3500 kr',
			description: 'ROT-certifierad flyttstädning med garanti, prisexempel för 2:a'
		},
		{
			service: 'Fönsterputs',
			price: 'Från 50 kr/fönster',
			description: 'In- och utvändig putsning inklusive karmar'
		},
		{
			service: 'Kontorsstädning',
			price: 'Från 250 kr/tim',
			description: 'Daglig eller regelbunden städning av kontorslokaler'
		},
		{
			service: 'Golvvård',
			price: 'Offert efter yta',
			description: 'Kristallisering, slipning eller behandling av golv'
		},
		{
			service: 'Gräsklippning',
			price: 'Från 400 kr/tillfälle',
			description: 'Säsongsbaserad gräsklippning och trädgårdsskötsel'
		},
		{
			service: 'Fasadmålning',
			price: 'Offert efter projekt',
			description: 'Komplett fasadmålning inklusive förberedelser'
		},
		{
			service: 'Handyman-tjänster',
			price: 'Från 450 kr/tim',
			description: 'Möbelmontering och enklare reparationer'
		}
	];

	const rotInfo = [
		'30% skattereduktion på arbetskostnaden',
		'Max 75 000 kr per person och år',
		'Vi sköter all administration',
		'Pengarna tillbaka via deklarationen'
	];

	function scrollToContact() {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({behavior: 'smooth'});
		}
	}
</script>

<section class="bg-muted/30 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl lg:text-4xl">Priser & Paket</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Transparenta priser utan dolda kostnader. Alla offerter är kostnadsfria och
				förpliktelsefria
			</p>
		</div>

		<!-- Main Pricing Tiers -->
		<div class="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-3">
			{#each pricingTiers as tier, index (index)}
				<Card class="relative {tier.popular ? 'border-[#1a9bce] shadow-lg' : ''}">
					{#if tier.popular}
						<div class="absolute -top-3 left-1/2 -translate-x-1/2">
							<Badge class="border-0 bg-linear-to-r from-[#1a9bce] to-[#61c9b7]">
								Populärast
							</Badge>
						</div>
					{/if}
					<CardHeader>
						<CardTitle>{tier.name}</CardTitle>
						<CardDescription>{tier.description}</CardDescription>
						<div class="pt-4">
							<div class="text-2xl">{tier.price}</div>
						</div>
					</CardHeader>
					<CardContent>
						<ul class="mb-6 space-y-3">
							{#each tier.features as feature, idx (idx)}
								<li class="flex items-start gap-2">
									<CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-[#1a9bce]" />
									<span class="text-sm">{feature}</span>
								</li>
							{/each}
						</ul>
						<Button
							class="w-full"
							variant={tier.popular ? 'default' : 'outline'}
							onclick={scrollToContact}
						>
							Begär offert
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Additional Services -->
		<div class="mb-16">
			<h3 class="mb-6 text-center text-2xl">Prisexempel på övriga tjänster</h3>
			<div class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each additionalServices as service, index (index)}
					<Card>
						<CardHeader class="pb-3">
							<CardTitle class="text-lg">{service.service}</CardTitle>
							<div class="text-[#1a9bce]">{service.price}</div>
						</CardHeader>
						<CardContent>
							<p class="text-xs text-muted-foreground">{service.description}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
			<p class="mt-6 text-center text-sm text-muted-foreground">
				Alla priser är inklusive moms. ROT-avdrag kan tillkomma för privatpersoner.
			</p>
		</div>

		<!-- ROT-avdrag Information -->
		<div class="mx-auto mb-16 max-w-4xl">
			<Alert class="border-[#61c9b7]/30 bg-[#61c9b7]/5">
				<Info class="h-4 w-4 text-[#61c9b7]" />
				<AlertDescription>
					<h4 class="mb-2">ROT-avdrag - Sänk din kostnad med 30%</h4>
					<p class="mb-3 text-sm text-muted-foreground">
						Som privatperson har du rätt till ROT-avdrag på många av våra tjänster. Det
						innebär att du får tillbaka 30% av arbetskostnaden via skatten.
					</p>
					<div class="grid gap-2 sm:grid-cols-2">
						{#each rotInfo as info, index (index)}
							<div class="flex items-start gap-2">
								<CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-[#61c9b7]" />
								<span class="text-sm">{info}</span>
							</div>
						{/each}
					</div>
				</AlertDescription>
			</Alert>
		</div>

		<!-- Pricing FAQ -->
		<div class="mx-auto max-w-3xl">
			<h3 class="mb-6 text-center text-2xl">Vanliga frågor om priser</h3>
			<div class="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Hur beräknas priset för städning?</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Priset beror på flera faktorer: typ av städning, bostadens/lokalens
							storlek, frekvens och omfattning. Vi gör alltid en kostnadsfri
							besiktning och lämnar en transparent offert innan vi påbörjar arbetet.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Finns det några dolda kostnader?</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Nej, vi har inga dolda kostnader. Priset vi anger i offerten är det du
							betalar. Eventuella extratjänster diskuteras och prissätts alltid i
							förväg.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg"
							>Kan jag få rabatt vid regelbunden städning?</CardTitle
						>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Ja, vi erbjuder förmånliga priser för kunder som tecknar avtal om
							regelbunden städning. Kontakta oss för att diskutera ett anpassat avtal.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Vad ingår i timpriset?</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Timpriset inkluderar arbetskostnad, alla städprodukter, utrustning och
							materialhantering. Du behöver inte tillhandahålla något själv.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<Card
				class="mx-auto max-w-2xl border-0 bg-linear-to-br from-[#1a9bce] to-[#61c9b7] text-white"
			>
				<CardHeader>
					<CardTitle class="text-2xl text-white"
						>Vill du veta exakt vad det kostar?</CardTitle
					>
					<CardDescription class="text-white/90">
						Begär en kostnadsfri offert idag - ingen förpliktelse
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button
						size="lg"
						variant="secondary"
						onclick={scrollToContact}
						class="bg-white text-[#1a9bce] hover:bg-white/90"
					>
						Begär kostnadsfri offert
					</Button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
