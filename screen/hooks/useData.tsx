import React, {useCallback, useContext, useEffect, useState} from 'react';
import {onSignUp, onSignIn, addEvent, getMyEvent , deleteEvent,getNotification,getEvent,attendEvent,getMyAttendEvent,deleteMyAttendEvent} from './firebaseUseData';
export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const contextValue = {
    onSignUp,
    onSignIn,
    addEvent,
    getMyEvent,
    deleteEvent,
    getNotification,
    getEvent,
    attendEvent,
    getMyAttendEvent,
    deleteMyAttendEvent
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
