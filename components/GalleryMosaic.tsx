import Image from 'next/image'
import { gallery } from '@/data/gallery'

export function GalleryMosaic() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
      {gallery.map((g) => (
        <div key={g.src} className="relative aspect-square overflow-hidden rounded-xl">
          <Image src={g.src} alt={g.alt} fill className="object-cover hover:scale-105 transition" />
        </div>
      ))}
    </div>
  )
}