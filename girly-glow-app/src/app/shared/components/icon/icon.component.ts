import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span class="icon" [class]="'icon-' + size" [innerHTML]="svgIcon"></span>`,
  styles: [`
    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    }
    
    .icon-xs { width: 14px; height: 14px; }
    .icon-sm { width: 18px; height: 18px; }
    .icon-md { width: 24px; height: 24px; }
    .icon-lg { width: 32px; height: 32px; }
    .icon-xl { width: 48px; height: 48px; }
    .icon-2xl { width: 64px; height: 64px; }
  `]
})
export class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';

  constructor(private sanitizer: DomSanitizer) {}

  get svgIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icons[this.name] || '');
  }

  private icons: Record<string, string> = {
    // Navigation & UI
    'phone': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    'mobile': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    'mail': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    'location': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'clock': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    'metro': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/><path d="M8 19l-2 2"/><path d="M16 19l2 2"/></svg>`,
    'menu': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    'close': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    'arrow-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    'arrow-down': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
    'chevron-left': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    'chevron-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    'check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    'copy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    'zoom': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
    'directions': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
    'facebook': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    'cookie': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="8" r="1" fill="currentColor"/><circle cx="10" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="13" r="1" fill="currentColor"/><circle cx="13" cy="17" r="1" fill="currentColor"/></svg>`,
    
    // Services categories
    'thread': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
    'wax': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
    'face': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    'hand': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
    'foot': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3C5.79 3 4 4.79 4 7v3c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V7c0-2.21-1.79-4-4-4z"/><path d="M12 3c-2.21 0-4 1.79-4 4v3c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V7c0-2.21-1.79-4-4-4z"/><path d="M16 5c-1.66 0-3 1.34-3 3v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V8c0-1.66-1.34-3-3-3z"/><path d="M19 8c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h1c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2z"/><path d="M7 14v3c0 2.76 2.24 5 5 5s5-2.24 5-5v-3"/></svg>`,
    'nails': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L8 6v12l4 4 4-4V6l-4-4z"/><path d="M8 12h8"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>`,
    'massage': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/><path d="M20 22v-6"/><path d="M20 13V9a2 2 0 0 0-2-2h-4"/><path d="M12 13l-2-2"/><path d="M12 13l2-2"/><path d="M4 22v-7a2 2 0 0 1 2-2h8"/><path d="M6 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/><path d="M4 13V9a2 2 0 0 1 2-2h4"/></svg>`,
    'henna': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10z"/><path d="M12 12v6"/><path d="M9 15h6"/></svg>`,
    'hair': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8v1c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-1a8 8 0 0 0-8-8z"/><path d="M5 10c0-2.5 1.5-5 4-6"/><path d="M19 10c0-2.5-1.5-5-4-6"/><path d="M12 16v6"/><path d="M8 22h8"/></svg>`,
    'man': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>`,
    
    // Features & misc
    'sparkle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5L5 19z"/><path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5L19 5z"/></svg>`,
    'heart': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    'leaf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    'star': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    'gift': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    'calendar': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    'timer': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/><path d="M12 2v2"/></svg>`,
    'card': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    
    // Gallery categories
    'all': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    'salon': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  };
}
