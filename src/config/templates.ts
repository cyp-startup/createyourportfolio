export const templates = [
    // ===== FREE (15) =====
    ...Array.from({ length: 15 }).map((_, i) => ({
      id: `free-${i}`,
      type: 'free',
      title: `Freefolio ${i + 1}`,
      price: 0,
      description: 'A clean and simple portfolio template for getting started quickly.',
      view: 500 + i * 230,
      created: 10 + i * 2,
    })),
  
    // ===== PRO (25) =====
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `pro-${i}`,
      type: 'pro',
      title: `Profolio ${i + 1}`,
      price: 19,
      description: 'A professional portfolio with polished layouts and modern sections.',
      view: 4_000 + i * 1_350,
      created: 80 + i * 6,
    })),
  
    // ===== VIP (5) =====
    ...Array.from({ length: 5 }).map((_, i) => ({
      id: `vip-${i}`,
      type: 'vip',
      title: `Elitefolio ${i + 1}`,
      price: 49,
      description: 'A premium, high-end portfolio built for maximum impact and exclusivity.',
      view: 120_000 + i * 35_000,
      created: 400 + i * 50,
    })),
]