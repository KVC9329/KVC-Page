import Link from "next/link";

const Footer = () => {
  return (
     <footer className="bg-black px-4 ">
        <h1 className="w-full text-3xl font-semibold text-white py-5">KVC CONSULTANTS LTD.</h1>
        <div className='grid sm:grid-cols-12'> 
            <div className='flex flex-col col-span-6 text-white'>
                <div className="my-3">
                    <p className="font-bold py-2">LUCKNOW RECRUITMENT CENTER:</p>
                    <p>1-A, Sapru Marg, 1st Floor, Shrawan Plaza, Opp. SSP Niwas, Lucknow - 226001</p>
                    <p>+91 9628373762; +91 9628373764</p>
                    <p><span className="font-bold">Landline : </span> 0522-4062323</p>
                    <p><span className="font-bold">Email : </span> jobs@kvcconsultantsltd.com</p>
                    <p><span className="font-bold">Amit : </span> +91 9628373761</p>
                </div>

                <div className="my-3">
                    <p className="font-bold py-2">JABALPUR RECRUITMENT CENTER:</p>
                    <p>178, Manmohan Nagar, Madhotal, Near New ISBT, Jabalpur MP (482002)</p>
                    <p>+91 9628373762; +91 9628373764</p>
                    <p><span className="font-bold">Phone : </span>+91 7999557006</p>
                    <p><span className="font-bold">Email : </span>prajit@kvcconsultantsltd.com</p>
                </div>
            </div>
            <div className='col-span-6'>
                <p className="font-bold text-white py-2"> Quick Links : </p>
                <div className="py-2">
                    <p className="text-white hover:font-semibold py-1"><Link href="/about">about us</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="/contact">contact us</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="/jobs">Job postings</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="#">gallary</Link></p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;