

const Team = () => {
    return (
        <section className="bg-white dark:bg-gray-900 grid sm:grid-cols-1 md:grid-cols-2 lg:flex">
    <div className="container px-6 py-8 mx-auto ">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Special Team</h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" className="rounded-full" src="/owner.jpg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">AK BulBul</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Owner Of Biswash Aggro Farm</span>
                    <p>Mobile Number-01715276149</p>
                    <p>Email Address-alamgirkabirbulbul@gmail.com</p>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" className="rounded-full"  src="/miluvai.jpg" alt="image" />

                <div className="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Md Saiful Islam Milu</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">In Overall Management</span>
                    <p>Mobile Number-01914843734</p>
                </div>
          
            
            </div>
            <div className="bg-black w-full rounded-full">
        
            

            </div>

            <div className="bg-green-700 rounded-full">
                

            </div>
           

            
        </div>
    </div>
</section>
    );
};

export default Team;