'use server';

/**
 * @fileOverview Flow to generate an ATS-optimized text version of a web CV using AI.
 *
 * - generateAtsProfile - A function that handles the generation of the ATS profile.
 * - AtsProfileInput - The input type for the generateAtsProfile function.
 * - AtsProfileOutput - The return type for the generateAtsProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AtsProfileInputSchema = z.object({
  webCvContent: z
    .string()
    .describe('The HTML content of the web CV.'),
});
export type AtsProfileInput = z.infer<typeof AtsProfileInputSchema>;

const AtsProfileOutputSchema = z.object({
  atsOptimizedText: z
    .string()
    .describe(
      'The ATS-optimized plain text of the web CV.'
    ),
});
export type AtsProfileOutput = z.infer<typeof AtsProfileOutputSchema>;

export async function generateAtsProfile(input: AtsProfileInput): Promise<AtsProfileOutput> {
  return atsProfileGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'atsProfileGeneratorPrompt',
  input: {schema: AtsProfileInputSchema},
  output: {schema: AtsProfileOutputSchema},
  prompt: `You are an AI-powered tool that optimizes web CV content for Applicant Tracking Systems (ATS).

  Given the HTML content of a web CV, analyze the content and generate an ATS-optimized plain text version of the CV.
  Focus on extracting and formatting the key information like contact details, summary, experience, skills, and projects into a clean, text-only format.

  Web CV Content: {{{webCvContent}}}`,
});

const atsProfileGeneratorFlow = ai.defineFlow(
  {
    name: 'atsProfileGeneratorFlow',
    inputSchema: AtsProfileInputSchema,
    outputSchema: AtsProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      atsOptimizedText: output!.atsOptimizedText,
    };
  }
);
