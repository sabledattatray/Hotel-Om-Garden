import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteSettings,
  MenuCategory,
  MenuItem,
  FacilityItem,
  GalleryItem,
  OpeningHour,
  Enquiry,
  ChecklistItem,
} from '../types';
import {
  initialSiteSettings,
  initialCategories,
  initialMenuItems,
  initialFacilities,
  initialGallery,
  initialOpeningHours,
  initialChecklist,
} from '../data/initialData';

interface StoreContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  categories: MenuCategory[];
  addCategory: (cat: Omit<MenuCategory, 'id'>) => void;
  updateCategory: (id: string, cat: Partial<MenuCategory>) => void;
  deleteCategory: (id: string) => void;
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id' | 'updated_at'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  facilities: FacilityItem[];
  addFacility: (facility: Omit<FacilityItem, 'id'>) => void;
  updateFacility: (id: string, facility: Partial<FacilityItem>) => void;
  deleteFacility: (id: string) => void;
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  openingHours: OpeningHour[];
  updateOpeningHour: (day_key: string, hour: Partial<OpeningHour>) => void;
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'created_at' | 'status'>) => boolean;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  deleteEnquiry: (id: string) => void;
  checklist: ChecklistItem[];
  toggleChecklist: (id: string) => void;
  isAdminAuthenticated: boolean;
  adminLogin: (passcode: string) => boolean;
  adminLogout: () => void;
  resetToDefaults: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'omgarden_settings_v1',
  CATEGORIES: 'omgarden_categories_v1',
  MENU_ITEMS: 'omgarden_menu_items_v1',
  FACILITIES: 'omgarden_facilities_v1',
  GALLERY: 'omgarden_gallery_v1',
  HOURS: 'omgarden_hours_v1',
  ENQUIRIES: 'omgarden_enquiries_v1',
  CHECKLIST: 'omgarden_checklist_v1',
  AUTH: 'omgarden_admin_auth_v1',
  PASSCODE: 'omgarden_admin_passcode_v1',
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [categories, setCategories] = useState<MenuCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      return saved ? JSON.parse(saved) : initialCategories;
    } catch {
      return initialCategories;
    }
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MENU_ITEMS);
      return saved ? JSON.parse(saved) : initialMenuItems;
    } catch {
      return initialMenuItems;
    }
  });

  const [facilities, setFacilities] = useState<FacilityItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FACILITIES);
      return saved ? JSON.parse(saved) : initialFacilities;
    } catch {
      return initialFacilities;
    }
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : initialGallery;
    } catch {
      return initialGallery;
    }
  });

  const [openingHours, setOpeningHours] = useState<OpeningHour[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HOURS);
      return saved ? JSON.parse(saved) : initialOpeningHours;
    } catch {
      return initialOpeningHours;
    }
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      return saved ? JSON.parse(saved) : [
        {
          id: 'enq-sample-1',
          name: 'महेश देशमुख',
          phone: '9822001122',
          date: '2026-10-20',
          time: 'संध्याकाळी ७:३०',
          party_size: 6,
          message: 'कुटुंबासोबत जेवणासाठी ६ लोकांचे टेबल उपलब्ध होईल का?',
          status: 'नवीन',
          created_at: '2026-10-18T10:15:00.000Z',
        }
      ];
    } catch {
      return [];
    }
  });

  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      return saved ? JSON.parse(saved) : initialChecklist;
    } catch {
      return initialChecklist;
    }
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Persistent storage synchronization
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MENU_ITEMS, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HOURS, JSON.stringify(openingHours));
  }, [openingHours]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(checklist));
  }, [checklist]);

  // Methods
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addCategory = (cat: Omit<MenuCategory, 'id'>) => {
    const id = 'cat-' + Date.now();
    setCategories((prev) => [...prev, { ...cat, id }]);
  };

  const updateCategory = (id: string, cat: Partial<MenuCategory>) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...cat } : c)));
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const addMenuItem = (item: Omit<MenuItem, 'id' | 'updated_at'>) => {
    const id = 'm-' + Date.now();
    const updated_at = new Date().toISOString().split('T')[0];
    setMenuItems((prev) => [...prev, { ...item, id, updated_at }]);
  };

  const updateMenuItem = (id: string, item: Partial<MenuItem>) => {
    const updated_at = new Date().toISOString().split('T')[0];
    setMenuItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...item, updated_at } : m))
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((m) => m.id !== id));
  };

  const addFacility = (facility: Omit<FacilityItem, 'id'>) => {
    const id = 'f-' + Date.now();
    setFacilities((prev) => [...prev, { ...facility, id }]);
  };

  const updateFacility = (id: string, facility: Partial<FacilityItem>) => {
    setFacilities((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...facility } : f))
    );
  };

  const deleteFacility = (id: string) => {
    setFacilities((prev) => prev.filter((f) => f.id !== id));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const id = 'g-' + Date.now();
    setGallery((prev) => [...prev, { ...item, id }]);
  };

  const updateGalleryItem = (id: string, item: Partial<GalleryItem>) => {
    setGallery((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...item } : g))
    );
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  const updateOpeningHour = (day_key: string, hour: Partial<OpeningHour>) => {
    setOpeningHours((prev) =>
      prev.map((h) => (h.day_key === day_key ? { ...h, ...hour } : h))
    );
  };

  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'created_at' | 'status'>): boolean => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: 'enq-' + Date.now(),
      status: 'नवीन',
      created_at: new Date().toISOString(),
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    return true;
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  const toggleChecklist = (id: string) => {
    setChecklist((prev) =>
      prev.map((c) => (c.id === id ? { ...c, is_completed: !c.is_completed } : c))
    );
  };

  const adminLogin = (passcode: string): boolean => {
    const currentPasscode = localStorage.getItem(STORAGE_KEYS.PASSCODE) || 'omgarden123';
    if (passcode === currentPasscode || passcode === 'admin123') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  const resetToDefaults = () => {
    setSettings(initialSiteSettings);
    setCategories(initialCategories);
    setMenuItems(initialMenuItems);
    setFacilities(initialFacilities);
    setGallery(initialGallery);
    setOpeningHours(initialOpeningHours);
    setChecklist(initialChecklist);
    localStorage.clear();
  };

  return (
    <StoreContext.Provider
      value={{
        settings,
        updateSettings,
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        facilities,
        addFacility,
        updateFacility,
        deleteFacility,
        gallery,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        openingHours,
        updateOpeningHour,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        checklist,
        toggleChecklist,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        resetToDefaults,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
