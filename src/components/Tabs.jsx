import React, { useEffect, useState } from 'react'

const Tabs = ({onChange, activeTab, onTabChange}) => {
  const tabItems = [
    { key: 'portfolio', label: 'Portfolio Case' },
    { key: 'snapshot', label: 'UI Snapshot' }
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
    if (typeof onChange === 'function') {
      onChange(activeKey)
    }
    if (typeof onTabChange === 'function') {
      onTabChange(activeKey)
    }
  }, [activeKey, onChange, onTabChange])

  const handleTabClick = (tabKey) => {
    setActiveKey(tabKey)
  }

  return (
    <div className="flex z-10 xl:bg-[#0c0c0c] w-full">
      {tabItems.map((tab) => {
        const isActive = activeKey === tab.key
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => handleTabClick(tab.key)}
            className={`shrink-0 px-4 py-2 font-semibold text-[13px] whitespace-nowrap transition-colors ${
              isActive
                ? 'border-b-2 border-[#ffaa50] text-white'
                : 'text-neutral-400 hover:bg-neutral-800'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs