/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../data/languageContext.jsx'; 

const Tabs = ({onChange, activeTab, onTabChange, specsTabs}) => {
  const { language } = useLanguage();

  const renderIcon = (key, isActive) => {
    const iconNameMap = {
      portfolio: 'work',
      snapshot: 'photo_camera',
      blog: 'article',
    };
    const color = isActive ? '#ffaa50' : 'rgb(163 163 163)';
    return (
      <span
        className="material-symbols-outlined tab-icon"
        aria-hidden="true"
        style={{
          fontVariationSettings: '\'FILL\' 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 20',
          color,
        }}
      >
        {iconNameMap[key]}
      </span>
    );
  }

  const tabItems = [
    { key: 'portfolio', label: language === 'en' ? 'Portfolio Case': 'Kasus Portfolio' },
    { key: 'snapshot', label: language === 'en' ? 'UI Snapshot': 'Potret UI' },
    { key: 'blog', label: language === 'en' ? 'Blog': 'Blog' },
  ];

  const [activeKey, setActiveKey] = useState(() => {
    return activeTab || tabItems[0].key
  })

  useEffect(() => {
    if (activeTab && activeTab !== activeKey) {
      setActiveKey(activeTab)
    }
  }, [activeTab])

  useEffect(() => {
    if (typeof onChange === 'function') {onChange(activeKey)}
    if (typeof onTabChange === 'function') {onTabChange(activeKey)}
  }, [activeKey, onChange, onTabChange])

  const handleTabClick = (tabKey) => {
    setActiveKey(tabKey)
  }

  specsTabs = 'cursor-pointer hover:bg-neutral-800';

  return (
    <div className="flex z-10 w-full border-b-2 border-neutral-800">
      <style>{`
        .tab-icon { font-size: 16px; line-height: 16px; }
        @media (min-width: 768px) { .tab-icon { font-size: 18px; line-height: 18px; } }
        @media (min-width: 1024px) { .tab-icon { font-size: 20px; line-height: 20px; } }
      `}</style>
      {tabItems.map((tab) => {
        const isActive = activeKey === tab.key
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => handleTabClick(tab.key)}
            className={`px-3 pt-2 pb-1.5 font-semibold text-[13px] whitespace-nowrap transition-colors ${
              isActive
                ? `${specsTabs} border-b-2 translate-y-[2px] border-[#ffaa50] text-white`
                : `${specsTabs} translate-y-[1px] text-neutral-400`
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="inline-flex items-center gap-2">
              {renderIcon(tab.key, isActive)}
              <span>{tab.label}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default Tabs