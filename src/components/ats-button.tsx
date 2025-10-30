'use client';

import { useTransition } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAtsOptimizedText } from '@/app/actions';
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
      
      const result = await getAtsOptimizedText({ webCvContent });

      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'Generation Failed',
          description: result.error,
        });
      } else if (result.atsOptimizedText) {
        try {
          const blob = new Blob([result.atsOptimizedText], { type: 'text/plain' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'CyberSecure_Profile_ATS.txt';
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        } catch (e) {
             toast({
              variant: 'destructive',
              title: 'Download Error',
              description: 'Failed to process and download the file.',
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
      {isPending ? 'Generating...' : 'ATS-Optimized TXT'}
    </Button>
  );
}
