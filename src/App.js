import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import gambaratas from './img/gambar1.jpeg'
import hatipertama from './img/hati.jpg'
import hiburanpertama from './img/hiburan.jpg'
import kamarpertama from './img/kamar.jpg'
import memopertama from './img/memo.jpg'
import gambarbawah from './img/gambar3.jpg'
import gambarpertengah from './img/gambar4.jpg'
import gambarakhir from './img/gambar5.jpeg'
import webinarpertama from './img/webinar1.png'
import webinarkedua from './img/webinar2.png'
import webinarketiga from './img/webinar3.png'
import logoatas from './img/logo.jpeg'
import { Button, CardBody, Card } from 'reactstrap';
// import { Jumbotron, Container } from 'reactstrap';
 import {Table} from 'reactstrap';
// import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import {
  CardImg, CardTitle, CardText, CardSubtitle
} from 'reactstrap';

function App() {
  
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <NavbarToggler onClick={toggle} />
      <NavbarBrand href="/"><img src={logoatas} className="App-logoatas1" alt="logo" width="60" height="60" /><font face="HAPPY WINTER" size="6" color="warning">Penyemangat.Yok</font> </NavbarBrand>
      <Navbar color="white" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#Home"><button type="button" class="btn btn-outline-secondary">Home</button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Menu"><button type="button" class="btn btn-outline-danger">Menu</button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Webinar"><button type="button" class="btn btn-outline-success">Webinar</button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Schedule"><button type="button" class="btn btn-outline-warning">Schedule</button></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <button type="button" class="btn btn-outline-dark">Medsos</button>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><navItem>
                <NavLink href="https://twitter.com/PenyemangatY?s=08">Twitter</NavLink>
                </navItem></DropdownItem>
                <DropdownItem><navItem>
                <NavLink href="https://vt.tiktok.com/ZGJBSF2WW/">Tiktok</NavLink>
                </navItem></DropdownItem>
                <DropdownItem><navItem>
                <NavLink href="https://www.instagram.com/penyemangat.yok/">Instagram</NavLink>
                </navItem></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <div id="Home">
    <img src={gambaratas} className="App-gambaratas1" alt="gambar1" />
    </div>

    <div id="Menu">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill=" #FFFFE0" fill-opacity="1" d="M0,64L26.7,96C53.3,128,107,192,160,192C213.3,192,267,128,320,133.3C373.3,139,427,213,480,224C533.3,235,587,181,640,160C693.3,139,747,149,800,160C853.3,171,907,181,960,154.7C1013.3,128,1067,64,1120,58.7C1173.3,53,1227,107,1280,112C1333.3,117,1387,75,1413,53.3L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
    </svg>
    <Button color="light" onClick={toggle} style={{ marginBottom: '1rem' }}><p><font face="Aesthetic Violet" size="8" color="dark">Menu Penyemangat.yok</font></p></Button>
    </div>

<div class="row 3">
      <div class="col-md-3 p-1 py-5">
        <img src={hatipertama} className="App-hati1" alt="hati" width="200" />
        <h4 class="my-4"><small class="rounded-top px-3 py-2 mr-3 bg-white"><font face="Tentang Nanti Demo" size="8" color="black">Self Love</font></small></h4>
        <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Wah, sekarang kata "self love" bertebaran
            ya, mencintai diri sendiri, membahagiakan
            diri sendiri, tidak membandingkan
            kamu dengan orang lain,mencoba untuk
            berbeda dan menjadi versi terbaikmu dalam
            berbagai bidang, bahkan alur cerita hidup.
            sesederhana itu. tapi kamu tidak bisa?
            <br></br>
            ikuti langkah-langkah ini :
            <ul>
              <li>Pejamkan matamu, Tarik nafas, buang nafas</li>
              <li>lalu bicara dalam hati<br></br>
              <p className="text-danger">"Didalam Kesulitan pasti ada kemudahan"</p>
              <p className="text-info">"Tuhan menciptakan ku dengan rupa yang sempurna"</p>
              <p className="text-success">"Setiap orang punya jalan masing-masing"</p></li>
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
      </div>
      <div class="col-md-3 p-1 py-5">
        <img src={hiburanpertama} className="App-hiburan1" alt="hiburan"  width="200" /> 
        <h4 class="my-4"><small class="rounded-top px-3 py-2 mr-3 bg-white"><font face="Tentang Nanti Demo" size="8" color="black">Me Time</font></small></h4>
        <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
           biasanya orang melakukan ini untuk istirahat,
           ketenangan dan kenyamanan diri sendiri 
           sejenak, dari beragam masalah kehidupan.
            <br></br>
            Macam-macam Me Time:
            <ul>
              <p className="text-danger">"Tidur"</p>
              <p className="text-info">"Nonton film"</p>
              <p className="text-dark">"Makan-makan"</p>
              <p className="text-success">"jalan-jalan"</p>
              <p className="text-warning">"shoping"</p>
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
      </div>
      <div class="col-md-3 p-2 py-5">
        <img src={memopertama} className="App-memo1" alt="memo"  width="200" />
        <h4 class="my-4"><small class="rounded-top px-3 py-2 mr-3 bg-white"><font face="Tentang Nanti Demo" size="8" color="black">Quotes</font></small></h4>
        <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Button href="https://www.bola.com/ragam/read/4459300/45-kata-kata-quotes-penuh-inspirasi-tentang-kehidupan-memotivasi-dan-bangkitkan-semangat" color="danger" size="lg" active>Quotes 1</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button href="https://www.gramedia.com/blog/quotes-tentang-kesehatan-mental-dari-buku-terbaru-regis-machdy/" color="danger" size="lg" active>Quotes 2</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button href="https://www.hipwee.com/list/quotes-penenang-hati-merry-riana/" color="danger" size="lg" active>Quotes 3</Button>
            <br></br>
            <br></br>
            <br></br>    
            <Button href="https://wolipop.detik.com/worklife/d-4454269/biar-pintar-kayak-maudy-ayunda-ini-5-quotes-inspiratif-dari-sang-artis" color="danger" size="lg" active>Quotes 4</Button>      
            <br></br>
            <br></br>
            <br></br> 
            <Button href="https://dianisa.com/quotes-najwa-shihab/" color="danger" size="lg" active>Quotes 5</Button>           
            <br></br>
            <br></br>
            <br></br> 
            <Button href="https://www.brilio.net/wow/40-kata-kata-bijak-mario-teguh-paling-keren-penuh-motivasi-191017e.html" color="danger" size="lg" active>Quotes 6</Button>        
          </CardBody>
        </Card>
      </Collapse>
    </div>
      </div>
      <div class="col-md-3 p-2 py-5">
        <img src={kamarpertama} className="App-kamar1" alt="kamar" width="200" />
        <h4 class="my-4"><small class="rounded-top px-3 py-2 mr-3 bg-white"><font face="Tentang Nanti Demo" size="8" color="black">Health</font></small></h4>
        <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Terkadang kita tidak perduli dengan kesehatan.
          contohnya Kesehatan tubuh selalu bergadang, 
          jarang minum air mineral, sering makan pedes, 
          bahkan tiap malam bergadang. tapi, ada yang
          lebih penting dari tubuh yakni kesehatan mental.
            <br></br>
            Macam-macam Penyakit mental:
            <ul>
              <p className="text-danger">"Anxiety Disorders"</p>
              <p className="text-info">"Mood Disorders"</p>
              <p className="text-dark">"Eating Disorders"</p>
              <p className="text-success">"Personality Disorders"</p>
              <p className="text-warning">"Obsessive-Compulsive Disorders (OCD)"</p>
              <p className="text-danger">"Post-Traumatic Stress Disorders (PTSD)"</p>
              <p className="text-info">"Stress Response Syndromes"</p>
              <p className="text-dark">"Psychotic Disorders"</p>
              <p className="text-success">"Dissociative Disorders"</p>
              <p className="text-success">"Impulse Control and Addition Disorders (ICAD)"</p>
              <p className="text-warning">"Sexual and Gender Disorders"</p>
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
      </div>
  </div>
  
     <div id="Webinar">
      <div className="pengertian">
      <Alert color="warning">
      <div id="runningtext">
      <marquee >
      <font face="Aesthetic Violet" size="20" color="black">Mental Health Webinar</font></marquee>
      </div>
      </Alert>
      </div>
        <br></br>
        <br></br>

        <div class="card-group">
      <Card>
        <CardImg top width="100%" src={webinarpertama} className="App-webinar01" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Webinar Optimalisasi Kuliah Daring</CardTitle>
          <CardSubtitle tag="h6" className="mb-4 text-muted">😊: Sri Wahyuningsi Polinggapo, M.Psi., Psikolog</CardSubtitle>
          <CardText>
          <ul>Note the date:</ul>
          <ul>📆: Sabtu, 21 Agustus 2021</ul>
          <ul>⏰: 09.00 - 11.00 WIB</ul>
          <ul>🏠: Via zoom</ul>
          <ul>GRATIS</ul>
          </CardText>
          <Button href="http://bit.ly/OptimalisasiDaring" color="warning" size="lg" active>For more info 📲</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg  top width="100%" src={webinarkedua} className="App-webinar02"   alt="Card image cap"  />
        <CardBody>
          <CardTitle tag="h5">Tantangan Psikologi di Era New Normal</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">😊: Johnny G Plate,SE.E. (Menteri Komunikasi dan Informasi Republik Indonesia)</CardSubtitle>
          <CardText>
          <ul>Note the date:</ul>
          <ul>📆: Rabu-Kamis, 11-12 Agustus 2021</ul>
          <ul>🏠: Via zoom</ul>
          <ul>INVESTASI</ul>
          </CardText>
          <br></br>
          <Button href="http://bit.ly/InfoTIN2021" color="warning" size="lg" active>For more info 📲</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={webinarketiga} className="App-webinar03" alt="Card image cap"  />
        <CardBody>
          <CardTitle tag="h5">How to be Resilient?⁣⁣</CardTitle>
          <CardSubtitle tag="h6" className="mb-5 text-muted">😊: Ardi Primasari, M.Psi, Psikolog., CH., CHt⁣
(Psikolog PRIMA Consultant) </CardSubtitle>
          <CardText>
          <ul>Note the date:</ul>
          <ul>📆: Kamis,22 Juli 2021</ul>
          <ul>⏰: 13.00 WIB - selesai</ul>
          <ul>🏠: Via zoom</ul>
          <ul>DISKON 50% dari harga asli</ul> 
          </CardText>
          <Button href="http://bit.ly/webinarPMH2021⁣" color="warning" size="lg" active>For more info 📲</Button>
        </CardBody>
      </Card>
    </div>
<br></br>
<br></br>
<br></br>
<br></br>

<div id="Schedule">
<div className="pengertian">
      <Alert color="warning">
      <div id="runningtext">
      <marquee >
      <font face="Aesthetic Violet" size="20" color="Danger">Schedule Istimewa</font><br></br><font face="Aesthetic Violet" size="5" color="Warning">Membuatmu produktif sepanjang hari </font></marquee>
      </div>
      </Alert>
</div>
     
<div className="pengertian">
        <h2><font face="Tentang Nanti Demo" size="8"></font></h2>
        <div class="card-group1">
        <center>
        <table border="3" cellspacing="0" cellpadding="8">
        <tr>
        <th colspan="8" bgcolor="Pink">:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</th>
        </tr>
        <tr>
        <th bgcolor="LightGray">TIME</th>
        <th bgcolor="LightGray">Sunday</th>
        <th bgcolor="LightGray">Monday</th>
        <th bgcolor="LightGray">Tuesday</th>
        <th bgcolor="LightGray">Wednesday</th>
        <th bgcolor="LightGray">Thursday</th>
        <th bgcolor="LightGray">Friday</th>
        <th bgcolor="LightGray">Saturday</th>
        </tr>
        <tr>
          <th scope="row">04.45</th>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
          <td>shalat subuh (muslim)</td>
        </tr>
        <tr>
          <th scope="row">05.00</th>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
          <td>bersih-bersih rumah</td>
        </tr>
        <tr>
          <th scope="row">06.30</th>
          <td>Olahraga</td>
          <td>Olahraga</td>
          <td>mandi+skincare</td>
          <td>mandi+skincare</td>
          <td>mandi+skincare</td>
          <td>mandi+skincare</td>
          <td>mandi+skincare</td>
        </tr>
        <tr>
          <th scope="row">07.00</th>
          <td>Mandi langsung sarapan</td>
          <td>Mandi langsung sarapan</td>
          <td>sarapan</td>
          <td>sarapan</td>
          <td>sarapan</td>
          <td>sarapan</td>
          <td>sarapan</td>
        </tr>
        <tr>
          <th scope="row">11.30</th>
          <td>istirahat</td>
          <td>istirahat</td>
          <td>istirahat</td>
          <td>istirahat</td>
          <td>istirahat</td>
          <td>istirahat</td>
          <td>istirahat</td>
        </tr>
        <tr>
          <th scope="row">12.02</th>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
          <td>shalat dzuhur (muslim)</td>
        </tr>
        <tr>
          <th scope="row">12.30</th>
          <td>Me Time</td>
          <td>Me Time</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
        </tr>
        <tr>
          <th scope="row">13.20</th>
          <td>Me Time</td>
          <td>Me Time</td>
          <td>Melakukan Hobby</td>
          <td>Melakukan Hobby</td>
          <td>Melakukan Hobby</td>
          <td>Melakukan Hobby</td>
          <td>Melakukan Hobby</td>
        </tr>
        <tr>
          <th scope="row">14.20</th>
          <td>Me Time</td>
          <td>Me Time</td>
          <td>Nonton Film</td>
          <td>Nonton film</td>
          <td>Nonton film</td>
          <td>Nonton film</td>
          <td>Nonton film</td>
        </tr>
        <tr>
          <th scope="row">15.24</th>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
          <td>shalat ashar (muslim)</td>
        </tr>
        <tr>
          <th scope="row">16.00</th>
          <td>mandi</td>
          <td>mandi</td>
          <td>mandi</td>
          <td>mandi</td>
          <td>mandi</td>
          <td>mandi</td>
          <td>mandi</td>
        </tr>
        <tr>
          <th scope="row">16.30</th>
          <td>Istirahat</td>
          <td>Istirahat</td>
          <td>menyapa tentangga</td>
          <td>menyapa tentangga</td>
          <td>menyapa tentangga</td>
          <td>menyapa tentangga</td>
          <td>menyapa tentangga</td>
        </tr>
        <tr>
          <th scope="row">17.56</th>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
          <td>shalat maghrib (muslim)</td>
        </tr>
        <tr>
          <th scope="row">18.30</th>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
          <td>Kegiatan melatih otak</td>
        </tr>
        <tr>
          <th scope="row">19.09</th>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
          <td>shalat Isya (muslim)</td>
        </tr>
        <tr>
          <th scope="row">19.30</th>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
          <td>Makan</td>
        </tr>
        <tr>
          <th scope="row">20.00</th>
          <td>Baca Berita/Artikel</td>
          <td>Scincare</td>
          <td>Mengerjakan Tugas(kuliah/sekolah)</td>
          <td>Mengerjakan Tugas(kuliah/sekolah)</td>
          <td>Mengerjakan Tugas(kuliah/sekolah)</td>
          <td>Scincare</td>
          <td>Mengerjakan Tugas(kuliah/sekolah)</td>
        </tr>
        <tr>
          <th scope="row">21.20</th>
          <td>Skincare</td>
          <td>Tidur</td>
          <td>Skincare</td>
          <td>Skincare</td>
          <td>Skincare</td>
          <td>Tidur</td>
          <td>Skincare</td>
        </tr>
        <tr>
          <th scope="row">16.00</th>
          <td>Tidur</td>
          <td>-----------</td>
          <td>Tidur</td>
          <td>Tidur</td>
          <td>Tidur</td>
          <td>-----------</td>
          <td>Tidur</td>
        </tr>
      </table>
      <br></br>
      <br></br>


      <div className="pengertian">
      <Alert color="danger">
        <h2><font face="Tentang Nanti Demo" size="24">No Insecure!!</font></h2>
        <marquee>
        <img src={gambarakhir} className="App-gambarakhir1" alt="gambar5" /><img src={gambarpertengah} className="App-gambarpertengah1" alt="gambar4" />  <img src={gambarbawah} className="App-gambarbawah1" alt="gambar3" />
        </marquee>
      </Alert>
      </div>
      <br></br>
      <br></br>
      <br></br>
    
      <div class="App-footer">
      <Alert color="orange">
      <font face="Aesthetic Violet" size="10000" color="white">Penyemangat.Yok</font>
      <br></br>
      <br></br>
      </Alert>
      </div>

</center>
</div>
</div>
    </div>
    </div>
    </header>
    </div>
    );
  }
export default App;
