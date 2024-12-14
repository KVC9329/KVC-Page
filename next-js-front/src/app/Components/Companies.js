import Image from "next/image"

const CompaniesList = [ 
    "/techm_logo.png", 
    "/infosys_logo.png", 
    "/taskus-logo.png",
    "/concentrix_logo.png",
    "/wipro_logo.png",
    "/teleperformance_logo.png",
    "/telusinternational_logo.png"
]

export default function Comapnies() {
    return <div className="grid grid-cols-3 sm:grid-cols-6 gap-10 items-center">{CompaniesList.map((image) => <Image src={image} alt={image} width={150} height={150}/>)}</div>
}