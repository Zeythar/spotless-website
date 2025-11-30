<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';
	import {seoData} from '$lib/data/seo';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>{seoData.faq.title}</title>
	<meta
		name="description"
		content={seoData.faq.description}
	/>
</svelte:head>

<FaqSection />
<ContactSection data={data.form} />
