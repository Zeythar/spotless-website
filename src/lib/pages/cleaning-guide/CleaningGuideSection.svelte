<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardContent,
		CardDescription
	} from '$lib/components/ui/card';
	import {Lightbulb, ChefHat, Bath, Calendar, Droplets, Sparkles} from '@lucide/svelte';

	const quickTips = [
		{
			title: 'Börja uppifrån',
			description: 'Städa alltid från tak till golv för att fånga upp damm som faller ner.'
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
			description: 'Skölj alltid av ytor ordentligt efter städning för att undvika rester.'
		},
		{
			title: 'Rengör städredskap',
			description: 'Tvätta moppar och trasor regelbundet för bästa resultat.'
		},
		{
			title: 'Röj först',
			description: 'Plocka undan saker innan du börjar städa för att spara tid.'
		}
	];

	const kitchenTips = [
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
			description: 'Torka av utsidan av vitvaror med milt diskmedel. Glöm inte handtagen!'
		},
		{
			task: 'Skåp',
			description: 'Rengör skåp in- och utvändigt 2-3 gånger per år vid storstädning.'
		}
	];

	const bathroomTips = [
		{
			task: 'Daglig rengöring',
			description: 'Torka av tvättställ och kranar dagligen. Använd squeegee på duschdörrar.'
		},
		{
			task: 'Bekämpa mögel',
			description: 'Ventilera efter dusch. Använd klorin på mögelskador och behandla fuger.'
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
			description: 'Använd glasrengöringsmedel eller en blandning av vatten och vinäger.'
		},
		{
			task: 'Duschkabin',
			description: 'Rengör kakelfogarna med tandborste och rengöringsmedel för djuprengöring.'
		}
	];

	const seasonalTasks = [
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
	];

	const ecoTips = [
		{
			icon: Droplets,
			title: 'Naturliga alternativ',
			tips: [
				'Bikarbonat - universalrengöringsmedel för fläckar',
				'Ättikssprit - bra mot kalk och bakterier',
				'Citronsaft - naturlig blekning och fräsch doft',
				'Såpa - mild men effektiv rengöring'
			]
		},
		{
			icon: Sparkles,
			title: 'Miljövänliga vanor',
			tips: [
				'Använd mikrofiberdukar som kan tvättas',
				'Välj koncentrerade produkter för mindre förpackningar',
				'Dosera rätt - mer är inte bättre',
				'Återanvänd förpackningar när du fyller på'
			]
		}
	];
</script>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl lg:text-4xl">Städguide & Tips</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Praktiska råd och tips för att hålla ditt hem rent mellan våra städbesök
			</p>
		</div>

		<!-- Quick Tips -->
		<div class="mb-16">
			<div class="mb-6 flex items-center gap-3">
				<Lightbulb class="h-6 w-6 text-[#61c9b7]" />
				<h3 class="text-2xl">Snabba städtips</h3>
			</div>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each quickTips as tip, index (tip.title)}
					<Card class="border-l-4 border-l-[#61c9b7]">
						<CardHeader>
							<CardTitle class="text-lg">{tip.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-muted-foreground">{tip.description}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>

		<!-- Room-specific Tips -->
		<div class="mb-16">
			<h3 class="mb-6 text-center text-2xl">Rumsspecifika tips</h3>

			<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
				<!-- Kitchen -->
				<Card
					class="group overflow-hidden border-l-4 border-l-[#61c9b7] transition-shadow hover:shadow-xl pt-0"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1759238136854-913e5e383308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY2xlYW4lMjBjb3VudGVydG9wfGVufDF8fHx8MTc2NDM1NzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
							alt="Kök"
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute top-4 right-4">
							<Badge class="border-0 bg-[#61c9b7] text-white">
								<ChefHat class="mr-1 h-3 w-3" />
								Kök
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle>Kökets städrutiner</CardTitle>
						<CardDescription>Så håller du köket rent och fräscht</CardDescription>
					</CardHeader>

					<CardContent>
						<div class="space-y-3">
							{#each kitchenTips as tip, index (tip.task)}
								<div
									class="rounded-lg border border-[#61c9b7]/20 bg-[#61c9b7]/5 p-3"
								>
									<h4 class="mb-1 text-sm text-[#61c9b7]">{tip.task}</h4>
									<p class="text-sm text-muted-foreground">{tip.description}</p>
								</div>
							{/each}
						</div>
					</CardContent>
				</Card>

				<!-- Bathroom -->
				<Card
					class="group overflow-hidden border-l-4 border-l-[#61c9b7] transition-shadow hover:shadow-xl pt-0"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1762810963385-0d91f2539fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGJhdGhyb29tJTIwd2hpdGV8ZW58MXx8fHwxNzY0MzU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
							alt="Badrum"
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute top-4 right-4">
							<Badge class="border-0 bg-[#61c9b7] text-white">
								<Bath class="mr-1 h-3 w-3" />
								Badrum
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle>Badrummets städrutiner</CardTitle>
						<CardDescription>Håll badrummet rent och fritt från mögel</CardDescription>
					</CardHeader>

					<CardContent>
						<div class="space-y-3">
							{#each bathroomTips as tip, index (tip.task)}
								<div
									class="rounded-lg border border-[#61c9b7]/20 bg-[#61c9b7]/5 p-3"
								>
									<h4 class="mb-1 text-sm text-[#61c9b7]">{tip.task}</h4>
									<p class="text-sm text-muted-foreground">{tip.description}</p>
								</div>
							{/each}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>

		<!-- Seasonal Cleaning -->
		<div class="mb-16">
			<div class="mb-6 flex items-center gap-3">
				<Calendar class="h-6 w-6 text-[#61c9b7]" />
				<h3 class="text-2xl">Säsongsbetonat städschema</h3>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each seasonalTasks as season, index (season.season)}
					<Card class="border-t-4 border-t-[#61c9b7]">
						<CardHeader>
							<CardTitle>{season.season}</CardTitle>
						</CardHeader>
						<CardContent>
							<ul class="space-y-2">
								{#each season.tasks as task, idx}
									<li
										class="flex items-start gap-2 text-sm text-muted-foreground"
									>
										<span class="mt-1 text-[#61c9b7]">•</span>
										<span>{task}</span>
									</li>
								{/each}
							</ul>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>

		<!-- Eco Tips -->
		<div class="mx-auto max-w-4xl">
			<h3 class="mb-6 text-center text-2xl">Miljövänlig städning</h3>
			<div class="grid gap-6 md:grid-cols-2">
				{#each ecoTips as section, index (section.title)}
					<Card>
						<CardHeader>
							<div class="mb-2 flex items-center gap-3">
								<div
									class="rounded-lg bg-linear-to-br from-[#1a9bce]/20 to-[#61c9b7]/20 p-2"
								>
									<section.icon class="h-5 w-5 text-[#1a9bce]" />
								</div>
								<CardTitle>{section.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<ul class="space-y-3">
								{#each section.tips as tip, idx}
									<li
										class="flex items-start gap-2 text-sm text-muted-foreground"
									>
										<span class="mt-1 text-[#1a9bce]">•</span>
										<span>{tip}</span>
									</li>
								{/each}
							</ul>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<Card
				class="mx-auto max-w-2xl border-0 bg-linear-to-br from-[#1a9bce] to-[#61c9b7] text-white"
			>
				<CardHeader>
					<CardTitle class="text-2xl text-white">Vill du slippa städa själv?</CardTitle>
					<CardDescription class="text-white/90">
						Låt våra proffs ta hand om städningen medan du ägnar tid åt det du tycker om
					</CardDescription>
				</CardHeader>
				<CardContent>
					<button
						class="rounded-lg bg-white px-6 py-3 text-[#1a9bce] transition-colors hover:bg-white/90"
					>
						Begär offert
					</button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
