<script lang="ts">
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card/';
	import {Button} from '$lib/components/ui/button/';
	import {CheckCircle2, ArrowLeft} from '@lucide/svelte';
	import {servicePageData} from '$lib/data/services';
	import {contactState} from '$lib/state/contact.svelte';
	import type {ServiceCategory} from '$lib/types';

	interface ServiceDetailProps {
		category: ServiceCategory;
	}

	let {category}: ServiceDetailProps = $props();
</script>

<div class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="bg-linear-to-br from-brand-primary/10 to-brand-secondary/10 py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl">
				<h1 class="mb-6 text-4xl font-medium lg:text-5xl">{category.title}</h1>
				<p class="mb-8 text-lg text-muted-foreground">
					{category.description}
				</p>
				<Button
					size="lg"
					class="cursor-pointer bg-linear-to-r from-brand-primary to-brand-secondary text-white transition-opacity hover:opacity-90"
					onclick={() => (contactState.isOpen = true)}
					>{servicePageData.hero.buttonText}</Button
				>
			</div>
		</div>
	</section>

	<!-- Long Description -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl">
				<div class="prose prose-lg max-w-none">
					<p class="text-muted-foreground">{category.longDescription}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Grid -->
	<section class="bg-muted/30 py-16">
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-medium">
				{servicePageData.sections.services.title(category.title)}
			</h2>
			<div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
				{#each category.services as service, index (service.name)}
					<Card>
						<CardHeader>
							<CardTitle>{service.name}</CardTitle>
							<CardDescription>{service.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<ul class="space-y-2">
								{#each service.features as feature, idx (idx)}
									<li class="flex items-center gap-2">
										<CheckCircle2 class="h-5 w-5 shrink-0 text-brand-primary" />
										<span class="text-sm">{feature}</span>
									</li>
								{/each}
							</ul>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Benefits -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-8 text-center text-3xl font-medium">
					{servicePageData.sections.benefits.title}
				</h2>
				<div class="grid gap-6 sm:grid-cols-2">
					{#each category.benefits || [] as benefit, index (index)}
						<div class="flex items-center gap-3">
							<div
								class="shrink-0 rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
							>
								<CheckCircle2 class="h-5 w-5 text-brand-primary" />
							</div>
							<p>{benefit}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Process -->
	<section class="bg-muted/30 py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-8 text-center text-3xl font-medium">
					{servicePageData.sections.process.title}
				</h2>
				<div class="space-y-6">
					{#each category.process || [] as step, index (index)}
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-primary to-brand-secondary text-white"
							>
								{index + 1}
							</div>
							<div class="flex-1">
								<p>{step}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-8 text-center text-3xl font-medium">
					{servicePageData.sections.faq.title}
				</h2>
				<div class="space-y-4">
					{#each category.faq || [] as item, index (item.question)}
						<Card>
							<CardHeader>
								<CardTitle class="text-lg">{item.question}</CardTitle>
							</CardHeader>
							<CardContent>
								<p class="text-muted-foreground">{item.answer}</p>
							</CardContent>
						</Card>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-linear-to-br from-brand-primary to-brand-secondary py-16 text-white">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-4 text-3xl font-medium text-white">
				{servicePageData.sections.cta.title}
			</h2>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-white/90">
				{servicePageData.sections.cta.description}
			</p>
			<Button
				size="lg"
				variant="secondary"
				class="cursor-pointer bg-white text-brand-primary hover:bg-white/90"
				onclick={() => (contactState.isOpen = true)}
			>
				{servicePageData.sections.cta.buttonText}
			</Button>
		</div>
	</section>
</div>
