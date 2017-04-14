const { expect } = require('chai')
const resultDecorated = require('../js/pages/landing/resultDecorated')

describe('resultDecorated', () => {
  it('decorates a pets resul set', () => {
    const item = {
      id: 1,
      name: 'item name',
      email: 'item email',
      kind: 'item kind',
      breed: 'item breed',
      size: 'size',
      date: 'item date',
      location: 'item location',
      image: 'item image',
      info: 'item info'
    }
    const itemsDecorated = {
      id: item.id,
      founderName: item.name,
      founderEmail: item.email,
      petType: item.kind,
      breed: item.breed,
      size: item.size,
      foundDate: item.date,
      location: item.location,
      imageUrl: item.image,
      description: item.info,
      extraDescription: '',
      extraDescriptionHidden: '',
      showExtraInfo: false
    }

    const itemsCollection = [item]
    const decoratedPets = [itemsDecorated]

    expect(resultDecorated(itemsCollection)).to.deep.equal(decoratedPets)
  })

  it('decorates a pets resul set with extra description when info is > 90 chars', () => {
    const item = {
      id: 1,
      name: 'item name',
      email: 'item email',
      kind: 'item kind',
      breed: 'item breed',
      size: 'size',
      date: 'item date',
      location: 'item location',
      image: 'item image',
      info: 'this is a very long description so we can test the extraDescription and extraDescriptionHidden fields for decorated results'
    }
    const itemsDecorated = {
      id: item.id,
      founderName: item.name,
      founderEmail: item.email,
      petType: item.kind,
      breed: item.breed,
      size: item.size,
      foundDate: item.date,
      location: item.location,
      imageUrl: item.image,
      description: item.info,
      extraDescription: 'this is a very long description so we can test the extraDescription and extraDescriptionHi',
      extraDescriptionHidden: 'dden fields for decorated results',
      showExtraInfo: true
    }

    const itemsCollection = [item]
    const decoratedPets = [itemsDecorated]

    expect(resultDecorated(itemsCollection)).to.deep.equal(decoratedPets)
  })
})
