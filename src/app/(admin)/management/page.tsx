import BasicTableOne from "@/components/tables/BasicTableOne";
import UsersChart from "@/components/analytics/UsersChart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Administración",
  description: "Gestión de usuarios y empresas",
};

export default function ManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Panel de Administración
      </h2>
      <BasicTableOne />
      <UsersChart />
    </div>
  );
}
