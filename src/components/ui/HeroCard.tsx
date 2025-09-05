import Image from 'next/image';

interface HeroCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
  className?: string;
}

export default function HeroCard({ 
  image, 
  title, 
  description, 
  alt, 
  className = "" 
}: HeroCardProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg bg-gray-200 h-full group cursor-pointer ${className}`}>
      <Image 
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
}