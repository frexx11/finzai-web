-- Create table for early access email subscriptions
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can subscribe" 
ON public.email_subscriptions 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via backend/admin (not public)
CREATE POLICY "No public read access" 
ON public.email_subscriptions 
FOR SELECT 
USING (false);