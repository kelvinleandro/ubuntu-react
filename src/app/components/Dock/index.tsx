"use client"
import React, { useState } from 'react'
import {dockIcons} from '@public/data'
import Image from 'next/image'
import { DockWrapper, DockItem } from './index.style'
import { useRouter } from 'next/navigation'

const Dock = () => {
  const router = useRouter();
  const [onAppList, setOnAppList] = useState(false);

  const handleAppList = () => {
    const path = !onAppList ? '/app-list' : '/';
    router.push(path);
    setOnAppList(!onAppList);
  }

  const icons = dockIcons.map((icon, index) => (
    <DockItem key={index}>
      <Image src={icon.img} alt={icon.name} width={50} height={50} />
    </DockItem>
  ));

  const lastIcon = React.cloneElement(icons[icons.length - 1], {
    onClick: handleAppList,
  });

  return <DockWrapper>{[...icons.slice(0, -1), lastIcon]}</DockWrapper>;
}

export default Dock