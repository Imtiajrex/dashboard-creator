<script>
	import Input from '$lib/components/form/input.svelte';
	import Brand from '$lib/components/login/brand.svelte';
	import Social from '$lib/components/login/social.svelte';
	import ForgotPassword from '$lib/components/login/forgot-password.svelte';
	import Checkbox from '$lib/components/form/checkbox.svelte';
</script>

<svelte:head>
	<title>Sign in to Dashgen</title>
</svelte:head>
<div class="flex bg min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-lg p-6 md:p-10 space-y-8 artboard artboard-demo ">
		<Brand />
		<form class="mt-8 space-y-6" action="#" method="POST">
			<div>
				<Input label="Email" required type="email" />
				<Input label="Password" required type="password" />
			</div>

			<div class="flex items-center justify-between">
				<Checkbox />
				<ForgotPassword />
			</div>

			<button type="submit" class="btn btn-active w-full relative">Sign in </button>

			<div class="divider">OR</div>
			<div>
				<Social />
			</div>
		</form>
	</div>
</div>
