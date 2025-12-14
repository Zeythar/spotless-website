<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>; recaptchaSiteKey: string}} =
		$props();
</script>

<svelte:head>
	<title>{seoData.faq.title}</title>
	<meta
		name="description"
		content={seoData.faq.description}
	/>
</svelte:head>

<FaqSection />
<ContactSection
	data={data.form}
	recaptchaSiteKey={data.recaptchaSiteKey}
/>
