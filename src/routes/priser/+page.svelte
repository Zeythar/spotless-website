<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import PricesSection from '$lib/components/sections/PricesSection.svelte';

	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

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
