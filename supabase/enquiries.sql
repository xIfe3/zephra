-- Run once in Supabase → SQL Editor.
create table if not exists public.enquiries (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  service     text,
  budget      text,
  message     text not null,
  source      text not null default 'website',
  status      text not null default 'new'   -- new | contacted | won | lost
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

-- Lock the table down: only the server (service role key) can read/write.
alter table public.enquiries enable row level security;

-- Already created the table before the budget field existed? Run this once:
alter table public.enquiries add column if not exists budget text;
