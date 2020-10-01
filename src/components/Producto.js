import React from 'react'

//Json con la informacion del producto
import Json from './producto.json'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'

//Plugin para slider con las imagenes del producto
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import Wom from '../img/wom.png'

class Producto extends React.Component{
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8"><h4 className="text-center">{Json.name}</h4></div>
                <div className="col-sm-2"></div>
            </div>

            <div className="row">
                <div className="col-sm-8">
                <OwlCarousel
                    className="owl-theme"
                    items="1"
                    autoplay
                    nav
                    dots
                    loop
                    >
                        <div className="item">
                            <img src={Json.images[0]} className="w-75"/>
                        </div>
                        <div className="item">
                            <img src={Json.images[1]} className="w-75"/>
                        </div>
                        <div className="item">
                            <img src={Json.images[2]} className="w-75"/>
                        </div>
                        <div className="item">
                            <img src={Json.images[3]} className="w-75"/>
                        </div>
                        <div className="item">
                            <img src={Json.images[4]} className="w-75"/>
                        </div>
                </OwlCarousel>
                </div>
                <div className="col-sm-4 bg-light border border-dark">

                    <div className="col-sm-12" id="precio">
                        <div className="col-sm-12"><h4>{Json.shortDescription}</h4><img src={Wom} width="30px"/></div>
                        <div className="col-sm-12"><p>Precio Normal: <strike>{Json.prices['formattedOfferPrice']}</strike></p></div>
                        <div className="col-sm-12"><p>Precio Internet: {Json.prices['formattedListPrice']}</p></div>
                        <div className="col-sm-12" id="tarjeta"><p>Tarjeta Ripley: {Json.prices['formattedCardPrice']}</p></div>
                        <div className="col-sm-12"><p>Acumulas {Json.prices['ripleyPuntos']} puntos</p></div>
                    </div>

                    <div className="col-sm-12" id="garantia">
                        <div className="col-sm-12"><h4>Puedes incluir:</h4></div>
                        <div className="col-sm-12">{Json.warranties['0'].shortDescription}</div>
                        <div className="col-sm-12">A un precio de {Json.warranties['0'].Price['0'].formattedPriceValue}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Producto