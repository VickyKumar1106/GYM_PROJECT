import React from 'react'
import bd1 from '../assets/images/bd1.webp';
import bd2 from '../assets/images/bd2.webp';
import bd3 from '../assets/images/bd3.webp';

const BodyParts = () => {
  return (
    <div>
      <section class="ftco-section ftco-no-pt ftco-no-pb">
<div class="container-fluid">
<div class="row justify-content-center pb-5">
<div class="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
<span class="subheading">Our Classes</span>
<h2 class="mb-3"><span style={{color: '#FF2625'}}>Dazko</span> Workout Classes</h2>
</div>
</div>
<div class="row g-lg-2">
<div class="col-md-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
<div class="classes-wrap img d-flex align-items-end" style={{  height:'300px',
  background: `url(${bd1})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
<div class="text">
<span class="price">$100</span>
<h2><a href="#">Body Building</a></h2>
</div>
</div>
</div>
<div class="col-md-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
<div class="classes-wrap img d-flex align-items-end" style={{  height:'300px',
  background: `url(${bd2})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
<div class="text">
<span class="price">$100</span>
<h2><a href="#">Weight Lifting</a></h2>
</div>
</div>
</div>
<div class="col-md-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="300">
<div class="classes-wrap img d-flex align-items-end" style={{  height:'300px',
  background: `url(${bd3})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
<div class="text">
<span class="price">$100</span>
<h2><a href="#">Cardio</a></h2>
</div>
</div>
</div>

</div>
<div class="row mt-md-5">
<div class="col text-center">
<a href="#" class="btn-custom">View All Classes <span ><i class="fa-solid fa-arrow-right"></i></span></a>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default BodyParts