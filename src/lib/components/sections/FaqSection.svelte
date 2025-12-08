<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import {Card, CardContent, CardHeader, CardTitle} from '$lib/components/ui/card';
	import {Mail, Phone} from '@lucide/svelte';
	import {faqData} from '$lib/data/faq';
</script>

<section class="bg-muted/30 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-medium lg:text-4xl">{faqData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{faqData.description}
			</p>
		</div>

		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<Card>
					<CardHeader>
						<CardTitle>{faqData.general.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion
							type="single"
							class="w-full"
						>
							{#each faqData.general.items as item, index}
								<AccordionItem value={`item-${index}`}>
									<AccordionTrigger class="cursor-pointer"
										>{item.question}</AccordionTrigger
									>
									<AccordionContent>
										<p class="text-muted-foreground">{item.answer}</p>
									</AccordionContent>
								</AccordionItem>
							{/each}
						</Accordion>
					</CardContent>
				</Card>
			</div>
			<div class="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>{faqData.payment.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion
							type="single"
							class="w-full"
						>
							{#each faqData.payment.items as item, index}
								<AccordionItem value={`payment-${index}`}>
									<AccordionTrigger class="cursor-pointer text-left"
										>{item.question}</AccordionTrigger
									>
									<AccordionContent>
										<p class="text-sm text-muted-foreground">{item.answer}</p>
									</AccordionContent>
								</AccordionItem>
							{/each}
						</Accordion>
					</CardContent>
				</Card>

				<Card
					class="gap-0 border-0 bg-linear-to-br from-brand-primary to-brand-secondary text-white"
				>
					<CardHeader>
						<CardTitle class="text-white">{faqData.contact.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="mb-4 text-sm text-white/90">
							{faqData.contact.description}
						</p>
						<div class="flex flex-col gap-2 space-y-2 text-sm">
							<div class="flex items-center gap-2 text-white/90">
								<Phone class="h-4 w-4 shrink-0" />
								<div class="flex flex-col">
									{#each faqData.contact.phone.split(', ') as phone}
										<a
											href={`tel:${phone.replace(/\s/g, '')}`}
											class="hover:text-white hover:underline"
										>
											{phone}
										</a>
									{/each}
								</div>
							</div>
							<p class="inline-flex items-center gap-2 text-white/90">
								<Mail class="h-4 w-4" />
								<a
									href={`mailto:${faqData.contact.email}`}
									class="hover:text-white hover:underline"
								>
									{faqData.contact.email}
								</a>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>
