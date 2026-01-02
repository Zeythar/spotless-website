<script lang="ts">
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';
	import {seoData} from '$lib/data/seo';
	import type {FormSchema} from '$lib/schema';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<Seo
	title={seoData.home.title}
	description={seoData.home.description}
/>

<HeroSection />
<AboutSection />
<ContactSection data={data.form} />
