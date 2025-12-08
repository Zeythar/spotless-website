<script lang="ts">
	import {cn} from '$lib/utils';
	import {Skeleton} from '$lib/components/ui/skeleton';
	import type {HTMLImgAttributes} from 'svelte/elements';

	let {
		class: className,
		imgClass,
		src,
		alt,
		...rest
	}: HTMLImgAttributes & {imgClass?: string} = $props();

	let loaded = $state(false);

	function checkLoaded(img: HTMLImageElement) {
		if (img.complete) loaded = true;
	}
</script>

<div class={cn('relative overflow-hidden', className)}>
	{#if !loaded}
		<Skeleton class="absolute inset-0 h-full w-full" />
	{/if}
	<img
		use:checkLoaded
		{src}
		{alt}
		class={cn(
			'h-full w-full object-cover transition-opacity duration-300',
			loaded ? 'opacity-100' : 'opacity-0',
			imgClass
		)}
		onload={() => (loaded = true)}
		{...rest}
	/>
</div>
