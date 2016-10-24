const React = require('react')
// require('missing_pet/MissingPet')

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap'

const MissingPet = (props) => (
  <div className='pet'>
    <Card>
      <CardBlock className="pet-card">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardTitle>{props.pet}, {props.breading}, {props.size}</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>{props.description}</CardText>
      </CardBlock>
    </Card>
  </div>
)

const { string } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired
}

module.exports = MissingPet
