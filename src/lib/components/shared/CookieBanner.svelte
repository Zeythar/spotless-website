<script lang="ts">
	import {browser} from '$app/environment';
	import {afterNavigate} from '$app/navigation';
	import {page} from '$app/stores';
	import {privacyData} from '$lib/data/privacy';
	import X from '@lucide/svelte/icons/x';
	import {onMount} from 'svelte';
	import {fade, fly} from 'svelte/transition';

	const GA_ID = 'G-32Y4BXHR32';

	let isVisible = $state(false);
	let showSettings = $state(false);
	let analyticsEnabled = $state(false);
	let gaLoaded = $state(false);

	function gtag(...args: unknown[]) {
		if (!browser) return;
		const win = window as Window & {dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void};
		win.dataLayer = win.dataLayer || [];
		win.dataLayer.push(args);
	}

	function loadGoogleAnalytics() {
		if (!browser || gaLoaded) return;
		gaLoaded = true;

		const win = window as Window & {dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void};
		win.dataLayer = win.dataLayer || [];
		win.gtag = function gtag(...args: unknown[]) {
			win.dataLayer!.push(args);
		};

		win.gtag('js', new Date());
		win.gtag('config', GA_ID);

		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
		document.head.appendChild(script);
	}

	function enableAnalytics() {
		analyticsEnabled = true;
		loadGoogleAnalytics();
		gtag('consent', 'update', {
			analytics_storage: 'granted'
		});
	}

	function disableAnalytics() {
		analyticsEnabled = false;
		gtag('consent', 'update', {
			analytics_storage: 'denied'
		});
	}

	afterNavigate(() => {
		if (browser && analyticsEnabled && gaLoaded) {
			gtag('event', 'page_view', {
				page_path: $page.url.pathname
			});
		}
	});

	onMount(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			isVisible = true;
			return;
		}

		try {
			const parsed = JSON.parse(consent);
			if (parsed.analytics) {
				enableAnalytics();
			}
		} catch {
			isVisible = true;
		}
	});

	const handleAcceptAll = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: true,
				timestamp: new Date().toISOString()
			})
		);
		enableAnalytics();
		isVisible = false;
	};

	const handleRejectOptional = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: false,
				timestamp: new Date().toISOString()
			})
		);
		disableAnalytics();
		isVisible = false;
	};

	const handleSavePreferences = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: analyticsEnabled,
				timestamp: new Date().toISOString()
			})
		);
		if (analyticsEnabled) {
			enableAnalytics();
		} else {
			disableAnalytics();
		}
		isVisible = false;
	};
</script>

{#if isVisible}
	<div
		class="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
		transition:fly={{y: 20, duration: 300}}
	>
		<div class="container mx-auto max-w-6xl">
			<div class="rounded-xl border bg-white shadow-2xl">
				<div class="p-6">
					{#if !showSettings}
						<div in:fade={{duration: 200}}>
							<div class="mb-4 flex items-start justify-between gap-4">
								<div>
									<h3 class="mb-2 font-semibold">{privacyData.banner.title}</h3>
									<p class="text-sm text-muted-foreground">
										{privacyData.banner.description}
									</p>
								</div>
								<button
									onclick={() => (isVisible = false)}
									class="shrink-0 cursor-pointer rounded-md p-2 text-muted-foreground transition-colors select-none hover:bg-accent hover:text-accent-foreground"
									aria-label="Stäng"
								>
									<X class="h-4 w-4" />
								</button>
							</div>

							<div
								class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
							>
								<a
									href="/integritetspolicy"
									class="text-sm font-medium text-brand-primary hover:underline"
								>
									{privacyData.banner.links.policy}
								</a>

								<div class="flex flex-col gap-2 sm:flex-row">
									<button
										onclick={() => (showSettings = true)}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-xs transition-all outline-none select-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.customize}
									</button>
									<button
										onclick={handleRejectOptional}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-xs transition-all outline-none select-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.essential}
									</button>
									<button
										onclick={handleAcceptAll}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-primary to-brand-secondary px-4 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-xs transition-opacity outline-none select-none hover:opacity-90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.accept}
									</button>
								</div>
							</div>
						</div>
					{:else}
						<div in:fade={{duration: 200}}>
							<div class="mb-4 flex items-start justify-between gap-4">
								<h3 class="font-semibold">{privacyData.banner.settingsTitle}</h3>
								<button
									onclick={() => (showSettings = false)}
									class="shrink-0 cursor-pointer rounded-md p-2 text-muted-foreground transition-colors select-none hover:bg-accent hover:text-accent-foreground"
									aria-label="Tillbaka"
								>
									<X class="h-4 w-4" />
								</button>
							</div>

							<div class="space-y-4">
								<div class="rounded-lg border bg-muted/30 p-4">
									<div class="flex items-start justify-between gap-4">
										<div class="flex-1">
											<div class="mb-1 flex items-center gap-2">
												<h4 class="font-medium">
													{privacyData.banner.essentialTitle}
												</h4>
												<span
													class="rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-2 py-0.5 text-xs text-white"
												>
													{privacyData.banner.essentialBadge}
												</span>
											</div>
											<p class="text-sm text-muted-foreground">
												{privacyData.banner.essentialDesc}
											</p>
										</div>
										<div class="flex h-6 items-center">
											<div
												class="relative inline-flex h-6 w-11 items-center rounded-full bg-linear-to-r from-brand-primary to-brand-secondary opacity-50"
											>
												<span
													class="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition"
												></span>
											</div>
										</div>
									</div>
								</div>

								<div class="rounded-lg border p-4">
									<div class="flex items-start justify-between gap-4">
										<div class="flex-1">
											<h4 class="mb-1 font-medium">
												{privacyData.banner.analyticsTitle}
											</h4>
											<p class="text-sm text-muted-foreground">
												{privacyData.banner.analyticsDesc}
											</p>
										</div>
										<div class="flex h-6 items-center">
											<button
												type="button"
												aria-label="Analyscookies"
												onclick={() =>
													(analyticsEnabled = !analyticsEnabled)}
												class="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-input select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
												role="switch"
												aria-checked={analyticsEnabled}
											>
												<span
													class="absolute inset-0 rounded-full bg-linear-to-r from-brand-primary to-brand-secondary transition-opacity duration-200 ease-out {analyticsEnabled
														? 'opacity-100'
														: 'opacity-0'}"
													aria-hidden="true"
												></span>
												<span
													class="relative ms-1 inline-block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out {analyticsEnabled
														? 'translate-x-5'
														: 'translate-x-0'}"
												></span>
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
								<button
									onclick={() => (showSettings = false)}
									class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-xs transition-all outline-none select-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									{privacyData.banner.buttons.cancel}
								</button>
								<button
									onclick={handleSavePreferences}
									class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-primary to-brand-secondary px-4 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-xs transition-opacity outline-none select-none hover:opacity-90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									{privacyData.banner.buttons.save}
								</button>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
