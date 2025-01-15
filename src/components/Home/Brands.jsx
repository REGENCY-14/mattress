import 'react'
import BrandCard from './BrandCard'
import BrandData from '../../Data/BrandData'

export default function Brands() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {BrandData.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
    </div>
  )
}
