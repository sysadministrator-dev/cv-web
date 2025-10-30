'use server';

import { generateAtsProfile } from '@/ai/flows/ats-profile-generator';
import type { AtsProfileInput } from '@/ai/flows/ats-profile-generator';

export async function getAtsOptimizedText(input: AtsProfileInput): Promise<{
  atsOptimizedText: string | null;
  error: string | null;
}> {
  try {
    const result = await generateAtsProfile(input);
    if (result.atsOptimizedText && result.atsOptimizedText.length > 0) {
      return { atsOptimizedText: result.atsOptimizedText, error: null };
    } else {
      return { atsOptimizedText: null, error: 'The generated content was empty. Please try again.' };
    }
  } catch (error) {
    console.error('Error generating ATS profile:', error);
    return { atsOptimizedText: null, error: 'An unexpected error occurred while generating the content. Please try again later.' };
  }
}
