import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type Language = "en" | "bn";

type UIContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  isDark: boolean;
};

const UIContext = createContext<UIContextValue | null>(null);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Common
    "CommerceHub": "Mindspring 30",
    "Admin": "Admin",
    "Admin Panel": "Admin Panel",
    "Dark": "Dark",
    "Light": "Light",
    "English": "English",
    "Bangla": "Bangla",
    "Entrepreneur": "Entrepreneur",

    // Sidebar (Admin)
    "Dashboard": "Dashboard",
    "User Management": "User Management",
    "Entrepreneur Analytics": "Entrepreneur Analytics",
    "Order Management": "Order Management",
    "Platform Settings": "Platform Settings",
    "Sales & Marketing": "Sales & Marketing",
    "Financial Management": "Financial Management",
    "Notifications & Data": "Notifications & Data",

    // Sidebar (Entrepreneur)
    "Product Management": "Product Management",
    "Sales & Analytics": "Sales & Analytics",
    "Customer Management": "Customer Management",
    "Marketing & Social": "Marketing & Social",
    "Payments & Withdrawals": "Payments & Withdrawals",
    "Profile & Settings": "Profile & Settings",

    // Pages (Admin Overview)
    "Platform Overview": "Platform Overview",
    "Monitor and manage your eCommerce platform": "Monitor and manage your eCommerce platform",

    // Tables (common)
    "Order ID": "Order ID",
    "Customer": "Customer",
    "Entrepreneur": "Entrepreneur",
    "Items": "Items",
    "Total": "Total",
    "Amount": "Amount",
    "Date": "Date",
    "Status": "Status",
    "Actions": "Actions",
    "View": "View",
    "View Details": "View Details",

    // Tabs
    "Pending": "Pending",
    "Processing": "Processing",
    "Completed": "Completed",
    // Page descriptions
    "Track and manage all platform orders": "Track and manage all platform orders",
    "Track and fulfill your customer orders": "Track and fulfill your customer orders",
  },
  bn: {
    // Common
    "CommerceHub": "Mindspring 30",
    "Admin": "অ্যাডমিন",
    "Admin Panel": "অ্যাডমিন প্যানেল",
    "Dark": "ডার্ক",
    "Light": "লাইট",
    "English": "ইংরেজি",
    "Bangla": "বাংলা",
    "Entrepreneur": "উদ্যোক্তা",

    // Sidebar (Admin)
    "Dashboard": "ড্যাশবোর্ড",
    "User Management": "ইউজার ম্যানেজমেন্ট",
    "Entrepreneur Analytics": "উদ্যোক্তা বিশ্লেষণ",
    "Order Management": "অর্ডার ম্যানেজমেন্ট",
    "Platform Settings": "প্ল্যাটফর্ম সেটিংস",
    "Sales & Marketing": "বিক্রয় ও মার্কেটিং",
    "Financial Management": "আর্থিক ব্যবস্থাপনা",
    "Notifications & Data": "নোটিফিকেশন ও ডেটা",

    // Sidebar (Entrepreneur)
    "Product Management": "প্রোডাক্ট ম্যানেজমেন্ট",
    "Sales & Analytics": "বিক্রয় ও বিশ্লেষণ",
    "Customer Management": "কাস্টমার ম্যানেজমেন্ট",
    "Marketing & Social": "মার্কেটিং ও সামাজিক",
    "Payments & Withdrawals": "পেমেন্ট ও উত্তোলন",
    "Profile & Settings": "প্রোফাইল ও সেটিংস",

    // Pages (Admin Overview)
    "Platform Overview": "প্ল্যাটফর্ম ওভারভিউ",
    "Monitor and manage your eCommerce platform": "আপনার ইকমার্স প্ল্যাটফর্ম মনিটর ও পরিচালনা করুন",

    // Tables (common)
    "Order ID": "অর্ডার আইডি",
    "Customer": "কাস্টমার",
    "Entrepreneur": "উদ্যোক্তা",
    "Items": "আইটেম",
    "Total": "মোট",
    "Amount": "পরিমাণ",
    "Date": "তারিখ",
    "Status": "স্ট্যাটাস",
    "Actions": "অ্যাকশন",
    "View": "দেখুন",
    "View Details": "বিস্তারিত দেখুন",

    // Tabs
    "Pending": "পেন্ডিং",
    "Processing": "প্রসেসিং",
    "Completed": "কমপ্লিটেড",
    // Page descriptions
    "Track and manage all platform orders": "প্ল্যাটফর্মের সব অর্ডার ট্র্যাক ও পরিচালনা করুন",
    "Track and fulfill your customer orders": "আপনার কাস্টমার অর্ডার ট্র্যাক ও সম্পন্ন করুন",
  },
};

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || "dark");
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("lang") as Language) || "en");

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const value = useMemo<UIContextValue>(() => ({
    theme,
    toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    language,
    toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "bn" : "en")),
    t: (key: string, fallback?: string) => {
      const dict = TRANSLATIONS[language];
      return dict[key] ?? fallback ?? key;
    },
    isDark: theme === "dark",
  }), [theme, language]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
};