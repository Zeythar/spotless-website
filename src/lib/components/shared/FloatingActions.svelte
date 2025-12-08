<script lang="ts">
	import {ArrowUp, Brush, Bubbles} from '@lucide/svelte';
	import {Button} from '$lib/components/ui/button/index.js';
	import {fade} from 'svelte/transition';
	import {floatingActionsData} from '$lib/data/floating-actions';
	import {contactState} from '$lib/state/contact.svelte';

	let showScrollTop = $state(false);

	function handleScroll() {
		showScrollTop = window.scrollY > 300;
	}

	function scrollToTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
</script>

<svelte:window onscroll={handleScroll} />

<div class="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
	{#if showScrollTop}
		<div transition:fade={{duration: 200}}>
			<Button
				variant="secondary"
				size="icon"
				class="h-12 w-12 cursor-pointer rounded-full border border-border bg-white text-primary shadow-lg hover:bg-white"
				onclick={scrollToTop}
				aria-label={floatingActionsData.scrollToTop.label}
			>
				<ArrowUp class="h-6! w-6!" />
			</Button>
		</div>
	{/if}

	<Button
		class="group flex h-12 cursor-pointer items-center gap-0 rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-0 text-white shadow-lg transition-all duration-300 hover:gap-2 hover:px-6"
		aria-label={floatingActionsData.contact.ariaLabel}
		onclick={() => (contactState.isOpen = true)}
	>
		<div class="flex h-12 w-12 items-center justify-center">
			<Bubbles class="h-6! w-6!" />
		</div>
		<span
			class="max-w-0 overflow-hidden text-lg font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[200px] group-hover:opacity-100"
		>
			{floatingActionsData.contact.label}
		</span>
	</Button>
</div>
