import React, { useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import html2canvas from 'html2canvas';
import download from 'downloadjs';
import {BsDownload} from 'react-icons/bs';

const ShopInfoPoster = (props) => {
  const canvasRef = useRef();

  const handleDownload = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      download(dataUrl, 'poster.png');
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw logo
    const logo = new Image();
    logo.src = '/assets/dori-logo.png';
    logo.onload = () => {

        const imageWidth = 120; // Width of the image
        const imageHeight = 120; // Height of the image
      
        const canvasRatio = canvas.width / canvas.height; // Aspect ratio of the canvas
        const imageRatio = logo.width / logo.height; // Aspect ratio of the image
      
        let drawWidth, drawHeight;
        if (canvasRatio > imageRatio) {
          // Fit image based on width
          drawWidth = imageWidth;
          drawHeight = imageWidth / imageRatio;
        } else {
          // Fit image based on height
          drawWidth = imageHeight * imageRatio;
          drawHeight = imageHeight;
        }
      ctx.drawImage(logo,60 , -30, drawWidth, drawHeight); // Adjust the coordinates and dimensions as needed
    };

    // Draw shop image
    const shopImage = new Image();
    shopImage.src = '/assets/barbershop.png';
    shopImage.onload = () => {
        const imageWidth = 400; // Width of the image
        const imageHeight = 200; // Height of the image
      
        const canvasRatio = canvas.width / canvas.height; // Aspect ratio of the canvas
        const imageRatio = shopImage.width / shopImage.height; // Aspect ratio of the image
      
        let drawWidth, drawHeight;
        if (canvasRatio > imageRatio) {
          // Fit image based on width
          drawWidth = imageWidth;
          drawHeight = imageWidth / imageRatio;
        } else {
          // Fit image based on height
          drawWidth = imageHeight * imageRatio;
          drawHeight = imageHeight;
        }
      
        const x = (canvas.width - drawWidth) / 2; // Calculate the x-coordinate to center the image
        const y = (canvas.height - drawHeight) / 2; // Calculate the y-coordinate to center the image
      
        ctx.drawImage(shopImage, x, y, drawWidth, drawHeight); // Draw the image with object-fit: contain
      };
    // Draw shop code
    ctx.font = '32px Arial';
    ctx.fillText('Code: 12345', canvas.width/2, 150); // Adjust the coordinates as needed

    // Draw shop owner's name
    ctx.font = '30px Arial';
    ctx.textAlign = 'center'; // Align text in the center
    ctx.fillText('Shop Name', canvas.width/2, 250); // Adjust the coordinates as needed

    ctx.font = '18px Arial';
    ctx.textAlign = 'center'; // Align text in the center
    ctx.fillText('BraberShop', canvas.width/2, 280); // Adjust the coordinates as needed

    
    // Draw phone numbers
    ctx.font = '20px Arial';
    ctx.fillText('Phone: 123-456-7890', canvas.width/2, 550); // Adjust the coordinates as needed
    ctx.fillText('Mobile: 987-654-3210', canvas.width/2, 600); // Adjust the coordinates as needed

    // Draw location
    ctx.fillText('Location: Your Shop Address', canvas.width/2, 650); // Adjust the coordinates as needed
  

    const logo2 = new Image();
    logo2.src = '/assets/dori-logo.png';
    logo2.onload = () => {

        const imageWidth = 120; // Width of the image
        const imageHeight = 120; // Height of the image
      
        const canvasRatio = canvas.width / canvas.height; // Aspect ratio of the canvas
        const imageRatio = logo.width / logo.height; // Aspect ratio of the image
      
        let drawWidth, drawHeight;
        if (canvasRatio > imageRatio) {
          // Fit image based on width
          drawWidth = imageWidth;
          drawHeight = imageWidth / imageRatio;
        } else {
          // Fit image based on height
          drawWidth = imageHeight * imageRatio;
          drawHeight = imageHeight;
        }
      ctx.drawImage(logo,380 , 710, drawWidth, drawHeight); // Adjust the coordinates and dimensions as needed
    };
 
}, []);

  return (
    <div className='canvas-image'>
      {/* <canvas ref={canvasRef} width={600} height={800} style={{ border: '1px solid black',display:"" }} />
      <button onClick={handleDownload}>Download Poster</button> */}

      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-vcenterr">Poster</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/* <button className='btn-primary' onClick={handleSubmit}>Download Poster</button> */}
            <div className='modal-boday-poster'>
                <button className='btn-secondary' onClick={handleDownload}>Download Poster <BsDownload /></button>

                <canvas ref={canvasRef} width={600} height={800} style={{ border: '1px solid black',display:"" }} />
           
            </div>
            
        </Modal.Body>
        <Modal.Footer>
            <button className='btn-secondary' onClick={props.onHide}>Close</button>
        </Modal.Footer>
        </Modal>
    </div>
  );
};

export default ShopInfoPoster;
