import { supabase } from "./supabase";

export const monthCount = 16;
export const isoDate = (year, month, day) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

let cached;

export function loadCalendarReservations() {
  const now = new Date();
  const today = isoDate(now.getFullYear(), now.getMonth(), now.getDate());
  if (cached?.today === today && Date.now() < cached.expiresAt) return cached.request;

  const end = new Date(Date.UTC(now.getFullYear(), now.getMonth() + monthCount, 1));
  const rangeEnd = isoDate(end.getUTCFullYear(), end.getUTCMonth(), 1);
  const entry = { today, expiresAt: Infinity };
  cached = entry;
  entry.request = supabase.from("calendar_reservations").select("start_date, end_date")
    .gte("end_date", today).lt("start_date", rangeEnd)
    .then(({ data, error }) => {
      // Share pending requests and keep successful results fresh for five minutes.
      entry.expiresAt = error ? 0 : Date.now() + 5 * 60 * 1000;
      return { data, error };
    }).catch(error => {
      entry.expiresAt = 0;
      return { data: null, error };
    });
  return entry.request;
}
