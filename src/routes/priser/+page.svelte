<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import PricesSection from '$lib/pages/prices/PricesSection.svelte';

	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>Spotless - Priser</title>
	<meta
		name="description"
		content="This is where the description goes for SEO"
	/>
</svelte:head>

<PricesSection />
<ContactSection data={data.form} />