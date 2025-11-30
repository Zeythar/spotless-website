<script lang="ts">
	import {Facebook, Instagram, Linkedin} from '@lucide/svelte';
	import Logo from './Logo.svelte';
</script>

<footer class="bg-foreground py-12 text-background">
	<div class="container mx-auto px-4">
		<div class="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
			<!-- Company Info -->
			<div class="lg:col-span-2">
				<div class="mb-4">
					<Logo white={true} />
				</div>
				<p class="text-sm text-background/70">
					Professionell städning för hem och företag sedan 2025
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-4 text-background">Sidor</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="/"
							class="text-background/70 transition-colors hover:text-background"
						>
							Hem
						</a>
					</li>
					<li>
						<a
							href="/varfor-oss"
							class="text-background/70 transition-colors hover:text-background"
						>
							Varför oss
						</a>
					</li>
					<li>
						<a
							href="/priser"
							class="text-background/70 transition-colors hover:text-background"
						>
							Priser
						</a>
					</li>
					<li>
						<a
							href="/stadguide"
							class="text-background/70 transition-colors hover:text-background"
						>
							Städguide
						</a>
					</li>
					<li>
						<a
							href="/fragor-och-svar"
							class="text-background/70 transition-colors hover:text-background"
						>
							Frågor & Svar
						</a>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-4 text-background">Våra tjänster</h4>
				<ul class="space-y-2 text-sm text-background/70">
					<li>
						<a
							href="/tjanster/hem-och-privatstadning"
							class="text-background/70 transition-colors hover:text-background"
						>
							Hem- & Privatstädning
						</a>
					</li>
					<li>
						<a
							href="/tjanster/foretags-och-lokalstadning"
							class="text-background/70 transition-colors hover:text-background"
						>
							Företags- & Lokalstädning
						</a>
					</li>
					<li>
						<a
							href="/tjanster/foretags-och-lokalstadning"
							class="text-background/70 transition-colors hover:text-background"
						>
							Specialstädning & Sanering
						</a>
					</li>
					<li>
						<a
							href="/tjanster/service-och-ovrigt"
							class="text-background/70 transition-colors hover:text-background"
						>
							Service & Övrigt
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="mb-4 text-background">Kontakt</h4>
				<ul class="space-y-2 text-sm text-background/70">
					<li>
						<a
							href="tel:0735686467"
							class="text-background/70 transition-colors hover:text-background"
							>0735-686 467</a
						>
					</li>
					<li>
						<a
							href="mailto:info@spotlessnorrland.se"
							class="text-background/70 transition-colors hover:text-background"
							>info@spotlessnorrland.se</a
						>
					</li>
					<li>Midälvavägen 20, Sundsvall</li>
					<li>Mån-Fre 08:00-17:00</li>
				</ul>
				<div class="mt-4 flex gap-3">
					<a
						href="#facebook"
						class="rounded-lg bg-background/10 p-2 transition-colors hover:bg-background/20"
						aria-label="Facebook"
					>
						<Facebook class="h-5 w-5" />
					</a>
					<a
						href="#instagram"
						class="rounded-lg bg-background/10 p-2 transition-colors hover:bg-background/20"
						aria-label="Instagram"
					>
						<Instagram class="h-5 w-5" />
					</a>
					<a
						href="#linkedin"
						class="rounded-lg bg-background/10 p-2 transition-colors hover:bg-background/20"
						aria-label="LinkedIn"
					>
						<Linkedin class="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>

		<div class="border-t border-background/10 pt-8 text-center text-sm text-background/70">
			<p>
				&copy; {new Date().getFullYear()} Spotless Norrland. Alla rättigheter förbehållna.
			</p>
		</div>
	</div>
</footer>
