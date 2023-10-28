export default function Client(props){
    return(
        props.clients.map(client => {
            return(
                <>
                    <p>{client.id}</p>
                    <p>{client.user}</p>
                    <p>{client.username}</p>
                    <p>{client.password}</p>

                </>
            )
        })
    )
}