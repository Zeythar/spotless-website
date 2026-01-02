<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import WhyChooseUsSection from '$lib/components/sections/WhyChooseUsSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';

	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<Seo
	title={seoData.whyChooseUs.title}
	description={seoData.whyChooseUs.description}
/>

<WhyChooseUsSection />
<ContactSection data={data.form} />
