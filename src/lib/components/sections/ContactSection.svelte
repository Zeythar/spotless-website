<script lang="ts">
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import {Button} from '$lib/components/ui/button/index.js';
	import {contactData} from '$lib/data/contact';
	import {type FormSchema} from '$lib/schema';
	import {cn} from '$lib/utils';
	import {Mail, Phone} from '@lucide/svelte';
	import {type Infer, type SuperValidated} from 'sveltekit-superforms';
	import CardContent from '../ui/card/card-content.svelte';
	import CardDescription from '../ui/card/card-description.svelte';
	import CardHeader from '../ui/card/card-header.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import Card from '../ui/card/card.svelte';

	let {
		data,
		class: className,
		recaptchaSiteKey
	}: {
		data: SuperValidated<Infer<FormSchema>>;
		class?: string;
		recaptchaSiteKey: string;
	} = $props();

	const iconMap = {
		Phone,
		Mail
	};
</script>

<section
	id="contact"
	class={cn('bg-muted/30 py-20', className)}
>
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-medium lg:text-4xl">{contactData.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				{contactData.description}
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			<div class="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>{contactData.contactInfo.title}</CardTitle>
						<CardDescription>{contactData.contactInfo.description}</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<ul class="space-y-4">
							{#each contactData.contactInfo.details as detail}
								{@const Icon = iconMap[detail.icon as keyof typeof iconMap]}
								<li class="flex items-center gap-3">
									<div
										class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
									>
										<Icon class="h-5 w-5 text-brand-primary" />
									</div>
									<div>
										<h4 class="text-sm font-medium">{detail.title}</h4>
										{#if detail.title === 'Telefon'}
											<div class="flex flex-col">
												{#each detail.value.split(', ') as phone}
													<a
														href={`tel:${phone.replace(/\s/g, '')}`}
														class="text-sm text-muted-foreground hover:text-brand-primary"
													>
														{phone}
													</a>
												{/each}
											</div>
										{:else if detail.title === 'E-post'}
											<a
												href={`mailto:${detail.value}`}
												class="text-sm text-muted-foreground hover:text-brand-primary"
											>
												{detail.value}
											</a>
										{:else}
											<p class="text-sm text-muted-foreground">
												{detail.value}
											</p>
										{/if}
									</div>
								</li>
							{/each}
						</ul>
					</CardContent>
				</Card>

				<Card
					class="border-0 bg-linear-to-br from-brand-primary to-brand-secondary text-white"
				>
					<CardHeader>
						<CardTitle class="text-white">{contactData.emergency.title}</CardTitle>
						<CardDescription class="text-white/80">
							{contactData.emergency.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="flex flex-col gap-2">
							{#each contactData.emergency.buttonText
								.replace('Ring nu: ', '')
								.split(', ') as phone}
								<Button
									variant="secondary"
									class="w-full cursor-pointer bg-white text-brand-primary hover:bg-white/90"
									href={`tel:${phone.replace(/\s/g, '')}`}
								>
									Ring: {phone}
								</Button>
							{/each}
						</div>
					</CardContent>
				</Card>
			</div>

			<Card class="md:col-span-1 lg:col-span-2">
				<CardHeader>
					<CardTitle>{contactData.form.title}</CardTitle>
					<CardDescription>{contactData.form.description}</CardDescription>
				</CardHeader>

				<CardContent>
					<ContactForm
						{data}
						id="contact-form-section"
						{recaptchaSiteKey}
					/>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
