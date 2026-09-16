-- Learning Minds Phase 2 identity, onboarding and preferences.
create extension if not exists pgcrypto;
create type public.user_role as enum ('student', 'teacher');

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role public.user_role,
  display_name text check (display_name is null or char_length(trim(display_name)) between 2 and 80),
  preferred_language text not null default 'en' check (preferred_language in ('en', 'pt')),
  country text check (country is null or country = 'MZ'),
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
comment on table public.profiles is 'One private Learning Minds identity profile per authenticated user.';

create table public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  learning_goal_minutes smallint check (learning_goal_minutes is null or learning_goal_minutes in (10,20,30,45)),
  preferred_language text not null default 'en' check (preferred_language in ('en','pt')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
comment on table public.user_preferences is 'Changeable Phase 2 learning and language preferences owned by a user.';

create table public.user_course_selections (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  curriculum_id text not null check (curriculum_id in ('moz-national','cambridge-international')),
  grade_id text not null check (grade_id in ('mz-8','mz-9','mz-10','mz-11','mz-12','cam-igcse')),
  created_at timestamptz not null default now(), unique(user_id, curriculum_id, grade_id),
  check ((curriculum_id = 'moz-national' and grade_id like 'mz-%') or (curriculum_id = 'cambridge-international' and grade_id = 'cam-igcse'))
);
comment on table public.user_course_selections is 'Stable curriculum and grade catalogue IDs selected during onboarding.';

create table public.user_subject_selections (
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id text not null check (subject_id in ('mathematics','physics','chemistry','biology')),
  created_at timestamptz not null default now(), primary key(user_id, subject_id)
);
comment on table public.user_subject_selections is 'Many-to-one Phase 2 subject catalogue selections for students and teachers.';

create function public.set_updated_at() returns trigger language plpgsql set search_path = '' as $$ begin new.updated_at = now(); return new; end; $$;
create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger preferences_updated_at before update on public.user_preferences for each row execute function public.set_updated_at();

create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin insert into public.profiles (user_id) values (new.id); insert into public.user_preferences (user_id) values (new.id); return new; end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.user_preferences enable row level security;
alter table public.user_course_selections enable row level security;
alter table public.user_subject_selections enable row level security;

create policy "users read own profile" on public.profiles for select to authenticated using ((select auth.uid()) = user_id);
create policy "users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users read own preferences" on public.user_preferences for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own preferences" on public.user_preferences for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update own preferences" on public.user_preferences for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users read own courses" on public.user_course_selections for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own courses" on public.user_course_selections for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users delete own courses" on public.user_course_selections for delete to authenticated using ((select auth.uid()) = user_id);
create policy "users read own subjects" on public.user_subject_selections for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own subjects" on public.user_subject_selections for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users delete own subjects" on public.user_subject_selections for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.profiles, public.user_preferences, public.user_course_selections, public.user_subject_selections from anon;
grant select, update on public.profiles to authenticated;
grant select, insert, update on public.user_preferences to authenticated;
grant select, insert, delete on public.user_course_selections, public.user_subject_selections to authenticated;
