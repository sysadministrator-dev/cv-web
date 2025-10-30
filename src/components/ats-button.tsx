'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AtsButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Button onClick={handleDownload} variant="default" className="no-print">
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
}
