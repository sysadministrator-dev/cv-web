'use server';

import { generateAtsProfile } from '@/ai/flows/ats-profile-generator';
import type { AtsProfileInput } from '@/ai/flows/ats-profile-generator';

export async function getAtsOptimizedPdf(input: AtsProfileInput): Promise<{
  atsOptimizedPdf: string | null;
  error: string | null;
}> {
  try {
    const result = await generateAtsProfile(input);
    // The AI might return a non-base64 string or an empty one if it fails.
    // A simple check for a non-empty string. More robust validation could be added.
    if (result.atsOptimizedPdf && result.atsOptimizedPdf.length > 0) {
      return { atsOptimizedPdf: result.atsOptimizedPdf, error: null };
    } else {
      return { atsOptimizedPdf: null, error: 'The generated PDF content was empty. Please try again.' };
    }
  } catch (error) {
    console.error('Error generating ATS profile:', error);
    return { atsOptimizedPdf: null, error: 'An unexpected error occurred while generating the PDF. Please try again later.' };
  }
}
