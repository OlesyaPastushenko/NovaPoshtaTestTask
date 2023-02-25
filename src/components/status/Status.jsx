import './status.css'
export default function Status ({status, error}) {
    console.log(error)
    return(
        <div className='statusWrap'>
            <p className='warning st'>{error}</p>
            <p className='h3'>Статус відправлення: <span className='ordinary'>{status?.Status?.toLowerCase()}</span></p>
            <p className='h3'>Відправлено: <span className='ordinary'>{status?.SenderAddress?.toLowerCase()}</span></p>
            <p className='h3'>Отримано: <span className='ordinary'>{status?.RecipientAddress?.toLowerCase()}</span></p>
        </div>
    )
}