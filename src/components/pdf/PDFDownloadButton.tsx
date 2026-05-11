'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import { ResumeData } from '@/types/resume.types';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  data: ResumeData;
  fileName: string;
  className?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ data, fileName, className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PDFDownloadLink
      document={<PDFDocument data={data} />}
      fileName={fileName}
      className={className}
    >
      {({ loading }) => (
        <Button 
          className="bg-blue-600 hover:bg-blue-700 gap-2 shadow-md shadow-blue-100" 
          disabled={loading}
        >
          <Download size={16} /> {loading ? 'Preparing...' : 'Download PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
