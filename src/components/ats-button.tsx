'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AtsButton() {
  return (
    <Button asChild variant="default" className="no-print">
      <a
        href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XKWGH6IECR.pdf"
        download="sample-cv.pdf"
      >
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </a>
    </Button>
  );
}
