import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import queryString from 'query-string'
import H2 from 'components/H2'
import H3 from 'components/H3'
import ShareBar from 'components/ShareBar'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import Person from 'material-ui/svg-icons/social/person'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { PICTOGRAMS_URL, LOCUTIONS_URL, API_ROOT } from 'services/config'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import SoundPlayer from 'components/SoundPlayer'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Toggle from 'material-ui/Toggle'
import { keywordSelector } from 'utils'
import { TwitterPicker } from 'react-color'
import DownloadIcon from 'material-ui/svg-icons/file/file-download'
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'
import { Stage, Layer, Rect } from 'react-konva'
import Konva from 'konva'
import P from 'components/P'
import styles from './styles'
import Caption from './Caption'
import Img from './Img'
import ToggleDropDown from './ToggleDropdown'
import ConditionalPaper from './ConditionalPaper'
import messages from './messages'

class Pictogram extends Component {
  state = {
    language: this.props.locale,
    plural: false,
    color: true,
    backgroundColor: '',
    action: '', // for verbs: future, past, or present = ''
    identifier: '',
    text: false,
    peopleAppearance: false,
    identifierToggle: false,
    hair: '',
    skin: '',
    showBgColor: false,
    verbalTense: false,
    showVerbalTense: false,
    showIdentifier: false,
    showText: false,
    showPeopleAppearance: false,
    openMenu: false,
    url: '',
    downloadUrl: ''
  }

  onTogglePicker = () =>
    this.setState({ pickerVisible: !this.state.pickerVisible })

  buildOptionsRequest = () => {
    const { pictogram } = this.props
    const {
      color,
      plural,
      backgroundColor,
      bgColor,
      hair,
      skin,
      action,
      identifier,
      identifierPosition
    } = this.state
    const idPictogram = pictogram.get('idPictogram')
    const parameters = { color, plural }
    // only if active hair, skin, backgroundColor we add it to the request. Otherwise we take default image values
    if (bgColor) parameters.backgroundColor = backgroundColor
    if (hair) parameters.hair = hair
    if (skin) parameters.skin = skin
    if (action) parameters.action = action
    if (identifier) parameters.identifier = identifier
    if (identifierPosition) parameters.identifierPosition = identifierPosition

    const urlParameters = Object.entries(parameters)
      .map((param) => param.join('='))
      .join('&')
    const endPoint = `${API_ROOT}/pictograms/${idPictogram}?${urlParameters}&url=true`
    const downloadUrl = `${API_ROOT}/pictograms/${idPictogram}?${urlParameters}&url=false&download=true`
    fetch(endPoint)
      .then((data) => data.json())
      .then((data) => this.setState({ url: data.image, downloadUrl }))
  }

  handleColor = (event, color) => {
    this.setState({ color }, () => this.buildOptionsRequest())
  }

  handlePlural = (event, plural) => {
    this.setState({ plural }, () => this.buildOptionsRequest())
  }

  handleColorChange = ({ hex }) => {
    this.setState({ backgroundColor: hex.replace('#', '%23') }, () =>
      this.buildOptionsRequest()
    )
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value
    })
  }

  // bgColor means isInputChecked
  handlebgColor = (bgColor) => {
    if (bgColor) this.setState({ bgColor, showBgColor: !this.state.bgColor })
    else {
      this.setState(
        {
          bgColor,
          showBgColor: !this.state.bgColor,
          backgroundColor: '%23FFF'
        },
        () => this.buildOptionsRequest()
      )
    }
  }

  // when clicking we show/hide selectors
  handlebgColorClick = () => {
    this.setState({
      showBgColor: !this.state.showBgColor
    })
  }

  handleHairChange = (event, index, hair) => {
    this.setState({ hair }, () => this.buildOptionsRequest())
  }
  handleSkinChange = (event, index, skin) => {
    this.setState({ skin }, () => this.buildOptionsRequest())
  }

  handleVerbalTense = (verbalTense) => {
    this.setState({ verbalTense, showVerbalTense: verbalTense })
  }

  handleVerbalTenseClick = () => {
    this.setState({
      showVerbalTense: !this.state.showVerbalTense
    })
  }

  handleVerbalTenseChange = (event, action) => {
    this.setState({ action }, () => this.buildOptionsRequest())
  }

  handleIdentifier = (identifierToggle) => {
    this.setState({ identifierToggle, showIdentifier: identifierToggle })
  }

  handleIdentifierClick = () => {
    this.setState({
      showIdentifier: !this.state.showIdentifier
    })
  }

  handleIdentifierChange = (event, index, identifier) => {
    this.setState({ identifier }, () => this.buildOptionsRequest())
  }

  handleIdentifierPositionChange = (event, index, identifierPosition) => {
    if (this.state.identifier) {
      this.setState({ identifierPosition }, () => this.buildOptionsRequest())
    }
    this.setState({ identifierPosition })
  }

  handlePeopleAppearance = (peopleAppearance) => {
    if (peopleAppearance) {
      this.setState({
        peopleAppearance,
        showPeopleAppearance: peopleAppearance
      })
    } else {
      this.setState(
        {
          hair: '',
          skin: '',
          peopleAppearance,
          showPeopleAppearance: peopleAppearance
        },
        () => this.buildOptionsRequest()
      )
    }
  }

  handlePeopleAppearanceClick = () => {
    this.setState({
      showPeopleAppearance: !this.state.showPeopleAppearance
    })
  }

  handleOpenMenu = () => {
    const { pictogram } = this.props
    const { color, plural } = this.state
    const idPictogram = pictogram.get('idPictogram')
    const urlParameters = Object.entries({ color, plural })
      .map((param) => param.join('='))
      .join('&')
    const endPoint = `${API_ROOT}/pictograms/${idPictogram}?${urlParameters}&url=false&download=true`
    fetch(endPoint)
  }

  handleExportClick = () => {
    const imageBase64 = this.stageRef.getStage().toDataURL()
    console.log(imageBase64)

    const url = imageBase64.replace(
      /^data:image\/[^;]+/,
      'data:application/octet-stream'
    )
    // window.open(url, 'test')

    // to convert into image file and send it to the server, but better in the server side:
    // https://gist.github.com/madhums/e749dca107e26d72b64d

    /*
    const block = imageBase64.split(';')
    // Get the content type of the image
    const contentType = block[0].split(':')[1] // In this case "image/gif"
    // get the real base64 content of the file
    const realData = block[1].split(',')[1] // In this case "R0lGODlhPQBEAPeoAJosM...."

    // Convert it to a blob to upload
    return b64toBlob(realData, contentType)
    */
  }

  render() {
    const { pictogram, searchText, muiTheme, intl, locale } = this.props
    const { formatMessage } = intl
    const {
      bgColor,
      showBgColor,
      identifierToggle,
      showIdentifier,
      verbalTense,
      showVerbalTense,
      action,
      peopleAppearance,
      showPeopleAppearance,
      url
    } = this.state
    const backgroundColor = this.state.backgroundColor.replace('%23', '')
    const keywords = pictogram.get('keywords')
    const idPictogram = pictogram.get('idPictogram')
    // first time downloadUrl is default png
    const downloadUrl =
      this.state.downloadUrl ||
      `${API_ROOT}/pictograms/${idPictogram}?&url=false&download=true`
    const { keyword, idLocution } = keywordSelector(searchText, keywords.toJS())
    const authors = pictogram.get('authors')
    let soundPlayer = ''
    if (idLocution) {
      const streamUrl = `${LOCUTIONS_URL}/${locale}/${idLocution}`
      soundPlayer = (
        <SoundPlayer
          crossOrigin='anonymous'
          streamUrl={streamUrl}
          preloadType='metadata'
          showProgress={false}
          showTimer={false}
        />
      )
    }
    // const pictoFile = `/${idPictogram}_500.png`
    const pictoFile = url || `${PICTOGRAMS_URL}/${idPictogram}_500.png`
    return (
      <div>
        <div style={styles.wrapper}>
          <div style={styles.pictoWrapper}>
            <ConditionalPaper>
              <div
                style={{
                  backgroundColor: muiTheme.palette.accent2Color,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {soundPlayer}
                <H2 center={true} primary ucase noMargin>
                  {keyword}
                </H2>
              </div>
              <Stage
                width={500}
                height={500}
                ref={(node) => {
                  this.stageRef = node
                }}
              >
                <Layer>
                  <Img src={pictoFile} /* alt={'alt'} style={styles.picto} */ />
                </Layer>
                <Layer>
                  <Caption text='prueba' />
                </Layer>
              </Stage>

              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  backgroundColor: muiTheme.palette.accent2Color
                }}
              >
                <RaisedButton
                  label={<FormattedMessage {...messages.addFavoriteLabel} />}
                  secondary={true}
                  style={styles.button}
                  icon={<FavoriteIcon />}
                />
                {/* <a href={downloadUrl}> */}
                <RaisedButton
                  onClick={this.handleExportClick}
                  label={<FormattedMessage {...messages.downloadLabel} />}
                  primary={true}
                  style={styles.button}
                  icon={<DownloadIcon />}
                />
                {/* </a>*/}
              </div>
            </ConditionalPaper>
          </div>
          <div style={styles.desc}>
            <H3 primary={true}>
              {<FormattedMessage {...messages.modifyPicto} />}
            </H3>
            <Divider />
            <P>Common options</P>
            <div style={styles.optionsWrapper}>
              <Toggle
                label={<FormattedMessage {...messages.plural} />}
                labelPosition='right'
                onToggle={this.handlePlural}
                style={styles.toggle}
              />
              <Toggle
                label={<FormattedMessage {...messages.color} />}
                labelPosition='right'
                onToggle={this.handleColor}
                defaultToggled={true}
                style={styles.toggle}
              />

              <ToggleDropDown
                toggled={bgColor}
                onToggle={this.handlebgColor}
                label={formatMessage(messages.backgroundColor)}
                style={styles.toggle}
                showOptions={showBgColor}
                onClick={this.handlebgColorClick}
              />
              {showBgColor ? (
                <div style={styles.optionBox}>
                  <TwitterPicker
                    triangle='hide'
                    color={backgroundColor}
                    onChangeComplete={this.handleColorChange}
                  />
                </div>
              ) : (
                ''
              )}
              <ToggleDropDown
                toggled={verbalTense}
                onToggle={this.handleVerbalTense}
                label={formatMessage(messages.verbalTense)}
                style={styles.toggle}
                showOptions={showVerbalTense}
                onClick={this.handleVerbalTenseClick}
              />
              {showVerbalTense ? (
                <div style={styles.optionBox}>
                  <RadioButtonGroup
                    name='verbalTense'
                    // defaultSelected='present'
                    valueSelected={action}
                    onChange={this.handleVerbalTenseChange}
                  >
                    <RadioButton
                      value='past'
                      label={<FormattedMessage {...messages.past} />}
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value=''
                      label={<FormattedMessage {...messages.present} />}
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='future'
                      label={<FormattedMessage {...messages.future} />}
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                </div>
              ) : (
                ''
              )}
            </div>

            <P>Advanced options</P>
            <div style={styles.optionsWrapper}>
              <ToggleDropDown
                toggled={identifierToggle}
                onToggle={this.handleIdentifier}
                label={formatMessage(messages.identifier)}
                style={styles.toggle}
                showOptions={showIdentifier}
                onClick={this.handleIdentifierClick}
              />
              {showIdentifier ? (
                <div style={styles.optionBox}>
                  <SelectField
                    style={{ marginRight: '40px' }}
                    floatingLabelText={formatMessage(messages.identifier)}
                    value={this.state.identifier}
                    onChange={this.handleIdentifierChange}
                  >
                    <MenuItem value={null} primaryText='' />
                    <MenuItem
                      value='classroom'
                      primaryText={formatMessage(messages.classroom)}
                    />
                    <MenuItem
                      value='health'
                      primaryText={formatMessage(messages.health)}
                    />
                    <MenuItem
                      value='library'
                      primaryText={formatMessage(messages.library)}
                    />
                    <MenuItem
                      value='office'
                      primaryText={formatMessage(messages.office)}
                    />
                  </SelectField>
                  <SelectField
                    style={{ marginRight: '40px' }}
                    floatingLabelText={formatMessage(
                      messages.identifierPosition
                    )}
                    value={this.state.identifierPosition}
                    onChange={this.handleIdentifierPositionChange}
                  >
                    <MenuItem value={null} primaryText='' />
                    <MenuItem
                      value='left'
                      primaryText={formatMessage(messages.left)}
                    />
                    <MenuItem
                      value='right'
                      primaryText={formatMessage(messages.right)}
                    />
                  </SelectField>
                </div>
              ) : (
                ''
              )}

              <ToggleDropDown
                toggled={peopleAppearance}
                onToggle={this.handlePeopleAppearance}
                label={formatMessage(messages.peopleAppearance)}
                style={styles.toggle}
                showOptions={showPeopleAppearance}
                onClick={this.handlePeopleAppearanceClick}
              />
              {showPeopleAppearance ? (
                <div style={styles.optionBox}>
                  <SelectField
                    style={{ marginRight: '40px' }}
                    floatingLabelText={formatMessage(messages.skinColor)}
                    value={this.state.skin}
                    onChange={this.handleSkinChange}
                  >
                    <MenuItem value={null} primaryText='' />
                    <MenuItem
                      value='white'
                      primaryText={formatMessage(messages.whiteSkin)}
                    />
                    <MenuItem
                      value='black'
                      primaryText={formatMessage(messages.blackSkin)}
                    />
                    <MenuItem
                      value='assian'
                      primaryText={formatMessage(messages.assianSkin)}
                    />
                    <MenuItem
                      value='mulatto'
                      primaryText={formatMessage(messages.mulattoSkin)}
                    />
                    <MenuItem
                      value='aztec'
                      primaryText={formatMessage(messages.aztecSkin)}
                    />
                  </SelectField>
                  <SelectField
                    floatingLabelText={formatMessage(messages.hairColor)}
                    value={this.state.hair}
                    onChange={this.handleHairChange}
                  >
                    <MenuItem value={null} primaryText='' />
                    <MenuItem
                      value='blonde'
                      primaryText={formatMessage(messages.blondeHair)}
                    />
                    <MenuItem
                      value='brown'
                      primaryText={formatMessage(messages.brownHair)}
                    />
                    <MenuItem
                      value='darkBrown'
                      primaryText={formatMessage(messages.darkBrownHair)}
                    />
                    <MenuItem
                      value='gray'
                      primaryText={formatMessage(messages.grayHair)}
                    />
                    <MenuItem
                      value='darkGray'
                      primaryText={formatMessage(messages.darkGrayHair)}
                    />
                    <MenuItem
                      value='red'
                      primaryText={formatMessage(messages.redHair)}
                    />
                    <MenuItem
                      value='black'
                      primaryText={formatMessage(messages.blackHair)}
                    />
                  </SelectField>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <H3 primary>{<FormattedMessage {...messages.description} />}</H3>
        <Divider />
        {keywords.valueSeq().map((keyword) => (
          <div key={keyword}>
            <P important={true}>{keyword.get('keyword')}</P>
            <P>
              {<FormattedMessage {...messages.meaning} />}:{' '}
              {keyword.get('meaning')}
            </P>
          </div>
        ))}

        <H3 primary={true}>{<FormattedMessage {...messages.languages} />}</H3>
        <Divider />
        <P>{<FormattedMessage {...messages.changePictoLanguage} />}</P>
        <H3 primary={true}>{<FormattedMessage {...messages.authors} />}</H3>
        <Divider />
        {authors.valueSeq().map((author) => (
          <P key={author.get('id')}>
            <FlatButton
              key={author.get('id')}
              label={author.get('name')}
              labelPosition='after'
              icon={<Person />}
              href={`http://static.arasaac.org/${author}`}
            />
          </P>
        ))}
        <H3 primary={true}>
          {<FormattedMessage {...messages.sharePictogram} />}
        </H3>
        <Divider />
        <p>
          <ShareBar
            shareUrl={window.location.href}
            title={'title'}
            image={'http://www.arasaac.org/images/arasaac_titulo.png'}
          />
        </p>
      </div>
    )
  }
}

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  }
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    })
  }
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={450}
        height={450}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    )
  }
}

Pictogram.propTypes = {
  // onClick: PropTypes.func.isRequired,
  pictogram: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  muiTheme: PropTypes.object.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(muiThemeable()(Pictogram))

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || ''
  sliceSize = sliceSize || 512

  const byteCharacters = atob(b64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  const blob = new Blob(byteArrays, { type: contentType })
  return blob
}
