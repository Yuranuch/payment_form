import React, { Component } from "react"
import PhoneInput from "react-phone-input-2"
import { Error, Helper } from '../components'

class PhoneField extends Component {

  handleChange = value => {
    const { form, field } = this.props
    form.setFieldValue(field.name, value)
  }

  handleBlur = () => {
    const { form, field } = this.props
    form.setFieldTouched(field.name, true)
  }

  render() {
    const { form, field, title, placeholder, className, helper, imgSrc } = this.props
    const { name, value } = field
    const touched = form.touched[name]
    const error = form.errors[name]
    return (
      <div className={className ? `inputSection ${className}` : "inputSection"}>
        <span>{title}</span>
        <div className="inputSection__inner">
          <PhoneInput
            value={value}
            placeholder={placeholder}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            inputExtraProps={{
              className: (touched && error) ? "has-error" : null,
            }}
          />
          {helper &&
            <Helper text={helper} imgSrc={imgSrc} />
          }
        </div>
        <Error touched={touched} message={error}/>
      </div>
    )
  }
}

export default PhoneField
