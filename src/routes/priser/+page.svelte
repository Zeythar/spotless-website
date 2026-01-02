<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import PricesSection from '$lib/components/sections/PricesSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';

	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<Seo
	title={seoData.prices.title}
	description={seoData.prices.description}
/>

<PricesSection />
<ContactSection data={data.form} />
