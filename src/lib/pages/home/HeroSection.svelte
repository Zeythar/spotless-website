<script lang="ts">
	import {Button} from '$lib/components/ui/button';
</script>

<section
	id="hero"
	class="relative overflow-hidden bg-linear-to-br from-[#1a9bce]/10 to-[#61c9b7]/10"
>
	<div class="container mx-auto px-4 py-20 lg:py-32">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Content -->
			<div class="space-y-6">
				<h1 class="text-4xl font-medium lg:text-5xl xl:text-6xl">
					Professionell städning för hem och företag
				</h1>
				<p class="max-w-xl text-lg text-muted-foreground">
					Släpp städstressen och låt Spotless göra jobbet. Vi erbjuder allt från
					regelbunden hem- och kontorsstädning till avancerad sanering, utfört med
					proffsig precision och pålitlighet.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<Button
						size="lg"
						class="bg-linear-to-r from-[#1a9bce] to-[#61c9b7] text-white transition-opacity hover:opacity-90"
					>
						Begär offert
					</Button>
					<Button
						size="lg"
						variant="outline"
					>
						Se våra tjänster
					</Button>
				</div>
			</div>

			<!-- Image -->
			<div class="relative">
				<div class="aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="/images/content/site-hero.jpg"
						alt="Professionell städtjänst"
						class="h-full w-full object-cover"
					/>
				</div>
				<!-- Decorative element -->
				<div
					class="absolute -right-6 -bottom-6 -z-10 h-64 w-64 rounded-2xl bg-linear-to-br from-[#1a9bce] to-[#61c9b7] opacity-20"
				></div>
			</div>
		</div>
	</div>
</section>
