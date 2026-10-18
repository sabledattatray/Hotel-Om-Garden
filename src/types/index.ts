/**
 * Data contracts and type definitions for Hotel Om Garden
 */

export type DietType = 'veg' | 'non-veg' | 'egg' | 'any';

export interface MenuItem {
  id: string;
  name_mr: string;
  description_mr?: string;
  category_id: string;
  price_inr: number | null; // null if unverified / call for price
  price_note_mr?: string;
  diet_type: DietType;
  spice_level?: 'mild' | 'medium' | 'spicy';
  serving_note_mr?: string;
  is_available: boolean;
  is_featured: boolean;
  is_published: boolean;
  sort_order: number;
  image_url?: string;
  updated_at: string;
}

export interface MenuCategory {
  id: string;
  name_mr: string;
  description_mr?: string;
  sort_order: number;
  is_published: boolean;
}

export interface FacilityItem {
  id: string;
  name_mr: string;
  description_mr: string;
  icon_name: string;
  is_verified: boolean;
  is_published: boolean;
}

export interface GalleryItem {
  id: string;
  title_mr: string;
  caption_mr?: string;
  category: 'ambience' | 'family' | 'food' | 'exterior';
  image_url: string;
  is_placeholder: boolean;
  sort_order: number;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  date?: string;
  time?: string;
  party_size?: number;
  message: string;
  status: 'नवीन' | 'संपर्क केला' | 'पूर्ण' | 'रद्द';
  created_at: string;
}

export interface OpeningHour {
  day_mr: string;
  day_key: string;
  open_time: string;
  close_time: string;
  is_closed: boolean;
  is_verified: boolean;
}

export interface SiteSettings {
  name_mr: string;
  name_en: string;
  tagline_mr: string;
  address_mr: string;
  taluka_mr: string;
  district_mr: string;
  primary_phone: string;
  secondary_phone: string;
  whatsapp_number?: string;
  whatsapp_enabled: boolean;
  google_maps_url?: string;
  google_maps_embed_url?: string;
  is_maps_verified: boolean;
  permit_room_visible: boolean;
  permit_room_note_mr: string;
  active_announcement?: string;
  announcement_enabled: boolean;
  disclaimer_mr: string;
  // Owner Profile & Image Settings
  owner_name_mr?: string;
  owner_title_mr?: string;
  owner_message_mr?: string;
  owner_image_url?: string;
  owner_image_scale?: number; // 50 to 150%
  owner_image_brightness?: number; // 70 to 130%
  owner_image_contrast?: number; // 70 to 130%
  owner_image_saturation?: number; // 70 to 130%
  owner_image_pos_y?: number; // 0 to 100%
}

export interface ChecklistItem {
  id: string;
  title_mr: string;
  description_mr: string;
  category: 'content' | 'legal' | 'media' | 'technical';
  is_completed: boolean;
}
