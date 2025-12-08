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
	import {CheckCircle2, Info} from '@lucide/svelte';
	import {pricesData} from '$lib/data/prices';
	import {contactState} from '$lib/state/contact.svelte';

	function scrollToContact(service?: string) {
		if (service) {
			contactState.selectedService = service;
		}
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({behavior: 'smooth'});
		}
	}

	const serviceMap = ['home', 'business', 'special'];
</script>

<section class="bg-muted/30 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-medium lg:text-4xl">{pricesData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{pricesData.description}
			</p>
		</div>

		<!-- Main Pricing Tiers -->
		<div class="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-3">
			{#each pricesData.pricingTiers as tier, index (index)}
				<Card class="relative {tier.popular ? 'border-brand-primary shadow-lg' : ''}">
					{#if tier.popular}
						<div class="absolute -top-3 left-1/2 -translate-x-1/2">
							<Badge
								class="border-0 bg-linear-to-r from-brand-primary to-brand-secondary"
							>
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
									<CheckCircle2
										class="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
									/>
									<span class="text-sm">{feature}</span>
								</li>
							{/each}
						</ul>
						<Button
							class="w-full cursor-pointer"
							variant={tier.popular ? 'default' : 'outline'}
							onclick={() => scrollToContact(serviceMap[index])}
						>
							Begär offert
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- ROT-avdrag Information -->
		<div class="mx-auto mb-16 max-w-4xl">
			<Alert class="border-brand-secondary/30 bg-brand-secondary/5">
				<Info class="h-4 w-4 text-brand-secondary" />
				<AlertDescription>
					<h4 class="mb-2 font-medium">{pricesData.rotInfo.title}</h4>
					<p class="mb-3 text-sm text-muted-foreground">
						{pricesData.rotInfo.description}
					</p>
					<div class="grid gap-2 sm:grid-cols-2">
						{#each pricesData.rotInfo.list as info, index (index)}
							<div class="flex items-start gap-2">
								<CheckCircle2
									class="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary"
								/>
								<span class="text-sm">{info}</span>
							</div>
						{/each}
					</div>
				</AlertDescription>
			</Alert>
		</div>

		<!-- Pricing FAQ -->
		<div class="mx-auto max-w-3xl">
			<h3 class="mb-6 text-center text-2xl font-medium">{pricesData.faq.title}</h3>
			<div class="space-y-4">
				{#each pricesData.faq.items as item}
					<Card>
						<CardHeader>
							<CardTitle class="text-lg">{item.question}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-muted-foreground">
								{item.answer}
							</p>
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
					<CardTitle class="text-2xl text-white">{pricesData.cta.title}</CardTitle>
					<CardDescription class="text-white/90">
						{pricesData.cta.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button
						size="lg"
						variant="secondary"
						onclick={() => scrollToContact()}
						class="cursor-pointer bg-white text-brand-primary hover:bg-white/90"
					>
						{pricesData.cta.buttonText}
					</Button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
