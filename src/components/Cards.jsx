import React from 'react'

const Cards = (card, index) => {

    const dataProducts = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            time: "25 Oct 2023",
            description: "lorem jdiosfjdi oojsoidjfijsdjf osof oisdofjsdf jsdfisjfiosofodfff  ddddfwerfwerf",
            link: "https://www.google.com"
        },
        {
            id:2,
            img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Emprendimientos',
            description: "lorem jdiosfjdi oojsoidjfijsdjf osof oisdofjsdf jsdfisjfiosofodfff  ddddfwerfwerf",
            link: "https://www.google.com"
        },
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Empresas',
            description: "lorem jdiosfjdi oojsoidjfijsdjf osof oisdofjsdf jsdfisjfiosofodfff  ddddfwerfwerf",
            link: "https://www.google.com"
        },
    ];
  return (

        <Row xs={1}
            md={3}
            className="g-4">
            {
            Array.from({length: 3}).map((_, idx) => (
                <Col key={idx}>
                    
                    <Card>
                        <Card.Img variant="top" src={Card1}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Persplaceat labore, corporis, laboriosam aperiam ratione error illo!</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        } </Row>
  )
}

export default Cards;