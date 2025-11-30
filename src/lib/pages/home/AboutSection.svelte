<script>
	import Award from '@lucide/svelte/icons/award';
	import Clock from '@lucide/svelte/icons/clock';
	import Shield from '@lucide/svelte/icons/shield';
	import Users from '@lucide/svelte/icons/users';

	const features = [
		{
			icon: Award,
			title: 'Kvalitetsgaranti',
			description: 'Vi garanterar högsta kvalitet på alla våra tjänster'
		},
		{
			icon: Users,
			title: 'Erfaret team',
			description: 'Våra medarbetare är utbildade och erfarna'
		},
		{
			icon: Clock,
			title: 'Flexibla tider',
			description: 'Vi anpassar oss efter dina behov och tider'
		},
		{
			icon: Shield,
			title: 'Försäkrade',
			description: 'Alla våra uppdrag är fullständigt försäkrade'
		}
	];
</script>

<section
	id="about"
	class="py-20"
>
	<div class="container mx-auto px-4">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Image -->
			<div class="order-2 lg:order-1">
				<div class="relative">
					<div class="aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
						<img
							src="https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjM5MzkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="Städat kontor"
							class="h-full w-full object-cover"
						/>
					</div>
					<!-- Decorative element -->
					<div
						class="absolute -top-6 -left-6 -z-10 h-64 w-64 rounded-2xl bg-linear-to-br from-[#61c9b7] to-[#1a9bce] opacity-20"
					></div>
				</div>
			</div>

			<!-- Content -->
			<div class="order-1 space-y-6 lg:order-2">
				<div>
					<h2 class="mb-4 text-3xl lg:text-4xl">Om Spotless</h2>
					<p class="mb-6 text-lg text-muted-foreground">
						Spotless är ett ledande städföretag med över 10 års erfarenhet av
						professionell städning. Vi erbjuder skräddarsydda lösningar för både
						privatpersoner och företag.
					</p>
					<p class="text-muted-foreground">
						Vår filosofi bygger på kvalitet, tillförlitlighet och kundnöjdhet. Vi
						använder miljövänliga produkter och moderna metoder för att leverera bästa
						möjliga resultat.
					</p>
				</div>

				<!-- Features Grid -->
				<div class="grid gap-6 pt-6 sm:grid-cols-2">
					{#each features as feature, index (feature.title)}
						<div class="space-y-2">
							<div class="flex items-center gap-3">
								<div
									class="rounded-lg bg-linear-to-br from-[#1a9bce]/20 to-[#61c9b7]/20 p-2"
								>
									<feature.icon class="h-5 w-5 text-[#1a9bce]" />
								</div>
								<h4>{feature.title}</h4>
							</div>
							<p class="pl-11 text-sm text-muted-foreground">
								{feature.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
