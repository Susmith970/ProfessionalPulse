import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date function
export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long'
  };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Scroll to element function
export function scrollTo(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// Generate particles for background
export function generateParticles(count: number): Array<{
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}> {
  const particles = [];
  
  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--secondary))',
    'hsl(var(--accent))'
  ];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      color: colors[i % colors.length],
      speed: Math.random() * 3 + 1
    });
  }
  
  return particles;
}
