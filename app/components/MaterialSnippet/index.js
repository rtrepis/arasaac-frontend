import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Map, List } from 'immutable'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { lightGreen400, lightGreen800 } from 'material-ui/styles/colors'
import ActivityIcon from 'material-ui/svg-icons/action/input'
import AreaIcon from 'material-ui/svg-icons/social/school'
import ReactSlidy from 'react-slidy'
import '!!style-loader!css-loader!./index.css'
import ReadMore from 'components/ReadMore'
import H2 from 'components/H2'
import Ribbon from 'components/Ribbon'
import activity from 'data/activity'
import area from 'data/area'
import Item from './Item'

const styles = {
  chip: {
    margin: '4px'
  },
  labelChip: {
    fontSize: '0.7rem',
    paddingLeft: '8px',
    paddingRight: '8px',
    lineHeight: '1.8rem'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  snippetText: {
    flexGrow: 3,
    width: '600px',
    padding: '1rem'
  },
  snippetImg: {
    flexGrow: 1,
    width: '300px'
  },
  snippet: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    width: '100%'
  }
}

/*
function SliderLeftButton(props) {
  const style = {
    opacity: 0.6,
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(1rem, -50%)',
    zIndex: 10
  }
  if (props.currentSlide===0) return null
  return <FloatingActionButton mini={true} onClick={props.onClick} style={style} className={'props.className'} ><LeftIcon /></FloatingActionButton>
}


function SliderRightButton(props) {
  const style = {
    opacity: 0.6,
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(-1rem, -50%)'
  }
  if (props.currentSlide>=props.slideCount -1) return null
  return <FloatingActionButton mini={true} onClick={props.onClick} style={style} className={props.className} ><RightIcon /></FloatingActionButton>
}

*/

export class MaterialSnippet extends PureComponent {

// nextStatus 0 to desactivate the filter, 1 for activating
  handleTouchTap = (filterName, filterItem, nextStatus, e) => {
    e.preventDefault()
    e.stopPropagation()
    // we get all the values from the filter
    const { setFilterItems, filtersMap } = this.props
    const filterItems = filtersMap.get(filterName).toArray()
    if (!nextStatus) {
      const i = filterItems.indexOf(filterItem)
      if (i !== -1) filterItems.splice(i, 1)
      setFilterItems(filterName, List(filterItems))
    } else {
      filterItems.push(filterItem)
      setFilterItems(filterName, List(filterItems))
    }
    // setFilterItems()
    return false
  }




  /* How we show messages...*/
  /* catalan: ca, va, es, en, ...*/
  /* br: pt, br, en, ....*/
  /* eu: eu, es, en, ....*/
  /* ga: ga, es, en, .....*/

  render() {
    const { material, locale, filtersMap, showLabels } = this.props

    const activityTags = material.activity.map((id) => {
      if (filtersMap.get('activity').includes(id)) {
        return (
          <Chip
            backgroundColor={lightGreen400}
            style={styles.chip}
            key={id}
            labelStyle={styles.labelChip}
            onClick={(e) => this.handleTouchTap('activity', id, 0, e)}
          >
            <Avatar color={'white'} size={30} backgroundColor={lightGreen800} icon={<ActivityIcon />} />
            {activity[id]}
          </Chip>
        )
      }
      /* if not in filter, return icons without backgroundColor */
      return (
        <Chip
          style={styles.chip}
          key={id}
          onClick={(e) => this.handleTouchTap('activity', id, 1, e)}
          labelStyle={styles.labelChip}
        >
          <Avatar color='#444' size={30} icon={<ActivityIcon />} />
          {activity[id]}
        </Chip>
      )
    })
    const areaTags = material.area.map((id) => {
      if (filtersMap.get('area').includes(id)) {
        return (
          <Chip
            backgroundColor={lightGreen400}
            style={styles.chip}
            key={id}
            onClick={(e) => this.handleTouchTap('area', id, 0, e)}
            labelStyle={styles.labelChip}
          >
            <Avatar color={'white'} size={15} backgroundColor={lightGreen800} icon={<AreaIcon iconStyle={{width: '10px', height: '10px'}} />} />
            {area[id]}
          </Chip>
        )
      }
      /* if not in filter, return icons without backgroundColor */
      return (
        <Chip
          style={styles.chip}
          key={id}
          onClick={(e) => this.handleTouchTap('area', id, 1, e)}
          labelStyle={styles.labelChip}
        >
          <Avatar color='#444' size={15} icon={<AreaIcon />} />
          {area[id]}
        </Chip>
      )
    })
    // const languageTags = material.translations.map((translation) => <Chip style={styles.chip} key={translation.language}><Avatar color='#444' icon={<LanguageIcon />} />{language[translation.language]}</Chip>)
    // languageTags.push(<Chip style={styles.chip} key={material.language}><Avatar color='#222' icon={<LanguageIcon />} />{language[material.language]}</Chip>)
    return (
      <Item url={`/materials/${material.idMaterial}`}>
        <Ribbon />

        <div style={styles.snippet}>
          <div style={styles.snippetImg}>
            <div style={{display: 'block'}}>
              <ReactSlidy dynamicContent infinite={false}>
                {
                  material.images.length ?
                    material.images.map((image, key) => (
                      <img key={key} src={`//static.arasaac.org/${material.idMaterial}/screenshots/${image}`} alt={`${material.title}`} />
                    ))
                  : <img src={'//static.arasaac.org/noimage.png'} alt='Not available' />
                }
              </ReactSlidy>
            </div>
          </div>
          <div style={styles.snippetText}>
            <H2 primary ucase>{material.title}</H2>
            <ReadMore>
              {material.desc}
            </ReadMore>
            {showLabels ?
              <div style={styles.wrapper}> {activityTags} {areaTags} </div>
              : ''
            }
          </div>
        </div>
      </Item>

    )
  }
}

MaterialSnippet.propTypes = {
  // onClick: PropTypes.func.isRequired,
  material: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  filtersMap: PropTypes.instanceOf(Map).isRequired,
  setFilterItems: PropTypes.func.isRequired,
  showLabels: PropTypes.bool.isRequired
}

export default MaterialSnippet
