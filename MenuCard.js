import React from 'react'
import './MenuCart.css';
const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
  <>
    <div className='main_container'>
   
    <div className='sliderBox'>
    <div class="alert alert-info" >
    <h6>Related category</h6>  </div>
    <h5>Parasetamol tablet</h5>
    <h5>Parasetamol syrup</h5>
    <h5>Parasetamol powder</h5>

    <div class="alert alert-primary">
    <h5>Related brand</h5>
    </div>
    <h5>Cipmol Parasetamol</h5>
    <h5>Pandal Parasetamol tablet</h5>
    <h5>Combilflem</h5>
    <h5>Crocin tablet</h5>
    <h5>Despirin</h5>

    <div class="alert alert-dark">
    <h5>Buisness type</h5> 
    </div>
    <h5>Wholeseler</h5>
    <h5>Manufactruer</h5>
    <h5>Retailer</h5>
    <h5>Exports</h5>

    <div class="alert alert-dark" >
    <h4>Strenghts</h4> 
    </div>
    <div class="alert alert-info" role="alert">
    <h5>500mg</h5> 
    </div>
    <h4>650mg</h4>

    <div class="alert alert-dark" role="alert">
    <h4>Manufactruer</h4> 
    </div>
    <h5>Intas phasmectual Limited</h5>
    <h6>Intas phasmectual Limited</h6>
    <h6>Intas phasmectual Limited</h6>

 
 
    </div>
    
    <div className='cardBox'>
    
    <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          {/* const { id, name, category, image, description } = curElem; */}
          return (
            <>
           
              <div className="card-container" key={curElem.id}>
              <img src={curElem.Images} alt="image" className="card-media" />

                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle" >{curElem.id}</span>
                    <span className="card-author subtle"> {curElem.category}</span>
                    <h2 className="card-title"> {curElem.name} </h2>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={Image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Contact Supplier</span>
                </div>
              </div>
            </>
          );
        
        })}
      </section>
      </div>
      </div>
 </>
  );
};

          
export default MenuCard;
