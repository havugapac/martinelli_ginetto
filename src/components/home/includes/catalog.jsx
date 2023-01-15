
export default function Catalog(props) {

    var {image,description,title}=props

    return (

        <div style={{ height: 500, display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', opacity: 1, height: 500, width: '100%', position: 'absolute', backgroundImage: "url('"+image+"')",backgroundRepeat:'no-repeat',backgroundSize:'cover' }} />
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column' }}>
                <p className="catalog-title">{title}</p>
                <div className='catalog-line' />
                <p className="catalog-desc">{description} </p>
            </div>
        </div>

    )
}