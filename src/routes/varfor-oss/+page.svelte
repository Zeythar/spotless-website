<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import WhyChooseUsSection from '$lib/components/sections/WhyChooseUsSection.svelte';

	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';
	import {seoData} from '$lib/data/seo';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>{seoData.whyChooseUs.title}</title>
	<meta
		name="description"
		content={seoData.whyChooseUs.description}
	/>
</svelte:head>

<WhyChooseUsSection />
<ContactSection data={data.form} />
