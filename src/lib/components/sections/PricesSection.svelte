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
			<h2 class="mb-4 text-3xl lg:text-4xl">{pricesData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{pricesData.description}
			</p>
		</div>

		<!-- Main Pricing Tiers -->
		<div class="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-3">
			{#each pricesData.pricingTiers as tier, index (index)}
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
			<h3 class="mb-6 text-center text-2xl">{pricesData.additionalServices.title}</h3>
			<div class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each pricesData.additionalServices.items as service, index (index)}
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
				{pricesData.additionalServices.disclaimer}
			</p>
		</div>

		<!-- ROT-avdrag Information -->
		<div class="mx-auto mb-16 max-w-4xl">
			<Alert class="border-[#61c9b7]/30 bg-[#61c9b7]/5">
				<Info class="h-4 w-4 text-[#61c9b7]" />
				<AlertDescription>
					<h4 class="mb-2">{pricesData.rotInfo.title}</h4>
					<p class="mb-3 text-sm text-muted-foreground">
						{pricesData.rotInfo.description}
					</p>
					<div class="grid gap-2 sm:grid-cols-2">
						{#each pricesData.rotInfo.list as info, index (index)}
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
			<h3 class="mb-6 text-center text-2xl">{pricesData.faq.title}</h3>
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
				class="mx-auto max-w-2xl border-0 bg-linear-to-br from-[#1a9bce] to-[#61c9b7] text-white"
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
						onclick={scrollToContact}
						class="bg-white text-[#1a9bce] hover:bg-white/90"
					>
						{pricesData.cta.buttonText}
					</Button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
