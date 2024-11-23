import React from 'react';
import Swal from 'sweetalert2';

function downloadCV() {
    Swal.fire({
        icon: 'info',
        title: 'Download CV',
        text: 'CV ATS Anda sedang diunduh...',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });

    // Trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Path ke file CV di folder public
    link.download = 'CV_ATS_Anda.pdf'; // Nama file saat diunduh
    link.click();
}

export default function DownloadCV() {
    return (
        <button onClick={downloadCV}>Download CV</button>
    );
}
