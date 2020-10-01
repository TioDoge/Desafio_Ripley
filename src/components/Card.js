import React from 'react'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Titulo</h1>
                            <p>Inserte texto para el titulo</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card