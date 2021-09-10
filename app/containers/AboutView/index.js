import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import P from 'components/P'
import H2 from 'components/H2'
import View from 'components/View'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { IMAGES_URL } from 'services/config'
import AuthorSnippet from 'components/AuthorSnippet'
import ReadMargin from 'components/ReadMargin'
import messages from './messages'
const Masonry = require('react-masonry-component')
const masonryOptions = {
  transitionDuration: '1s'
}
// import PropTypes from 'prop-types'
//www.facebook.com/saracachanm
https: const authors = [
  //desc value is taken as react-intl key in AuthorSnippet
  {
    name: 'Sara Cachán',
    imageSource: `${IMAGES_URL}/team/sara-cachan-320.png`,
    desc: 'coordinatorFemale',
    facebook: 'https://www.facebook.com/saracachanm/',
    startYear: 2021,
    endYear: '...'
  },
  {
    name: 'David Romero',
    imageSource: `${IMAGES_URL}/team/david-romero-320.jpg`,
    desc: 'coordinator',
    facebook: 'https://www.facebook.com/david.romerocorral',
    startYear: 2007,
    endYear: '...',
    notes: ''
  },
  {
    name: 'José Manuel Marcos',
    imageSource: `${IMAGES_URL}/team/jose-manuel-marco-320.jpg`,
    desc: 'coordinator',
    facebook: 'https://www.facebook.com/josemanuelmarcosrodrigo',
    startYear: 2007,
    endYear: 2021,
    notes: 'jmNotes'
  },
  {
    name: 'Juan Daniel Burró',
    imageSource: `${IMAGES_URL}/team/juanda-320.jpg`,
    desc: 'developer',
    github: 'https://github.com/juanda99',
    startYear: 2014,
    endYear: '...'
  },
  {
    name: 'Luis Miguel Morillas',
    imageSource: `${IMAGES_URL}/team/lmorillas-320.jpg`,
    desc: 'developer',
    github: 'https://github.com/lmorillas',
    startYear: 2014,
    endYear: 2021,
    notes: 'lmNotes'
  }
]

const styles = {
  masonry: {
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 2,
    justifyContent: 'space-around'
  }
}
class AboutView extends Component {
  state = {
    lat: 41.66747,
    lng: -0.89407,
    zoom: 3
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <View left={true} right={true}>
        <ReadMargin>
          <H2 primary={true}>
            {<FormattedMessage {...messages.whatIsArasaac} />}
          </H2>
          <P>{<FormattedMessage {...messages.whatArasaacOffers} />}</P>
          <P>{<FormattedMessage {...messages.fundedBy} />}</P>
          <H2 primary={true}>
            {<FormattedMessage {...messages.whereWeAre} />}
          </H2>
        </ReadMargin>

        <Map
          center={position}
          zoom={this.state.zoom}
          style={{ height: '400px' }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div>
                <img
                  width="150px"
                  src={`${IMAGES_URL}/arasaac-logo.png`}
                  alt="Screenshot"
                />
                <P>
                  <strong>
                    Centro Aragonés para la Comunicación Aumentativa y
                    Alternativa - ARASAAC
                  </strong>
                  <br />
                  Andador Pilar Cuartero Molinero, 1, 50018 Zaragoza
                  <br /> España (Spain)
                </P>
              </div>
            </Popup>
          </Marker>
        </Map>
        <ReadMargin>
          <P>{<FormattedMessage {...messages.addressInfo} />}</P>
          <P>
            <strong>
              Centro Aragonés para la Comunicación Aumentativa y Alternativa -
              ARASAAC
            </strong>
            <br />
            Andador Pilar Cuartero Molinero, 1, 50018 Zaragoza
            <br /> España (Spain)
          </P>

          <H2 primary={true}>
            {<FormattedMessage {...messages.arasaacTeam} />}
          </H2>
          <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            style={styles.masonry}
          >
            {authors.map(author => (
              <AuthorSnippet key={author.name} author={author} />
            ))}
          </Masonry>
        </ReadMargin>
      </View>
    )
  }
}

export default AboutView
