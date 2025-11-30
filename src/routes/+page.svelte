<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';
	import {seoData} from '$lib/data/seo';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>{seoData.home.title}</title>
	<meta
		name="description"
		content={seoData.home.description}
	/>
</svelte:head>

<HeroSection />
<AboutSection />
<ContactSection data={data.form} />
