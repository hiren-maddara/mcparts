"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CircleCheckBig } from "lucide-react";
import { createContext, useEffect, useState } from "react";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);
  const [showAlert, setShowAlert] = useState(true);

  const addAlert = (alert) => {
    setAlerts((prevAlerts) => [...prevAlerts, alert]);
  };

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.slice(1));
      }, 3000); // Hide each alert after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [alerts]);

  return (
    <AlertContext.Provider value={addAlert}>
      <div className="fixed z-50 top-4 right-4 space-y-4">
        {alerts.map((alert, index) => (
          <Alert
            key={index}
            className="transition-all delay-75 relative z-50 bg-white shadow-lg rounded-lg p-4 flex"
            variant={alert.variant ? alert.variant : ''}
          >
            {alert.variant === "destructive" ? (
              <AlertCircle className="h-4 w-4" />
            ) : (
              <CircleCheckBig className="h-4 w-4 text-green-700" />
            )}

            {/* <AlertTitle>{alert.title}</AlertTitle> */}
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  );
}
