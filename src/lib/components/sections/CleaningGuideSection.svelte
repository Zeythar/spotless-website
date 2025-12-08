<script lang="ts">
	import {Badge} from '$lib/components/ui/badge';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardContent,
		CardDescription
	} from '$lib/components/ui/card';
	import {Image} from '$lib/components/ui/image';
	import {Lightbulb, ChefHat, Bath, Calendar, Droplets, Sparkles} from '@lucide/svelte';
	import {cleaningGuideData} from '$lib/data/cleaning-guide';

	const iconMap = {
		Lightbulb,
		ChefHat,
		Bath,
		Calendar,
		Droplets,
		Sparkles
	};

	function scrollToContact() {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({behavior: 'smooth'});
		}
	}
</script>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-medium lg:text-4xl">{cleaningGuideData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{cleaningGuideData.description}
			</p>
		</div>

		<!-- Quick Tips -->
		<div class="mb-16">
			<div class="mb-6 flex items-center gap-3">
				<Lightbulb class="h-6 w-6 text-brand-secondary" />
				<h3 class="text-2xl font-medium">{cleaningGuideData.quickTips.title}</h3>
			</div>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each cleaningGuideData.quickTips.items as tip}
					<Card class="border-l-4 border-l-brand-secondary">
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
			<h3 class="mb-6 text-center text-2xl font-medium">
				{cleaningGuideData.roomTips.title}
			</h3>

			<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
				<!-- Kitchen -->
				<Card
					class="group overflow-hidden border-l-4 border-l-brand-secondary pt-0 transition-shadow hover:shadow-xl"
				>
					<div class="relative h-48 overflow-hidden">
						<Image
							src={cleaningGuideData.roomTips.kitchen.image.src}
							alt={cleaningGuideData.roomTips.kitchen.image.alt}
							class="h-full w-full"
							imgClass="transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute top-4 right-4">
							<Badge class="border-0 bg-brand-secondary text-white">
								<ChefHat class="mr-1 h-3 w-3" />
								{cleaningGuideData.roomTips.kitchen.badge}
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle>{cleaningGuideData.roomTips.kitchen.title}</CardTitle>
						<CardDescription
							>{cleaningGuideData.roomTips.kitchen.description}</CardDescription
						>
					</CardHeader>

					<CardContent>
						<div class="space-y-3">
							{#each cleaningGuideData.roomTips.kitchen.tips as tip}
								<div
									class="rounded-lg border border-brand-secondary/20 bg-brand-secondary/5 p-3"
								>
									<h4 class="mb-1 text-sm text-brand-secondary">{tip.task}</h4>
									<p class="text-sm text-muted-foreground">{tip.description}</p>
								</div>
							{/each}
						</div>
					</CardContent>
				</Card>

				<!-- Bathroom -->
				<Card
					class="group overflow-hidden border-l-4 border-l-brand-secondary pt-0 transition-shadow hover:shadow-xl"
				>
					<div class="relative h-48 overflow-hidden">
						<Image
							src={cleaningGuideData.roomTips.bathroom.image.src}
							alt={cleaningGuideData.roomTips.bathroom.image.alt}
							class="h-full w-full"
							imgClass="transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute top-4 right-4">
							<Badge class="border-0 bg-brand-secondary text-white">
								<Bath class="mr-1 h-3 w-3" />
								{cleaningGuideData.roomTips.bathroom.badge}
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle>{cleaningGuideData.roomTips.bathroom.title}</CardTitle>
						<CardDescription
							>{cleaningGuideData.roomTips.bathroom.description}</CardDescription
						>
					</CardHeader>

					<CardContent>
						<div class="space-y-3">
							{#each cleaningGuideData.roomTips.bathroom.tips as tip}
								<div
									class="rounded-lg border border-brand-secondary/20 bg-brand-secondary/5 p-3"
								>
									<h4 class="mb-1 text-sm text-brand-secondary">{tip.task}</h4>
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
				<Calendar class="h-6 w-6 text-brand-secondary" />
				<h3 class="text-2xl font-medium">{cleaningGuideData.seasonalTasks.title}</h3>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each cleaningGuideData.seasonalTasks.items as season}
					<Card class="border-t-4 border-t-brand-secondary">
						<CardHeader>
							<CardTitle>{season.season}</CardTitle>
						</CardHeader>
						<CardContent>
							<ul class="space-y-2">
								{#each season.tasks as task}
									<li
										class="flex items-center gap-2 text-sm text-muted-foreground"
									>
										<span class="text-brand-secondary">•</span>
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
			<h3 class="mb-6 text-center text-2xl font-medium">{cleaningGuideData.ecoTips.title}</h3>
			<div class="grid gap-6 md:grid-cols-2">
				{#each cleaningGuideData.ecoTips.items as section}
					{@const Icon = iconMap[section.icon as keyof typeof iconMap]}
					<Card>
						<CardHeader>
							<div class="mb-2 flex items-center gap-3">
								<div
									class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
								>
									<Icon class="h-5 w-5 text-brand-primary" />
								</div>
								<CardTitle>{section.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<ul class="space-y-3">
								{#each section.tips as tip}
									<li
										class="flex items-center gap-2 text-sm text-muted-foreground"
									>
										<span class="text-brand-primary">•</span>
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
				class="mx-auto max-w-2xl border-0 bg-linear-to-br from-brand-primary to-brand-secondary text-white"
			>
				<CardHeader>
					<CardTitle class="text-2xl text-white">{cleaningGuideData.cta.title}</CardTitle>
					<CardDescription class="text-white/90">
						{cleaningGuideData.cta.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<button
						class="cursor-pointer rounded-lg bg-white px-6 py-3 text-brand-primary transition-colors hover:bg-white/90"
						on:click={scrollToContact}
					>
						{cleaningGuideData.cta.buttonText}
					</button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
