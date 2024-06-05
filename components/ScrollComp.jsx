'use client'
import React, { createContext, useState, useRef } from 'react';

const ScrollTargetContext = createContext(null);

const ScrollTargetProvider = ({ children }) => {
  const targetSectionRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false); // Optional for visibility logic

  return (
    <ScrollTargetContext.Provider value={{ targetSectionRef, isTargetVisible, setIsTargetVisible }}>
      {children}
    </ScrollTargetContext.Provider>
  );
};

export { ScrollTargetContext, ScrollTargetProvider };