import React, { useEffect, useState } from 'react'
import { Row , Container } from 'react-bootstrap';
import Particle from '../Particle';
import pdf from '../../Assets/Avishek_Kr_Pandit.pdf.pdf';
import pdf2 from '../../Assets/Avishek_Kr_Pandit.pdf1.pdf';
import { AiOutlineDownload } from 'react-icons/im';
import { pdfjs , Document , Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function ResumeNew() {
  const [width , setWidth] = useState(1200);

    useEffect(()=>{
        setWidth(window.innerWidth);
    } , [])

  return (
    <div>
        <Container>

        </Container>
    </div>
  )
}

export default ResumeNew