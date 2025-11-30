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
	import {whyChooseUsData} from '$lib/data/why-choose-us';

	const iconMap = {
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
	};
</script>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl lg:text-4xl">{whyChooseUsData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{whyChooseUsData.description}
			</p>
		</div>

		<!-- Stats Section -->
		<div class="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
			{#each whyChooseUsData.stats as stat, index (stat.label)}
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
			{#each whyChooseUsData.features as feature}
				{@const color = feature.category === 'professional' ? '#1a9bce' : '#61c9b7'}
				{@const Icon = iconMap[feature.icon as keyof typeof iconMap]}
				<Card
					class="border-l-4 transition-shadow hover:shadow-lg"
					style="border-left-color: {color}"
				>
					<CardHeader>
						<div
							class="mb-3 w-fit rounded-lg p-3"
							style="background-color: {color}20"
						>
							<Icon
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
				<h3 class="mb-6 text-2xl">{whyChooseUsData.certifications.title}</h3>
				<p class="mb-6 text-muted-foreground">
					{whyChooseUsData.certifications.description}
				</p>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each whyChooseUsData.certifications.list as cert}
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
						src={whyChooseUsData.certifications.image.src}
						alt={whyChooseUsData.certifications.image.alt}
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>

		<!-- Testimonial Section -->
		<div class="mt-16">
			<h3 class="mb-8 text-center text-2xl">{whyChooseUsData.testimonials.title}</h3>
			<div class="grid gap-6 md:grid-cols-3">
				{#each whyChooseUsData.testimonials.items as testimonial}
					<Card>
						<CardHeader>
							<div class="mb-2 flex gap-1">
								{#each {length: 5} as _, i}
									<Star class="h-4 w-4 fill-[#1a9bce] text-[#1a9bce]" />
								{/each}
							</div>
							<CardTitle class="text-lg">{testimonial.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="mb-4 text-sm text-muted-foreground">
								{testimonial.text}
							</p>
							<p class="text-sm">{testimonial.author}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
