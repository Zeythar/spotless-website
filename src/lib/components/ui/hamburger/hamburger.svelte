<script lang="ts">
	import {cn} from '$lib/utils';

	let {open = $bindable(false), class: className}: {open?: boolean; class?: string} = $props();
</script>

<button
	class={cn(
		'relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
		className
	)}
	onclick={() => (open = !open)}
	aria-label="Toggle menu"
>
	<span
		class={cn(
			'h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out',
			open && 'translate-y-2 rotate-45'
		)}
	></span>
	<span
		class={cn(
			'h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out',
			open && 'opacity-0'
		)}
	></span>
	<span
		class={cn(
			'h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out',
			open && '-translate-y-2 -rotate-45'
		)}
	></span>
</button>
