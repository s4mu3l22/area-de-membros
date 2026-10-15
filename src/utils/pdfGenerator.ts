import { jsPDF } from 'jspdf';
import { BonusDocument, ClinicalResource } from '../types/clinical';

export function generateBonusPdf(bonus: BonusDocument): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let currentY = 22;

  // Header Banner
  doc.setFillColor(235, 243, 250); // Soft calm blue
  doc.roundedRect(margin, currentY, contentWidth, 24, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(37, 99, 235); // Blue
  doc.text('ACERVO CLÍNICO INFANTIL · BÔNUS EXCLUSIVO ' + bonus.bonusNumber, margin + 4, currentY + 7);

  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text(bonus.title, margin + 4, currentY + 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(bonus.subtitle.substring(0, 85), margin + 4, currentY + 20);

  currentY += 32;

  // Metadata Strip
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, currentY, contentWidth, 10, 1, 1, 'F');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(`Categoria: ${bonus.category}  |  Páginas Estimadas: ${bonus.pagesCount}  |  Arquivo Fonte: ${bonus.sourceFile}`, margin + 4, currentY + 6.5);

  currentY += 16;

  // Sections
  for (const section of bonus.sections) {
    // Check if new page needed
    if (currentY > pageHeight - 35) {
      doc.addPage();
      currentY = 20;
    }

    // Section Header
    doc.setFillColor(230, 244, 234); // Mint green accent
    doc.roundedRect(margin, currentY, contentWidth, 7, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(6, 95, 70);
    doc.text(section.title, margin + 3, currentY + 5);

    currentY += 11;

    // Body text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);

    const splitText = doc.splitTextToSize(section.content, contentWidth);
    for (const line of splitText) {
      if (currentY > pageHeight - 20) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(line, margin, currentY);
      currentY += 4.5;
    }

    currentY += 3;

    // Script Boxes if present
    if (section.scriptBoxes && section.scriptBoxes.length > 0) {
      for (const script of section.scriptBoxes) {
        if (currentY > pageHeight - 40) {
          doc.addPage();
          currentY = 20;
        }

        doc.setFillColor(254, 247, 224); // Soft yellow/amber
        doc.setDrawColor(253, 230, 138);
        doc.roundedRect(margin, currentY, contentWidth, 6, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(146, 64, 14);
        doc.text(script.situation || script.label, margin + 3, currentY + 4.2);

        currentY += 8;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(30, 41, 59);
        const scriptLines = doc.splitTextToSize(`"${script.text}"`, contentWidth - 4);
        for (const sLine of scriptLines) {
          if (currentY > pageHeight - 20) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(sLine, margin + 2, currentY);
          currentY += 4.2;
        }
        currentY += 4;
      }
    }

    // Table Data if present
    if (section.tableData && section.tableData.rows.length > 0) {
      currentY += 2;
      for (const row of section.tableData.rows) {
        if (currentY > pageHeight - 35) {
          doc.addPage();
          currentY = 20;
        }
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(margin, currentY, contentWidth, 5, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(15, 23, 42);
        doc.text(row[0], margin + 2, currentY + 3.5);

        currentY += 7;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(51, 65, 85);
        const desc1 = doc.splitTextToSize(`NÃO FAZER: ${row[1]}`, contentWidth);
        for (const l of desc1) {
          if (currentY > pageHeight - 15) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(l, margin, currentY);
          currentY += 4;
        }
        const desc2 = doc.splitTextToSize(`FAÇA Y (PLANO B): ${row[2]}`, contentWidth);
        for (const l of desc2) {
          if (currentY > pageHeight - 15) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(l, margin, currentY);
          currentY += 4;
        }
        currentY += 3;
      }
    }

    currentY += 4;
  }

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Acervo Clínico Infantil · Material Exclusivo para Terapeutas Infantojuvenis', margin, pageHeight - 8);
    doc.text(`Página ${i} de ${totalPages}`, pageWidth - margin - 20, pageHeight - 8);
  }

  doc.save(`${bonus.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`);
}

export function generateResourcePdf(resource: ClinicalResource): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let currentY = 22;

  // Header Box
  doc.setFillColor(235, 243, 250);
  doc.roundedRect(margin, currentY, contentWidth, 22, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(37, 99, 235);
  doc.text(`FICHA TÉCNICA CLÍNICA · ${resource.id}`, margin + 4, currentY + 7);

  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text(resource.title, margin + 4, currentY + 15);

  currentY += 28;

  // Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Indicado para:', margin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const ageLines = doc.splitTextToSize(resource.ageRange, contentWidth - 30);
  doc.text(ageLines, margin + 26, currentY);
  currentY += ageLines.length * 5 + 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Objetivo Clínico-Terapêutico:', margin, currentY);
  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const objLines = doc.splitTextToSize(resource.objective, contentWidth);
  doc.text(objLines, margin, currentY);
  currentY += objLines.length * 4.5 + 5;

  // Materials
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Anexos e Materiais Inclusos na Plataforma:', margin, currentY);
  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  for (const mat of resource.materialsIncluded) {
    doc.text(`• ${mat}`, margin + 3, currentY);
    currentY += 4.5;
  }
  currentY += 4;

  // Passo a Passo
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, currentY, contentWidth, 6, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Passo a Passo da Aplicação (Início, Desenvolvimento e Fechamento)', margin + 3, currentY + 4.2);
  currentY += 10;

  const steps = [
    { label: 'Início & Enquadre:', text: resource.stepByStep.inicio },
    { label: 'Desenvolvimento:', text: resource.stepByStep.desenvolvimento },
    { label: 'Fechamento & Transferência:', text: resource.stepByStep.fechamento }
  ];

  for (const step of steps) {
    if (currentY > pageHeight - 30) {
      doc.addPage();
      currentY = 20;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text(step.label, margin, currentY);
    currentY += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    const sLines = doc.splitTextToSize(step.text, contentWidth);
    for (const l of sLines) {
      doc.text(l, margin, currentY);
      currentY += 4.2;
    }
    currentY += 3;
  }

  // Telehealth
  if (currentY > pageHeight - 35) {
    doc.addPage();
    currentY = 20;
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(6, 95, 70);
  doc.text('Adaptação para Telessaúde (Online):', margin, currentY);
  currentY += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  const teleLines = doc.splitTextToSize(resource.telehealthAdaptation, contentWidth);
  doc.text(teleLines, margin, currentY);
  currentY += teleLines.length * 4.2 + 5;

  // Clinical tip
  if (currentY > pageHeight - 35) {
    doc.addPage();
    currentY = 20;
  }
  doc.setFillColor(254, 247, 224);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(margin, currentY, contentWidth, 18, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(146, 64, 14);
  doc.text('O Pulo do Gato Clínico:', margin + 3, currentY + 5);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(67, 56, 202);
  const tipLines = doc.splitTextToSize(resource.clinicalTip, contentWidth - 6);
  doc.text(tipLines, margin + 3, currentY + 10);

  // Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Acervo Clínico Infantil · Protocolo de Apoio à Prática Terapêutica', margin, pageHeight - 8);

  doc.save(`${resource.id}_${resource.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`);
}
