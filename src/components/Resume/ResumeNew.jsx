import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import { Row , Container } from 'react-bootstrap';
import Particle from '../Particle';
import pdf from '../../Assets/Avishek_Kr_Pandit.pdf.pdf';
import pdf2 from '../../Assets/Avishek_Kr_Pandit.pdf1.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { pdfjs , Document , Page } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import autoprefixer from 'autoprefixer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



function ResumeNew() {
  let [width , setWidth] = useState(1200);

    useEffect(()=>{
        setWidth(window.innerWidth);
    } , [])

  return (
    <div>
        <Container fluid className='resume-section relative pt-[110px] pb-[30px] bg-[var(--section-background-color)] text-white'>
           <Particle/>
              <div className='relative justify-center'>
                    <Button className=' max-w-[250px]' variant="primary" href={pdf} target="_blank" 
                    ><AiOutlineDownload className='float-left h-auto mt-1'/>&nbsp;Download CV
                    </Button>
              </div>
              <div className='resume pt-[50px] pb-[50px] justify-center bg-red-700'>
                  <Document file={pdf} className='flex justify-center bg-slate-600 '>
                      <Page renderTextLayer={false} pageNumber={1} scale={width > 786 ? 1.7 : 0.6}  />
                  </Document>
              </div>
              <div className='justify-center flex'>
                   <Button variant='primary' href={pdf} target='_blank' className='max-w-[250px]'> 
                              <AiOutlineDownload className='float-left mt-[4px]'/>&nbsp;Download CV
                   </Button>
              </div>
        </Container>
    </div>
  )
}

export default ResumeNew
