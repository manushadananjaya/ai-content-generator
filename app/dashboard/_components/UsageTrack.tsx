"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useContext } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { useRouter, usePathname } from "next/navigation";

async function getUsage(email: string) {
  if (!email) return [];
  return await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .execute();
}

export default function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
  const router = useRouter();
  const pathname = usePathname();

  const fetchUsage = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const records = await getUsage(user.primaryEmailAddress.emailAddress);
      const total = records.reduce((acc, record) => {
        return acc + (record.aiResponse?.split(" ").length || 0);
      }, 0);
      setTotalUsage(total);
    }
  };

  useEffect(() => {
    fetchUsage();
  }, [user, updateCreditUsage]);

  const handleUpgradeClick = () => {
    router.replace("/dashboard/billing");
  };

  const isBillingPage = pathname === "/dashboard/billing";

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-slate-400 w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalUsage / 10000) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Credits used</h2>
      </div>
      <Button
        variant="outline"
        className="w-full my-3"
        onClick={handleUpgradeClick}
        disabled={isBillingPage}
      >
        Upgrade
      </Button>
    </div>
  );
}
