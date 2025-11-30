<script lang="ts">
	let {white = false} = $props();
</script>

<!-- Logo -->
<a
	href="/"
	class="flex items-center gap-3"
>
	<img
		src={white ? '/images/prototyp-1-white.png' : '/images/prototyp-1.png'}
		alt="Spotless Norrland Logo"
		class="h-12"
	/>
</a>
