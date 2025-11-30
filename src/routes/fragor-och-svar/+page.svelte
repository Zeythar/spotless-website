<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FaqSection from '$lib/pages/FAQ/FaqSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>Spotless - Frågor & Svar</title>
	<meta
		name="description"
		content="This is where the description goes for SEO"
	/>
</svelte:head>

<FaqSection />
<ContactSection data={data.form} />
