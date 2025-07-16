import LoanSimulator from "@/components/loan/LoanSimulator";
import UsersChart from "@/components/analytics/UsersChart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Usuarios - Adelanto de Nómina",
  description: "Simulador y perfil de usuario",
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Simulador de Adelanto
      </h2>
      <LoanSimulator />
      <UsersChart />
    </div>
  );
}
