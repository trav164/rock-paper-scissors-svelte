<main class="bg-gray-200 h-screen">
	<div class="flex flex-col items-center justify-center">
		<form action="?/register" method="POST">
			<div class="mx-auto bg-gray-100 p-6">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="">Email</label>
					<input
						class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="email"
						placeholder="derek@email.com"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="">Password</label>
					<input
						class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="password"
						name="password"
						placeholder="********"
					/>
				</div>
				<div class="mb-4">
					<button
						class=" bg-blue-500 p-2 rounded text-white font-bold text-md shadow hover:bg-blue-800 focus:outline-none focus:shadow-outline"
						type="submit">Register</button
					>
				</div>
			</div>
		</form>
	</div>
</main>
