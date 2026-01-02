<script lang="ts">
	import {page} from '$app/stores';

	let {
		title,
		description,
		type = 'website'
	}: {
		title: string;
		description: string;
		type?: 'website' | 'article';
	} = $props();

	const siteUrl = 'https://spotlessnorrland.se';
	const canonicalUrl = $derived(`${siteUrl}${$page.url.pathname}`);
	const imageUrl = `${siteUrl}/images/embed-preview.jpg`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={description}
	/>
	<link
		rel="canonical"
		href={canonicalUrl}
	/>

	<!-- Open Graph / Facebook -->
	<meta
		property="og:type"
		content={type}
	/>
	<meta
		property="og:url"
		content={canonicalUrl}
	/>
	<meta
		property="og:title"
		content={title}
	/>
	<meta
		property="og:description"
		content={description}
	/>
	<meta
		property="og:image"
		content={imageUrl}
	/>

	<!-- Twitter -->
	<meta
		property="twitter:card"
		content="summary_large_image"
	/>
	<meta
		property="twitter:url"
		content={canonicalUrl}
	/>
	<meta
		property="twitter:title"
		content={title}
	/>
	<meta
		property="twitter:description"
		content={description}
	/>
	<meta
		property="twitter:image"
		content={imageUrl}
	/>
</svelte:head>
