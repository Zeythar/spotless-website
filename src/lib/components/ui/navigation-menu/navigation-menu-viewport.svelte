<script lang="ts">
	import {NavigationMenu as NavigationMenuPrimitive} from 'bits-ui';
	import {cn} from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: NavigationMenuPrimitive.ViewportProps = $props();
</script>

<div class={cn('absolute start-0 top-full isolate z-50 flex justify-center')}>
	<NavigationMenuPrimitive.Viewport
		bind:ref
		data-slot="navigation-menu-viewport"
		class={cn(
			'origin-top relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md duration-200 ease-out md:w-[var(--bits-navigation-menu-viewport-width)]',
			'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2',
			'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1',
			className
		)}
		{...restProps}
	/>
</div>
