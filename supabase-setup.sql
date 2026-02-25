-- Run this in your Supabase SQL Editor
-- Dashboard → SQL Editor → New query → paste → Run

create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  volume text,
  time_to_complete text,
  current_tool text,
  biggest_pain text,
  created_at timestamp with time zone default now()
);

-- Keep emails private
alter table waitlist enable row level security;

-- Allow inserts from the API (service role bypasses RLS anyway)
create policy "Service role only"
  on waitlist
  for all
  using (false);
