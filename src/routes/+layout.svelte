<script lang="ts">
	import CookieBanner from '$lib/components/shared/CookieBanner.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import {contactState} from '$lib/state/contact.svelte';
	import type {LayoutData} from './$types';
	import './layout.css';

	let {children, data}: {children: any; data: LayoutData} = $props();
</script>

<Header />
<main class="flex-1">
	{@render children()}
</main>
<Footer />
<CookieBanner />

{#if contactState.isOpen}
	{#await import('$lib/components/shared/ContactDialog.svelte') then {default: ContactDialog}}
		<ContactDialog form={data.form} />
	{/await}
{/if}
