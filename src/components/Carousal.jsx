import React from 'react'
import './Carousal.css';
import CarousalItem from './CarousalItem';

function Carousal() {
  return (
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <CarousalItem name="Bitcoin" url="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
      {/* <img src="https://media.istockphoto.com/photos/metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-picture-id1348369701?b=1&k=20&m=1348369701&s=170667a&w=0&h=W3uRsa9srlRlfeVfMBxAUpgucFhH2Iqc42kJ1HBwSVg=" class="d-block w-100" alt="..."/> */}
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <CarousalItem name="Ethereum" url="https://images.unsplash.com/photo-1590286162167-70fb467846ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      {/* <img src="https://miro.medium.com/max/1400/1*Q126mgjvk0az7ZhxLznK9Q.png" class="d-block w-100" alt="..."/> */}
    </div>
    <div class="carousel-item" >
      <CarousalItem name="Tether" url="https://images.theconversation.com/files/407225/original/file-20210618-18-jv3gso.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
      {/* <img src="https://magazine.playstock.net/wp-content/uploads/2021/08/city-5848267_1280-1-1024x576.jpg" class="d-block w-100" alt="..."/> */}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousal
