import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "@/lib/api";

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: dashboardApi.getStats,
    staleTime: 30000,
  });
}

export function usePartnerBriefing() {
  return useQuery({
    queryKey: ["dashboard", "partner-briefing"],
    queryFn: dashboardApi.getPartnerBriefing,
    staleTime: 5 * 60 * 1000,
  });
}
