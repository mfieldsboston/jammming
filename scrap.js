{
  this.props.tracks.map(track => {

    <div>
      <p>{this.props.track.name}</p>
      <p>{this.props.track.artist}</p>
      <p>{this.props.track.album}</p>
    </div>
  })
}


let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
}
