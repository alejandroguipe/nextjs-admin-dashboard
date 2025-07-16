import DropzoneComponent from "@/components/form/form-elements/DropZone";
import UsersChart from "@/components/analytics/UsersChart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Empresa - Gestión de Nómina",
  description: "Carga de empleados por CSV",
};

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Cargar Nómina
      </h2>
      <DropzoneComponent />
      <UsersChart />
    </div>
  );
}
