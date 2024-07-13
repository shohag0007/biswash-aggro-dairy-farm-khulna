 import Nav from "../components/Nav/Nav";

;



const SellItems = () => {
    return (
        <>
        <Nav></Nav>
        <div className="grid gap-4 w-full pl-10 md:grid-cols-2 lg:flex">
      
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FKUrUZb_UfE?si=2gyujjXeOjnz5E0b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <div>
         <img className="w-[560px] h-[315px]" src="/b23.jpg"/>
         </div>
            </div>

            
                <h1 className="text-center font-extrabold text-rose-950 m-10 text-4xl">"বিশ্বাস এগ্রো ফার্ম খুলনা ব্রাঞ্চ"
                <br/>
                
                    আমাদের খুলনা ব্রাঞ্চে প্রতিদিন প্রায় ৩০০ লিটার দুধ উৎপাদিত হয়।
                       <br/>
                    দুধের প্রয়োজনে আমাদের ফার্মে যোগাযোগ করতে পারেন।
                    আমরা আমাদের ফার্মের খাঁটি দুধ বিক্রি করে থাকি।

                
            </h1>
            
           
     
     
    </>
       
    );
};

export default SellItems;

