"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/form/input/InputField";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function LoanSimulator() {
  const { user } = useAuth();
  const [salary, setSalary] = useState(0);
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(1);
  const [quota, setQuota] = useState(0);

  useEffect(() => {
    if (user) {
      const ref = doc(db, "usuarios", user.uid);
      getDoc(ref).then((snap) => {
        if (snap.exists()) {
          const data = snap.data() as { salario?: number };
          setSalary(data.salario ?? 0);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    if (amount && months) {
      const interest = 0.02; // simple monthly interest
      const monthly = (amount * (1 + interest * months)) / months;
      setQuota(Math.round(monthly * 100) / 100);
    }
  }, [amount, months]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          type="number"
          placeholder="Monto"
          onChange={(e) => setAmount(Number(e.target.value))}
          max={(salary * 2).toString()}
          hint={`Max: ${salary * 2}`}
        />
        <Input
          type="number"
          placeholder="Meses"
          onChange={(e) => setMonths(Number(e.target.value))}
          min="1"
        />
      </div>
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
        <p className="font-medium text-gray-700 dark:text-gray-400">
          Cuota mensual aproximada:
        </p>
        <p className="text-xl font-semibold text-gray-800 dark:text-white/90">
          {quota.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
        </p>
      </div>
    </div>
  );
}
