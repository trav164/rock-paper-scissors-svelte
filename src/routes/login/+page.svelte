<main class="flex items-center justify-center min-h-screen bg-gray-900">
	<div class="flex flex-col items-center justify-center">
		<form action="?/login" method="POST">
			<div class="mx-auto bg-slate-300 p-12 rounded shadow-xl">
				<h1 class="mb-6 -mt-6 text-2xl">Sign In</h1>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="">Email</label>
					<input
						class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300"
						type="text"
						name="email"
						placeholder="derek@email.com"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="">Password</label>
					<input
						class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300"
						type="password"
						name="password"
						placeholder="********"
					/>
				</div>
				<div class="mt-8">
					<button
						class=" bg-violet-500 p-2 w-full rounded text-white font-bold text-md shadow hover:bg-violet-600 focus:outline-none focus:shadow-outline"
						type="submit">Login</button
					>
					<a
						class="text-sm inline-block mt-2 font-bold text-gray-600 hover:text-violet-500"
						href="/password-reset">Reset Password</a
					>
				</div>
			</div>
		</form>
	</div>
</main>
