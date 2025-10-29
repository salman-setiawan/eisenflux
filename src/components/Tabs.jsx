/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../data/languageContext.jsx'; 

const Tabs = ({onChange, activeTab, onTabChange, specsTabs}) => {
  const { language } = useLanguage();

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

  specsTabs = ' cursor-pointer hover:bg-neutral-800';

  return (
    <div className="flex flex-col z-10 xl:bg-[#0c0c0c] w-full border-b-2 border-neutral-800">
      <div className="flex">
        {tabItems.map((tab) => {
          const isActive = activeKey === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabClick(tab.key)}
              className={`px-4 py-2 font-semibold text-[13px] whitespace-nowrap transition-colors ${
                isActive
                  ? `${specsTabs} border-b-2 translate-y-[2px] border-[#ffaa50] text-white`
                  : `${specsTabs} translate-y-[1px] text-neutral-400`
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs