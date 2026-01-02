<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<Seo
	title={seoData.faq.title}
	description={seoData.faq.description}
/>

<FaqSection />
<ContactSection data={data.form} />
