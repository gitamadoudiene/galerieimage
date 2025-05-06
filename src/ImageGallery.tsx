import React from 'react'
import { Image } from './type'

interface ImageGalleryProps {
    images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <div className='gallery' style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {images.map((image) => (
            <div 
                key={image.id} 
                className='gallery-item' 
                style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                width: '200px', 
                textAlign: 'center' 
                }}
            >
                <img 
                src={image.src.medium} 
                alt={image.alt} 
                style={{ width: '100%', height: 'auto' }} 
                />
                <p style={{ margin: '8px 0', fontSize: '14px' }}> 
                Cette image vient de <a href={image.photographer_url} style={{ color: '#007BFF' }}>{image.photographer}</a>
                </p>
            </div>
            ))}
        </div>
    )
    }
export default ImageGallery