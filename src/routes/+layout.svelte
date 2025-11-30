<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import FloatingActions from '$lib/components/shared/FloatingActions.svelte';

	let {children} = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon}
	/>
</svelte:head>

<Header />
{@render children()}
<Footer />
<FloatingActions />
