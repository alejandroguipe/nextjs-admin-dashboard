"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function UsersChart() {
  const [users, setUsers] = useState<number[]>([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "usuarios"));
      setUsers([snap.size]);
    }
    load();
  }, []);

  const options: ApexOptions = {
    chart: { id: "users" },
    labels: ["Usuarios"],
  };

  const series = users;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <ReactApexChart options={options} series={series} type="pie" height={200} />
    </div>
  );
}
