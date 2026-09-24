create table public.calendar_reservations (
  id uuid primary key default gen_random_uuid(),
  start_date date not null,
  end_date date not null,
  constraint calendar_reservations_dates_in_order check (end_date >= start_date)
);

alter table public.calendar_reservations enable row level security;

-- Visitors may read reservations; with no other policies, all writes are denied.
create policy calendar_reservations_anon_select
  on public.calendar_reservations
  for select
  to anon
  using (true);
