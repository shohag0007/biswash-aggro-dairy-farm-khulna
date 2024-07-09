import Nav from "../components/Nav/Nav";


const Contact = () => {
    return (
        <>
        <Nav></Nav>
        <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure>
    <img className="h-[500px] border rounded-s-full"
      src="public/owner.jpg"
      alt="Album" />
  </figure>
  <div className="card-body bg-black">
    <h2 className="card-title mt-32 text-white font-bold text-2xl">AK Bulbul</h2>
    <h2 className="text-white">Mobile Number: 01715-276149<br/>
    Email Address: alamgirkabirbulbul@gmail.com
    </h2>
    
    <div className="card-actions justify-end text-green-600 text-3xl ">
      <marquee className="mt-10">প্রয়োজনে মোবাইল অথবা ই-মেইল করুন</marquee>
    </div>
  </div>
</div>

        </>
    );
};

export default Contact;