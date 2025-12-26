<script lang="ts">
	import {Alert, AlertDescription, AlertTitle} from '$lib/components/ui/alert/index.js';
	import {Button} from '$lib/components/ui/button/index.js';
	import {
		FormControl,
		FormDescription,
		FormField,
		FormFieldErrors,
		FormLabel
	} from '$lib/components/ui/form/index.js';
	import {Input} from '$lib/components/ui/input/index.js';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select/index.js';
	import {Textarea} from '$lib/components/ui/textarea/index.js';
	import {contactData} from '$lib/data/contact';
	import {formSchema, type FormSchema} from '$lib/schema';
	import {contactState} from '$lib/state/contact.svelte';
	import {CheckCircle2} from '@lucide/svelte';
	import {type Infer, superForm, type SuperValidated} from 'sveltekit-superforms';
	import {zod4Client} from 'sveltekit-superforms/adapters';

	let {
		data,
		id,
		onsuccess
	}: {
		data: SuperValidated<Infer<FormSchema>>;
		id?: string;
		onsuccess?: () => void;
	} = $props();

	let isSuccess = $state(false);

	const form = superForm(data, {
		validators: zod4Client(formSchema),
		id,
		onResult: ({result}) => {
			if (result.type === 'success') {
				isSuccess = true;
				setTimeout(() => {
					onsuccess?.();
					isSuccess = false;
				}, 2000);
			}
		}
	});

	const {form: formData, enhance} = form;

	$effect(() => {
		if (contactState.selectedService) {
			$formData.service = contactState.selectedService;
		}
	});

	type FieldConfig = {
		name: keyof Infer<FormSchema>;
		label: string;
		component: 'input' | 'select' | 'textarea';
		class?: string;
		placeholder?: string;
		options?: {value: string; label: string}[];
	};

	const formFields: FieldConfig[] = [
		{
			name: 'name',
			label: contactData.form.fields.name.label,
			component: 'input',
			placeholder: contactData.form.fields.name.placeholder
		},
		{
			name: 'email',
			label: contactData.form.fields.email.label,
			component: 'input',
			placeholder: contactData.form.fields.email.placeholder
		},
		{
			name: 'phone',
			label: contactData.form.fields.phone.label,
			component: 'input',
			placeholder: contactData.form.fields.phone.placeholder
		},
		{
			name: 'service',
			label: contactData.form.fields.service.label,
			component: 'select',
			placeholder: contactData.form.fields.service.placeholder,
			options: contactData.form.fields.service.options
		},
		{
			name: 'message',
			label: contactData.form.fields.message.label,
			component: 'textarea',
			class: 'md:col-span-2',
			placeholder: contactData.form.fields.message.placeholder
		}
	];
</script>

{#if isSuccess}
	<Alert class="border-green-200 bg-green-50 text-green-800">
		<CheckCircle2 class="h-4 w-4 text-green-600" />
		<AlertTitle>{contactData.form.success.title}</AlertTitle>
		<AlertDescription>
			{contactData.form.success.description}
		</AlertDescription>
	</Alert>
{:else}
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
										? field.options?.find(
												(o) => o.value === $formData[field.name]
											)?.label
										: field.placeholder || 'Välj en tjänst'}
								</SelectTrigger>
								<SelectContent>
									{#each field.options || [] as option}
										<SelectItem
											value={option.value}
											class="cursor-pointer">{option.label}</SelectItem
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

		<!-- Honeypot field - hidden from users but visible to bots -->
		<div
			class="absolute top-[-9999px] left-[-9999px] opacity-0"
			aria-hidden="true"
		>
			<label for="confirmEmail">Bekräfta e-post</label>
			<input
				id="confirmEmail"
				name="confirmEmail"
				bind:value={$formData.confirmEmail}
				tabindex="-1"
				autocomplete="off"
			/>
		</div>

		<Button
			type="submit"
			class="cursor-pointer bg-linear-to-r from-brand-primary to-brand-secondary text-white transition-opacity hover:opacity-90 md:col-span-2"
			>{contactData.form.submitButton}</Button
		>
	</form>
{/if}
