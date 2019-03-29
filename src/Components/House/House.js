import React from 'react';



export default function House(props) {
    const house = props.houses.map((element, id) => {
        return (
            <div className="box" key={element.id}>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{element.name}</strong> <small>{element.address}</small> <small>{element.city}</small> <small>{element.state}</small> <small>{element.zip}</small>
                        </p>
                        <figure class="image is-128x128">
                            <img src={element.img} alt='' />
                        </figure>
                        <p>
                            Monthly Mortgage: {element.mortgage}
                        </p>
                        <p>
                            Desired Rent: {element.rent}
                        </p>
                        <div className="field is-group buttons are-small">
                            <button className="button is-danger is-outlined"
                                onClick={() => props.remove(element.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="container">
            {house}
        </div>
    )
}