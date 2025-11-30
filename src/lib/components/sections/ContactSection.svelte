<script lang="ts">
	import CardContent from '../ui/card/card-content.svelte';
	import CardDescription from '../ui/card/card-description.svelte';
	import CardHeader from '../ui/card/card-header.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import Card from '../ui/card/card.svelte';
	import {Clock, Info, Mail, MapPin, Phone} from '@lucide/svelte';
	import {
		FormControl,
		FormDescription,
		FormField,
		FormFieldErrors,
		FormLabel
	} from '$lib/components/ui/form/index.js';
	import {Input} from '$lib/components/ui/input/index.js';
	import {Button} from '$lib/components/ui/button/index.js';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select/index.js';
	import {Textarea} from '$lib/components/ui/textarea/index.js';
	import {formSchema, type FormSchema} from '$lib/schema';
	import {type SuperValidated, type Infer, superForm} from 'sveltekit-superforms';
	import {zod4Client} from 'sveltekit-superforms/adapters';

	let {data}: {data: SuperValidated<Infer<FormSchema>>} = $props();

	const form = superForm(data, {
		validators: zod4Client(formSchema)
	});

	const {form: formData, enhance} = form;

	type FieldConfig = {
		name: keyof Infer<FormSchema>;
		label: string;
		component: 'input' | 'select' | 'textarea';
		class?: string;
		placeholder?: string;
		options?: {value: string; label: string}[];
	};

	const formFields: FieldConfig[] = [
		{name: 'name', label: 'Namn', component: 'input', placeholder: 'Ditt namn'},
		{name: 'email', label: 'E-post', component: 'input', placeholder: 'din@epost.se'},
		{name: 'phone', label: 'Telefonnummer', component: 'input', placeholder: '070-123 45 67'},
		{
			name: 'service',
			label: 'Tjänst',
			component: 'select',
			placeholder: 'Välj en tjänst',
			options: [
				{value: 'home', label: 'Hem- & Privatstädning'},
				{value: 'business', label: 'Företags- & Lokalstädning'},
				{value: 'special', label: 'Specialstädning & Sanering'},
				{value: 'service', label: 'Service & Övrigt'}
			]
		},
		{
			name: 'message',
			label: 'Meddelande',
			component: 'textarea',
			class: 'md:col-span-2',
			placeholder: 'Beskriv ditt ärende...'
		}
	];

	const contactDetails = [
		{icon: Phone, title: 'Telefon', value: '0735-686 467'},
		{icon: Mail, title: 'E-post', value: 'kontakt@spotlessnorrland.se'},
		{icon: MapPin, title: 'Adress', value: 'Midälvavägen 20, Sundsvall'},
		{icon: Clock, title: 'Öppettider', value: 'Mån-Fre: 08:00-17:00'}
	];
</script>

<section
	id="contact"
	class="bg-muted/30 py-20"
>
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-medium lg:text-4xl">Kontakta oss</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Begär en kostnadsfri offert eller kontakta oss för mer information
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			<div class="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>Kontaktinformation</CardTitle>
						<CardDescription>Så når du oss</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<ul class="space-y-4">
							{#each contactDetails as detail}
								<li class="flex items-start gap-3">
									<div
										class="rounded-lg bg-linear-to-br from-[#1a9bce]/20 to-[#61c9b7]/20 p-2"
									>
										<detail.icon class="h-5 w-5 text-[#1a9bce]" />
									</div>
									<div>
										<h4 class="text-sm font-medium">{detail.title}</h4>
										<p class="text-sm text-muted-foreground">{detail.value}</p>
									</div>
								</li>
							{/each}
						</ul>
					</CardContent>
				</Card>

				<Card class="border-0 bg-linear-to-br from-[#1a9bce] to-[#61c9b7] text-white">
					<CardHeader>
						<CardTitle class="text-white">Akut städbehov?</CardTitle>
						<CardDescription class="text-white/80">
							Vi erbjuder akutstädning 24/7
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button
							variant="secondary"
							class="w-full bg-white text-[#1a9bce] hover:bg-white/90"
						>
							Ring nu: 0735-686 467
						</Button>
					</CardContent>
				</Card>
			</div>

			<Card class="md:col-span-1 lg:col-span-2">
				<CardHeader>
					<CardTitle>Begär offert</CardTitle>
					<CardDescription>Fyll i formuläret så återkommer vi till dig</CardDescription>
				</CardHeader>

				<CardContent>
					<form
						method="POST"
						use:enhance
						class="grid grid-cols-1 gap-4 md:grid-cols-2"
					>
						{#each formFields as field}
							<FormField
								{form}
								name={field.name}
								class={field.class}
							>
								<FormControl>
									{#snippet children({props})}
										<FormLabel>{field.label}</FormLabel>
										{#if field.component === 'input'}
											<Input
												{...props}
												bind:value={$formData[field.name]}
												placeholder={field.placeholder}
											/>
										{:else if field.component === 'textarea'}
											<Textarea
												{...props}
												bind:value={$formData[field.name]}
												placeholder={field.placeholder}
											/>
										{:else if field.component === 'select'}
											<Select
												type="single"
												bind:value={$formData[field.name]}
												name={props.name}
											>
												<SelectTrigger
													{...props}
													class="w-full cursor-pointer"
												>
													{$formData[field.name]
														? $formData[field.name]
														: field.placeholder || 'Välj en tjänst'}
												</SelectTrigger>
												<SelectContent>
													{#each field.options || [] as option}
														<SelectItem
															value={option.value}
															class="cursor-pointer"
															>{option.label}</SelectItem
														>
													{/each}
												</SelectContent>
											</Select>
										{/if}
									{/snippet}
								</FormControl>
								<FormDescription />
								<FormFieldErrors />
							</FormField>
						{/each}

						<Button
							type="submit"
							class="bg-linear-to-r from-[#1a9bce] to-[#61c9b7] text-white transition-opacity hover:opacity-90 md:col-span-2"
							>Skicka</Button
						>
					</form>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
