<script lang="ts">
	import CleaningGuideSection from '$lib/components/sections/CleaningGuideSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<Seo
	title={seoData.cleaningGuide.title}
	description={seoData.cleaningGuide.description}
/>

<CleaningGuideSection />
<ContactSection data={data.form} />
