

const Team = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/public/owner.jpg" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">AK BulBul</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Owner Of Biswash Aggro Farm</span>
                    <p>Mobile Number-01715276149</p>
                    <p>Email Address-alamgirkabirbulbul@gmail.com</p>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Team;