<script lang="ts">
	import {page} from '$app/stores';
	import {Button} from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>{$page.status} - Sidan hittades inte</title>
</svelte:head>

<div
	class="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
>
	<h1 class="mb-4 text-6xl font-bold text-brand-primary">{$page.status}</h1>
	<h2 class="mb-6 text-2xl font-semibold">Hoppsan! Något gick fel.</h2>
	<p class="mb-8 max-w-md text-gray-600">
		{#if $page.status === 404}
			Sidan du letar efter verkar inte finnas. Den kan ha flyttats eller tagits bort.
		{:else}
			Ett oväntat fel inträffade. Försök igen senare.
		{/if}
	</p>
	<Button
		href="/"
		class="bg-brand-primary text-white hover:bg-brand-primary/90"
	>
		Gå tillbaka till startsidan
	</Button>
</div>
