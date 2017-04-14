const extraDescription = (info) => {
  if (info.length > 90) {
    return info.slice(0, 90)
  } else {
    return ''
  }
}

const extraDescriptionHidden = (info) => {
  if (info.length > 90) {
    return info.slice(90, 1000)
  } else {
    return ''
  }
}

const showExtraInfo = (info) => {
  return info.length > 90
}

const resultDecorated = (itemsCollection) => {
  const newColection = []
  itemsCollection.forEach(function (item) {
    newColection.push({
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
      extraDescription: extraDescription(item.info),
      extraDescriptionHidden: extraDescriptionHidden(item.info),
      showExtraInfo: showExtraInfo(item.info)
    })
  })

  return newColection
}

module.exports = resultDecorated
