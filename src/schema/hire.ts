import { z } from 'zod';

export const hireSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),
  company: z.string().trim().optional(),
  skills: z.array(z.string()).min(1, 'Please select at least one skill.'),
  need: z.string().min(1, 'Please select what best describes your need.'),
  notes: z.string().trim().optional(),
});

export type HireFormData = z.infer<typeof hireSchema>;
