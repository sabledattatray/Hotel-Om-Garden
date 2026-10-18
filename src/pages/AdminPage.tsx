import React, { useState } from 'react';
import {
  Lock,
  LogOut,
  Utensils,
  Inbox,
  ShieldCheck,
  Image,
  Settings,
  CheckSquare,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Phone,
  Check,
  Download,
  RotateCcw,
  Share2,
  Copy,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { MenuItem } from '../types';

export const AdminPage: React.FC = () => {
  const {
    settings,
    updateSettings,
    categories,
    menuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    facilities,
    updateFacility,
    gallery,
    updateGalleryItem,
    enquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    checklist,
    toggleChecklist,
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    resetToDefaults,
  } = useStore();

  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'menu' | 'enquiries' | 'facilities' | 'gallery' | 'settings' | 'checklist' | 'social'
  >('menu');

  // Menu item modal state
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemData, setNewItemData] = useState<Partial<MenuItem>>({
    name_mr: '',
    description_mr: '',
    category_id: categories[0]?.id || 'cat-veg',
    price_inr: null,
    price_note_mr: '',
    diet_type: 'veg',
    spice_level: 'medium',
    serving_note_mr: '',
    is_available: true,
    is_featured: false,
    is_published: true,
    sort_order: 10,
  });

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [settingsSavedMessage, setSettingsSavedMessage] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(passcode)) {
      setLoginError('');
      setPasscode('');
    } else {
      setLoginError('चुकीचा पासवर्ड. कृपया योग्य पासवर्ड टाका (उदा. omgarden123).');
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSettingsSavedMessage(true);
    setTimeout(() => setSettingsSavedMessage(false), 3000);
  };

  const handleSaveNewMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemData.name_mr?.trim()) return;

    addMenuItem({
      name_mr: newItemData.name_mr.trim(),
      description_mr: newItemData.description_mr?.trim() || '',
      category_id: newItemData.category_id || categories[0]?.id || 'cat-veg',
      price_inr: newItemData.price_inr !== undefined && newItemData.price_inr !== null ? Number(newItemData.price_inr) : null,
      price_note_mr: newItemData.price_note_mr || '',
      diet_type: newItemData.diet_type || 'veg',
      spice_level: newItemData.spice_level || 'medium',
      serving_note_mr: newItemData.serving_note_mr || '',
      is_available: newItemData.is_available ?? true,
      is_featured: newItemData.is_featured ?? false,
      is_published: newItemData.is_published ?? true,
      sort_order: Number(newItemData.sort_order) || 10,
    });

    setIsAddingItem(false);
    setNewItemData({
      name_mr: '',
      description_mr: '',
      category_id: categories[0]?.id || 'cat-veg',
      price_inr: null,
      price_note_mr: '',
      diet_type: 'veg',
      spice_level: 'medium',
      serving_note_mr: '',
      is_available: true,
      is_featured: false,
      is_published: true,
      sort_order: 10,
    });
  };

  const handleUpdateMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    updateMenuItem(editingItem.id, {
      name_mr: editingItem.name_mr,
      description_mr: editingItem.description_mr,
      category_id: editingItem.category_id,
      price_inr: editingItem.price_inr !== null ? Number(editingItem.price_inr) : null,
      price_note_mr: editingItem.price_note_mr,
      diet_type: editingItem.diet_type,
      spice_level: editingItem.spice_level,
      serving_note_mr: editingItem.serving_note_mr,
      is_available: editingItem.is_available,
      is_featured: editingItem.is_featured,
      is_published: editingItem.is_published,
      sort_order: Number(editingItem.sort_order) || 1,
    });

    setEditingItem(null);
  };

  const exportBackupJSON = () => {
    const data = {
      settings,
      categories,
      menuItems,
      facilities,
      gallery,
      checklist,
      export_date: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hotel-om-garden-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // If not authenticated, render login form
  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-[#281B12] text-[#FF9933] flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif-mr text-2xl font-bold text-[#1C130D]">
              व्यवस्थापन प्रवेश (Admin Login)
            </h1>
            <p className="text-xs text-[#57473D]">
              हॉटेल ओम गार्डन संकेतस्थळ व्यवस्थापनासाठी आपला पासवर्ड टाका.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                पासवर्ड (Passcode)
              </label>
              <input
                type="password"
                required
                placeholder="उदा. omgarden123"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933]"
              />
              <span className="text-[11px] text-[#57473D] block mt-1">
                डीफॉल्ट पासवर्ड: <code className="bg-[#FFF9F2] px-1 py-0.5 rounded border border-[#EEDCC8] text-[#943C00]">omgarden123</code>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors shadow-xs active:scale-98"
            >
              लॉगिन करा
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Admin Bar */}
      <div className="bg-[#1C130D] text-white p-5 rounded-2xl border border-[#382619] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <span className="text-xs text-[#FF9933] font-semibold uppercase tracking-wider block">
            मालक व व्यवस्थापक नियंत्रण कक्ष
          </span>
          <h1 className="font-serif-mr text-xl sm:text-2xl font-bold">
            {settings.name_mr} — व्यवस्थापन पॅनेल
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportBackupJSON}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white border border-white/20 inline-flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#FF9933]" />
            बॅकअप डाऊनलोड
          </button>
          <button
            onClick={adminLogout}
            className="px-3 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-700 text-xs text-white inline-flex items-center gap-1.5 transition-colors font-medium"
          >
            <LogOut className="w-3.5 h-3.5" />
            लॉगआउट
          </button>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#EEDCC8]">
        {[
          { id: 'menu', label: 'खाद्यपदार्थ व्यवस्थापन', icon: Utensils, count: menuItems.length },
          { id: 'enquiries', label: 'चौकशी इनबॉक्स', icon: Inbox, count: enquiries.filter((e) => e.status === 'नवीन').length },
          { id: 'facilities', label: 'सुविधा नियंत्रण', icon: ShieldCheck, count: facilities.length },
          { id: 'gallery', label: 'छायाचित्रे', icon: Image, count: gallery.length },
          { id: 'settings', label: 'संकेतस्थळ सेटिंग्ज', icon: Settings },
          { id: 'checklist', label: 'लॉन्च पडताळणी चेकलिस्ट', icon: CheckSquare, count: checklist.filter((c) => !c.is_completed).length },
          { id: 'social', label: 'सोशल मीडिया कार्ड (OG Preview)', icon: Share2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1C130D] text-[#FF9933] shadow-xs'
                  : 'bg-white text-[#57473D] hover:bg-[#FFF9F2] border border-[#EEDCC8]'
              }`}
            >
              <Icon className="w-4 h-4 text-[#FF9933]" />
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-[#FF9933] text-[#1C130D] font-mono font-bold">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: MENU CRUD */}
      {activeTab === 'menu' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
                खाद्यपदार्थ यादी व्यवस्थापन
              </h2>
              <p className="text-xs text-[#57473D]">
                नवीन पदार्थ जोडा, किमती बदला किंवा तात्पुरते अनुपलब्ध करा.
              </p>
            </div>
            <button
              onClick={() => setIsAddingItem(true)}
              className="px-4 py-2 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] text-xs font-bold inline-flex items-center gap-2 transition-colors self-start sm:self-auto shadow-xs active:scale-98"
            >
              <Plus className="w-4 h-4 text-[#1C130D]" />
              नवीन खाद्यपदार्थ जोडा
            </button>
          </div>

          {/* Menu Items Table */}
          <div className="bg-white rounded-2xl border border-[#EEDCC8] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FFF9F2] border-b border-[#EEDCC8] text-[#1C130D] font-semibold">
                  <tr>
                    <th className="p-3.5">पदार्थाचे नाव</th>
                    <th className="p-3.5">वर्गवारी</th>
                    <th className="p-3.5">प्रकार</th>
                    <th className="p-3.5">किंमत (₹)</th>
                    <th className="p-3.5">उपलब्धता</th>
                    <th className="p-3.5 text-right">कृती</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEDCC8]">
                  {menuItems.map((item) => {
                    const cat = categories.find((c) => c.id === item.category_id);
                    return (
                      <tr key={item.id} className="hover:bg-[#FFF9F2]/50 transition-colors">
                        <td className="p-3.5">
                          <span className="font-semibold text-[#1C130D] block">
                            {item.name_mr}
                          </span>
                          {item.description_mr && (
                            <span className="text-[11px] text-[#57473D] line-clamp-1">
                              {item.description_mr}
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-[#57473D]">
                          {cat?.name_mr || 'इतर'}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`font-semibold text-xs ${
                              item.diet_type === 'veg' ? 'text-green-700' : 'text-red-700'
                            }`}
                          >
                            {item.diet_type === 'veg' ? 'शाकाहारी' : 'मांसाहारी'}
                          </span>
                        </td>
                        <td className="p-3.5 font-mono tabular-nums text-[#943C00] font-semibold">
                          {item.price_inr !== null ? (
                            `₹${item.price_inr}`
                          ) : (
                            <span className="text-xs text-[#57473D] italic">विचारणेनुसार</span>
                          )}
                        </td>
                        <td className="p-3.5">
                          <button
                            onClick={() =>
                              updateMenuItem(item.id, { is_available: !item.is_available })
                            }
                            className={`px-2 py-0.5 text-xs font-semibold rounded cursor-pointer ${
                              item.is_available
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.is_available ? 'उपलब्ध' : 'अनुपलब्ध'}
                          </button>
                        </td>
                        <td className="p-3.5 text-right space-x-2">
                          <button
                            onClick={() => setEditingItem(item)}
                            className="p-1.5 rounded text-blue-700 hover:bg-blue-50 transition-colors"
                            title="संपादित करा"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`'${item.name_mr}' हा पदार्थ हटवायचा आहे का?`)) {
                                deleteMenuItem(item.id);
                              }
                            }}
                            className="p-1.5 rounded text-red-700 hover:bg-red-50 transition-colors"
                            title="हटवा"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Item Modal */}
          {isAddingItem && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-[#EEDCC8] shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#EEDCC8]">
                  <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
                    नवीन खाद्यपदार्थ जोडा
                  </h3>
                  <button
                    onClick={() => setIsAddingItem(false)}
                    className="p-1 text-[#57473D] hover:text-[#1C130D]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveNewMenuItem} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      पदार्थाचे नाव (मराठीत) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. गावरान चिकन थाळी"
                      value={newItemData.name_mr}
                      onChange={(e) =>
                        setNewItemData({ ...newItemData, name_mr: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      वर्णन / तपशील
                    </label>
                    <textarea
                      rows={2}
                      placeholder="उदा. तांबडा-पांढरा रस्सा, २ भाकरी आणि भात..."
                      value={newItemData.description_mr}
                      onChange={(e) =>
                        setNewItemData({ ...newItemData, description_mr: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        वर्गवारी (Category)
                      </label>
                      <select
                        value={newItemData.category_id}
                        onChange={(e) =>
                          setNewItemData({ ...newItemData, category_id: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name_mr}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        प्रकार (Diet)
                      </label>
                      <select
                        value={newItemData.diet_type}
                        onChange={(e) =>
                          setNewItemData({
                            ...newItemData,
                            diet_type: e.target.value as any,
                          })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      >
                        <option value="veg">शाकाहारी (Veg)</option>
                        <option value="non-veg">मांसाहारी (Non-Veg)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        किंमत ₹ (रिकामे ठेवल्यास संपर्क विचारणा दाखवेल)
                      </label>
                      <input
                        type="number"
                        placeholder="उदा. 250"
                        value={newItemData.price_inr ?? ''}
                        onChange={(e) =>
                          setNewItemData({
                            ...newItemData,
                            price_inr: e.target.value ? Number(e.target.value) : null,
                          })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        किंमत टीप (उदा. हाफ / फुल)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. प्रति नग"
                        value={newItemData.price_note_mr}
                        onChange={(e) =>
                          setNewItemData({ ...newItemData, price_note_mr: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                      <input
                        type="checkbox"
                        checked={newItemData.is_available}
                        onChange={(e) =>
                          setNewItemData({ ...newItemData, is_available: e.target.checked })
                        }
                      />
                      उपलब्ध आहे
                    </label>

                    <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                      <input
                        type="checkbox"
                        checked={newItemData.is_featured}
                        onChange={(e) =>
                          setNewItemData({ ...newItemData, is_featured: e.target.checked })
                        }
                      />
                      मुख्यपृष्ठावर दाखवा (Featured)
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#EEDCC8] flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAddingItem(false)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-[#EEDCC8]"
                    >
                      रद्द करा
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] shadow-xs"
                    >
                      जतन करा
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit Item Modal */}
          {editingItem && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-[#EEDCC8] shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#EEDCC8]">
                  <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
                    खाद्यपदार्थ संपादित करा
                  </h3>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="p-1 text-[#57473D] hover:text-[#1C130D]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleUpdateMenuItem} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      पदार्थाचे नाव *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingItem.name_mr}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, name_mr: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      वर्णन
                    </label>
                    <textarea
                      rows={2}
                      value={editingItem.description_mr || ''}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, description_mr: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        किंमत ₹ (किंवा रिकामे)
                      </label>
                      <input
                        type="number"
                        value={editingItem.price_inr ?? ''}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            price_inr: e.target.value ? Number(e.target.value) : null,
                          })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                        वर्गवारी
                      </label>
                      <select
                        value={editingItem.category_id}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, category_id: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name_mr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                      <input
                        type="checkbox"
                        checked={editingItem.is_available}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, is_available: e.target.checked })
                        }
                      />
                      उपलब्ध आहे
                    </label>

                    <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                      <input
                        type="checkbox"
                        checked={editingItem.is_featured}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, is_featured: e.target.checked })
                        }
                      />
                      मुख्यपृष्ठावर दाखवा
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#EEDCC8] flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setEditingItem(null)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-[#EEDCC8]"
                    >
                      रद्द करा
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] shadow-xs"
                    >
                      बदल जतन करा
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ENQUIRIES INBOX */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              ग्राहकांच्या टेबल व जेवण चौकशी (Enquiries Inbox)
            </h2>
            <p className="text-xs text-[#57473D]">
              संकेतस्थळावरून आलेल्या चौकशी नोंदी. ग्राहकांना थेट फोनवरून संपर्क साधा.
            </p>
          </div>

          {enquiries.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#EEDCC8] p-12 text-center max-w-lg mx-auto">
              <Inbox className="w-10 h-10 text-[#FF9933] mx-auto opacity-75 mb-2" />
              <p className="text-sm font-semibold text-[#1C130D]">अजून कोणतीही नवीन चौकशी आलेली नाही.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-white rounded-xl border border-[#EEDCC8] p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif-mr text-base font-bold text-[#1C130D]">
                        {enq.name}
                      </h3>
                      <span className="text-xs text-[#57473D] font-mono">
                        {new Date(enq.created_at).toLocaleString('mr-IN')}
                      </span>
                    </div>

                    <select
                      value={enq.status}
                      onChange={(e) =>
                        updateEnquiryStatus(enq.id, e.target.value as any)
                      }
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                        enq.status === 'नवीन'
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : enq.status === 'संपर्क केला'
                          ? 'bg-blue-100 text-blue-900 border-blue-300'
                          : enq.status === 'पूर्ण'
                          ? 'bg-green-100 text-green-900 border-green-300'
                          : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      <option value="नवीन">नवीन</option>
                      <option value="संपर्क केला">संपर्क केला</option>
                      <option value="पूर्ण">पूर्ण</option>
                      <option value="रद्द">रद्द</option>
                    </select>
                  </div>

                  <div className="space-y-1 text-xs text-[#1C130D] bg-[#FFF9F2] p-3 rounded-lg border border-[#EEDCC8]">
                    <p>
                      <strong>फोन:</strong>{' '}
                      <a
                        href={`tel:+91${enq.phone}`}
                        className="text-[#943C00] font-semibold underline underline-offset-2 tabular-nums"
                      >
                        +91 {enq.phone}
                      </a>
                    </p>
                    {enq.date && <p><strong>तारीख:</strong> {enq.date}</p>}
                    {enq.time && <p><strong>वेळ:</strong> {enq.time}</p>}
                    {enq.party_size && <p><strong>व्यक्ती संख्या:</strong> {enq.party_size} व्यक्ती</p>}
                    {enq.message && <p><strong>संदेश:</strong> {enq.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#EEDCC8]/60">
                    <a
                      href={`tel:+91${enq.phone}`}
                      className="px-3.5 py-1.5 rounded-md bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] text-xs font-bold inline-flex items-center gap-1.5 shadow-2xs"
                    >
                      <Phone className="w-3 h-3 fill-current" />
                      ग्राहकाला कॉल करा
                    </a>
                    <button
                      onClick={() => {
                        if (window.confirm('ही चौकशी नोंद हटवायची आहे का?')) {
                          deleteEnquiry(enq.id);
                        }
                      }}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      हटवा
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: FACILITIES MANAGER */}
      {activeTab === 'facilities' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              कुटुंबासाठी सुविधा नियंत्रण (Verified Facilities)
            </h2>
            <p className="text-xs text-[#57473D]">
              PRD नियमानुसार केवळ मालकांकडून तपासलेल्या सुविधाच संकेतस्थळावर दिसतात.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-xl border border-[#EEDCC8] p-5 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif-mr text-base font-bold text-[#1C130D]">
                    {facility.name_mr}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateFacility(facility.id, { is_verified: !facility.is_verified })
                      }
                      className={`px-2 py-0.5 text-xs font-semibold rounded ${
                        facility.is_verified
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {facility.is_verified ? 'तपासलेले (Verified)' : 'पडताळणी बाकी'}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#57473D] leading-relaxed">
                  {facility.description_mr}
                </p>

                <div className="pt-2 border-t border-[#EEDCC8]/60 flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                    <input
                      type="checkbox"
                      checked={facility.is_published}
                      onChange={(e) =>
                        updateFacility(facility.id, { is_published: e.target.checked })
                      }
                      className="accent-[#FF9933]"
                    />
                    संकेतस्थळावर प्रकाशित करा
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: GALLERY */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              छायाचित्र व्यवस्थापन (Gallery Management)
            </h2>
            <p className="text-xs text-[#57473D]">
              हॉटेलचे खरे आणि मूळ फोटो व्यवस्थापित करा.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#EEDCC8] p-4 shadow-2xs space-y-3"
              >
                <h4 className="font-semibold text-sm text-[#1C130D]">{item.title_mr}</h4>
                <p className="text-xs text-[#57473D]">{item.caption_mr}</p>
                <div className="pt-2 border-t border-[#EEDCC8]/60 flex items-center justify-between text-xs">
                  <span className="text-[#A74600] font-semibold">{item.category}</span>
                  <button
                    onClick={() =>
                      updateGalleryItem(item.id, { is_placeholder: !item.is_placeholder })
                    }
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      item.is_placeholder
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {item.is_placeholder ? 'प्रात्यक्षिक लेबल' : 'मूळ फोटो'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 space-y-6 shadow-xs">
          <div>
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              संकेतस्थळ सेटिंग्ज आणि पत्ता
            </h2>
            <p className="text-xs text-[#57473D]">
              हॉटेलचे नाव, फोन नंबर, गुगल मॅप्स लिंक आणि सूचना येथे अद्यतनित करा.
            </p>
          </div>

          {settingsSavedMessage && (
            <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-xs text-green-800 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>सेटिंग्ज यशस्वीरित्या जतन झाल्या आहेत!</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                  हॉटेलचे नाव (मराठी)
                </label>
                <input
                  type="text"
                  value={settingsForm.name_mr}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, name_mr: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                  टॅगलाइन (Tagline)
                </label>
                <input
                  type="text"
                  value={settingsForm.tagline_mr}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, tagline_mr: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                  प्राथमिक फोन नंबर
                </label>
                <input
                  type="text"
                  value={settingsForm.primary_phone}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, primary_phone: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                  दुय्यम फोन नंबर
                </label>
                <input
                  type="text"
                  value={settingsForm.secondary_phone}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, secondary_phone: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                पत्ता (Address)
              </label>
              <input
                type="text"
                value={settingsForm.address_mr}
                onChange={(e) =>
                  setSettingsForm({ ...settingsForm, address_mr: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                गुगल मॅप्स अधिकृत लिंक (Google Maps Place URL)
              </label>
              <input
                type="url"
                placeholder="https://maps.google.com/?cid=..."
                value={settingsForm.google_maps_url || ''}
                onChange={(e) =>
                  setSettingsForm({
                    ...settingsForm,
                    google_maps_url: e.target.value,
                    is_maps_verified: Boolean(e.target.value.trim()),
                  })
                }
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
              />
              <span className="text-[11px] text-[#57473D] block mt-1">
                मालकांकडून अधिकृत Google Maps पिन मिळताच येथे लिंक पेस्ट करा.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                आजची सूचना (Top Announcement Banner)
              </label>
              <input
                type="text"
                value={settingsForm.active_announcement || ''}
                onChange={(e) =>
                  setSettingsForm({ ...settingsForm, active_announcement: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#EEDCC8]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                <input
                  type="checkbox"
                  checked={settingsForm.announcement_enabled}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, announcement_enabled: e.target.checked })
                  }
                  className="accent-[#FF9933]"
                />
                सूचना पट्टी दाखवा
              </label>

              <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                <input
                  type="checkbox"
                  checked={settingsForm.permit_room_visible}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, permit_room_visible: e.target.checked })
                  }
                  className="accent-[#FF9933]"
                />
                परमिट रूम माहिती लिंक दाखवा
              </label>

              <label className="flex items-center gap-2 text-xs text-[#1C130D]">
                <input
                  type="checkbox"
                  checked={settingsForm.whatsapp_enabled}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, whatsapp_enabled: e.target.checked })
                  }
                  className="accent-[#FF9933]"
                />
                व्हॉट्सअ‍ॅप बटन सक्षम ठेवा
              </label>
            </div>

            <div className="pt-4 border-t border-[#EEDCC8] flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs active:scale-98"
              >
                <Save className="w-4 h-4 text-[#1C130D]" />
                सेटिंग्ज जतन करा
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 6: LAUNCH & CLIENT VERIFICATION CHECKLIST (PRD Section 18 & 19) */}
      {activeTab === 'checklist' && (
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 space-y-6 shadow-xs">
          <div>
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              हॉटेल ओम गार्डन — ग्राहक पडताळणी चेकलिस्ट (Launch Checklist)
            </h2>
            <p className="text-xs text-[#57473D]">
              PRD कलम १८ व १९ नुसार मालकांकडून थेट खात्री करून घ्यावयाच्या बाबी. प्रत्येक बाब तपासून झाल्यावर टिक करा.
            </p>
          </div>

          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  item.is_completed
                    ? 'bg-green-50/60 border-green-200'
                    : 'bg-[#FFF9F2]/60 border-[#EEDCC8] hover:bg-[#FFF9F2]'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                    item.is_completed
                      ? 'bg-green-700 text-white'
                      : 'border-2 border-[#1C130D]/40 bg-white'
                  }`}
                >
                  {item.is_completed && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
                <div>
                  <h4
                    className={`font-semibold text-sm ${
                      item.is_completed ? 'text-green-900 line-through' : 'text-[#1C130D]'
                    }`}
                  >
                    {item.title_mr}
                  </h4>
                  <p className="text-xs text-[#57473D] mt-0.5">
                    {item.description_mr}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EEDCC8] flex items-center justify-between">
            <span className="text-xs text-[#57473D]">
              पूर्ण झालेल्या बाबी:{' '}
              <strong className="text-[#1C130D]">
                {checklist.filter((c) => c.is_completed).length} / {checklist.length}
              </strong>
            </span>
            <button
              onClick={() => {
                if (window.confirm('सर्व मूळ डीफॉल्ट डेटा पूर्ववत करायचा आहे का?')) {
                  resetToDefaults();
                }
              }}
              className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              डीफॉल्ट डेटा रीसेट करा
            </button>
          </div>
        </div>
      )}
      {/* TAB 7: SOCIAL MEDIA OG PREVIEW & SHARING TOOLKIT */}
      {activeTab === 'social' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9933]/15 text-[#943C00] text-xs font-bold font-mr mb-2">
                  🚩 अधिकृत सोशल मीडिया प्रिव्ह्यू कार्ड
                </div>
                <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
                  मराठी सोशल मीडिया ओपनग्राफ (OG) कार्ड
                </h2>
                <p className="text-xs text-[#57473D] mt-1">
                  जेव्हा कोणीही आपल्या हॉटेलच्या संकेतस्थळाची लिंक WhatsApp, Facebook, Instagram, Twitter किंवा Telegram वर शेअर करेल, तेव्हा खालील आकर्षक मराठी कार्ड आपोआप दिसेल.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/og-image.png"
                  download="hotel-om-garden-social-og-image.png"
                  className="px-4 py-2 rounded-xl bg-[#1C130D] hover:bg-[#2A1D14] text-[#FF9933] text-xs font-bold inline-flex items-center gap-2 transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#FF9933]" />
                  HD कार्ड डाउनलोड करा (1200x630)
                </a>
                <button
                  onClick={() => {
                    const shareText = `🚩 *हॉटेल ओम गार्डन — मांदळी (ता. कर्जत)* 🚩\nअहमदनगर–सोलापूर महामार्गावरील प्रसिद्ध फॅमिली रेस्टॉरंट!\n\n🍲 चविष्ट घरगुती जेवण (चिकन, मटण, भाकरी)\n👨‍👩‍👧‍👦 स्वतंत्र कौटुंबिक बैठक व्यवस्था\n🅿️ मोफत प्रशस्त कार पार्किंग\n🍷 स्वतंत्र परमिट रूम\n\n📞 संपर्क: +91 7744009199 / 9767294601\n🌐 संकेतस्थळ: ${window.location.origin}`;
                    navigator.clipboard.writeText(shareText);
                    alert('WhatsApp साठी तयार असलेला मेसेज कॉपी केला गेला आहे!');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-xs"
                >
                  <Copy className="w-4 h-4" />
                  WhatsApp मेसेज कॉपी करा
                </button>
              </div>
            </div>

            {/* High-Resolution Live OG Card Preview */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1C130D] uppercase tracking-wider">
                पूर्ण आकाराचे अधिकृत कार्ड (1200 × 630 px)
              </span>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF9933]/40 shadow-lg bg-[#081713]">
                <img
                  src="/og-image.png"
                  alt="हॉटेल ओम गार्डन सोशल मीडिया प्रिव्ह्यू कार्ड"
                  className="w-full h-auto object-cover block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Platform Simulation Previews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EEDCC8]">
              {/* WhatsApp Share Card Simulation */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C130D]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  WhatsApp वर असे दिसेल (WhatsApp Share Preview):
                </div>
                <div className="bg-[#EFEAE2] p-4 rounded-xl border border-[#D1D7DB] max-w-md">
                  <div className="bg-white rounded-lg overflow-hidden shadow-xs border border-[#E9EDEF]">
                    <img
                      src="/og-image.png"
                      alt="WhatsApp Preview"
                      className="w-full aspect-[1.91/1] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3 bg-[#F0F2F5]">
                      <span className="text-[11px] uppercase tracking-wide text-[#667781] font-semibold block">
                        HOTELOMGARDEN.IN
                      </span>
                      <h4 className="font-serif-mr font-bold text-sm text-[#111B21] line-clamp-1 mt-0.5">
                        हॉटेल ओम गार्डन | फॅमिली रेस्टॉरंट | मांदळी, कर्जत
                      </h4>
                      <p className="text-xs text-[#667781] line-clamp-2 mt-0.5">
                        अहमदनगर–सोलापूर महामार्ग, मांदळी येथील अस्सल महाराष्ट्रीयन जेवण, कौटुंबिक बैठक व्यवस्था व संपूर्ण मेनू पाहा.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-[#667781] text-right font-mono">
                    12:45 PM ✓✓
                  </div>
                </div>
              </div>

              {/* Facebook / Twitter / LinkedIn Card Simulation */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C130D]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2]" />
                  Facebook / Twitter / Google वर असे दिसेल:
                </div>
                <div className="bg-white rounded-xl border border-[#CED0D4] overflow-hidden max-w-md shadow-xs">
                  <img
                    src="/og-image.png"
                    alt="Facebook Card"
                    className="w-full aspect-[1.91/1] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-[#F0F2F5] border-t border-[#CED0D4]">
                    <span className="text-[10px] uppercase text-[#65676B] font-semibold tracking-wider">
                      HOTELOMGARDEN.IN
                    </span>
                    <h4 className="font-serif-mr font-bold text-sm text-[#050505] line-clamp-1 mt-0.5">
                      हॉटेल ओम गार्डन | फॅमिली रेस्टॉरंट | मांदळी, कर्जत
                    </h4>
                    <p className="text-xs text-[#65676B] line-clamp-2 mt-0.5">
                      अहमदनगर–सोलापूर रोड, मांदळी येथील हॉटेल ओम गार्डनची माहिती, खाद्यपदार्थांची यादी, संपर्क क्रमांक आणि मार्गदर्शन पाहा.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Verification Info */}
            <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] space-y-2">
              <h4 className="text-xs font-bold text-[#1C130D] flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700" />
                तांत्रिक खात्री (Technical Verification):
              </h4>
              <ul className="text-xs text-[#57473D] space-y-1 list-disc list-inside">
                <li>
                  <strong>ओपनग्राफ प्रतिमा (OG Image)</strong>: <code>/og-image.png</code> (१२०० × ६३० पिक्सेल, परिपूर्ण १.९१:१ गुणोत्तर).
                </li>
                <li>
                  <strong>वेक्टर बॅकअप (Vector SVG)</strong>: <code>/og-image.svg</code> सर्व आधुनिक ब्राउझर्ससाठी उपलब्ध.
                </li>
                <li>
                  <strong>HTML मेटा टॅग्ज</strong>: <code>index.html</code> मध्ये <code>og:image</code>, <code>og:image:width</code>, <code>twitter:card</code> आणि <code>twitter:image</code> अचूकपणे जोडले गेले आहेत.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
