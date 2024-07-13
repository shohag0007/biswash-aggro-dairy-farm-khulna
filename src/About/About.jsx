import Nav from "../components/Nav/Nav";


const About = () => {
    return (
        <>
        <Nav></Nav>
       
        
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-2 m-4">
       
<div class="max-w-xs overflow-hidden bg-violet-400 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold  uppercase text-white">খাচ্ছে</h1>
        <p class="mt-1 text-sm text-white ">নিজস্ব প্রোজেক্ট এর ঘাস খেয়ে বেড়ে ওঠে আমাদের গরু গুলি।</p>
    </div>

   <img src="/k1.jpg"/>

   
</div>

<div class="max-w-xs overflow-hidden bg-green-200 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-green  ">পুষ্টি উপাদান সমৃদ্ধ খাবার</h1>
        <p class="mt-1 text-sm text-black">আমরা গরুগুলাকে পুষ্টি গুনে সমৃদ্ধ খাবার খাওয়াই। </p>
    </div>

   <img className="" src="/k2.jpg"/>

    
</div>

<div class="max-w-xs overflow-hidden bg-orange-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold  dark:text-white">খাবার খাওয়ার অপেক্ষায়</h1>
        <p class="mt-1 text-sm text-black">প্রতিদিন রুটিন অনুযায়ী গরুদের খাবার দেওয়া হয়।</p>
    </div>

   <img className=""
   src="/k3.jpg"/>

    
</div>

<div class="max-w-xs overflow-hidden bg-amber-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-black">মেশিনের সাহায্যে দুধ দোয়ানো হচ্ছে</h1>
        <p class="mt-1 text-sm text-black">বিশ্বাস এগ্রো ফার্মের প্রতিটি গাভী মেশিনের সাহায্য দোয়ানো হয়।</p>
    </div>

   <img src="/kmilk.jpg"/>

    
</div>

<div class="max-w-xs overflow-hidden bg-orange-700 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-white">বিশ্বাস এগ্রো ফার্মের গরুগুলো </h1>
        <p class="mt-1 text-sm text-white">খাওয়ার পর বিশ্রাম নিচ্ছে।</p>
    </div>

   <img src="/krest.jpg"/>

    
</div>

<div class="max-w-xs overflow-hidden bg-pink-600 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-white">বিশ্রামে আছে খাওয়ার পর</h1>
        <p class="mt-1 text-sm text-white"> গরুদের বিশ্রামের জন্য উপযোগী ব্যবস্থা করা আছে</p>
    </div>

   <img src="/krest1.jpg"/>

   
</div>

<div class="max-w-xs overflow-hidden bg-blue-400 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-orange-600">বিশ্বাস এগ্রো ফার্মের</h1>
        <p class="mt-1 text-sm text-orange-600"> গরুগুলো আমরা খুব যত্ন সহকারে লালন পালন করে থাকি।</p>
    </div>

   <img src="/krest2.jpg"/>

    
</div>

<div class="max-w-xs overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-yellow-500">বিশ্বাস এগ্রো ফার্মের নিজস্ব প্রোজেক্টের ঘাস খেয়ে</h1>
        <p class="mt-1 text-sm text-yellow-500">গরু গুলো বড় হয়ে থাকে।</p>
    </div>

   <img src="/kgrass.jpg"/>

    
</div>
</div>
        </>

    );
};

export default About;