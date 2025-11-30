<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import CleaningGuideSection from '$lib/components/sections/CleaningGuideSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';
	import {seoData} from '$lib/data/seo';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>{seoData.cleaningGuide.title}</title>
	<meta
		name="description"
		content={seoData.cleaningGuide.description}
	/>
</svelte:head>

<CleaningGuideSection />
<ContactSection data={data.form} />
