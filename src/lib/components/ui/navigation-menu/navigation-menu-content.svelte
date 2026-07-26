<script lang="ts">
	import {NavigationMenu as NavigationMenuPrimitive} from 'bits-ui';
	import {cn} from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: NavigationMenuPrimitive.ContentProps = $props();
</script>

<NavigationMenuPrimitive.Content
	bind:ref
	data-slot="navigation-menu-content"
	class={cn(
		'start-0 top-0 w-full md:absolute md:w-auto',
		// Between-item motion (viewport mode only) — enter only, no exit fade that empties the shell
		'data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in-0 data-[motion^=from-]:duration-200',
		'data-[motion=from-end]:slide-in-from-right-4 data-[motion=from-start]:slide-in-from-left-4',
		// Standalone panel (viewport=false) — one unified open/close animation
		'group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5',
		'group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md',
		'group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover',
		'group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow-md',
		'group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:ease-out',
		'group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in',
		'group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0',
		'group-data-[viewport=false]/navigation-menu:data-[state=open]:slide-in-from-top-2',
		'group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out',
		'group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0',
		'group-data-[viewport=false]/navigation-menu:data-[state=closed]:slide-out-to-top-1',
		'**:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
		className
	)}
	{...restProps}
/>
