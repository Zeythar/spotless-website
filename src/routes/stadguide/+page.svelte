<script lang="ts">
	import CleaningGuideSection from '$lib/components/sections/CleaningGuideSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

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
