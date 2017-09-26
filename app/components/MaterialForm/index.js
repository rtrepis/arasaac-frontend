/**
*
* MaterialForm
*
*/

import React from 'react'
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form/immutable'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { FormattedMessage } from 'react-intl'
import { SelectField } from 'redux-form-material-ui'
import H3 from 'components/H3'
import RenderAuthors from './RenderAuthors'
import RenderDropzoneInput from './RenderDropzoneInput'
import RenderChip from './RenderChip'
import RenderLanguages from './RenderLanguages'
import messages from './messages'

class MaterialForm extends React.Component {

  state = {
    stepIndex: 0
  }

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }


  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props
    const { stepIndex } = this.state

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation='vertical'
          >
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                <H3><FormattedMessage {...messages.authorsTitle} /></H3>
              </StepButton>
              <StepContent>
                <p><FormattedMessage {...messages.authorsData} /></p>
                <FieldArray name='authors' component={RenderAuthors} />
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                <H3>Idiomas y descripción del material</H3>
              </StepButton>
              <StepContent>
                <p>Introduce el idioma del material, su título y la descripción del material.
                Si el material está en varios idiomas, rellena el título y la descripción en cada uno de ellos, así lo podremos procesar de forma automática.</p>
                <FieldArray name='authors' component={RenderLanguages} />
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                <H3>Capturas de pantalla</H3>
              </StepButton>
              <StepContent>
                <p>Introduce alguna captura de pantalla para ver el aspecto visual del material sin necesidad de descargarlo.</p>
                <Field name='files-upload' component={RenderDropzoneInput} />
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 3 })}>
                <H3>Clasificación del material</H3>
              </StepButton>
              <StepContent>
                <Field name='areas' component={RenderChip} hintText='Selecciona las áreas del material' floatingLabelText='Área' dataSource={['perro', 'casa', 'perra']} />
                <Field name='actividades' component={RenderChip} hintText='Selecciona los tipos de actividad del material' floatingLabelText='Actividad' dataSource={['perro', 'casa', 'perra']} />
                <Field name='licencia' component={SelectField} hintText='Selecciona el tipo de licencia' floatingLabelText='Licencia' fullWidth >
                  <MenuItem value='Sin definir' primaryText='Sin definir' disabled={true} />
                  <MenuItem value='Creative Commons BY-NC-SA' primaryText='Creative Commons BY-NC-SA' />
                  <MenuItem value='Software propietario' primaryText='Software propietario' disabled={true} />
                  <MenuItem value='GNU General Public License' primaryText='GNU General Public License' disabled={true} />
                  <MenuItem value='Mozilla Public License' primaryText='Mozilla Public License' disabled={true} />
                </Field>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 4 })}>
                <H3>Subir ficheros</H3>
              </StepButton>
              <StepContent>
                <p>Utiliza un nombre descriptivo para los ficheros que subes, del tipo: </p>
                <Field name='files-upload' component={RenderDropzoneInput} />
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 5 })}>
                <H3>Enviar material</H3>
              </StepButton>
              <StepContent>
                <p>Almost finish! Click submit button to send the material. We will email you when it is published</p>
                <RaisedButton type='submit' disabled={pristine || submitting} label='Enviar' primary={true} />
                <RaisedButton label='Clear values' disabled={pristine || submitting} onClick={reset} />
              </StepContent>
            </Step>
          </Stepper>
        </form>
      </div>
    )
  }
}

MaterialForm.propTypes = {
  ...propTypes
}

export default reduxForm({
  form: 'MaterialForm'
})(MaterialForm)
