'use client';

import { useTransition } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAtsOptimizedPdf } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export function AtsButton() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleDownload = () => {
    startTransition(async () => {
      const cvContentElement = document.getElementById('cv-content');
      if (!cvContentElement) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not find CV content to process.',
        });
        return;
      }
      const webCvContent = cvContentElement.outerHTML;
      
      const result = await getAtsOptimizedPdf({ webCvContent });

      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'PDF Generation Failed',
          description: result.error,
        });
      } else if (result.atsOptimizedPdf) {
        try {
          const byteCharacters = atob(result.atsOptimizedPdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'CyberSecure_Profile_ATS.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        } catch (e) {
             toast({
              variant: 'destructive',
              title: 'Download Error',
              description: 'Failed to process and download the PDF. The generated content may be invalid.',
            });
        }
      }
    });
  };

  return (
    <Button onClick={handleDownload} disabled={isPending} variant="default">
      {isPending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Download className="mr-2 h-4 w-4" />
      )}
      {isPending ? 'Generating...' : 'ATS-Optimized PDF'}
    </Button>
  );
}
