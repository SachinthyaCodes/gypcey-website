interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonColor?: string;
}

export default function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  buttonColor = 'bg-gray-300 hover:bg-gray-400' 
}: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105 ${
      isPopular ? 'ring-2 ring-orange-500' : ''
    }`}>
      <div className="px-4 py-4 text-center border-b border-gray-100">
        <p className="text-orange-500 font-medium text-sm font-roboto">{title}</p>
        <h3 className="flex items-center justify-center my-2">
          <span className="text-2xl font-semibold text-gray-700">{price}</span>
          <span className="text-gray-500 ml-1 text-xs">/{period}</span>
        </h3>
        <div className={`w-full ${buttonColor} rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer`}>
          {title}
        </div>
      </div>
      <div className="px-4 py-4">
        <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 text-xs">✓</span>
              <span className="text-xs text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}