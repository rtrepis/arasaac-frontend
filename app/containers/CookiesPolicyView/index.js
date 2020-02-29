import React from 'react'
import PropTypes from 'prop-types'
import View from 'components/View'
import Helmet from 'react-helmet'
import ReadMargin from 'components/ReadMargin'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { makeSelectLocale } from 'containers/LanguageProvider/selectors'
import P from 'components/P'
import A from 'components/A'
import H2 from 'components/H2'

export class CookiesPolicyView extends React.PureComponent {

  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { locale } = this.props
    return (
      <View left={true} right={true} top={1}>
        <Helmet
          title='Política de Privacidad'
          meta={[
            { name: 'description', content: 'Política de Privacidad de datos de ARASAAC' }
          ]}
        />
        <ReadMargin>
          <P>Las cookies son pequeños ficheros de texto que se almacenan en los equipos de los usuarios a través de las distintas webs que visitan.
          Son herramientas esenciales para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página
          web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida,
          se pueden utilizar para reconocer al usuario y personalizar el servicio ofrecido. </P>
          <P>
            Con la finalidad de ofrecer un mejor servicio a través de esta sede, y con el objeto de facilitar su uso, se recogen de forma automática
            los datos de conexión y navegación en ARASAAC, que entre otros:
            <ul>
              <li>Obtener estadísticas de uso: número de visitas, paises, frecuencia...</li>
              <li>Mejorar el rendimiento de la aplicación</li>
              <li>Mejorar la usabilidad de la aplicación</li>
            </ul>
          </P>

          <H2 primary={true}>Cookies de estadísticas</H2>
          <P>La página web de ARASAAC utiliza Google Analytics, un servicio de analítica web desarrollado por Google, que permite la medición y análisis de
          la navegación en las páginas web.</P>
          <P>En su navegador podrá observar varias cookies de este servicio,  se tratan de "cookies" de sesión y de análisis. Son "cookies" que tratan datos
          agregados con una finalidad estrictamente estadística. La norma obliga a obtener un consentimiento informado para su uso y se incluye la posibilidad
          de que los usuarios manifiesten su negativa sobre su utilización.</P>

          <H3>Cómo restringir, bloquear y eliminar las cookies</H3>
          <P>Para restringir, bloquear y eliminar las cookies instaladas en su equipo puede consultar:
            <ul>
              <li a href='https://support.google.com/accounts/answer/61416?hl=es' target='_blank'>Chrome</li>
              <li a href='https://support.mozilla.org/es/kb/Borrar%20cookies  ' target='_blank'>Firefox</li>
              <li a href='' target='_blank'>Internet Explorer</li>
              <li a href='' target='_blank'>Opera</li>
              <li a href='' target='_blank'>Safari </li>
            </ul>



          </P>
        </ReadMargin>
      </View>

    )
  }
}

CookiesPolicyView.propTypes = {
  locale: PropTypes.string
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
)

export default connect(
  mapStateToProps
)(CookiesPolicyView)
