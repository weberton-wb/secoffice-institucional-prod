-- Drop the overly permissive public SELECT policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a new policy that restricts profile viewing to authenticated users only
CREATE POLICY "Authenticated users can view profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);