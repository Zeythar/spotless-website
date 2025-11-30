<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import PricesSection from '$lib/components/sections/PricesSection.svelte';

	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';
	import {seoData} from '$lib/data/seo';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>{seoData.prices.title}</title>
	<meta
		name="description"
		content={seoData.prices.description}
	/>
</svelte:head>

<PricesSection />
<ContactSection data={data.form} />
