<script lang="ts">
	import {cn} from '$lib/utils';
	import type {HTMLImgAttributes} from 'svelte/elements';

	let {
		class: className,
		imgClass,
		src,
		alt,
		...rest
	}: HTMLImgAttributes & {imgClass?: string} = $props();
</script>

<img
	{src}
	{alt}
	class={cn('h-full w-full object-cover', className, imgClass)}
	{...rest}
/>
