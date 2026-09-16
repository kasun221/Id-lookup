create table if not exists public.phone_numbers (
  id_number text primary key,
  phone_number text,
  phone_number2 text,
  updated_at timestamp with time zone default now()
);

alter table public.phone_numbers add column if not exists phone_number2 text;
