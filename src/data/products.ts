
import { Product, Category, Brand } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2342&auto=format&fit=crop'
  },
  {
    id: 'laptops',
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2342&auto=format&fit=crop'
  },
  {
    id: 'tvs',
    name: 'TVs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'watches',
    name: 'Smart Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2342&auto=format&fit=crop'
  },
  {
    id: 'headphones',
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'pcs',
    name: 'Desktops & PCs',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2342&auto=format&fit=crop'
  }
];

export const brands: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg'
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Huawei_logo.svg'
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg'
  },
  {
    id: 'hp',
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg'
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Lenovo_logo.svg'
  },
  {
    id: 'dell',
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg'
  }
];

export const products: Product[] = [
  {
    id: 'apple-iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'apple',
    category: 'smartphones',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484bce10?q=80&w=2670&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484bce10?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1696251187447-20bc522401e9?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1695051719166-d1dfede05241?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'The most powerful iPhone ever, featuring a titanium design, A17 Pro chip, and a 48MP camera system.',
    features: [
      'A17 Pro Chip',
      '6.7" Super Retina XDR display',
      'Titanium design',
      '48MP Main camera',
      'Action button'
    ],
    specs: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro',
      'Storage': '256GB/512GB/1TB',
      'Battery': 'Up to 29 hours',
      'Water Resistance': 'IP68',
      'OS': 'iOS 17'
    },
    stock: 15,
    rating: 4.8,
    reviewCount: 248,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'samsung',
    category: 'smartphones',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1707343848875-96deb7952a25?q=80&w=2660&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1707343848875-96deb7952a25?q=80&w=2660&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1707343846292-cce6d959ef0c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1708093301061-d401eef9ff72?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'The ultimate Galaxy experience with Galaxy AI, a 200MP camera, and the built-in S Pen.',
    features: [
      'Snapdragon 8 Gen 3',
      '6.8" QHD+ Dynamic AMOLED 2X',
      '200MP main camera',
      'Built-in S Pen',
      'Galaxy AI'
    ],
    specs: {
      'Display': '6.8" QHD+ 120Hz',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB/512GB/1TB',
      'Battery': '5000mAh',
      'Water Resistance': 'IP68',
      'OS': 'Android 14'
    },
    stock: 10,
    rating: 4.7,
    reviewCount: 183,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'apple-macbook-pro-16',
    name: 'MacBook Pro 16"',
    brand: 'apple',
    category: 'laptops',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'Supercharged by M3 Pro and M3 Max chips for groundbreaking performance and up to 22 hours of battery life.',
    features: [
      'M3 Pro or M3 Max chip',
      '16.2" Liquid Retina XDR display',
      'Up to 96GB unified memory',
      'Up to 22 hours battery life',
      'Six-speaker sound system'
    ],
    specs: {
      'Display': '16.2" Liquid Retina XDR',
      'Processor': 'M3 Pro/M3 Max',
      'Storage': '512GB to 8TB SSD',
      'Memory': 'Up to 96GB',
      'Battery': 'Up to 22 hours',
      'OS': 'macOS Sonoma'
    },
    stock: 8,
    rating: 4.9,
    reviewCount: 156,
    isFeatured: true
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'WH-1000XM5 Wireless Headphones',
    brand: 'sony',
    category: 'headphones',
    price: 399,
    discountPrice: 349,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2676&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2676&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606117712514-a4d48c95ff1f?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'Experience the next level of silence with industry-leading noise cancellation and exceptional sound quality.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      '8 microphones for crystal-clear calls',
      'Adaptive Sound Control',
      'Multipoint connection'
    ],
    specs: {
      'Driver': '30mm',
      'Battery Life': 'Up to 30 hours',
      'Noise Cancellation': 'Yes, adaptive',
      'Connectivity': 'Bluetooth 5.2, 3.5mm',
      'Weight': '250g',
      'Charging': 'USB-C'
    },
    stock: 20,
    rating: 4.7,
    reviewCount: 312,
    isFeatured: true
  },
  {
    id: 'samsung-qn90c-neo-qled-tv',
    name: 'QN90C Neo QLED 4K TV 75"',
    brand: 'samsung',
    category: 'tvs',
    price: 2799,
    discountPrice: 2299,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2340&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2340&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601944179066-29b8f7e31678?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1467293622093-9f15c96be70f?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'Quantum Matrix Technology with Mini LEDs delivers incredible color, contrast, and brightness for an immersive viewing experience.',
    features: [
      'Neo Quantum Processor 4K',
      'Quantum HDR 32X',
      'Anti-Glare Screen',
      'Motion Xcelerator Turbo+',
      'Object Tracking Sound+'
    ],
    specs: {
      'Display': '75" Neo QLED 4K',
      'Resolution': '3840 x 2160',
      'Refresh Rate': '120Hz',
      'HDR': 'Quantum HDR 32X',
      'Smart TV': 'Tizen OS',
      'Audio': '60W, 4.2.2 channel'
    },
    stock: 5,
    rating: 4.6,
    reviewCount: 89,
    isFeatured: true
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    brand: 'apple',
    category: 'watches',
    price: 799,
    image: 'https://images.unsplash.com/photo-1695047756515-93ef6d1d322b?q=80&w=2670&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1695047756515-93ef6d1d322b?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617043786394-ae5a3f7d0c3c?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'The most rugged and capable Apple Watch, designed for exploration, adventure, and endurance.',
    features: [
      'S9 SiP with 64-bit dual-core processor',
      '49mm titanium case',
      'Always-On Retina LTPO OLED display',
      'Water resistant to 100m',
      'Up to 36 hours battery life'
    ],
    specs: {
      'Display': '49mm Always-On Retina',
      'Processor': 'S9 SiP',
      'Water Resistance': '100m',
      'Battery': 'Up to 36 hours',
      'Connectivity': 'GPS + Cellular',
      'OS': 'watchOS 10'
    },
    stock: 12,
    rating: 4.8,
    reviewCount: 137,
    isNew: true
  },
  {
    id: 'dell-xps-15',
    name: 'XPS 15 (9530)',
    brand: 'dell',
    category: 'laptops',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2689&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2689&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'A premium 15-inch laptop with an immersive OLED display and powerful performance in a thin, lightweight design.',
    features: [
      '13th Gen Intel Core i7/i9',
      '15.6" 3.5K OLED touch display',
      'NVIDIA GeForce RTX 4060/4070',
      'Up to 64GB RAM',
      'CNC machined aluminum chassis'
    ],
    specs: {
      'Display': '15.6" 3.5K OLED touch',
      'Processor': '13th Gen Intel Core i7/i9',
      'Graphics': 'NVIDIA GeForce RTX 4060/4070',
      'Memory': 'Up to 64GB',
      'Storage': 'Up to 4TB SSD',
      'OS': 'Windows 11'
    },
    stock: 7,
    rating: 4.6,
    reviewCount: 92
  },
  {
    id: 'xiaomi-13-pro',
    name: 'Xiaomi 13 Pro',
    brand: 'xiaomi',
    category: 'smartphones',
    price: 1099,
    discountPrice: 999,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2281&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2281&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2670&auto=format&fit=crop'
    ],
    description: 'A photography powerhouse featuring Leica optics and a 1-inch sensor main camera for professional-grade photos.',
    features: [
      'Snapdragon 8 Gen 2',
      '6.73" WQHD+ AMOLED display',
      'Leica professional optics',
      '50MP 1-inch main sensor',
      '120W HyperCharge'
    ],
    specs: {
      'Display': '6.73" WQHD+ 120Hz AMOLED',
      'Processor': 'Snapdragon 8 Gen 2',
      'Storage': '256GB/512GB',
      'Battery': '4820mAh',
      'Charging': '120W wired, 50W wireless',
      'OS': 'MIUI 14 on Android 13'
    },
    stock: 9,
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: 'hp-spectre-x360',
    name: 'Spectre x360 14"',
    brand: 'hp',
    category: 'laptops',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=2574&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop'
    ],
    description: 'A versatile convertible laptop with a stunning OLED display and Intel Evo certification for exceptional performance.',
    features: [
      '13th Gen Intel Core i7',
      '14" 3K OLED touch display',
      '360° convertible design',
      'Intel Evo certified',
      'Quad speakers by Bang & Olufsen'
    ],
    specs: {
      'Display': '14" 3K OLED touch',
      'Processor': '13th Gen Intel Core i7',
      'Memory': '16GB/32GB',
      'Storage': '1TB/2TB SSD',
      'Battery': 'Up to 15 hours',
      'OS': 'Windows 11'
    },
    stock: 11,
    rating: 4.7,
    reviewCount: 65
  },
  {
    id: 'sony-playstation-5',
    name: 'PlayStation 5 Console',
    brand: 'sony',
    category: 'pcs',
    price: 499,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2627&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2627&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626337920103-49b1c76c729a?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?q=80&w=2668&auto=format&fit=crop'
    ],
    description: 'Experience lightning-fast loading, deeper immersion with the DualSense controller, and a new generation of incredible PlayStation games.',
    features: [
      'Custom AMD Ryzen CPU',
      'AMD Radeon RDNA 2 GPU',
      'Ultra-high speed SSD',
      'Ray Tracing support',
      'DualSense wireless controller'
    ],
    specs: {
      'CPU': 'AMD Ryzen Zen 2',
      'GPU': 'AMD Radeon RDNA 2',
      'Storage': '825GB SSD',
      'Memory': '16GB GDDR6',
      'Resolution': 'Up to 4K 120Hz',
      'Audio': 'Tempest 3D AudioTech'
    },
    stock: 6,
    rating: 4.9,
    reviewCount: 428
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brand === brandId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
