/**
 *
 * LanguageSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { languages } from 'utils/index'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

const LanguageSelector = ({
  onChange,
  intl,
  value,
  shortOption,
  showToolTip
}) => {
  const { formatMessage } = intl
  const handleChange = (event, index, value) => {
    onChange(value)
  }

  return (
    <SelectField
      style={{ textAlign: 'left', width: '330px', maxWidth: '98%' }}
      maxHeight={400}
      value={value}
      onChange={handleChange}
      floatingLabelText={showToolTip && 'Choose your language'}
    >
      {languages.map((language) =>
        shortOption ? (
          <MenuItem
            key={language.code}
            value={language.code}
            primaryText={formatMessage(messages[language.code])}
          />
        ) : (
          <MenuItem
            key={language.code}
            value={language.code}
            primaryText={`${language.text} - ${formatMessage(
              messages[language.code]
            )}`}
          />
        )
      )}
    </SelectField>
  )
}

LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shortOption: PropTypes.bool,
  showToolTip: PropTypes.bool
}

export default injectIntl(LanguageSelector)
