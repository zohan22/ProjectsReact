import './ShoeCard.css';

const ShoeCard = ({ data }) => {
    return (
        <div className="shoeCard">
            <header className='shoeCard-header'>
                <img 
                className='shoeCard-header-img-brand'
                src={data.logo}
                alt={`Logo de la marca ${data.marca}`}
                />
                <img 
                className='shoeCard-header-img'
                src={data.imagenTenis} 
                alt={`Tennis marca ${data.marca}`}/>
            </header>
            <section className='shoeCard-body'>
                <div className='shoeCard-body-info'>
                    <span className='shoeCard-brand'>{data.marca}</span>
                    <h1 className='shoeCard-model'>{data.modelo}</h1>
                </div>
                <p className='shoeCard-description'>{data.descripcion}</p>
                <button className='shoeCard-button'>
                    <span>{data.precio}</span> <hr/> <span>Add to cart</span>
                </button>
            </section>
        </div>
    )
}

export default ShoeCard;