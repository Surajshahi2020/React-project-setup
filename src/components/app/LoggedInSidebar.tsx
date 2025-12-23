// components/Sidebar.tsx
import React from 'react';
import { IconRButton } from '../reusable/IconButton';

const Sidebar: React.FC = () => {
  const menuItems = [
    { text: 'Sweepstakes', imageIcon: '🎮', bgImage: '/images/logo.png' },
    { text: 'Purchase', imageIcon: '💰', bgImage: '/images/money-1.jpg' },
    { text: 'Cashout', imageIcon: '↔️', bgImage: '/images/jw.jpg' },
    { text: 'Transfer Funds', imageIcon: '🎁', bgImage: '/images/money-1.jpg' },
    { text: 'Promotions', imageIcon: '🎮', bgImage: '/images/dealer-1.jpg' },
    { text: 'Games', imageIcon: '🎮' },
    { text: 'Roulette', imageIcon: '🎲' },
  ];

  return (
    <div className="fixed w-[266px] h-[679px] top-[93px] left-[73px] rounded-[16px] bg-black flex flex-col justify-between p-4">
      <div>
        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <IconRButton
              key={index}
              imageIcon={item.imageIcon}
              text={item.text}
              bgImage={item.bgImage}
              size="md"
              className="!justify-start !rounded-lg !px-3 !py-2.5 hover:!scale-[1.02] transition-transform"
            />
          ))}
        </div>

        <div className="h-24"></div>

        {/* First button */}
        <div className="mb-3">
          <IconRButton 
            text="Weekly"
            text2="Challenge"
            leftBgColor="bg-green-600"
            bgImage='/images/dealer-1.jpg'
            reverse={true}
            size="md"
            className="!rounded-lg !px-4 !py-3 hover:!scale-[1.02] transition-transform !h-14"
          />
        </div>

        {/* Second button */}
        <div className="mb-6">
          <IconRButton
            text="Earn Bonus"
            text2="Free SC 100"
            leftBgColor="bg-orange-500"
            bgImage='/images/money-1.jpg'
            reverse={true}
            size="md"
            className="!rounded-lg !px-4 !py-3 hover:!scale-[1.02] transition-transform !h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;