<script lang="ts">
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

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
