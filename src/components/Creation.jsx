import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Creation extends Component {
    render(){
        return(
            <div>
                 <Grid className="beranda-grid">
            <div className="karyaku">
                    <div className="karya">
                    
                    <iframe src ="http://www.nawina.com" frameBorder="none" width="100%" height="500px"  > Game </iframe>
                        <h2>Game Adventure</h2>
                        <p>
                            Game ini dibuat dengan  dengan Game Engine Unity dengan menggunakan bahasa pemrograman C#.
                        </p>
                       
                    </div>
                    <div className="karya1">
                    <img src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
        <h2>Augmented Reality Geographic Information System</h2>
        <p>
            <p>Menampilkan 3D Pulau Bali dengan teknologi Augmented Reality untuk pengguna smartphone android.</p>
            Dibangun dengan Game Engine Unity dengan menggunakan bahasa pemrograman C#.
            <br />Aplikasi ini membutuhkan: 
               <br />
                <ul align ="left">
                    <li>Kamera minimal 8mp</li>
                    <li>Pastikan aplikasi diizinkan menggunakan kamera ( pengaturan >> aplikasi >> pilih aplikasi >> izin )</li>
                    <li>RAM minimal 3GB</li>
                    <li>Prosesor Qualcomm® Snapdragon™ 430</li>
                    <li>Minimal oS Android 8.0 Oreo</li>

                </ul>
                

        </p>
        <a href="https://play.google.com/store/apps/details?id=com.Nawina.ARGIS">Download</a>
                       
                    </div>
                    <div className="karya1">
                    <img src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
        <h2>Aplikasi Recycle View Android</h2>
        <p>
            Aplikasi Android recycle untuk menampilkan produk secara dinamis
                   </p>
        <a href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan">
        Download</a>
                       
                    </div>
           
                
     
                </div>

              
                </Grid>    
     
                </div>
            
        )
    }
}
export default Creation;