import './MissingPet.scss'

const React = require('react')
const { Link } = require('react-router')

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap'

const MissingPet = (props) => (
  <Link to={`/details/${props.id}`}>
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
  </Link>
)

const { string } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
