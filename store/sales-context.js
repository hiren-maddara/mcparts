"use client";

const { createContext, useState, useEffect } = require("react");

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    async function fetchSales() {
      try {
        fetch('/api/sales').then(res => res.json()).then(data => setItems(data))
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchSales()
  }, []);

  return (
    <SalesContext.Provider value={{ 
      sales: {items, setItems},
      selectedItems: {selectedItems, setSelectedItems}
    }}>
      {children}
    </SalesContext.Provider>
  );
}

export function newSale(saleData) {
  let newSale;
  fetch("/api/sales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ saleData }),
  })
    .then((res) => res.json())
    .then((item) => (newSale = item));

  return newSale;
}

export function updateSale(saleid, updatedData) {
  let updatedSale;
  fetch("/api/sales", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ saleid, updatedData }),
  })
    .then((res) => res.json())
    .then((data) => (updateSale = data));
}

export function deleteSale(saleid) {
  try {
    fetch(`/api/sales?saleid=${saleid}`, {
      method: "DELETE",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
