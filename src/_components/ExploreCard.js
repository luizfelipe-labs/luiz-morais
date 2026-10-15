import Link from "next/link";
import Image from "next/image";

export default function ExploreCard({ title, description, image, textButton}) {
   return (
    <Link className="flex h-40 bg-zinc-800 text-white p-4 rounded-lg" href="/details">
      <div className="flex flex-col items-start gap-1 pl-2">
        <h3 className="font-semibold">{title}</h3>

        <p className="text-gray-300 text-xs inline-block whitespace-pre">{description}</p>
        
         <span className="bg-white text-black rounded-full px-3 py-2 font-semibold mt-4"><p>{textButton}</p></span>
        
      </div>

      <Image
        width={120}
        height={120}
        alt=""
        className="-mt-2 ml-7"
        src={image}
      />
    </Link>
  );
}
