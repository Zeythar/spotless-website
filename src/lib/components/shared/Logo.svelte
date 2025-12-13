<script lang="ts">
	import {logoData} from '$lib/data/logo';
	let {white = false} = $props();
</script>

<!-- Logo -->
<a
	href="/"
	class="flex items-center gap-3"
>
	<img
		src={white ? logoData.images.white : logoData.images.default}
		alt={logoData.alt}
		class="h-13"
	/>
</a>
